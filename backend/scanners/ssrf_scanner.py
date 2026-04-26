import requests
from bs4 import BeautifulSoup
from urllib.parse import urlparse, parse_qs
import re

SSRF_PARAM_NAMES = [
    "url", "uri", "redirect", "next", "src", "dest", "target",
    "callback", "return", "link", "path", "file", "fetch", "load",
    "resource", "to", "from", "img", "image", "endpoint", "webhook",
    "proxy", "feed", "rss", "ref", "data", "host", "site"
]

def check_ssrf(url):
    try:
        response = requests.get(url, timeout=10, headers={
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36"
        })
        soup = BeautifulSoup(response.text, "html.parser")
        html = response.text

        findings = []
        score = 10

        # Check 1: URL query parameters with SSRF-prone names
        parsed = urlparse(url)
        params = parse_qs(parsed.query)
        ssrf_params = [k for k in params if k.lower() in SSRF_PARAM_NAMES]
        if ssrf_params:
            findings.append(f"URL parameter(s) with SSRF-prone names: {', '.join(ssrf_params)} — test with internal IPs like 127.0.0.1")
            score -= 3

        # Check 2: Form inputs with SSRF-prone names
        all_inputs = soup.find_all(["input", "textarea"])
        ssrf_inputs = [
            i for i in all_inputs
            if any(name in (i.get("name", "") + i.get("id", "") + i.get("placeholder", "")).lower()
                   for name in SSRF_PARAM_NAMES)
        ]
        if ssrf_inputs:
            findings.append(f"{len(ssrf_inputs)} form field(s) potentially accepting URLs — validate server never fetches user-supplied URLs")
            score -= 2

        # Check 3: Embedded external resources (iframe, embed, object)
        external_embeds = [
            t for t in soup.find_all(["embed", "object", "iframe"])
            if t.get("src", "").startswith("http")
        ]
        if external_embeds:
            findings.append(f"{len(external_embeds)} external embedded resource(s) found — verify no server-side proxying of these URLs")
            score -= 1

        # Check 4: JS fetch() calls to external URLs
        fetch_patterns = re.findall(r'fetch\s*\(\s*["\']([^"\']+)["\']', html)
        external_fetches = [f for f in fetch_patterns
                           if f.startswith("http") and urlparse(f).netloc != urlparse(url).netloc]
        if external_fetches:
            findings.append("Client-side fetch() calls to external domains detected — confirm these are not proxied server-side")
            score -= 1

        # Check 5: Open redirect indicators in links
        links = [a.get("href", "") for a in soup.find_all("a", href=True)]
        redirect_links = [l for l in links if any(p in l.lower() for p in ["redirect", "next=", "url=", "goto=", "return="])]
        if redirect_links:
            findings.append(f"{len(redirect_links)} potential open redirect link(s) — open redirects can escalate to SSRF")
            score -= 1

        score = max(0, score)

        if not findings:
            findings.append("No obvious SSRF indicators detected in passive scan")
            findings.append("Dynamic SSRF testing requires authenticated access and active probing")
            findings.append("Consider using Burp Suite for thorough SSRF testing")

        return {"score": score, "feedback": findings}

    except Exception as e:
        return {"score": 8, "feedback": [f"SSRF scan error: {str(e)}", "Manual SSRF testing recommended"]}

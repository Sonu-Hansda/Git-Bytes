import socket
import requests
from urllib.parse import urlparse

COMMON_SUBDOMAINS = ["www", "mail", "api", "dev", "staging", "test", "admin", "blog", "shop", "cdn"]

TAKEOVER_SIGNATURES = [
    "there isn't a github pages site here",
    "no settings were found for this company",
    "the specified bucket does not exist",
    "nosuchbucket",
    "fastly error: unknown domain",
    "this uservoice subdomain is currently available",
    "404 not found",
    "this shop is currently unavailable",
    "heroku | no such app",
    "project not found",
    "this page is reserved",
    "default web site page",
    "this domain is not configured",
]

def check_subdomain_takeover(url):
    try:
        parsed = urlparse(url)
        hostname = parsed.hostname

        parts = hostname.split(".")
        base_domain = ".".join(parts[-2:]) if len(parts) >= 2 else hostname

        vulnerable = []
        unresolvable = []
        score = 10

        for sub in COMMON_SUBDOMAINS:
            subdomain = f"{sub}.{base_domain}"
            try:
                # Check if subdomain resolves via DNS
                socket.setdefaulttimeout(2)
                socket.gethostbyname(subdomain)

                # If it resolves, check if the service is actually active
                try:
                    res = requests.get(f"https://{subdomain}", timeout=3, allow_redirects=True)
                    content_lower = res.text.lower()
                    for sig in TAKEOVER_SIGNATURES:
                        if sig in content_lower:
                            vulnerable.append(subdomain)
                            score -= 3
                            break
                except requests.exceptions.SSLError:
                    # SSL error on a subdomain could itself be a signal
                    pass
                except Exception:
                    pass

            except socket.gaierror:
                # Subdomain doesn't resolve — not an immediate takeover risk
                pass

        findings = []

        if vulnerable:
            findings.append(f"Potentially vulnerable subdomain(s) detected: {', '.join(vulnerable)} — service may be unclaimed")
            findings.append("Immediately verify ownership and reclaim or remove these DNS records")
        else:
            findings.append(f"Checked {len(COMMON_SUBDOMAINS)} common subdomains — no obvious takeover signatures found")
            findings.append("DNS records appear to point to active services")

        findings.append("Full subdomain enumeration requires authenticated DNS zone transfer or dedicated tools like Subfinder")

        score = max(0, score)

        return {
            "score": score,
            "feedback": findings,
            "vulnerable_subdomains": vulnerable
        }

    except Exception as e:
        return {
            "score": 9,
            "feedback": [f"Subdomain scan error: {str(e)}", "Manual subdomain testing recommended"],
            "vulnerable_subdomains": []
        }

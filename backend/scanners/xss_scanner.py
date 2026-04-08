import requests
from bs4 import BeautifulSoup
import re

LLM_SERVER = "http://localhost:8000/xss/invoke"

def check_xss(url):
    try:
        response = requests.get(url, timeout=10, headers={
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36"
        })
        headers = response.headers
        html = response.text
        soup = BeautifulSoup(html, "html.parser")

        findings = []
        score = 10

        # Check 1: Content-Security-Policy header
        if "Content-Security-Policy" not in headers:
            findings.append("No Content-Security-Policy (CSP) header — browser cannot restrict script sources")
            score -= 2

        # Check 2: X-XSS-Protection header
        if "X-XSS-Protection" not in headers:
            findings.append("X-XSS-Protection header missing — older browsers lack built-in XSS filter")
            score -= 1

        # Check 3: Inline scripts (more than 3 is a risk signal)
        inline_scripts = soup.find_all("script", src=False)
        if len(inline_scripts) > 3:
            findings.append(f"{len(inline_scripts)} inline <script> blocks detected — increases XSS attack surface")
            score -= 2

        # Check 4: Dangerous inline event handlers
        dangerous_events = ["onclick", "onmouseover", "onload", "onerror", "onfocus", "onblur", "onkeyup"]
        event_count = sum(len(soup.find_all(attrs={ev: True})) for ev in dangerous_events)
        if event_count > 5:
            findings.append(f"{event_count} inline event handlers found — review for user-controlled input injection")
            score -= 1

        score = max(0, score)

        if not findings:
            findings.append("No major XSS indicators detected in passive scan")

        # Send to LLM for human-readable insights
        llm_response = requests.post(LLM_SERVER, json={
            "input": {
                "findings": "; ".join(findings),
                "score": str(score),
                "url": url
            }
        }, timeout=300)

        llm_output = llm_response.json()["output"]
        lines = [line.strip() for line in llm_output.split("\n") if line.strip()]

        return {"score": score, "feedback": lines}

    except Exception as e:
        return {"score": "-", "feedback": [f"XSS scan error: {str(e)}"]}

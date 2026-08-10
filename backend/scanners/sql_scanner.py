import requests
from bs4 import BeautifulSoup
import re
from urllib.parse import urlparse, parse_qs

LLM_SERVER = "http://localhost:8000/sql/invoke"

# Known SQL error message patterns that leak DB info
SQL_ERROR_PATTERNS = [
    r"sql syntax.*mysql",
    r"warning.*mysql_",
    r"valid mysql result",
    r"mysqlclient",
    r"ora-\d{5}",
    r"oracle error",
    r"sqlite_",
    r"sqlite3\.",
    r"pg::.*error",
    r"psql.*error",
    r"postgresql.*error",
    r"unterminated quoted string",
    r"unclosed quotation mark",
    r"quoted string not properly terminated",
    r"odbc.*driver",
    r"syntax error.*sql",
    r"microsoft.*sql.*server",
    r"mssql_query",
]

def check_sql_injection(url):
    try:
        response = requests.get(url, timeout=10, headers={
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36"
        })
        html = response.text
        html_lower = html.lower()
        soup = BeautifulSoup(html, "html.parser")

        findings = []
        score = 10

        # Check 1: SQL error messages visible in response
        for pattern in SQL_ERROR_PATTERNS:
            if re.search(pattern, html_lower):
                findings.append("SQL error message detected in page response — database errors are being exposed to users")
                score -= 4
                break

        # Check 2: URL query parameters (potential injection entry points)
        parsed = urlparse(url)
        params = parse_qs(parsed.query)
        if params:
            findings.append(f"{len(params)} URL query parameter(s) detected ({', '.join(params.keys())}) — potential injection entry points")
            score -= 1

        # Check 3: Forms with text inputs (injection surfaces)
        forms = soup.find_all("form")
        text_inputs = soup.find_all("input", {"type": ["text", "search", "hidden", "number"]})
        if text_inputs:
            findings.append(f"{len(forms)} form(s) with {len(text_inputs)} input field(s) — all user inputs should use parameterized queries")
            score -= 1

        # Check 4: Non-HTTPS (SQL queries transmitted unencrypted)
        if not url.startswith("https://"):
            findings.append("Site uses HTTP — SQL queries and responses are transmitted without encryption")
            score -= 2

        # Check 5: Sensitive paths (admin/login are high-priority SQL injection targets)
        links = [a.get("href", "") for a in soup.find_all("a", href=True)]
        sensitive = [l for l in links if any(p in l.lower() for p in ["admin", "login", "dashboard", "user", "account", "panel"])]
        if sensitive:
            findings.append(f"{len(sensitive)} sensitive path(s) found (admin/login) — prioritize SQL injection testing on these endpoints")
            score -= 1

        # Check 6: Search for common ORM/DB fingerprints in JS source
        db_hints = re.findall(r"(sequelize|typeorm|prisma|mongoose|knex|sqlalchemy)", html_lower)
        if db_hints:
            db_names = list(set(db_hints))
            findings.append(f"Database ORM references found in source: {', '.join(db_names)} — ensure parameterized queries are enforced")

        score = max(0, score)

        if not findings:
            findings.append("No obvious SQL injection indicators detected in passive scan")

        # LLM for human-readable insights
        llm_response = requests.post(LLM_SERVER, json={
            "input": {
                "findings": "; ".join(findings),
                "score": str(score),
                "url": url
            }
        }, timeout=30)

        llm_output = llm_response.json()["output"]
        lines = [line.strip() for line in llm_output.split("\n") if line.strip()]

        return {"score": score, "feedback": lines}

    except Exception as e:
        return {"score": 5, "feedback": [f"SQL injection scan error: {str(e)}"]}

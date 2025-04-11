# 🛡️ CyberShield: Security Testing Tool for Early-Stage Web Projects

CyberShield is a cybersecurity platform designed to help developers and users assess the security of websites. By scanning for vulnerabilities outlined in the OWASP Top 10, CyberShield provides actionable insights and user-friendly recommendations to ensure early-stage web projects are protected against common cyber threats.

---

## 🌟 Problem Statement

Many student developers and small teams deploy websites without assessing their security, leaving them vulnerable to threats like XSS, SQL Injection, CSRF, and insecure headers. Existing tools are often too complex or expensive for early-stage projects.

CyberShield solves this problem by offering an accessible platform where users can:
- Enter a URL and receive a detailed security report.
- Get a safety score and actionable recommendations.
- Learn about missed security best practices (e.g., missing headers, SSL misconfigurations).
- Determine if a site is safe to visit or develop further.


---

## 🚀 Features

- **Threat Detection**: Identify vulnerabilities like XSS, SQL Injection, CSRF, insecure headers and many more.
- **Safety Score**: Provide a clear safety score based on detected vulnerabilities.
- **AI-Powered Responses**: Generate user-friendly explanations and recommendations using a Large Language Model (LLM).
- **OWASP Compliance**: Scan for vulnerabilities outlined in the OWASP Top 10.
- **Developer Mode**: Highlight missed security practices and provide remediation steps.
- **Modern UI**: A clean, intuitive interface for both technical and non-technical users.

---

## 🧩 How It Works

1. **Input URL**: Enter the website URL you want to scan (e.g., `https://example.com`).
2. **Scan Process**: CyberShield analyzes the site for:
   - OWASP Top 10 vulnerabilities.
   - Missing security headers (e.g., `Content-Security-Policy`, `X-Frame-Options`).
   - SSL/TLS misconfigurations.
   - Directory traversal and other common threats.
3. **Generate Report**: Receive a detailed, color-coded report with:
   - A safety score (e.g., 8/10).
   - Detected vulnerabilities and remediation steps.
   - AI-powered recommendations for improving security.

---

## 🛠️ Built With

- **Backend**:
  - Flask (Python framework)
  - Requests library for HTTP requests
  - BeautifulSoup for HTML parsing
  - Integration with OWASP tools (e.g., ZAP API, Nikto)

- **Frontend**:
  - React.js for a modern, responsive UI
  - Tailwind CSS for styling

- **AI/ML**:
  - Large Language Model (LLM) for generating user-friendly responses

---

## 📊 Example Output

### User-Friendly Report:
```plaintext
Website: https://example.com
Safety Score: 7/10

Detected Issues:
1. Missing Content-Security-Policy header
   - Risk: High
   - Remediation: Add a Content-Security-Policy header to restrict resource loading.

2. Weak SSL Configuration
   - Risk: Medium
   - Remediation: Upgrade to TLS 1.2 or higher.

3. Potential XSS Vulnerability
   - Risk: Low
   - Remediation: Sanitize user inputs to prevent malicious scripts.
from flask import Flask, request, jsonify
from flask_cors import CORS
from scanners import (
    check_headers, 
    check_ssl, 
    check_csrf,
    check_xss,
    check_sql_injection,
    check_subdomain_takeover,
    check_ssrf
)
import validators
from utils import category

app = Flask(__name__)
CORS(app)

@app.route("/")
def index():
    return "CyberShield API is running."

# Added /api prefix to all routes!
@app.route("/api/header-scanner", methods=["POST"])
def header_scanner():
    data = request.get_json()
    url = data.get("url", "")
    if not url or not validators.url(url):
        return jsonify({"error": "Invalid URL"}), 400
    
    result = check_headers(url)
    return jsonify(result) # Wrapped in jsonify for safety


@app.route("/api/ssl-scanner", methods=["POST"])
def ssl_scanner():
    url = request.json.get("url", "")
    if not url or not validators.url(url):
        return jsonify({"error": "Invalid URL"}), 400

    result = check_ssl(url)
    return jsonify(result)


@app.route("/api/csrf-scanner", methods=["POST"])
def csrf_scanner():
    data = request.get_json()
    url = data.get("url", "")
    if not url or not validators.url(url):
        return jsonify({"error": "Invalid URL"}), 400

    result = check_csrf(url)
    return jsonify(result)


@app.route("/api/xss-scanner", methods=["POST"])
def xss_scanner():
    data = request.get_json()
    url = data.get("url", "")
    if not url or not validators.url(url):
        return jsonify({"error": "Invalid URL"}), 400
    
    result = check_xss(url)
    return jsonify(result)


@app.route("/api/sql-scanner", methods=["POST"])
def sql_scanner():
    data = request.get_json()
    url = data.get("url", "")
    if not url or not validators.url(url):
        return jsonify({"error": "Invalid URL"}), 400
    
    result = check_sql_injection(url)
    return jsonify(result)


@app.route("/api/subdomain-scanner", methods=["POST"])
def subdomain_scanner():
    data = request.get_json()
    url = data.get("url", "")
    if not url or not validators.url(url):
        return jsonify({"error": "Invalid URL"}), 400
    result = check_subdomain_takeover(url)
    return jsonify(result)


@app.route("/api/ssrf-scanner", methods=["POST"])
def ssrf_scanner():
    data = request.get_json()
    url = data.get("url", "")
    if not url or not validators.url(url):
        return jsonify({"error": "Invalid URL"}), 400
    result = check_ssrf(url)
    return jsonify(result)


@app.route("/category", methods=["POST"])
def category_scanner():
    data = request.get_json()
    url = data.get("url", "")
    if not url or not validators.url(url):
        return jsonify({"error": "Invalid URL"}), 400
    result = category(url)
    return jsonify(result)

if __name__ == "__main__":
    app.run(debug=True, host="0.0.0.0", port=5001)
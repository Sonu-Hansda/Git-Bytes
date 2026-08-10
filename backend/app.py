from flask import Flask
from flask import request, jsonify
from scanners import check_headers, check_ssl, check_csrf
import validators
from utils import category

app = Flask(__name__)

@app.route("/")
def index():
    return "Hello, World!"

@app.route("/header-scanner", methods=["POST"])
def header_scanner():
    url = request.json["url"]

    if not url or not validators.url(url):
        return jsonify({"error": "Invalid URL"}), 400

    result = check_headers(url)
    return result

@app.route("/ssl-scanner", methods=["POST"])
def ssl_scanner():
    url = request.json["url"]

    if not url or not validators.url(url):
        return jsonify({"error": "Invalid URL"}), 400

    result = check_ssl(url)
    return result

@app.route("/csrf-scanner", methods=["POST"])
def csrf_scanner():
    url = request.json["url"]

    if not url or not validators.url(url):
        return jsonify({"error": "Invalid URL"}), 400

    result = check_csrf(url)
    return result

@app.route("/category", methods=["POST"])
def category_scanner():
    url = request.json["url"]

    if not url or not validators.url(url):
        return jsonify({"error": "Invalid URL"}), 400

    result = category(url)
    return result

if __name__ == "__main__":
    app.run(debug=True,host="0.0.0.0")
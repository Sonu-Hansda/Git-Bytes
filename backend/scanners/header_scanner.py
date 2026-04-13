import requests
from utils import category

LLM_SERVER = "http://10.0.15.208:8000/headers/invoke"

CATEGORY_HEADERS = {
    "Blog": [
        "X-Frame-Options",
        "Referrer-Policy"
    ],
    "E-commerce": [
        "Content-Security-Policy",
        "X-Frame-Options",
        "Strict-Transport-Security",
        "X-Content-Type-Options",
        "Referrer-Policy"
    ],
    "News & Media": [
        "X-Frame-Options",
        "Referrer-Policy",
        "X-Content-Type-Options"
    ],
    "Technology": [
        "Content-Security-Policy",
        "X-Frame-Options",
        "Strict-Transport-Security",
        "X-Content-Type-Options",
        "Referrer-Policy"
    ],
    "Entertainment": [
        "X-Frame-Options",
        "Referrer-Policy"
    ],
    "Education": [
        "X-Frame-Options",
        "Referrer-Policy",
        "X-Content-Type-Options"
    ],
    "Health & Wellness": [
        "Content-Security-Policy",
        "X-Frame-Options",
        "Strict-Transport-Security",
        "X-Content-Type-Options",
        "Referrer-Policy"
    ],
    "Finance": [
        "Content-Security-Policy",
        "X-Frame-Options",
        "Strict-Transport-Security",
        "X-Content-Type-Options",
        "Referrer-Policy"
    ],
    "Government": [
        "Content-Security-Policy",
        "X-Frame-Options",
        "Strict-Transport-Security",
        "X-Content-Type-Options",
        "Referrer-Policy"
    ],
    "Sports": [
        "X-Frame-Options",
        "Referrer-Policy"
    ],
    "Other": [
        "X-Frame-Options",
        "Referrer-Policy"
    ]
}

def check_headers(url):
    try:
        response = requests.get(url)
        headers = response.headers

        cat = category(url)
        category_name = cat["category"].strip()

        missing_headers = []
        for header in CATEGORY_HEADERS[category_name]:
            if header not in headers:
                missing_headers.append(header)
        
        response = requests.post(LLM_SERVER,json=
                {
                    "input": {
                    "category":category_name,
                    "missing_headers": ", ".join(missing_headers) if missing_headers else "None",
                    "is_developer": "Yes",
                            }
                }
            )
        input_string = response.json()["output"]
        
        lines = input_string.split('\n')
        print(lines)
        return {"feedback":lines}

    except Exception as e:
        return {"error": str(e)}

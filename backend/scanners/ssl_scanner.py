import requests
from utils import category, check_ssl_validation as getSSL

LLM_SERVER = "http://10.0.15.208:8000/SSL/invoke"

def check_ssl(url):
    try:
        response = requests.get(url)
        headers = response.headers

        cat = category(url)
        category_name = cat["category"].strip()
        ssl = getSSL(url)["status"]
        response = requests.post(LLM_SERVER,json=
                {
                    "input": {
                        "status":ssl,
                    "category":category_name,
                            }
                }
            )

        input_string = response.json()["output"]
        
        lines = input_string.split('\n')
        print(lines)
        return {"feedback":lines}

    except Exception as e:
        return {"error": str(e)}

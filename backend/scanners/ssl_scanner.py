import requests
from utils import category, check_ssl_validation as getSSL

LLM_SERVER = "http://localhost:8000/SSL/invoke"

def check_ssl(url):
    try:
        response = requests.get(url)
        headers = response.headers

        cat = category(url)
        category_name = cat["category"].strip()
        ssl = getSSL(url)["status"]
        
        status_with_instructions = ssl + " | SYSTEM INSTRUCTION: Format your response as a strict, concise, actionable bulleted list suitable for a security dashboard. Tailor the SSL advice specifically to the risk profile of a " + category_name + " website. Do not use conversational filler."

        response = requests.post(LLM_SERVER,json=
                {
                    "input": {
                        "status": status_with_instructions,
                    "category": category_name,
                            }
                }
            )

        input_string = response.json()["output"]
        
        lines = input_string.split('\n')
        print(lines)
        return {"feedback":lines}

    except Exception as e:
        return {"error": str(e)}

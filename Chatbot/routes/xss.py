from langserve import add_routes
from config.models import llm
from prompts.xss import prompt

"""
http://localhost:8000/xss/invoke
{
  "input": {
    "url": "...",
    "findings": "...",
    "score": "..."
  }
}
"""
def add_xss_route(app):
    add_routes(
        app,
        prompt | llm,
        path="/xss",
    )

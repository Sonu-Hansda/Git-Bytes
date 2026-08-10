from langserve import add_routes
from config.models import llm
from prompts.sql import prompt

"""
http://localhost:8000/sql/invoke
{
  "input": {
    "url": "...",
    "findings": "...",
    "score": "..."
  }
}
"""
def add_sql_route(app):
    add_routes(
        app,
        prompt | llm,
        path="/sql",
    )

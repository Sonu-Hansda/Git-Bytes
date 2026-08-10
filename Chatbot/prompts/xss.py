from langchain.prompts import ChatPromptTemplate

prompt = ChatPromptTemplate.from_template(
    "You are a cybersecurity expert analyzing XSS (Cross-Site Scripting) vulnerabilities.\n"
    "Target URL: {url}\n"
    "Passive Scan Findings: {findings}\n"
    "Current Score: {score}/10\n\n"
    "Generate exactly 3 short, actionable security insights based on these findings.\n"
    "Each insight must be one sentence. No numbering. No bullet points. One per line.\n"
    "Focus on what developers should actually fix or check.\n"
)

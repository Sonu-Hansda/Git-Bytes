from langchain_core.prompts import ChatPromptTemplate
prompt = ChatPromptTemplate.from_template(
    "You are analyzing a website's metadata and missing headers.\n"
    "Category: {category}\n"
    "Missing Headers: {missing_headers}\n"
    "Is Developer: {is_developer}\n\n"
    
    "Response MUST contain:\n"
    "1. Severity score X out of 10 based on how safe is the site(high for safest)"
    "2. only three very short findings\n"
    
    "Format EXACTLY like this:\n"
    "[X]/10\n"
    "[[finding description]]\n"
    "[[finding description]]\n"
    "[[finding description]]\n\n"
    
    "Example output format:\n"
    "8\n"
    "Prepared statements used in most queries\n"
    "Input validation on search form\n"
    "Potential SQL injection in admin panel\n\n"
)
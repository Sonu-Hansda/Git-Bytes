from langchain_core.prompts import ChatPromptTemplate
prompt = ChatPromptTemplate.from_template(
    "Analyze this {category} website's SSL status ({status}): "
    "Generate exactly 3 short and crisp security insights for this status-category combination: "
    "Example outputs: "
    "For failed e-commerce: "
    "1. Payment data vulnerable to interception "
    "2. Avoid entering credit card details "
    "3. Install valid SSL certificate immediately "
    "For success education: "
    "1. Encrypted document downloads available "
    "2. Safe to submit student information "
    "3. Monitor certificate expiry date"
)
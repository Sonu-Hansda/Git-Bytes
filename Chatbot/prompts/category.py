from langchain_core.prompts import ChatPromptTemplate

prompt = ChatPromptTemplate.from_template(
    "Classify the following website based on its metadata:\n"
    "Title: {title}\n"
    "Description: {description}\n"
    "Keywords: {keywords}\n"
    "\nChoose the most appropriate category from the following:\n"
    "- E-commerce\n"
    "- News & Media\n"
    "- Technology\n"
    "- Entertainment\n"
    "- Education\n"
    "- Health & Wellness\n"
    "- Finance\n"
    "- Government\n"
    "- Sports\n"
    "- Other (Specify why)\n"
    "\nOutput strictly just the category name without any extra text,or explanation."
)
from config.app import app
from routes.category import add_category_route
from routes.headers import add_headers_route
from routes.SSL import add_ssl_route
from routes.chatbot import add_chatbot_route
from routes.xss import add_xss_route
import uvicorn

# Register all routes
add_category_route(app)
add_headers_route(app)
add_ssl_route(app)
add_chatbot_route(app)
add_xss_route(app)

if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8000)

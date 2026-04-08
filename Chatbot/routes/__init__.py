# routes/__init__.py
"""
Route Handlers Package
"""
from .category import add_category_route
from .headers import add_headers_route
from .SSL import add_ssl_route
from .chatbot import add_chatbot_route
from .xss import add_xss_route

__all__ = [
    'add_category_route',
    'add_headers_route',
    'add_ssl_route',
    'add_chatbot_route',
    'add_xss_route',
]

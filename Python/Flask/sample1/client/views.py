#Will  hold our views
#Blueprint helps to define the routes for the url
from flask import Blueprint

views = Blueprint('views', __name__)

#decorator with route
@views.route('/')
def home():
    return "<h1>Home</h1>"
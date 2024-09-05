#Will  hold our views
#Blueprint helps to define the routes for the url
from flask import Blueprint, render_template

views = Blueprint('views', __name__)

#decorator with route
@views.route('/')
def home():
    return render_template("home.html")
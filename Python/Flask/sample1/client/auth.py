#Will use to setup auth
#Blueprint helps to define the routes for the url
from flask import Blueprint, render_template

auth = Blueprint('auth', __name__)

@auth.route('/login')
def login():
    #the second part is how I would pass data or something into the template
    return render_template("login.html", value ="New value being passed here", bolean= True)

@auth.route('/logout')
def logout():
    return "<p>Logged out</p>"

@auth.route('/sign-up')
def signup():
    return render_template("signup.html")
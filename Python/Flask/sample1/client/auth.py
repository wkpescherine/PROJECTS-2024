#Will use to setup auth
#Blueprint helps to define the routes for the url
from flask import Blueprint

auth = Blueprint('auth', __name__)

@auth.route('/login')
def login():
    return "<p>Login</p>"

@auth.route('/logout')
def logout():
    return "<p>Logged out</p>"

@auth.route('/sign-up')
def signup():
    return "<p>Sign-In</p>"
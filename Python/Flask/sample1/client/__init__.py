#required for every python app
#Ininitalize Flask
from flask import Flask

#Required to create the app to display for flask
def create_app():
    app = Flask(__name__)
    app.config['SECRET KEY'] = "TestKey"

    #have to register the views/blueprints
    from .views import views
    from .auth import auth

    #have to define athe routes here
    app.register_blueprint(views, url_prefix='/')
    app.register_blueprint(auth, url_prefix='/')

    return app
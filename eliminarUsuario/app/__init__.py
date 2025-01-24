from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS
from flasgger import Swagger

db = SQLAlchemy()

def create_app():
    app = Flask(__name__)
    app.config.from_object('app.config.Config')
    db.init_app(app)
    CORS(app)   

    # Configurar Swagger
    app.config['SWAGGER'] = {
        'title': 'Microservicio de Eliminación de Usuario',
        'uiversion': 3
    }
    Swagger(app)

    from app.routes import users_bp
    app.register_blueprint(users_bp)

    return app

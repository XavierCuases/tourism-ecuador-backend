import sys
import os

BASE_DIR = os.path.abspath(os.path.dirname(__file__))

if BASE_DIR not in sys.path:
    sys.path.insert(0, BASE_DIR)

from flask import Flask
from flask_cors import CORS
from database import db
from config import Config
from app.controllers.reserva_controller import reserva_blueprint
from app.docs.swagger import init_swagger

app = Flask(__name__)
app.config.from_object(Config)


db.init_app(app)

CORS(app)

app.register_blueprint(reserva_blueprint, url_prefix='/api')

init_swagger(app)

if __name__ == '__main__':
    port = 8001
    print("\n🚀  Server running!")
    print(f"🔗  API Endpoint: http://localhost:{port}/api/reservas/<id>")
    print(f"📄  Swagger docs available at: http://localhost:{port}/swagger\n")
    
    app.run(debug=True, host='0.0.0.0', port=port)

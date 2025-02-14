import sys
import os

BASE_DIR = os.path.abspath(os.path.dirname(__file__))

if BASE_DIR not in sys.path:
    sys.path.insert(0, BASE_DIR)


from flask import Flask, send_from_directory
from flask_cors import CORS
from database import db
from config import Config
from app.controllers.cancel_controller import cancel_blueprint
from app.docs.swagger import init_swagger

app = Flask(__name__)
app.config.from_object(Config)

db.init_app(app)

CORS(app)

app.register_blueprint(cancel_blueprint, url_prefix='/api')

init_swagger(app)

@app.route('/static/<path:filename>')
def serve_static(filename):
    """Servir archivos estáticos manualmente"""
    return send_from_directory('static', filename)

if __name__ == '__main__':
    port = 8002
    print("\n🚀  Server running!")
    print(f"🔗  API Endpoint: http://localhost:{port}/api/reservas/<id>")
    print(f"📄  Swagger docs available at: http://localhost:{port}/swagger\n")
    
    app.run(debug=True, host='0.0.0.0', port=port)
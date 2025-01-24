from app import create_app, db
from app.routes import usuario_bp
from app.database import init_db

app = create_app()

# Registrar blueprint
app.register_blueprint(usuario_bp)

# Inicializar la base de datos
init_db(app)

if __name__ == "__main__":
    app.run(debug=True)

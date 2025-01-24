from datetime import datetime, timedelta
import jwt
from flask import current_app

def generate_token(user_id):
    payload = {
        'sub': str(user_id),  # Convertir user_id a string para cumplir con las especificaciones
        'user_id': user_id,   # Información adicional (opcional)
        'exp': datetime.utcnow() + timedelta(days=1)  # Expiración del token
    }
    # Generar el token JWT
    return jwt.encode(payload, current_app.config['SECRET_KEY'], algorithm='HS256')

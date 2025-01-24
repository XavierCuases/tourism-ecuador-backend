import jwt
from flask import request, jsonify, current_app
from functools import wraps

def token_required(f):
    @wraps(f)
    def decorated(*args, **kwargs):
        token = request.headers.get('Authorization')

        if not token:
            return jsonify({"error": "Token es requerido"}), 401

        try:
            token = token.split(" ")[1]  # Formato "Bearer <token>"
            data = jwt.decode(token, current_app.config['SECRET_KEY'], algorithms=["HS256"])
        except Exception as e:
            return jsonify({"error": "Token inválido"}), 401

        return f(*args, **kwargs)

    return decorated

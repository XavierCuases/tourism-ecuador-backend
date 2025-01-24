from flask import Blueprint, jsonify
from app.models import User
from app.utils import token_required

users_bp = Blueprint('users', __name__)

@users_bp.route('/usuarios/<int:id>', methods=['GET'])
@token_required
def get_user(id):
    user = User.query.get(id)

    if not user:
        return jsonify({"error": "Usuario no encontrado"}), 404

    # Construir respuesta con la información del usuario
    return jsonify({
        "id": user.id,
        "name": user.name,
        "email": user.email
    })

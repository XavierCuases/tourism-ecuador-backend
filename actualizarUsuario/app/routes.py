from flask import Blueprint, request, jsonify
from app.models import User
from app import db
from app.utils import token_required

users_bp = Blueprint('users', __name__)

@users_bp.route('/usuarios/<int:id>', methods=['PUT'])
@token_required
def update_user(id):
    data = request.get_json()

    # Validar datos recibidos
    if not data.get('name') or not data.get('email'):
        return jsonify({"error": "Faltan datos obligatorios (name, email)"}), 400

    user = User.query.get(id)
    if not user:
        return jsonify({"error": "Usuario no encontrado"}), 404

    try:
        # Actualizar los datos del usuario
        user.name = data['name']
        user.email = data['email']

        db.session.commit()
        return jsonify({"message": "Usuario actualizado exitosamente"})
    except Exception as e:
        db.session.rollback()
        return jsonify({"error": str(e)}), 500

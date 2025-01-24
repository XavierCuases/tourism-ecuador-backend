from flask import Blueprint, jsonify, request
from app.models import User
from app.utils import token_required
from app import db

users_bp = Blueprint('users', __name__)

@users_bp.route('/usuarios/<int:id>', methods=['DELETE'])
@token_required
def delete_user(id):
    """
    Eliminar un usuario por su ID
    ---
    tags:
      - Usuarios
    parameters:
      - name: id
        in: path
        type: integer
        required: true
        description: ID del usuario a eliminar
      - name: Authorization
        in: header
        type: string
        required: true
        description: Token JWT en el formato "Bearer <token>"
    responses:
      200:
        description: Usuario eliminado exitosamente
        examples:
          application/json:
            message: Usuario eliminado exitosamente
      401:
        description: Token faltante o inválido
        examples:
          application/json:
            error: Token es requerido
      404:
        description: Usuario no encontrado
        examples:
          application/json:
            error: Usuario no encontrado
      500:
        description: Error interno al eliminar el usuario
        examples:
          application/json:
            error: Error al eliminar el usuario
    """
    # Buscar usuario por ID
    user = User.query.get(id)

    if not user:
        return jsonify({"error": "Usuario no encontrado"}), 404

    try:
        # Eliminar usuario de la base de datos
        db.session.delete(user)
        db.session.commit()

        return jsonify({"message": "Usuario eliminado exitosamente"}), 200
    except Exception as e:
        db.session.rollback()
        return jsonify({"error": "Error al eliminar el usuario"}), 500

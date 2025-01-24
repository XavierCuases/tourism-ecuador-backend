from flask import Blueprint, request, jsonify
from app import db
from app.models import User
from app.utils import generate_token
from werkzeug.security import check_password_hash
from sqlalchemy.exc import IntegrityError

usuario_bp = Blueprint('usuario', __name__)

@usuario_bp.route('/usuarios', methods=['POST'])
def create_user():
    data = request.get_json()

    if not all([data.get('name'), data.get('email'), data.get('password')]):
        return jsonify({'error': 'Todos los campos son obligatorios'}), 400

    try:
        user = User(
            name=data['name'],
            email=data['email'],
            password=data['password']
        )
        db.session.add(user)
        db.session.commit()

        token = generate_token(user.id)
        return jsonify({'message': 'Usuario creado exitosamente', 'token': token}), 201
    except IntegrityError:
        db.session.rollback()
        return jsonify({'error': 'El correo ya está registrado'}), 409
    except Exception as e:
        return jsonify({'error': 'Error interno del servidor'}), 500

from flask import Blueprint, jsonify, request
from app.models.reserva_model import Reserva
from database import db

cancel_blueprint = Blueprint('cancel_reserva', __name__)

@cancel_blueprint.route('/reservas/cancelar/<int:id>', methods=['PUT'])
def cancelar_reserva(id):
    reserva = Reserva.query.get(id)
    
    if not reserva:
        return jsonify({'message': 'Reserva no encontrada'}), 404

    if reserva.estado.lower() == "cancelada":
        return jsonify({'message': 'La reserva ya está cancelada!'}), 400

    reserva.estado = "cancelada"
    db.session.commit()

    return jsonify({
        'message': 'Reserva cancelada exitosamente',
        'id': reserva.id,
        'estado': reserva.estado
    }), 200

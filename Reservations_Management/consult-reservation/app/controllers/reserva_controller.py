from flask import Blueprint, jsonify, request
from app.models.reserva_model import Reserva
from database import db

reserva_blueprint = Blueprint('reservas', __name__)

@reserva_blueprint.route('/reservas', methods=['GET'])
def get_all_reservas():
    reservas = Reserva.query.all()
    reservas_list = [{
        'id': r.id,
        'usuario_id': r.usuario_id,
        'actividad_id': r.actividad_id,
        'fecha_reserva': r.fecha_reserva.isoformat(),
        'estado': r.estado
    } for r in reservas]
    
    return jsonify(reservas_list), 200

@reserva_blueprint.route('/reservas/<int:id>', methods=['GET'])
def get_reserva(id):
    reserva = Reserva.query.get(id)
    if not reserva:
        return jsonify({'message': 'Reserva no encontrada4'}), 404

    return jsonify({
        'id': reserva.id,
        'usuario_id': reserva.usuario_id,
        'actividad_id': reserva.actividad_id,
        'fecha_reserva': reserva.fecha_reserva.isoformat(),
        'estado': reserva.estado
    }), 200

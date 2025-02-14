from database import db
import datetime

class Reserva(db.Model):
    __tablename__ = "reservas"

    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    usuario_id = db.Column(db.Integer, nullable=False)
    actividad_id = db.Column(db.Integer, nullable=False)
    fecha_reserva = db.Column(db.DateTime, default=datetime.datetime.utcnow)
    estado = db.Column(db.String(50), default="pendiente")

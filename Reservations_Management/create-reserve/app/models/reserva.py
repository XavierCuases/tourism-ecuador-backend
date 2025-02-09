from sqlalchemy import Column, Integer, String, DateTime
from database import Base
import datetime


class Reserva(Base):
    __tablename__ = "reservas"

    id = Column(Integer, primary_key=True, index=True)
    usuario_id = Column(Integer, nullable=False)
    actividad_id = Column(Integer, nullable=False)
    fecha_reserva = Column(DateTime, default=datetime.datetime.utcnow)
    estado = Column(String(50), default="pendiente")

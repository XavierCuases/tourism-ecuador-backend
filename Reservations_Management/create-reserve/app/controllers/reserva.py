from sqlalchemy.orm import Session
from app.models.reserva import Reserva
from app.schemas.reserva import ReservaCreate, ReservaResponse

def create_reserva(db: Session, reserva: ReservaCreate):
    db_reserva = Reserva(
        usuario_id=reserva.usuario_id,
        actividad_id=reserva.actividad_id,
        fecha_reserva=reserva.fecha_reserva,
        estado="pendiente" 
    )
    db.add(db_reserva)
    db.commit()
    db.refresh(db_reserva)
    return db_reserva

def get_reserva(db: Session, reserva_id: int):
    return db.query(Reserva).filter(Reserva.id == reserva_id).first()

def cancel_reserva(db: Session, reserva_id: int):
    db_reserva = db.query(Reserva).filter(Reserva.id == reserva_id).first()
    if db_reserva:
        db_reserva.estado = "cancelada"
        db.commit()
        db.refresh(db_reserva)
    return db_reserva

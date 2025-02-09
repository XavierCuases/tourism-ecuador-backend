from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from database import SessionLocal
from app.controllers import reserva as reserva_controller
from app.schemas.reserva import ReservaCreate, ReservaResponse

router = APIRouter()

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@router.post("/reservas/", response_model=ReservaResponse)
def create_reserva(reserva: ReservaCreate, db: Session = Depends(get_db)):
    return reserva_controller.create_reserva(db, reserva)

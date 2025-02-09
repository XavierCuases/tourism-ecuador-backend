from pydantic import BaseModel
from datetime import datetime

class ReservaBase(BaseModel):
    usuario_id: int
    actividad_id: int
    fecha_reserva: datetime

class ReservaCreate(ReservaBase):
    pass

class ReservaResponse(ReservaBase):
    id: int
    estado: str  

    class Config:
        orm_mode = True  
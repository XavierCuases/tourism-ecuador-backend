import signal
import os
import psutil
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from database import Base, engine
from app.routers import reserva

def kill_uvicorn():
    """Terminates any running Uvicorn processes to prevent conflicts."""
    for process in psutil.process_iter(attrs=["pid", "name"]):
        if "uvicorn" in process.info["name"]:
            print(f"Terminating process: {process.info['pid']} (uvicorn)")
            os.kill(process.info["pid"], signal.SIGTERM)

kill_uvicorn()

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

try:
    Base.metadata.create_all(bind=engine)
    database_status = "Database connection successful."
except Exception as e:
    database_status = f"Database connection failed: {str(e)}"

app.include_router(reserva.router)

@app.get("/")
def read_root():
    """Root endpoint to check service status."""
    return {
        "message": "Reservation Service is running",
        "database_status": database_status
    }

def handle_exit(signum, frame):
    print("Shutting down gracefully...")
    os._exit(0)  

signal.signal(signal.SIGINT, handle_exit)
signal.signal(signal.SIGTERM, handle_exit)

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8001, reload=False)

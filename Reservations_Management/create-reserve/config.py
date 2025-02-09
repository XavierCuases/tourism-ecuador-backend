import os
from dotenv import load_dotenv

load_dotenv()

DATABASE_CONFIG = {
    "host": os.getenv("DB_HOST"),
    "user": os.getenv("DB_USER"),
    "password": os.getenv("DB_PASSWORD"),
    "database": os.getenv("DB_NAME"),
    "port": int(os.getenv("DB_PORT", 3306))
}

APP_CONFIG = {
    "debug": os.getenv("DEBUG", "false").lower() == "true",
    "secret_key": os.getenv("SECRET_KEY", "mysecretkey")
}

import os
from dotenv import load_dotenv

load_dotenv()

DATABASE_CONFIG = {
    "host": os.getenv("DB_HOST_RE"),
    "user": os.getenv("DB_USER_RE"),
    "password": os.getenv("DB_PASSWORD_RE"),
    "database": os.getenv("DB_NAME_RE"),
    "port": int(os.getenv("DB_PORT_RE", 3306))
}

APP_CONFIG = {
    "debug": os.getenv("DEBUG_RE", "false").lower() == "true",
    "secret_key": os.getenv("SECRET_KEY_US", "mysecretkey")
}

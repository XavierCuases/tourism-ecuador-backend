import os
from dotenv import load_dotenv

load_dotenv()

class Config:
    SQLALCHEMY_DATABASE_URI = f"mysql+pymysql://{os.getenv('DB_USER_RE')}:{os.getenv('DB_PASSWORD_RE')}@" \
                              f"{os.getenv('DB_HOST_RE')}:{os.getenv('DB_PORT_RE', 3306)}/{os.getenv('DB_NAME_RE')}"
    SQLALCHEMY_TRACK_MODIFICATIONS = False
    SECRET_KEY = os.getenv("SECRET_KEY_US", "super_secret_key")
    DEBUG = os.getenv("DEBUG_RE", "false").lower() == "true"

from app import db
from app.models import User

def init_db(app):
    with app.app_context():
        db.create_all()

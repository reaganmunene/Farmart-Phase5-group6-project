# create_db.py
from app import db
from models import Animal

# Create the database and the database table
db.create_all()

# Commit the changes
db.session.commit()

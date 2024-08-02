import json
from app import create_app, db
from models import Animal

app = create_app()

def load_animals_from_json(file_path):
    with app.app_context():
        with open(file_path, 'r') as f:
            data = json.load(f)
            for item in data:
                animal = Animal(name=item['name'], breed=item['breed'], age=item['age'])
                db.session.add(animal)
            db.session.commit()

if __name__ == "__main__":
    load_animals_from_json('backend/data/animals.json')


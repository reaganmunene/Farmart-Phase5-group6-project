from flask import Flask, jsonify, request
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS

db = SQLAlchemy()

def create_app():
    app = Flask(__name__)
    app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://username:password@localhost/animal_db'
    app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

    db.init_app(app)
    CORS(app)  # Optional: Enable CORS

    @app.route('/api/animals', methods=['GET'])
    def get_animals():
        animals = Animal.query.all()
        return jsonify([{
            'id': animal.id,
            'name': animal.name,
            'breed': animal.breed,
            'age': animal.age
        } for animal in animals])

    @app.route('/api/animals', methods=['POST'])
    def add_animal():
        data = request.get_json()
        new_animal = Animal(
            name=data['name'],
            breed=data['breed'],
            age=data['age']
        )
        db.session.add(new_animal)
        db.session.commit()
        return jsonify({'id': new_animal.id}), 201

    return app

import React, { useState, useEffect } from 'react';
import { getAnimals } from '../api/animalService';
import AnimalImage from './AnimalImage';

const AnimalList = () => {
  const [animals, setAnimals] = useState([]);
  return (
    <div>
      <h1>Animal Gallery</h1>
      <AnimalImage />
      <AnimalImage imageUrl="https://source.unsplash.com/200x300/?cat" />
      <AnimalImage imageUrl="https://source.unsplash.com/200x300/?dog" />
    </div>
  );
};

export default AnimalList;

  useEffect(() => {
    getAnimals().then(response => {
      setAnimals(response.data);
    }).catch(error => {
      console.error("There was an error fetching the animals!", error);
    });
  }, []);

  return (
    <div>
      <h1>Animal List</h1>
      <ul>
        {animals.map(animal => (
          <li key={animal.id}>{animal.name} - {animal.breed} - {animal.age}</li>
        ))}
      </ul>
    </div>
  );
};

export default AnimalList;

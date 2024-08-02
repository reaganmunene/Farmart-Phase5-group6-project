import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

export const getAnimals = () => {
  return axios.get(`${API_URL}/animals`);
};

export const addAnimal = (animal) => {
  return axios.post(`${API_URL}/animals`, animal);
};

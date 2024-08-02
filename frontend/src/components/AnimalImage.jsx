// src/components/AnimalImage.jsx
import React from 'react';

const AnimalImage = ({ imageUrl, size = '200x300' }) => (
  <img 
    src={imageUrl || `https://source.unsplash.com/${size}/?animal`} 
    alt="Animal" 
  />
);

export default AnimalImage;

import React from 'react';
import '../Components/DogBreedsList.css';

interface DogBreedCardProps {
  name: string;
  size: string;
  temperament: string[];
  image: string; 
}

const DogBreedCard: React.FC<DogBreedCardProps> = ({ name, size, temperament, image }) => {
  return (
    <div className="card">
      <img src={image} alt={name} className="card-image" />
      <div className="card-content">
        <h3>{name}</h3>
        <p><strong>Tamaño:</strong> {size}</p>
        <p><strong>Temperamento:</strong></p>
        <ul className="temperament-list">
          {temperament.map((trait, index) => (
            <li key={index}>{trait}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DogBreedCard;

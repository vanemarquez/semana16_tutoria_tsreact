import React from 'react';
import dogBreeds from '../data/dogBreeds';
import DogBreedCard from './DogBreedCard';



const DogBreedsList: React.FC = () => {
  return (
    <div className="card-container">
      {dogBreeds.map((breed) => (
        <DogBreedCard
          key={breed.id}
          name={breed.name}
          size={breed.size}
          temperament={breed.temperament}
          image={breed.image} 
        />
      ))}
    </div>
  );
};

export default DogBreedsList;

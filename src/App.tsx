import React from 'react';
import DogBreedsList from './Components/DogBreedsList';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Lista de Razas de Perros</h1>
      </header>
      <main>
        <DogBreedsList />
      </main>
    </div>
  );
};

export default App;


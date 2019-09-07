import React from 'react';
import POKEMON from './pokemon/pokemon';

import Card from './card/Card';
import './App.css';

function App() {
  const cards = POKEMON.map((pokemon, index) => <Card key={index} info={pokemon} />);

  return (
    <div className="App">
		<header className="AppHeader">
			<h1>POKEMON</h1>
		</header>
		<div className="AppContainer">
			{cards}
		</div>
    </div>
  );
}

export default App;

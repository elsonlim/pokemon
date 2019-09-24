import React from "react";
import POKEMON from "./pokemon/pokemon";

import Card from "./card/Card";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      pokemonData: [],
    };
  }

  componentDidMount() {
    fetch(
      "https://us-central1-pokedex-23fb6.cloudfunctions.net/app/pokemonData"
    )
      .then(res => res.json())
      .then(resInJson =>
        this.setState(state => {
          return { pokemonData: resInJson };
        })
      );
  }

  render() {
    const cards = this.state.pokemonData.map((pokemon, index) => (
      <Card key={index} info={pokemon} />
    ));

    return (
      <div className="App">
        <header className="AppHeader">
          <h1>POKEMON</h1>
        </header>
        <div className="AppContainer">{cards}</div>
      </div>
    );
  }
}

export default App;

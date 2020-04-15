import React from "react";
import Card from "./Card";

class PokemonGallery extends React.Component {
  render() {
    const cards = this.props.pokemons.map((pokemon, index) => (
      <Card key={index} info={pokemon} />
    ));

    return <div className="AppContainer">{cards}</div>;
  }
}

export default PokemonGallery;

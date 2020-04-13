import React from "react";
import { connect } from "react-redux";
import Card from "./Card";
import { updatePokemon } from "../actions/index";

class PokemonGallery extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      pokemonData: [],
    };
  }

  componentDidMount() {
    console.log("here");
    fetch(
      "https://us-central1-pokedex-23fb6.cloudfunctions.net/app/pokemonData"
    )
      .then((res) => res.json())
      .then((resInJson) => {
        this.props.updatePokemon(resInJson);
      });
  }

  render() {
    const cards = this.props.pokemon.map((pokemon, index) => (
      <Card key={index} info={pokemon} />
    ));

    return (
      <div>
        <header className="AppHeader">
          <h1>POKEMON</h1>
        </header>
        <div className="AppContainer">{cards}</div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { pokemon } = state.pokemonStore;
  return { pokemon };
};

const mapDispatchToProps = { updatePokemon };

export default connect(mapStateToProps, mapDispatchToProps)(PokemonGallery);

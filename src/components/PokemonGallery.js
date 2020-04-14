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
    fetch(
      "https://us-central1-pokedex-23fb6.cloudfunctions.net/app/pokemonData"
    )
      .then((res) => res.json())
      .then((resInJson) => {
        this.props.updatePokemon(resInJson);
      });
  }

  render() {
    const cards = this.props.pokemons.map((pokemon, index) => (
      <Card key={index} info={pokemon} />
    ));

    return <div className="AppContainer">{cards}</div>;
  }
}

const mapStateToProps = (state) => {
  const { pokemonToShow: pokemons } = state.pokemonStore;
  const { searchText } = state.pokemonFilter;
  return { pokemons, searchText };
};

const mapDispatchToProps = { updatePokemon };

export default connect(mapStateToProps, mapDispatchToProps)(PokemonGallery);

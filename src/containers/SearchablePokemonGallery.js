import React from "react";
import SearchBar from "../components/SearchBar";
import PokemonGallery from "../components/PokemonGallery";
import { connect } from "react-redux";
import { updatePokemon } from "../actions/index";
import Loader from "react-loader-spinner";

class SearchablePokemonGallery extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      pokemonData: [],
      isLoading: true,
    };
  }

  componentDidMount() {
    this.fetchPokemon();
  }

  fetchPokemon = () => {
    this.setState({
      isLoading: true,
    });

    fetch(
      "https://us-central1-pokedex-23fb6.cloudfunctions.net/app/pokemonData"
    )
      .then((res) => res.json())
      .then((resInJson) => {
        this.props.updatePokemon(resInJson);
        this.setState({ isLoading: false });
      })
      .catch((e) => {
        this.setState({ isLoading: false });
      });
  };

  render() {
    return (
      <div>
        <header className="AppHeader">
          <SearchBar />
        </header>
        {this.state.isLoading ? (
          <Loader type="ThreeDots" color="#FFAA00" width={180} height={180} />
        ) : (
          <PokemonGallery pokemons={this.props.pokemons} />
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { pokemonToShow: pokemons } = state.pokemonStore;
  const { searchText } = state.pokemonFilter;
  return { pokemons, searchText };
};

const mapDispatchToProps = { updatePokemon };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchablePokemonGallery);

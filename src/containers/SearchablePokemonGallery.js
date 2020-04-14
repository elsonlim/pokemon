import React from "react";
import SearchBar from "../components/SearchBar";
import PokemonGallery from "../components/PokemonGallery";

const SearchablePokemonGallery = () => {
  return (
    <div>
      <header className="AppHeader">
        <SearchBar />
      </header>
      <PokemonGallery />
    </div>
  );
};

export default SearchablePokemonGallery;

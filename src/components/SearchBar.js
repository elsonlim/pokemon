import React, { useState } from "react";
import { connect } from "react-redux";
import { updateFilter } from "../actions";
import Type from "../type/TypeSwitch";
import "./SearchBar.css";

const getTypes = (pokemonArray) => {
  const typeSet = pokemonArray.reduce((allType, aPokemon) => {
    aPokemon.type.forEach((type) => {
      if (!allType.has(type)) {
        allType.add(type);
      }
    });
    return allType;
  }, new Set());

  return Array.from(typeSet);
};

const SearchBar = ({ updateFilter, pokemon }) => {
  const [searchText, setSearchText] = useState("");
  const [typeBlacklist, setTypeBlacklist] = useState([]);

  const allPokemonTypes = getTypes(pokemon);

  const toggleType = (type) => {
    if (typeBlacklist.includes(type)) {
      setTypeBlacklist(typeBlacklist.filter((curType) => curType !== type));
    } else {
      setTypeBlacklist([...typeBlacklist, type]);
    }
  };

  const PokemonTypes = allPokemonTypes.map((aType) => (
    <Type
      key={aType}
      onClick={() => toggleType(aType)}
      name={aType}
      isActive={typeBlacklist.includes(aType) ? false : true}
    />
  ));

  return (
    <header className="AppHeader">
      <input
        type="text"
        value={searchText}
        onChange={(event) => setSearchText(event.target.value)}
      />
      <button
        onClick={() =>
          updateFilter({
            searchText,
            typeBlacklist,
          })
        }
      >
        Filter
      </button>
      <div className="type-filer">{PokemonTypes}</div>
    </header>
  );
};

const mapStateToProps = (state) => {
  return state.pokemonStore;
};

const mapDispatchToProps = { updateFilter };

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);

import { ADD_POKEMON, UPDATE_FILTER } from "../actions";

const initState = {
  pokemon: [],
  pokemonToShow: [],
};

export default function (state = initState, action) {
  switch (action.type) {
    case ADD_POKEMON:
      return {
        ...state,
        pokemon: [...action.payload],
        pokemonToShow: [...action.payload],
      };
    case UPDATE_FILTER:
      const { searchText, typeBlacklist } = action.payload;
      const invalidTextSearch = !searchText || searchText.length < 2;

      return {
        ...state,
        pokemonToShow: state.pokemon.filter((aPokemon) => {
          const containText =
            invalidTextSearch ||
            aPokemon.name.english.toLowerCase().includes(searchText);

          const doesNotContainBlackType = !typeBlacklist.filter((curType) =>
            aPokemon.type.includes(curType)
          ).length;

          return containText && doesNotContainBlackType;
        }),
      };
    default:
      return state;
  }
}

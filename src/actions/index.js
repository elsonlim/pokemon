export const ADD_POKEMON = "ADD_POKEMON";
export const updatePokemon = (pokemon) => {
  return {
    type: ADD_POKEMON,
    payload: pokemon,
  };
};

export const UPDATE_FILTER = "UPDATE_FILTER";
export const updateFilter = (filter) => {
  return {
    type: UPDATE_FILTER,
    payload: filter,
  };
};

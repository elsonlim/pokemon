export const ADD_POKEMON = "ADD_POKEMON";
export const updatePokemon = (pokemon) => {
  return {
    type: ADD_POKEMON,
    payload: pokemon,
  };
};

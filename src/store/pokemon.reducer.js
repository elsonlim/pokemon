import { ADD_POKEMON } from "../actions";

const initState = {
  pokemon: [],
};

export default function (state = initState, action) {
  switch (action.type) {
    case ADD_POKEMON:
      return { ...state, pokemon: action.payload };
    default:
      return state;
  }
}

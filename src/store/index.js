import { createStore, combineReducers } from "redux";
import pokemonStore from "./pokemon.reducer";
import pokemonFilter from "./filter.reducer";

const reducer = combineReducers({
  pokemonStore,
  pokemonFilter,
});

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;

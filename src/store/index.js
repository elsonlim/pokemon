import { createStore, combineReducers } from "redux";
import pokemonReducer from "./pokemon.reducer";

const reducer = combineReducers({
  pokemonStore: pokemonReducer,
});

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;

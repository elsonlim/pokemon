import React from "react";
import "./App.css";
import { Provider } from "react-redux";
import store from "./store";
import PokemonGallery from "./components/PokemonGallery";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <PokemonGallery />
      </div>
    </Provider>
  );
}

export default App;

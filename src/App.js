import React from "react";
import "./App.css";
import { Provider } from "react-redux";
import store from "./store";
import SearchablePokemonGallery from "./containers/SearchablePokemonGallery";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <SearchablePokemonGallery />
      </div>
    </Provider>
  );
}

export default App;

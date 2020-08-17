import React from "react";
import ReactDOM from "react-dom";
import PokedexApp from "./components/PokedexApp";
import "normalize.css/normalize.css";
import "./styles/styles.scss";

ReactDOM.render(
  <h1 className="text-center">Loading...</h1>,
  document.querySelector("#app")
);

fetch("https://pokeapi.co/api/v2/pokemon?limit=150")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    ReactDOM.render(
      <PokedexApp pokeList={data.results} />,
      document.querySelector("#app")
    );
  })
  .catch((err) => {
    ReactDOM.render(<h1>{err}</h1>, document.querySelector("#app"));
  });

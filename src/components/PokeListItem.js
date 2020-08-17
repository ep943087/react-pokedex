import React from "react";

const PokeListItem = (props) => (
  <li
    onClick={() => props.handlePokemon(props.url)}
    className="list-group-item"
  >
    {props.name}
  </li>
);

export default PokeListItem;

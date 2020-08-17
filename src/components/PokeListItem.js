import React from "react";

const PokeListItem = (props) => (
  <li
    onClick={() => props.handlePokemon(props.id)}
    className="list-group-item button"
  >
    <p>
      {props.id}. {props.name.replace(/^./, props.name[0].toUpperCase())}
    </p>
  </li>
);

export default PokeListItem;

import React from "react";
import PokeListItem from "./PokeListItem";

const PokeList = (props) => {
  return (
    <div>
      <ul className="list-group">
        {props.pokeList.map((pokemon) => (
          <PokeListItem
            key={pokemon.name}
            name={pokemon.name}
            url={pokemon.url}
            handlePokemon={props.handlePokemon}
          />
        ))}
      </ul>
    </div>
  );
};

export default PokeList;

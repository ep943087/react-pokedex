import React from "react";
import PokeListItem from "./PokeListItem";

const PokeList = (props) => {
  console.log(props.pokeList[0]);
  return (
    <div className="poke-list">
      <ul className="list-group">
        {props.pokeList.map((pokemon, index) => (
          <PokeListItem
            key={pokemon.name}
            name={pokemon.name}
            id={index + 1}
            handlePokemon={props.handlePokemon}
          />
        ))}
      </ul>
    </div>
  );
};

export default PokeList;

import React from "react";

const PokeInfo = (props) => {
  const { id, next, prev, name, image } = props.pokemon;
  const newName = name.replace(/^./, name[0].toUpperCase());
  return (
    <div>
      <h1>{newName}</h1>
      <img src={image} />

      <ul className="pagination">
        <li className="page-item button">
          <span onClick={() => props.handlePokemon(prev)} className="page-link">
            &lt;&lt; {prev}
          </span>
        </li>
        <li className="page-item button">
          <span onClick={props.handleBackToList} className="page-link">
            Back to List
          </span>
        </li>
        <li className="page-item button">
          <span onClick={() => props.handlePokemon(next)} className="page-link">
            {next} &gt;&gt;
          </span>
        </li>
      </ul>
    </div>
  );
};

export default PokeInfo;

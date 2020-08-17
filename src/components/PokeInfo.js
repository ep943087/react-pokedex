import React from "react";

const PokeInfo = (props) => {
  const { name, image } = props.pokemon;
  return (
    <div>
      <h1>{name}</h1>
      <img src={image} />
      <button
        onClick={props.handleBackToList}
        className="btn btn-primary btn-block"
      >
        Back to List
      </button>
    </div>
  );
};

export default PokeInfo;

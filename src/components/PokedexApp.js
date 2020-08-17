import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import PokeList from "./PokeList";
import PokeInfo from "./PokeInfo";

export default class PokedexApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemon: undefined,
      pokeList: props.pokeList,
    };
    this.max = 150;
    this.fetchUrl = "https://pokeapi.co/api/v2/pokemon/";
  }
  handlePokemon = (id) => {
    fetch(this.fetchUrl + id)
      .then((result) => result.json())
      .then((data) => {
        const pokemon = {
          name: data.name,
          image: data.sprites.front_default,
          id: data.id,
          prev: data.id > 1 ? data.id - 1 : this.max,
          next: data.id < this.max ? data.id + 1 : 1,
        };
        this.setState(() => ({ pokemon }));
      })
      .catch((err) => console.log(err));
  };

  handleBackToList = () => {
    this.setState(() => ({ pokemon: undefined }));
  };
  render() {
    return (
      <div className="row">
        <div className="col-8 mx-auto">
          <div className="card">
            <Header />
            <div className="card-body">
              {!this.state.pokemon && (
                <PokeList
                  pokeList={this.state.pokeList}
                  handlePokemon={this.handlePokemon}
                />
              )}

              {!!this.state.pokemon && (
                <PokeInfo
                  pokemon={this.state.pokemon}
                  handleBackToList={this.handleBackToList}
                  handlePokemon={this.handlePokemon}
                />
              )}
            </div>
            <Footer />
          </div>
        </div>
      </div>
    );
  }
}

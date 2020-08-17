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
  }
  handlePokemon = (url) => {
    fetch(url)
      .then((result) => result.json())
      .then((data) => {
        const pokemon = {
          name: data.name,
          image: data.sprites.front_default,
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

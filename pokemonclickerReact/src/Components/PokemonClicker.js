import React, { Component } from 'react';
import Section from './common/Clicker';

export default class PokemonClicker extends Component {
  constructor(){
    super();
    this.state = {
      update: false,
      pokemon: [
        {name: 'Aerodactyl', path: '/assets/aerodactyl.png'},
        {name: 'Alakazam', path: '/assets/alakazam.png'},
        {name: 'Gyarados', path: '/assets/gyarados.png'},
        {name: 'Kabutops', path: '/assets/kabutops.png'},
        {name: 'Kangaskhan', path: '/assets/kangaskhan.png'},
        {name: 'Machamp', path: '/assets/machamp.png'},
        {name: 'Onix', path: '/assets/onix.png'},
        {name: 'Rhydon', path: '/assets/rhydon.png'},
        {name: 'Tauros', path: '/assets/tauros.png'}
      ]
    }
    this.showPokemon = this.showPokemon.bind(this);
  }

  showPokemon() {
    if (this.state.update) { //Since boolean value is false or true it will determine if based on that condition.
      this.setState({update: false});
    }
    let random = this.randomNumberGenerator(this.state.pokemon.length);
    //We had to do some trickery to pass in the parameters or it will run on load, OnClick.
    return (<div>
            <h1>{this.state.pokemon[random].name}</h1>
            <img onClick={this.setState.bind(this, {update: true})} src={this.state.pokemon[random].path}/>
          </div>)
    // WIll return all pokemon in the array.
    // return this.state.pokemon.map((pokemon) => {
    //   return <div>
    //   <h1>{pokemon.name}</h1>
    //   <img src={pokemon.path}/>
    //   </div>
    // })

  }


  randomNumberGenerator(betweenZeroAnd) {
    return Math.floor((Math.random() * betweenZeroAnd));

  }

  render() {
    return (
      <div className="container-fluid">
        {this.showPokemon()}
      </div>
    );
  }
}

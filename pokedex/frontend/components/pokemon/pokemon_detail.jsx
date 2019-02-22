import React from 'react';

export class PokemonDetail extends React.Component {
  render() {
    if (!this.props.pokemon) return null;
    
    return(
      <ul>
        <li> {this.props.pokemon.id} </li>
      </ul>
    )
  }

  componentDidMount(){
    
    this.props.requestPokemon(this.props.match.params.id)
  }
}
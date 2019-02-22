import React from 'react';
import {Link} from 'react-router-dom'

export const PokemonIndexItem = ({pokemon}) => {
  return(
    <li>
      <Link to={`/pokemon/${pokemon.id}`} className="button">
        {pokemon.name}
        <img src={pokemon.image_url}/>
      </Link>
    </li>
  )
}
import { RECEIVE_ALL_POKEMON, RECEIVE_POKEMON } from '../actions/pokemon_actions';
import {merge} from 'lodash';

export const pokemonReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_ALL_POKEMON:
    return Object.assign({}, state, action.pokemon);
    case RECEIVE_POKEMON:
    let pokemonObject = {};
    pokemonObject[action.payload.pokemon.id] = action.payload.pokemon;
      return Object.assign({}, state, pokemonObject);
    default: 
      return state;
  }
};
import { RECEIVE_ALL_POKEMON } from '../actions/pokemon_actions';
import {merge} from 'lodash';

export const pokemonReducer = (state = {}, action) => {
  Object.freeze(state);
  nextState = {};

  switch (action.type) {
    case RECEIVE_ALL_POKEMON:
      action.pokes.forEach(poke => {
        nextState[poke.id] = poke;
      });
      return nextState;
      
    default: 
      return state;
  }
}
import {RECEIVE_POKEMON} from '../actions/pokemon_actions';
import {merge} from 'lodash';

export const itemsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_POKEMON:
      return action.pokemon.items;
    default: 
      return state;
  }
};
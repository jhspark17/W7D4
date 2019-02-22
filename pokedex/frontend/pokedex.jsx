import React from 'react';
import ReactDOM from 'react-dom';
import {fetchAllPokemon} from "./util/api_util";
import {receiveAllPokemon, requestAllPokemon} from './actions/pokemon_actions.js';
import configureStore from './store/store';
import {selectAllPokemon} from './reducers/selectors';
import Root from './components/root';
import {HashRouter, Route} from 'react-router-dom';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  
  window.fetchAllPokemon = fetchAllPokemon;
  window.receiveAllPokemon = receiveAllPokemon;
  window.requestAllPokemon = requestAllPokemon;
  const store = configureStore();
  window.getState = store.getState; 
  window.dispatch = store.dispatch;
  window.selectAllPokemon = selectAllPokemon;

  ReactDOM.render(<Root store={store} />, root)
})
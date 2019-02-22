import {entitiesReducer} from './entities_reducer';
import {combineReducers} from 'redux';

export const rootReducer = combineReducers({
  entities: entitiesReducer
});
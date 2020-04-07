import { combineReducers } from 'react';
import collections from './collections_reducer';
import entities from './entities_reducer';

export default combineReducers({
  collections,
  entities
});
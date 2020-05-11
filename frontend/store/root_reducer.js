import { combineReducers } from 'redux';
import session from './session/reducer';
import users from './users/reducer';
import posts from './posts/reducer';

export default combineReducers({
  session,
  users,
  posts
});
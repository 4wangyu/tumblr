import { combineReducers } from 'redux';
import session from './session/reducer';
import users from './users/reducer';
import posts from './posts/reducer';
import reblogs from './reblogs/reducer';
import modal from './modal/reducer';

export default combineReducers({
  session,
  entities: combineReducers({
    users,
    posts,
    reblogs
  }),
  ui: combineReducers({
    modal
  })
});
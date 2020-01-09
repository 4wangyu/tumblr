import { combineReducers } from 'redux'
import { RECEIVE_CURRENT_USER } from '../actions/session_actions';

// --------------------------------- usersReducer
const _nullUsers = {};

const usersReducer = (state = _nullUsers, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      const { user } = action;
      return Object.assign({}, state, { [user.id]: user });
    default:
      return state;
  }
}

// --------------------------------- entitiesReducer (usersReducer)
export default combineReducers({
  users: usersReducer
});
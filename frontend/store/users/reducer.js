import { Types } from './actions';

const _initialUsers = {};

const usersReducer = (state = _initialUsers, action) => {
  Object.freeze(state);
  switch (action.type) {
    case Types.RECEIVE_CURRENT_USER:
      const { user } = action;
      return Object.assign({}, state, { [user.id]: user });
    case Types.RECEIVE_USERS:
      const { users } = action;
      return Object.assign({}, state, users)
    default:
      return state;
  }
};

export default usersReducer;
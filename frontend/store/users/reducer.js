import { Types } from './actions';
import { Types as Session } from 'store/session/actions';

const _initialUsers = {};

const usersReducer = (state = _initialUsers, action) => {
  Object.freeze(state);
  switch (action.type) {
    case Session.RECEIVE_CURRENT_USER:
      const { currentUser } = action;
      return ({ ...state, [currentUser.id]: currentUser })
    case Types.RECEIVE_USERS:
      const { users } = action;
      return ({ ...state, ...users })
    case Types.RECEIVE_USER:
      const { user } = action;
      return ({ ...state, [user.id]: user })
    default:
      return state;
  }
};

export default usersReducer;
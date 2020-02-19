import { Types } from './actions';

const _initialSession = { id: null };

const sessionReducer = (state = _initialSession, action) => {
  Object.freeze(state);
  switch (action.type) {
    case Types.RECEIVE_CURRENT_USER:
      const { user: { id } } = action;
      return Object.assign({}, { id });
    case Types.LOGOUT_CURRENT_USER:
      return _initialSession;
    default:
      return state;
  }
};

export default sessionReducer;
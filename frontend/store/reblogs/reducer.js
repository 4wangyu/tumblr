import { Types } from './actions';

const _initialReblogs = {};

const reblogsReducer = (state = _initialReblogs, action) => {
  Object.freeze(state);
  const newState = Object.assign({}, state)
  switch (action.type) {
    case Types.RECEIVE_REBLOGS:
      const { reblogs } = action;
      return ({ ...state, ...reblogs });
    case Types.RECEIVE_REBLOG:
      const { reblog } = action;
      return ({ ...state, [reblog.id]: reblog });
    case Types.REMOVE_REBLOG:
      const { reblogId } = action;
      delete newState[reblogId]
      return newState;
    default:
      return state;
  }
};

export default reblogsReducer;
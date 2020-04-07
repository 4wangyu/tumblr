import { Types } from './actions';

const _initialCollections = {
  recommended: new Set(),
  followers: new Set(),
  followees: new Set()
};

const collectionsReducer = (state = _initialCollections, action) => {
  Object.freeze(state);
  let newState = Object.assign({}, state);
  switch (action.type) {
    case Types.RECEIVE_USERS_COLLECTION:
      const { users, collection } = action;
      for (const userId of Object.keys(users))
        newState[collection].add(userId);
      return newState;
    // case Types.REMOVE_USER:
    default:
      return state;
  }
};

export default collectionsReducer;
import { Types } from './actions';

const _initialCollections = {
  recommended: [],
  followers: [],
  followees: []
};

const collectionsReducer = (state = _initialCollections, action) => {
  Object.freeze(state);
  switch (action.type) {
    case Types.RECEIVE_USERS_COLLECTION:
      const { users, collection } = action;
      const newCollection = [...state[collection], ...Object.keys(users)];
      return ({ ...state, [collection]: newCollection });
    // case Types.REMOVE_USER:
    default:
      return state;
  }
};

export default collectionsReducer;
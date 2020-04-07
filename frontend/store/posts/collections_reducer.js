import { Types } from './actions';

const _initialCollections = {
  dashboard: [],
  explore: [],
  search: [],
  likes: [],
};

const collectionsReducer = (state = _initialCollections, action) => {
  Object.freeze(state);
  switch (action.type) {
    case Types.RECEIVE_POSTS_COLLECTION:
      const { posts, collection } = action;
      const newCollection = [...state[collection], ...Object.keys(posts)]
      return ({ ...state, [collection]: newCollection });
    // case Types.REMOVE_POST:
    default:
      return state;
  }
};

export default collectionsReducer;
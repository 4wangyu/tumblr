import { Types } from './actions';

const _initialCollections = {
  dashboard: new Set(),
  explore: new Set(),
  search: new Set(),
  likes: new Set(),
  radar: new Set()
};

const collectionsReducer = (state = _initialCollections, action) => {
  Object.freeze(state);
  let newState = Object.assign({}, state);
  switch (action.type) {
    case Types.RECEIVE_POSTS_COLLECTION:
      const { posts, collection } = action;
      for (const postId of Object.keys(posts))
        newState[collection].add(postId);
      return newState;
    case Types.REMOVE_POST:
      const { postId } = action;
      for (const collection of Object.keys(newState))
        newState[collection].delete(postId);
      return newState;
    case Types.WIPE_POSTS_COLLECTION:
      const { collection: c } = action;
      newState[c]?.clear()
      return newState;
    default:
      return state;
  }
};

export default collectionsReducer;
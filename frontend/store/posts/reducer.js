import { Types } from './actions';

const _initialPosts = {};

const postsReducer = (state = _initialPosts, action) => {
  Object.freeze(state);
  switch (action.type) {
    case Types.RECEIVE_POSTS:
      const { posts } = action;
      return Object.assign({}, state, posts);
    case Types.RECEIVE_POST:
      const { post } = action;
      return Object.assign({}, state, { [post.id]: post });
    default:
      return state;
  }
};

export default postsReducer;
import { Types } from './actions';

const _initialPosts = {};

const postsReducer = (state = _initialPosts, action) => {
  Object.freeze(state);
  const newState = Object.assign({}, state)
  switch (action.type) {
    case Types.RECEIVE_POSTS:
      const { posts } = action;
      return ({ ...state, ...posts });
    case Types.RECEIVE_POST:
      const { post } = action;
      return ({ ...state, [post.id]: post });
    case Types.REMOVE_POST:
      const { postId } = action;
      delete newState[postId]
      return newState;
    default:
      return state;
  }
};

export default postsReducer;
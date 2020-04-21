import { Types } from './actions';

const _initialEntities = {};

const entitiesReducer = (state = _initialEntities, action) => {
  Object.freeze(state);
  const newState = Object.assign({}, state)
  switch (action.type) {
    case Types.RECEIVE_POSTS:
    case Types.RECEIVE_POSTS_COLLECTION:
      const { posts } = action;
      return ({ ...state, ...posts });
    case Types.RECEIVE_POST:
    case Types.RECEIVE_AUTHORED_POST:
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

export default entitiesReducer;
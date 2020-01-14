import { combineReducers } from 'redux'
import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import { RECEIVE_USERS } from '../actions/users_actions';
import { RECEIVE_POSTS, RECEIVE_POST } from '../actions/posts_actions';
// --------------------------------- usersReducer
const _nullUsers = {};

const usersReducer = (state = _nullUsers, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      const { user } = action;
      return Object.assign({}, state, { [user.id]: user });
    case RECEIVE_USERS:
      const { users } = action;
      return Object.assign({}, state, users)
    default:
      return state;
  }
}


// --------------------------------- postsReducer
const _nullPosts = {};

const postsReducer = (state = _nullPosts, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_POSTS:
      const { posts } = action;
      return Object.assign({}, state, posts);
    case RECEIVE_POST:
      const { post } = action;
      return Object.assign({}, state, { [post.id]: post });
    default:
      return state;
  }
}

// --------------------------------- entitiesReducer (usersReducer + postsReducer)
export default combineReducers({
  users: usersReducer,
  posts: postsReducer
});
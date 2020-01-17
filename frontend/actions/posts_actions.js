import * as APIUtil from '../util/api';

// --------------------------------- Types
export const RECEIVE_POSTS = 'RECEIVE_POSTS';
export const RECEIVE_POST = 'RECEIVE_POST';

export const CREATE_POST = 'CREATE_POST';
export const UPDATE_POST = 'UPDATE_POST';

// --------------------------------- Action Generators
export const receivePosts = posts => ({
  type: RECEIVE_POSTS,
  posts
})

export const receivePost = post => ({
  type: RECEIVE_POST,
  post
})

// --------------------------------- Thunks
export const fetchPosts = filters => (dispatch, getState) => {
  return APIUtil.fetchPosts(filters)
    .then((posts, status, xhr) => {
      let count = xhr.getResponseHeader('X-Post-Count');
      dispatch(receivePosts(posts))
      return ({ count })
    });
}

export const fetchPost = postId => dispatch => {
  return APIUtil.fetchPost(postId)
    .then(post => dispatch(receivePost(post)));
}

export const createPost = formPost => dispatch => {
  return APIUtil.createPost(formPost)
    .then(post => dispatch(receivePost(post)));
}

export const updatePost = formPost => dispatch => {
  return APIUtil.updatePost(formPost)
    .then(post => dispatch(receivePost(post)));
}
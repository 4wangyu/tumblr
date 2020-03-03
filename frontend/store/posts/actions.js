import { createActions } from 'reduxsauce'
import * as APIUtil from './api_util';

export const { Types, Creators } = createActions({
  receivePosts: ['posts'],
  receivePost: ['post'],
  createPost: ['post'],
  updatePost: ['post'],
  removePost: ['postId']
}, {});

export const Thunks = {};
// Thunks.fetchPosts = filters => (dispatch, getState) => {
//   return APIUtil.fetchPosts(filters)
//     .then((posts, status, xhr) => {
//       let count = parseInt(xhr.getResponseHeader('X-Post-Count'));
//       dispatch(Creators.receivePosts(posts))
//       return ({ count })
//     });
// };

Thunks.fetchPost = postId => dispatch => {
  return APIUtil.fetchPost(postId)
    .then(post => dispatch(Creators.receivePost(post)));
}

Thunks.createPost = formPost => dispatch => {
  return APIUtil.createPost(formPost)
    .then(post => dispatch(Creators.receivePost(post)));
};

Thunks.updatePost = formPost => dispatch => {
  return APIUtil.updatePost(formPost)
    .then(post => dispatch(Creators.receivePost(post)));
};

Thunks.destroyPost = postId => dispatch => {
  return APIUtil.destroyPost(postId)
    .then(postId => dispatch(Creators.removePost(postId)));
};

Thunks.togglePostLike = (postId, isLiked = false) => dispatch => {
  return APIUtil.togglePostLike(postId, isLiked)
    .then(post => dispatch(Creators.receivePost(post)));
};
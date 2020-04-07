import { createActions } from 'reduxsauce'
import * as APIUtil from './api_util';
import { Creators as UserCreators } from 'store/users/actions';

export const { Types, Creators } = createActions({
  receivePostsCollection: ['collection', 'posts'],
  receivePosts: ['posts'],
  receivePost: ['post'],
  createPost: ['post'],
  updatePost: ['post'],
  removePost: ['postId']
}, {});

export const Thunks = {};
Thunks.fetchPost = postId => dispatch => {
  return APIUtil.fetchPost(postId)
    .then(post => dispatch(Creators.receivePost(post)));
}

Thunks.createPost = formPost => dispatch => {
  return APIUtil.createPost(formPost)
    .then(post => dispatch(Creators.receivePost(post)));
};

Thunks.updatePost = (postId, formPost) => dispatch => {
  return APIUtil.updatePost(postId, formPost)
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

Thunks.purgePostAttachment = (postId, attachmentId) => dispatch => {
  return APIUtil.purgePostAttachment(postId, attachmentId)
    .then(post => dispatch(Creators.receivePost(post)));
};

Thunks.fetchPostsCollection = (collection, filters) => dispatch => {
  return APIUtil.fetchPostsCollection(collection, filters)
    .then(({ posts, users }, undefined, xhr) => {
      let postCount = parseInt(xhr.getResponseHeader('X-Post-Count'));
      dispatch(UserCreators.receiveUsers(users));
      dispatch(Creators.receivePostsCollection(collection, posts));
      return ({ postCount });
    });
};
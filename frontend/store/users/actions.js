import { createActions } from 'reduxsauce'
import * as APIUtil from './api_util';
import { Creators as PostCreators } from 'store/posts/actions';

export const { Types, Creators } = createActions({
  receiveUsersCollection: ['collection', 'users'],
  receiveUsers: ['users'],
  receiveUser: ['user']
}, {});

export const Thunks = {};
Thunks.fetchUser = userId => dispatch => {
  return APIUtil.fetchUser(userId)
    .then(user => dispatch(Creators.receiveUser(user)));
};

Thunks.toggleUserFollow = (userId, isFollowing = false) => dispatch => {
  return APIUtil.toggleUserFollow(userId, isFollowing)
    .then(user => dispatch(Creators.receiveUser(user)));
};

Thunks.fetchUsersCollection = (collection, filters) => dispatch => {
  return APIUtil.fetchUsersCollection(collection, filters)
    .then(({ users, posts }, undefined, xhr) => {
      let userCount = parseInt(xhr.getResponseHeader('X-User-Count'));
      dispatch(PostCreators.receivePosts(posts));
      dispatch(Creators.receiveUsersCollection(collection, users));
      return ({ userCount });
    });
};

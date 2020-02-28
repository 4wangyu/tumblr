import { createActions } from 'reduxsauce'
import * as APIUtil from './api_util';

export const { Types, Creators } = createActions({
  receiveUsers: ['users'],
  receiveUser: ['user']
}, {});

export const Thunks = {};

Thunks.fetchUsers = () => (dispatch, getState) => {
  return APIUtil.fetchUsers()
    .then(users => dispatch(Creators.receiveUsers(users)));
};

Thunks.toggleUserFollow = (userId, isFollowing = false) => dispatch => {
  return APIUtil.toggleUserFollow(userId, isFollowing)
    .then(user => dispatch(Creators.receiveUser(user)));
};

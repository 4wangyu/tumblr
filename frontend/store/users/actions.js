import { createActions } from 'reduxsauce'
import * as APIUtil from './api_util';

export const { Types, Creators } = createActions({
  receiveUsers: ['users']
}, {});

export const Thunks = {};

Thunks.fetchUsers = () => (dispatch, getState) => {
  return APIUtil.fetchUsers()
    .then(users => dispatch(Creators.receiveUsers(users)));
};

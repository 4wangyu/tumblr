import { createActions } from 'reduxsauce'
import * as APIUtil from './api_util';

export const { Types, Creators } = createActions({
  receiveCurrentUser: ['user'],
  logoutCurrentUser: null,
}, {});

export const Thunks = {};

Thunks.signup = formUser => dispatch => {
  return APIUtil.signup(formUser)
    .then(
      user => dispatch(Creators.receiveCurrentUser(user))
    );
};

Thunks.login = formUser => dispatch => {
  return APIUtil.login(formUser)
    .then(
      user => dispatch(Creators.receiveCurrentUser(user))
    );
};

Thunks.logout = () => dispatch => {
  return APIUtil.logout()
    .then(
      () => dispatch(Creators.logoutCurrentUser()))
}
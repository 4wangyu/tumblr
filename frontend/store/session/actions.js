import { createActions } from 'reduxsauce'
import * as APIUtil from './api_util';

export const { Types, Creators } = createActions({
  receiveCurrentUser: ['currentUser'],
  logoutCurrentUser: null,
}, {});

export const Thunks = {};

Thunks.signup = formUser => dispatch => {
  return APIUtil.signup(formUser)
    .then(
      currentUser => dispatch(Creators.receiveCurrentUser(currentUser))
    );
};

Thunks.login = formUser => dispatch => {
  return APIUtil.login(formUser)
    .then(
      currentUser => dispatch(Creators.receiveCurrentUser(currentUser))
    );
};

Thunks.logout = () => dispatch => {
  return APIUtil.logout()
    .then(
      () => dispatch(Creators.logoutCurrentUser()))
}
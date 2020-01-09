import * as APIUtil from '../util/api';

// --------------------------------- Types
export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';

export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';

export const RECEIVE_ERRORS = "RECEIVE_ERRORS";

// --------------------------------- Action Generators

export const receiveCurrentUser = user => ({
  type: RECEIVE_CURRENT_USER,
  user
});

export const logoutCurrentUser = () => ({
  type: LOGOUT_CURRENT_USER
});

export const receiveErrors = (formName, errors) => ({
  type: RECEIVE_ERRORS,
  formName,
  errors
})

// --------------------------------- Thunks

export const signup = formUser => dispatch => {
  return APIUtil.signup(formUser)
    .then(
      user => dispatch(receiveCurrentUser(user)),
      errors => dispatch(receiveErrors('signup', errors.reponseJSON))
    );
}

export const login = formUser => dispatch => {
  return APIUtil.login(formUser)
    .then(
      user => dispatch(receiveCurrentUser(user)),
      errors => dispatch(receiveErrors('login', errors.reponseJSON))
    );
}

export const logout = () => dispatch => {
  return APIUtil.logout()
    .then(
      () => dispatch(logoutCurrentUser()))
}
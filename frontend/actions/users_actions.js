import * as APIUtil from '../util/api';

// --------------------------------- Types
export const RECEIVE_USERS = 'RECEIVE_USERS';


// --------------------------------- Action Generators
export const receiveUsers = users => ({
  type: RECEIVE_USERS,
  users
});

// --------------------------------- Thunks
export const fetchUsers = () => (dispatch, getState) => {
  return APIUtil.fetchUsers()
    .then(users => dispatch(receiveUsers(users)));
};
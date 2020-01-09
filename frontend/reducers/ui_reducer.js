import { combineReducers } from 'redux'
import { RECEIVE_ERRORS, RECEIVE_CURRENT_USER } from '../actions/session_actions'

// --------------------------------- errorsReducer
const _nullErrors = { signup: [], login: [] };

const errorsReducer = (state = _nullErrors, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ERRORS:
      const { formName, errors } = action;
      return Object.assign({}, state, { [formName]: errors });
    case RECEIVE_CURRENT_USER:
      return _nullErrors;
    default:
      return state;
  }
}

// --------------------------------- uiReducer (errorsReducer)
export default combineReducers({
  errors: errorsReducer
});
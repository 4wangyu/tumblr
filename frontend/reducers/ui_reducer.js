import { combineReducers } from 'redux';
import { RECEIVE_ERRORS, RECEIVE_CURRENT_USER } from '../actions/session_actions';
import { OPEN_MODAL, CLOSE_MODAL } from '../actions/modal_actions';

// --------------------------------- modalReducer
const _nullModal = null;

const modalReducer = (state = _nullModal, action) => {
  Object.freeze(state);
  switch (action.type) {
    case OPEN_MODAL:
      const { modal } = action;
      return modal;
    case CLOSE_MODAL:
      return _nullModal;
    default:
      return state;
  }
}

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
  modal: modalReducer,
  errors: errorsReducer
});
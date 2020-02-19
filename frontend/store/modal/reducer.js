import { Types } from './actions';

const _initialModal = null;

const modalReducer = (state = _initialModal, action) => {
  Object.freeze(state);
  switch (action.type) {
    case Types.OPEN_MODAL:
      const { modal } = action;
      return modal;
    case Types.CLOSE_MODAL:
      return _initialModal;
    default:
      return state;
  }
};
export default modalReducer;

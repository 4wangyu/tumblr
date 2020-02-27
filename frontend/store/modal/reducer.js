import { Types } from './actions';

const _initialModal = { component: null, options: {} };

const modalReducer = (state = _initialModal, action) => {
  Object.freeze(state);
  switch (action.type) {
    case Types.OPEN_MODAL:
      let { component, options } = action;
      return { component, options: options || {} };
    case Types.CLOSE_MODAL:
      return _initialModal;
    default:
      return state;
  }
};
export default modalReducer;

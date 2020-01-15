
import { connect } from 'react-redux';
import { closeModal } from '../../actions/modal_actions';
import Modal from './Modal';
import {selectModal, selectCurrentUser} from '../../reducers/selectors';

const mapStateToProps = state => ({
  modal: selectModal(state),
  currentUser: selectCurrentUser(state)
})

const mapDispatchToProps = dispatch => ({
  closeModal: () => dispatch(closeModal())
})

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
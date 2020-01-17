
import { connect } from 'react-redux';
import { openModal } from '../../../../actions/modal_actions';
import TypeButtons from './TypeButtons';
import { selectCurrentUser } from '../../../../reducers/selectors';

const mapStateToProps = state => ({
  currentUser: selectCurrentUser(state)
})

const mapDispatchToProps = dispatch => ({
  openModal: modal => dispatch(openModal(modal))
})

export default connect(mapStateToProps, mapDispatchToProps)(TypeButtons);
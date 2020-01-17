import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Nav from './Nav';
import { selectCurrentUser } from '../../reducers/selectors'
import { logout } from '../../actions/session_actions';
import { openModal } from '../../actions/modal_actions';
const mapStateToProps = state => {
  const currentUser = selectCurrentUser(state);

  return ({
    loggedIn: Boolean(currentUser),
    currentUser: currentUser
  });
};

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  openModal: modal => dispatch(openModal(modal))
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Nav)
);
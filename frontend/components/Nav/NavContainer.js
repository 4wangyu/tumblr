import { connect } from 'react-redux';
import Nav from './Nav';
import { selectCurrentUser } from '../../reducers/selectors'
import { logout } from '../../actions/session_actions';

const mapStateToProps = state => {
  const currentUser = selectCurrentUser(state);

  return ({
    loggedIn: Boolean(currentUser),
    currentUser: currentUser
  });
};

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout())
});

export default connect(mapStateToProps, mapDispatchToProps)(Nav);
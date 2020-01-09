import { connect } from 'react-redux';
import Signup from './Signup';
import { signup } from '../../actions/session_actions';
import { selectSignupErrors } from '../../reducers/selectors';

const mapStateToProps = state => ({
  errors: selectSignupErrors(state)
});

const mapDispatchToProps = dispatch => ({
  processForm: formUser => dispatch(signup(formUser))
});

export default connect(mapStateToProps, mapDispatchToProps)(Signup);
import { connect } from 'react-redux';
import Login from './Login';
import { login } from '../../actions/session_actions';
import { selectLoginErrors } from '../../reducers/selectors';

const mapStateToProps = state => ({
  errors: selectLoginErrors(state)
});

const mapDispatchToProps = dispatch => ({
  processForm: formUser => dispatch(login(formUser))
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
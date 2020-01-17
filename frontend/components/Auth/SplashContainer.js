import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Splash from './Splash';
import { splash } from '../../actions/session_actions';

const mapStateToProps = state => ({
  errors: {}
});

const mapDispatchToProps = dispatch => ({
  processForm: formUser => dispatch(splash(formUser))
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Splash)
);


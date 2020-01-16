
import { connect } from 'react-redux';
import Background from './Background';
import { selectCurrentUser } from '../../reducers/selectors';
import { withRouter } from 'react-router-dom';
const mapStateToProps = state => ({
  isLoggedIn: Boolean(selectCurrentUser(state))
})

const mapDispatchToProps = dispatch => ({
  openModal: modal => dispatch(openModal(modal))
})

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Background)
);
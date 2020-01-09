import { connect } from 'react-redux';
import Dashboard from './Dashboard';
import { selectCurrentUser } from '../../reducers/selectors'

const mapStateToProps = state => ({
  currentUser: selectCurrentUser(state)
});

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
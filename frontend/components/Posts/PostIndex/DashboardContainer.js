import { connect } from 'react-redux';
import PostIndex from './PostIndex';
import { selectCurrentUser, selectPosts } from '../../../reducers/selectors'
import { fetchPosts } from '../../../actions/posts_actions'
import { fetchUsers } from '../../../actions/users_actions'

const mapStateToProps = state => ({
  currentUser: selectCurrentUser(state),
  users: state.entities.users,
  posts: selectPosts(state).reverse(),
});

const mapDispatchToProps = dispatch => ({
  fetchPosts: filters => dispatch(fetchPosts(filters)),
  fetchUsers: () => dispatch(fetchUsers())
});

export default connect(mapStateToProps, mapDispatchToProps)(PostIndex);
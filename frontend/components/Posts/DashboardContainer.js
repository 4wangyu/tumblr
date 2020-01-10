import { connect } from 'react-redux';
import PostIndex from './PostIndex';
import { selectCurrentUser, selectPosts } from '../../reducers/selectors'
import { fetchPosts } from '../../actions/posts_actions'

const mapStateToProps = state => ({
  currentUser: selectCurrentUser(state),
  posts: selectPosts(state)
});

const mapDispatchToProps = dispatch => ({
  fetchPosts: () => dispatch(fetchPosts())
});

export default connect(mapStateToProps, mapDispatchToProps)(PostIndex);
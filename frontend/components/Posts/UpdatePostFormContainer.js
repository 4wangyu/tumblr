import { connect } from 'react-redux';
import PostForm from './PostForm';
import { selectPost, selectPostErrors } from '../../reducers/selectors'
import { updatePost } from '../../actions/posts_actions'

const mapStateToProps = (state, { match: { params: { postId } } }) => ({
  action: 'PATCH',
  initialPost: selectPost(postId),
  errors: selectPostErrors(state)
});

const mapDispatchToProps = dispatch => ({
  processForm: formPost => dispatch(updatePost(formPost))
});

export default connect(mapStateToProps, mapDispatchToProps)(PostForm);
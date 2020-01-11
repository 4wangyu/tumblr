import { connect } from 'react-redux';
import PostForm from './PostForm';
import { selectPostErrors } from '../../reducers/selectors'
import { createPost } from '../../actions/posts_actions'

const mapStateToProps = state => ({
  action: 'POST',
  initialPost: { title: '', description: '', postType: 'photo', assetFile: undefined, assetUrl: '' },
  errors: selectPostErrors(state)
});

const mapDispatchToProps = dispatch => ({
  processForm: formPost => dispatch(createPost(formPost))
});

export default connect(mapStateToProps, mapDispatchToProps)(PostForm);
import { connect } from 'react-redux';
import VideoForm from './VideoForm';
import { createPost } from '../../../actions/posts_actions';
import { closeModal } from '../../../actions/modal_actions';
import { selectCurrentUser } from '../../../reducers/selectors';

const mapStateToProps = state => ({
  currentUser: selectCurrentUser(state)
});

const mapDispatchToProps = dispatch => ({
  processForm: formPost => dispatch(createPost(formPost)),
  closeModal: () => dispatch(closeModal())
});

export default connect(mapStateToProps, mapDispatchToProps)(VideoForm);
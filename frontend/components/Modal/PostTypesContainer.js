
import { connect } from 'react-redux';
import PostTypes from './PostTypes';
import { openModal } from '../../actions/modal_actions';

const mapStateToProps = state => ({

})

const mapDispatchToProps = dispatch => ({
  openModal: modal => dispatch(openModal(modal))
})

export default connect(mapStateToProps, mapDispatchToProps)(PostTypes);
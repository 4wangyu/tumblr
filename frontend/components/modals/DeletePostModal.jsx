import React from 'react'
import { useDispatch } from 'react-redux';
import { Thunks as Posts } from 'store/posts/actions'
import { Creators as Modal } from 'store/modal/actions';
import { Confirmation, ConfirmationTitle, ConfirmationBtns } from './DeletePostModal.styled'
import Btn from 'styled/base/Btn.styled';

const DeletePostModal = ({ postId }) => {
  const dispatch = useDispatch();
  const destroyPost = postId => dispatch(Posts.destroyPost(postId))
  const closeModal = () => dispatch(Modal.closeModal());

  const handleDestroyPost = e => {
    destroyPost(postId)
      .then(closeModal);
  }

  return (
    <Confirmation>
      <ConfirmationTitle>
        Are you sure you want to delete this post?
      </ConfirmationTitle>
      <ConfirmationBtns>
        <Btn large secondary onClick={closeModal}>Cancel</Btn>
        <Btn large onClick={handleDestroyPost}>OK</Btn>
      </ConfirmationBtns>
    </Confirmation>
  )
};

export default DeletePostModal;

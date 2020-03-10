import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { selectModal } from 'store/modal/selectors';
import { selectCurrentUser } from 'store/session/selectors';
import { Creators } from 'store/modal/actions';

import { ModalBackground, ModalComponentWrapper } from './ModalCore.styled';

import ComposePost from './ComposePostModal';
import PostForm from 'components/post-form/PostForm';
import Confirmation from './ConfirmationModal';

const ModalCore = () => {

  const { modal: { component, options }, currentUser } = useSelector(state => ({
    modal: selectModal(state),
    currentUser: selectCurrentUser(state),
  }));
  const dispatch = useDispatch();
  const closeModal = () => dispatch(Creators.closeModal())

  if (!component) {
    document.body.style.overflow = 'unset';
    return null
  };

  let Component;

  switch (component) {
    case 'ComposePost':
      Component = <ComposePost />;
      break;
    case 'PostForm':
      const { postType, postId } = options;
      if (!postType) return null;
      Component = <PostForm postType={postType} postId={postId} />;
      break;
    case 'Confirmation':
      const { onConfirm, message } = options;
      if (!onConfirm || !message) return null;
      Component = <Confirmation onConfirm={onConfirm} message={message} />;
      break;
    default:
      return null;
  }

  document.body.style.overflow = 'hidden';
  return (
    <ModalBackground onClick={closeModal}>
      <ModalComponentWrapper onClick={e => e.stopPropagation()}>
        {Component}
      </ModalComponentWrapper>
    </ModalBackground>
  );
};

export default ModalCore;
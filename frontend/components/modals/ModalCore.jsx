import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { selectModal } from 'store/modal/selectors';
import { selectCurrentUser } from 'store/session/selectors';
import { Creators } from 'store/modal/actions';

import { ModalBackground, ModalComponentWrapper } from './ModalCore.styled';

import ComposePost from './ComposePostModal';
import PostForm from 'components/post-form/PostForm';
import DeletePost from './DeletePostModal';

const ModalCore = () => {

  const { modal: { component, options }, currentUser } = useSelector(state => ({
    modal: selectModal(state),
    currentUser: selectCurrentUser(state),
  }));
  const dispatch = useDispatch();
  const closeModal = () => dispatch(Creators.closeModal())

  if (!component) return null;

  let Component;

  switch (component) {
    case 'ComposePost':
      Component = <ComposePost />;
      break;
    case 'PostForm':
      const { postType } = options;
      if (!postType) return null;
      Component = <PostForm postType={postType} />;
      break;
    case 'DeletePost':
      const { postId } = options;
      if (!postId) return null;
      Component = <DeletePost postId={postId} />;
      break;
    default:
      return null;
  }

  return (
    <ModalBackground onClick={closeModal}>
      <ModalComponentWrapper onClick={e => e.stopPropagation()}>
        {Component}
      </ModalComponentWrapper>
    </ModalBackground>
  );
};

export default ModalCore;
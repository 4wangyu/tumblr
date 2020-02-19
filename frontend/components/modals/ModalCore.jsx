import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { selectModal } from 'store/modal/selectors';
import { selectCurrentUser } from 'store/session/selectors';
import { Creators } from 'store/modal/actions';

import { ModalBackground, ModalComponentWrapper } from './ModalCore.styled';

import CreatePost from './CreatePostModal';
import ImageGalleryForm from '../post_forms/ImageGalleryForm';
import VideoForm from '../post_forms/VideoForm';

const ModalCore = () => {

  const [modal, currentUser] = useSelector(state => [selectModal(state), selectCurrentUser(state)]);
  const dispatch = useDispatch();
  const closeModal = () => dispatch(Creators.closeModal())

  if (!modal) return null;

  let Component;

  switch (modal) {
    case 'CreatePost':
      Component = <CreatePost />;
      break;
    case 'ImageGalleryForm':
      Component = <ImageGalleryForm />;
      break;
    case 'VideoForm':
      Component = <VideoForm />;
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
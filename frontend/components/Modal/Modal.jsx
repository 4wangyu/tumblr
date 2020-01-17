import React from 'react'
import { ModalBackground, ModalComponentWrapper } from './Modal.styled';
import PostTypesContainer from './PostTypesContainer';
import ImageGalleryFormContainer from '../Posts/ImageGallery/ImageGalleryFormContainer';
import VideoFormContainer from '../Posts/Video/VideoFormContainer';
const Modal = ({ modal, closeModal, currentUser }) => {
  if (!modal) {
    return null;
  }
  let Component;
  switch (modal) {
    case 'PostTypes':
      Component = <PostTypesContainer />;
      break;
    case 'ImageGalleryForm':
      Component = <ImageGalleryFormContainer />;
      break;
    case 'VideoForm':
      Component = <VideoFormContainer />;
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

export default Modal;
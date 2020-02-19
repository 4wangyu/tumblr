import React from 'react'
import { useDispatch } from 'react-redux';
import { Creators as Modal } from 'store/modal/actions';
import {
  faFont as iText,
  faCameraRetro as iPhoto,
  faQuoteLeft as iQuote,
  faVideo as iVideo,
  faLink as iLink,
  faComments as iChat,
  faHeadphones as iAudio
} from '@fortawesome/free-solid-svg-icons';
import { PostBtnSet as BtnSet, PostBtnItem as BtnItem, IconBox, FAIcon, Text } from './CreatePostModal.styled';


const CreatePostModal = () => {

  const dispatch = useDispatch();
  const openModal = modal => dispatch(Modal.openModal(modal));

  return (
    <BtnSet>
      <BtnItem>
        <IconBox postType='text'>
          <FAIcon icon={iText} />
        </IconBox>
        <Text>Text</Text>
      </BtnItem>
      <BtnItem onClick={() => openModal('ImageGalleryForm')}>
        <IconBox postType='photo'>
          <FAIcon icon={iPhoto} />
        </IconBox>
        <Text>Photo</Text>
      </BtnItem>
      <BtnItem>
        <IconBox postType='quote'>
          <FAIcon icon={iQuote} />
        </IconBox>
        <Text>Quote</Text>
      </BtnItem>
      <BtnItem>
        <IconBox postType='link'>
          <FAIcon icon={iLink} />
        </IconBox>
        <Text>Link</Text>
      </BtnItem>
      <BtnItem>
        <IconBox postType='chat'>
          <FAIcon icon={iChat} />
        </IconBox>
        <Text>Chat</Text>
      </BtnItem>
      <BtnItem>
        <IconBox postType='audio'>
          <FAIcon icon={iAudio} />
        </IconBox>
        <Text>Audio</Text>
      </BtnItem>
      <BtnItem onClick={() => openModal('VideoForm')}>
        <IconBox postType='video'>
          <FAIcon icon={iVideo} />
        </IconBox>
        <Text>Video</Text>
      </BtnItem>
    </BtnSet>
  )
}

export default CreatePostModal;
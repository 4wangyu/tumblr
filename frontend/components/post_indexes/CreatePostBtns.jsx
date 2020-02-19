import React from 'react';
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
import { Wrapper, Link, FAIcon, Text } from './CreatePostBtns.styled';

const CreatePostBtns = () => {

  const dispatch = useDispatch();
  const openModal = modal => dispatch(Modal.openModal(modal));

  return (
    <Wrapper>
      <Link>
        <FAIcon icon={iText} />
        <Text>Text</Text>
      </Link>
      <Link onClick={() => openModal('ImageGalleryForm')}>
        <FAIcon icon={iPhoto} postType='photo'/>
        <Text>Photo</Text>
      </Link>
      <Link>
        <FAIcon icon={iQuote} postType='quote' />
        <Text>Quote</Text>
      </Link>
      <Link>
        <FAIcon icon={iLink} postType='link' />
        <Text>Link</Text>
      </Link>
      <Link>
        <FAIcon icon={iChat} postType='chat' />
        <Text>Chat</Text>
      </Link>
      <Link>
        <FAIcon icon={iAudio} postType='audio' />
        <Text>Audio</Text>
      </Link>
      <Link onClick={() => openModal('VideoForm')}>
        <FAIcon icon={iVideo} postType='video'/>
        <Text>Video</Text>
      </Link>
    </Wrapper>
  )
}

export default CreatePostBtns;
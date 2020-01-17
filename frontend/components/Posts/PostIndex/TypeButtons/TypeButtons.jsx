import React from 'react';
import {
  faFont, faCameraRetro as iPhoto, faQuoteLeft, faVideo,
  faLink, faComments, faHeadphones
} from "@fortawesome/free-solid-svg-icons";
import { Wrapper, Link, Icon, Text } from './TypeButtons.styled';


const TypeButtons = ({ currentUser, openModal }) => {

  return (
    <div>
      <Wrapper>
        <Link>
          <Icon icon={faFont} />
          <Text>Text</Text>
        </Link>
        <Link>
          <Icon icon={iPhoto} data-post-type="photo" onClick={() => openModal('ImageGalleryForm')} />
          <Text>Photo</Text>
        </Link>
        <Link>
          <Icon icon={faQuoteLeft} data-post-type="quote" />
          <Text>Quote</Text>
        </Link>
        <Link>
          <Icon icon={faLink} data-post-type="link" />
          <Text>Link</Text>
        </Link>
        <Link>
          <Icon icon={faComments} data-post-type="chat" />
          <Text>Chat</Text>
        </Link>
        <Link>
          <Icon icon={faHeadphones} data-post-type="audio" />
          <Text>Audio</Text>
        </Link>
        <Link>
          <Icon icon={faVideo} data-post-type="video" />
          <Text>Video</Text>
        </Link>
      </Wrapper>
    </div>

  )
}

export default TypeButtons;
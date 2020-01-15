import React from 'react';
import {
  faFont, faCameraRetro, faQuoteLeft, faVideo,
  faLink, faComments, faHeadphones
} from "@fortawesome/free-solid-svg-icons";
import { Wrapper, Link, Icon, Text } from './MasterForm.styled';
import ImageGalleryForm from '../ImageGallery/ImageGalleryForm';


const MasterForm = ({ currentUser, openModal }) => {

  return (
    <div>
      <ImageGalleryForm currentUser={currentUser} />
      <Wrapper>
        <Link>
          <Icon icon={faFont} />
          <Text>Text</Text>
        </Link>
        <Link>
          <Icon icon={faCameraRetro} data-post-type="photo" />
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

export default MasterForm;
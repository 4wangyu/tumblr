import React, { useContext } from 'react';
import { PostContext } from '../Post';
import Audio from './Audio';
import ImageGallery from './ImageGallery';
import Link from './Link';
import Quote from './Quote';
import Text from './Text';
import Video from './Video';

const PostContent = () => {
  const { contentType } = useContext(PostContext);

  const contentTypes = ({
    Audio: <Audio />,
    ImageGallery: <ImageGallery />,
    Link: <Link />,
    Quote: <Quote />,
    Text: <Text />,
    Video: <Video />,
  });

  return (
    <>
      {contentTypes[contentType]}
    </>
  )
}

export default PostContent



import React, { useContext } from 'react';
import { PostContext } from "../Post";
import Audio from './Audio';
import ImageGallery from './ImageGallery';
import Link from './Link';
import Quote from './Quote';
import Text from './Text';
import Video from './Video';

const PostContent = () => {
  const { post } = useContext(PostContext);

  const getContent = post => ({
    Audio: <Audio post={post} />,
    ImageGallery: <ImageGallery post={post} />,
    Link: <Link post={post} />,
    Quote: <Quote post={post} />,
    Text: <Text post={post} />,
    Video: <Video post={post} />,
  });

  return (
    <>
      {getContent(post)[post.contentType]}
    </>
  )
}

export default PostContent



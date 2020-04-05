import React, { useContext } from 'react';
import { PostContext } from "../Post";
import Audio from './Audio';
import ImageGallery from './ImageGallery';
import Link from './Link';
import Quote from './Quote';
import Text from './Text';
import Video from './Video';

const PostContent = () => {
  const { post, size } = useContext(PostContext);

  const getContent = post => ({
    Audio: <Audio post={post} size={size} />,
    ImageGallery: <ImageGallery post={post} size={size} />,
    Link: <Link post={post} size={size} />,
    Quote: <Quote post={post} size={size} />,
    Text: <Text post={post} size={size} />,
    Video: <Video post={post} size={size} />,
  });

  return (
    <>
      {getContent(post)[post.contentType]}
    </>
  )
}

export default PostContent



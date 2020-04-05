import React, { useContext } from 'react';
import { PostContext } from '../../Post';
import { VideoContainer, Video } from './Video.styled';

const VideoContent = () => {
  const { videoAttachment } = useContext(PostContext);

  return (
    <VideoContainer>
      <Video src={videoAttachment.url}>
        Your browser does not support the video tag.
      </Video>
    </VideoContainer>
  )
};

export default VideoContent;
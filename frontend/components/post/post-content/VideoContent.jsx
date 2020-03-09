import React from 'react';
import { CardContent } from 'styled/base/Card.styled';

const VideoContent = ({ post: { caption, videoAttachment } }) => (
  <div>
    <video width="100%" height="240" controls src={videoAttachment.url}>
      Your browser does not support the video tag.
    </video>
    {caption && <CardContent>{caption}</CardContent>}
  </div>
);

export default VideoContent;
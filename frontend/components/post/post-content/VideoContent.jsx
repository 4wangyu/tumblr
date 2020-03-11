import React from 'react';
import { CardContent } from 'styled/base/Card.styled';

const VideoContent = ({ post: { body, videoAttachment } }) => (
  <div>
    <video width="100%" height="240" controls src={videoAttachment.url}>
      Your browser does not support the video tag.
    </video>
    {body && <CardContent>{body}</CardContent>}
  </div>
);

export default VideoContent;
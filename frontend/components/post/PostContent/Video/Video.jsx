import React from 'react';

const VideoContent = ({ post: { videoAttachment } }) => (
  <div>
    <video width="100%" controls src={videoAttachment.url}>
      Your browser does not support the video tag.
    </video>
  </div>
);

export default VideoContent;
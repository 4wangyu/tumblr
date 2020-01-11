import React from 'react';

const VideoPost = ({ post: { caption, videoUrl } }) => (
  <div>
    <video width="320" height="240" controls>
      <source src={videoUrl} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
    {caption && <p>{caption}</p>}
  </div>
);

export default VideoPost;
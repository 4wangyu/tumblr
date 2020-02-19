import React from 'react';

const Audio = ({ post: { track, artist, description, audioUrl, albumArtUrl } }) => (
  <div>
    <strong>{track}</strong> by <strong>{artist}</strong>
    <audio controls>
      <source src={audioUrl} type="audio/mpeg" />
      Your browser does not support the audio tag.
    </audio>
    {albumArtUrl && <img src={albumArtUrl} alt={`${track} - ${artist}`} width="50px" />}
    {description && <p>{description}</p>}
  </div>
);

export default Audio;
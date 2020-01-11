import React from 'react'

const ImageGalleryPost = ({ post: { imageUrls, caption } }) => (
  <div>
    <div>
      {imageUrls.map(url => (
        <div>
          <img src={url} width="70px" />
        </div>
      ))}
    </div>
    {caption && <p>{caption}</p>}
  </div>
)

export default ImageGalleryPost;
import React from 'react'
import { ImageGallery, Username, Image, Caption } from './ImageGalleryPost.styled';
const ImageGalleryPost = ({ username, post: { imageUrls, caption } }) => (
  <ImageGallery>
    <Username>{username}</Username>
    <div>
      {imageUrls.map((url, idx) => (
        <Image src={url} key={idx} />
      ))}
    </div>
    <Caption>{caption}</Caption>
  </ImageGallery>
)

export default ImageGalleryPost;
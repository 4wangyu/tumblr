import React from 'react'
import { Wrapper, Username, Image, Caption } from './ImageGallery.styled';
const ImageGallery = ({ username, post: { imageUrls, caption } }) => (
  <Wrapper>
    <Username>{username}</Username>
    <div>
      {imageUrls.map((url, idx) => (
        <Image src={url} key={idx} />
      ))}
    </div>
    <Caption>{caption}</Caption>
  </Wrapper>
)

export default ImageGallery;
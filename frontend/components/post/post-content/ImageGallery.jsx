import React from 'react'
import { Gallery, Image, Caption } from './ImageGallery.styled';

const ImageGallery = ({ post: { imageUrls, caption } }) => (
  <>
    <Gallery>
      {imageUrls.map((url, idx) => (
        <Image src={url} key={idx} />
      ))}
    </Gallery>
    <Caption>{caption}</Caption>
  </>
)

export default ImageGallery;
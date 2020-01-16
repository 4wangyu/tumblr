import React, { Fragment as F } from 'react'
import { Gallery, Image, Caption } from './ImageGallery.styled';

const ImageGallery = ({ post: { imageUrls, caption } }) => (
  <F>
    <Gallery>
      {imageUrls.map((url, idx) => (
        <Image src={url} key={idx} />
      ))}
    </Gallery>
    <Caption>{caption}</Caption>
  </F>
)

export default ImageGallery;
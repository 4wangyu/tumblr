import React from 'react'
import { Gallery, Image, Caption } from './ImageGalleryContent.styled';

const ImageGalleryContent = ({ post: { imageUrls, caption } }) => (
  <>
    <Gallery>
      {imageUrls.map((url, idx) => (
        <Image src={url} key={idx} />
      ))}
    </Gallery>
    <Caption>{caption}</Caption>
  </>
)

export default ImageGalleryContent;
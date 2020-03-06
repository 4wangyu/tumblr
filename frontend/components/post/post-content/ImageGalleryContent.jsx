import React from 'react'
import { Gallery, Image, Caption } from './ImageGalleryContent.styled';

const ImageGalleryContent = ({ post: { images, caption } }) => (
  <>
    <Gallery>
      {images.map(({ url, filename }, idx) => (
        <Image
          key={idx}
          src={url}
          alt={filename}
        />
      ))}
    </Gallery>
    <Caption>{caption}</Caption>
  </>
)

export default ImageGalleryContent;
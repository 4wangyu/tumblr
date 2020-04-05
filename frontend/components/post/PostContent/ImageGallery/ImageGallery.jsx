import React from 'react'
import { Gallery, Image } from './ImageGallery.styled';

const ImageGallery = ({ post: { imageAttachments, body } }) => (
  <>
    <Gallery>
      {imageAttachments.map(({ url, filename }, idx) => (
        <Image
          key={idx}
          src={url}
          alt={filename}
        />
      ))}
    </Gallery>
  </>
)

export default ImageGallery;
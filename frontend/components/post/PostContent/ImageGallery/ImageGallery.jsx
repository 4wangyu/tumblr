import React from 'react'
import { Gallery, Image, Body } from './ImageGallery.styled';

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
    <Body>{body}</Body>
  </>
)

export default ImageGallery;
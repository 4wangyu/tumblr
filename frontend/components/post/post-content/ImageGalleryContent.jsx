import React from 'react'
import { Gallery, Image, Body } from './ImageGalleryContent.styled';

const ImageGalleryContent = ({ post: { imageAttachments, body } }) => (
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

export default ImageGalleryContent;
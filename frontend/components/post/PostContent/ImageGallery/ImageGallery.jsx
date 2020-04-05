import React, { useContext } from 'react';
import { PostContext } from '../../Post';
import { ImageGalleryContainer, Img } from './ImageGallery.styled';

const ImageGallery = () => {
  const { imageAttachments } = useContext(PostContext);

  return (
    <ImageGalleryContainer>
      {imageAttachments.map(({ url, filename }, idx) => (
        <Img
          key={idx}
          src={url}
          alt={filename}
        />
      ))}
    </ImageGalleryContainer>
  )
}
export default ImageGallery;
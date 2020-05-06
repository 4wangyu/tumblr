import React, { useContext } from 'react';
import { PostContext } from '../../Post';
import { ImageGalleryContainer } from './ImageGallery.styled';
import LazyImage from 'components/atoms/LazyImage';

const ImageGallery = () => {
  const { imageAttachments } = useContext(PostContext);

  return (
    <ImageGalleryContainer>
      {imageAttachments.map(({ url, filename, width, height }) => (
        <LazyImage
          key={url}
          src={url}
          width={width}
          height={height}
          alt={filename}
        />
      ))}
    </ImageGalleryContainer>
  );
};

export default ImageGallery;
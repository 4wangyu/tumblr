import React, { useMemo } from 'react'
import { LazyImageContainer, Gradient, Img } from './LazyImage.styled';
import { LazyImage as LazyLoader } from 'react-lazy-images';

const GRADIENTS = Object.freeze([
  'linear-gradient(60deg, rgba(113,157,182,1) 0%, rgba(62,79,139,1) 100%, rgba(209,222,235,1) 100%)',
  'linear-gradient(60deg, rgba(185,142,169,1) 0%, rgba(11,100,197,1) 96%, rgba(28,92,161,1) 100%)',
  'linear-gradient(119deg, rgba(254,173,170,1) 0%, rgba(255,242,241,1) 100%)',
  'linear-gradient(119deg, rgba(195,195,71,1) 0%, rgba(254,161,154,1) 100%)',
  'linear-gradient(119deg, rgba(202,61,43,1) 0%, rgba(56,147,166,1) 80%, rgba(19,167,197,1) 100%)'
]);

const LazyImage = ({ src, alt, height, width }) => {

  const background = useMemo(() => GRADIENTS[Math.floor(Math.random() * GRADIENTS.length)], [src]);

  return (
    <LazyImageContainer>
      <LazyLoader
        src={src}
        alt={alt}
        height={height}
        width={width}
        placeholder={
          ({ ref }) =>
            <Gradient
              background={background}
              ref={ref}
              height={height}
              width={width}
            />
        }
        actual={
          ({ imageProps }) =>
            <Img {...imageProps} />
        }
      />
    </LazyImageContainer>
  );
};

export default LazyImage;
import styled from 'styled-components';

export const LazyImageContainer = styled.div`
  overflow: hidden;
  position: relative;
`;

export const Gradient = styled.img`
  background: ${P => P.background};
  height: auto;
  max-width: 100%;
  transform: scale(1.1);
`;

export const Img = styled.img`
  height: auto;
  max-width: 100%;
`;
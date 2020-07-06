import styled from 'styled-components';

export const PostImage = styled.img`
  position: absolute;
  top: 0;
  right: 0;
  bottom:0;
  left: 0;
  width: 100vw;
  height: 100vh;
  object-fit: cover;
  object-position: center;
`;

export const PostDetails = styled.div`
 position: absolute;
 top: 5rem;
 right:0;
 padding: 1rem 2rem;
 display: flex;
 align-items: center;
`;

export const PostAbout = styled.div`
  padding: 0 .5rem;
`;

export const PostUsername = styled.strong`
  padding: 0 .5rem;
`;

export const PageContent = styled.div`
  min-width: 100vw;
`;



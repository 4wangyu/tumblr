import styled from 'styled-components';
import α from 'color-alpha';

export const Post = styled.div`
  width: 54rem;
  border-radius: 3px;
  background-color: white;
  color: ${α('black', .65)};
  padding: 15px 0px;
  font-size: 1.5rem;
`;

export const Wrapper = styled(Post)`

`;

export const Username = styled.p`
  padding: 0 20px;
  padding-bottom: 15px;
  font-weight: ${({ theme: T }) => T.font.weight.bold};
`

export const Image = styled.img`
  width: 100%;
`;

export const Caption = styled.p`
  padding: 0 20px;
  padding-top: 15px;
`;
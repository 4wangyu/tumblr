import styled from 'styled-components';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import α from 'color-alpha';

export const PostTypeIndex = styled.div`
  display: flex;
`;

export const PostTypeIndexItem = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  
`

export const IconBox = styled.div`
  margin: 1.4rem;
  width: 10rem;
  height: 10rem;
  border-radius: 10rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: blue;
  transition: transform ease .2s; 
  
  &:hover {
    transform: scale(1.1);
  }

  &[data-post-type="text"] { background-color: #fff;}
  &[data-post-type="photo"] { background-color: #ff492f;}
  &[data-post-type="quote"] { background-color: #ff8a00;}
  &[data-post-type="link"] { background-color: #00cf35;}
  &[data-post-type="chat"] { background-color: #00b8ff;}
  &[data-post-type="audio"] { background-color: #7c5cff;}
  &[data-post-type="video"] { background-color: #ff62ce;}
`

export const FAIcon = styled(FontAwesomeIcon)`
  font-size: 5rem;
  color: ${({ theme: T }) => α(T.colors.midnightBlue, .95)};
`;

export const Text = styled.span`
  color: white;
  text-shadow: 2px 2px 3px ${α('black', .35)};
  font-size: 1.6rem;
  font-weight: ${({ theme: T }) => T.font.weight.regular};
`;
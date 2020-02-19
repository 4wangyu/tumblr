import styled from 'styled-components';
import styledMap from 'styled-map';
import α from 'color-alpha';
// import { font, colors } from 'styled/theme';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export var Wrapper = styled.div`
  height: 10rem;
  width: 54rem;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  background-color: white;
  border-radius: 3px;
  padding: 0 1rem;
`;

export const Link = styled.a`
  cursor: pointer;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  align-content: center;
  background-image: radial-gradient(#dbdbdb, #fff);
  background-size: 1px 100%;
  background-position: 100% 0;
  background-repeat: no-repeat;
  
  &:last-child {background-image: none;}

  svg {transition: transform ease .3s; }
  
  &:hover svg { transform: translateY(-.3rem);}
`;

export const FAIcon = styled(FontAwesomeIcon)`
  font-size: 3.5rem;
  color: ${styledMap('postType', {
  default: α('black', .85),
  text: '#fff',
  photo: '#ff492f',
  quote: '#ff8a00',
  link: '#00cf35',
  chat: '#00b8ff',
  audio: '#7c5cff',
  video: '#ff62ce',
})};
`;

export const Text = styled.span`
  font-size: 1.3rem;
  margin-top: .8rem;
  color: ${α('black', .65)};
`;
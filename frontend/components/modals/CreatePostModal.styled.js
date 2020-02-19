import styled, { css } from 'styled-components';
import styledMap from 'styled-map';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import α from 'color-alpha';
import { font, colors } from 'styled/theme';

const flexCenterHelper = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const PostBtnSet = styled.div`
  display: flex;
`;

export const PostBtnItem = styled.a`
  ${flexCenterHelper}
  flex-direction: column;
`;

export const IconBox = styled.div`
  ${flexCenterHelper}
  margin: 1.4rem;
  width: 10rem;
  height: 10rem;
  border-radius: 10rem;
  transition: transform ease .2s; 
  
  &:hover { transform: scale(1.1); }

  background-color: ${styledMap('postType', {
  default: ' blue',
  text: '#fff',
  photo: '#ff492f',
  quote: '#ff8a00',
  link: '#00cf35',
  chat: '#00b8ff',
  audio: '#7c5cff',
  video: '#ff62ce',
})};
    `

export const FAIcon = styled(FontAwesomeIcon)`
  font-size: 5rem;
  color: ${α(colors.midnightBlue, .95)};
`;

export const Text = styled.span`
  color: white;
  text-shadow: 2px 2px 3px ${α('black', .35)};
  font-size: 1.6rem;
  font-weight: ${font.weight.regular};
`;
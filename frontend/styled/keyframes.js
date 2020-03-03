import { keyframes } from 'styled-components';
import { key as theme } from 'styled-theme';
import α from 'color-alpha';

export const thump = keyframes`
  0% {

  }
  100% {
    transform: scale(1.03) translateY(-.1rem);
    box-shadow: 2px 2px 3px ${α('#404040', .35)};
  }
`;

export const pulse = keyframes`
  0% {
    background-color: ${theme('color.hightlight')};
  }
  50% {
    background-color: #7ad2ff;
  }
  100% {
    background-color: ${theme('color.hightlight')};
  }
`;

export const blurIn = keyframes`
  from {opacity: 0;}
  to {opacity: 1;}
`
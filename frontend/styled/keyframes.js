import { keyframes } from 'styled-components';
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
    transform: scaleY(1.2);
    opacity: 0.8;
  }
  50% {
    transform: scaleY(1);
    opacity: 0.6;
  }
  100% {
    transform: scaleY(1.2);
    opacity: 0.8;
  }
`;
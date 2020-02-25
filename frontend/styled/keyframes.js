import { keyframes } from 'styled-components';

export const thump = keyframes`
  0% {

  }
  100% {
    transform: scale(1.03) translateY(-.1rem);
    box-shadow: 2px 2px 3px ${α('#404040', .35)};
  }
`;
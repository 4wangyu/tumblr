import styled from 'styled-components';
import { key as theme } from 'styled-theme';

export const FollowBtnContainer = styled.div``;

export const Button = styled.a`
  color: ${theme('colors.highlight')};
  display: inline-block;
  font-weight: ${theme('fontWeights.heading')};
 
  :hover {
    text-decoration: underline;
  }
`;
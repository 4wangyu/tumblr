import styled from 'styled-components';
import styledMap from 'styled-map';
import { key as theme } from 'styled-theme';
import { flexCenterCol } from 'styled/helpers';
import α from 'color-alpha';

export const AuthPageContainer = styled.div`
  ${flexCenterCol}
  color: white;
  width: 30rem;
  margin: 0 auto;
  margin-top: 15vh;
  position: relative;
`;

export const Logo = styled.h1`
  text-shadow: 2px 2px 3px ${α('#404040', .15)};
  font-family: ${theme('titleFont')};
  font-weight: ${theme('fontWeights.title')};
  font-size: ${styledMap`
    default: ${theme('fontSizes.title')};
    large: ${theme('fontSizes.titleLg')};
  `};
  margin: .5rem;
`;

export const SubHeading = styled.h2`
  font-size: ${theme('fontSizes.md')};
  font-weight: ${theme('fontWeights.text')};
  line-height: 1.6rem;
  padding: 1rem 3rem;
  text-align: center;
  span {
    display: block;
  }
`;

export const FormGroup = styled.div`
  ${flexCenterCol}
  background-color: ${theme('colors.secondary')};
  width: 100%;
  border-radius: 2px;
  overflow: hidden;
  z-index: 1;
`;


export const ActionLink = styled.a`
  cursor: pointer;
`;
import styled, { css, keyframes } from 'styled-components';
import styledMap from 'styled-map';
import { key as theme } from 'styled-theme';
import { flexCenterCol } from 'styled/helpers';
import α from 'color-alpha';
import Btn from 'styled/base/Btn.styled';

export const AuthForm = styled.div`
  ${flexCenterCol}
  color: white;
  width: 30rem;
  margin: 0 auto;
  margin-top: 25vh;
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
  font-size: 1.4rem;
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
`;

export const InputField = styled.input.attrs(({ name }) => ({
  autoFocus: true,
  placeholder: name.charAt(0).toUpperCase() + name.slice(1)
}))`
  padding: 1.1rem 1.3rem;
  width: inherit;
  color: ${theme('colors.text')};
  &::placeholder {
    color: ${({ theme }) => α(theme.colors.textLight, 0.7)};
  }
  &:not(:last-child) {
    border-bottom: 1px solid ${α('#b3b3b3', .6)};
  }
  &[type='passoword'] { font-size: 2rem; }
  
`;

export const ActionLink = styled.a`
  cursor: pointer;
`;

export const StepSlider = styled.div`
  /* overflow-x: hidden; */
  position: relative;
  width: inherit;
`;

export const StepContainer = styled.div`
  ${flexCenterCol}
  position: absolute;
  z-index: 1;
  font-size: 1.5rem;
  width: 100%;
  ${FormGroup}, ${Btn}, ${ActionLink} { margin: .6rem 0; }
`;

export const ErrorMsg = styled.div`
  align-self: stretch;
  background-color: ${α('#000', .33)};
  border-radius: 3px;
  color: #fff;
  padding: 1.5rem;
  text-align: center;
`;
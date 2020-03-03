import styled, { css } from 'styled-components';
import styledMap from 'styled-map';
import { key as theme } from 'styled-theme';
import { flexCenterCol } from 'styled/helpers';
import α from 'color-alpha';
import { animated } from 'react-spring';
import { thump } from 'styled/keyframes';
export const AuthForm = styled.div`
  ${flexCenterCol}
  width: 30rem;
  margin: 0 auto;
  margin-top: 25vh;
  position: relative;
`;

export const Logo = styled.h1`
  text-shadow: 2px 2px 3px ${α('#404040', .15)};
  font-family: ${theme('titleFont')};
  color: white;
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

export const StepWrapper = styled(animated.div)`
  ${flexCenterCol}
  font-size: 1.5rem;
  width: inherit;
  & > * {
    margin: .6rem 0;
  }
`;

export const FormGroup = styled.div`
  ${flexCenterCol}
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
  &::placeholder {
    color: #b3b3b3;
  }
  border-bottom: 1px solid ${α('#b3b3b3', .6)};

  &:last-child {
    border-bottom: none;
  }
  &[type='passoword'] {
    font-size: 2rem;
  }
`;

export const ActionBtn = styled.button`
  background-color: ${styledMap`
    default: ${theme('colors.highlight')};
    secondary: ${theme('colors.highlightAlt')};
    tertiary: #fff;
    quarternary: ${theme('colors.success')}
  `};
  border: none;
  border-radius: 2px;
  cursor: pointer;
  color: ${styledMap`
    default: #fff;
    tertiary: ${theme('colors.support')};
  `};
  font-weight: ${theme('fontWeights.title')};
  ${props => props.quarternary && css`
    animation: ${thump} .45s ease alternate infinite; 
    margin-top: 3rem;
  `};
  padding: 1.1rem 1.3rem;
  text-align: center;
  text-decoration: none;
  width: 100%;
  box-shadow: 1px 1px 2px ${α('#404040', .35)};
  transition: all .15s ease;
  &:active {
    transform: translateY(.15rem);
    box-shadow: none;
  }
`;

export const ActionLink = styled.a`
  cursor: pointer;
`;



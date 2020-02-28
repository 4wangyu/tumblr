import styled, { css } from 'styled-components';
import styledMap from 'styled-map';
import { key as theme } from 'styled-theme';
import { thump } from 'styled/keyframes';

const Btn = styled.button.attrs(props => ({
  type: props.submit ? 'submit' : 'button'
}))`
  cursor: pointer;
  background-color: ${styledMap`
    default: ${theme('colors.highlight')};
    secondary: ${theme('colors.highlightAlt')};
    tertiary: #fff;
    quarternary: ${theme('colors.success')};
  `};
  border: none;
  border-radius: .3rem;
  &, &:hover {
    color: #fff;
  }
  font-weight: ${theme('fontWeights.heading')};
  padding: ${styledMap`
    default: .8rem 1rem;
    large: 1.1rem 1.3rem;
  `};
  text-align: center;
  text-decoration: none;
  width: ${styledMap`
    default: default;
    large: 100%;
  `};
  ${props => props.quarternary && css`
    animation: ${thump} .45s ease alternate infinite; 
    margin-top: 3rem;
  `};
`;

export default Btn;
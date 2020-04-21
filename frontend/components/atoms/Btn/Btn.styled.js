import styled, { css } from 'styled-components';
import styledMap from 'styled-map';
import { key as theme } from 'styled-theme';
import { thump } from 'styled/keyframes';
import α from 'color-alpha';

export const Btn = styled.button`
  cursor: pointer;
  background-color: ${styledMap('type', {
    default: theme('colors.highlight'),
    secondary: theme('colors.highlightAlt'),
    tertiary: '#fff',
    quarternary: theme('colors.success'),
  })};
  border: none;
  border-radius: .3rem;
  &, &:hover, &:active {
    color: ${P => {
      const color = P.type === 'tertiary' ? '#444' : '#fff';
      return P.disabled ? α(color, .25) : color;
    }};
  }
  font-weight: ${theme('fontWeights.heading')};
  padding: ${styledMap('size', {
    default: '.8rem 1rem',
    large: '1.3rem'
  })};
  text-align: center;
  text-decoration: none;
  width: ${styledMap('size', {
    default: 'default',
    large: '100%'
  })};

  ${p => (p.animate === 'thump') && css`
    animation: ${thump} .45s ease alternate infinite; 
    margin-top: 3rem;
  `};
`;
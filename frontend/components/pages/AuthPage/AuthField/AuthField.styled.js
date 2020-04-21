import styled from 'styled-components';
import { key as theme } from 'styled-theme';
import α from 'color-alpha';

export const InputField = styled.input.attrs(({ name }) => ({
  placeholder: name.charAt(0).toUpperCase() + name.slice(1)
}))`
  color: ${theme('colors.text')};
  padding: 1.1rem 1.3rem;
  width: inherit;

  ::placeholder {
    color: ${({ theme: T }) => α(T.colors.textLight, 0.7)};
  }

  :not(:last-child) {
    border-bottom: 1px solid ${α('#b3b3b3', .6)};
  }

  &[type='passoword'] { 
    font-size: 2rem; 
  }
  
`;
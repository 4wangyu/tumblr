import styled from 'styled-components';
import { key as theme } from 'styled-theme';
export const Toggle = styled.button`
  /* display: flex; */
  height: 1.4rem;
  width: 3.5rem;
  /* padding: .1rem; */
  border: 1px solid ${theme('colors.hotPink')};
  border-radius: 1.5rem;
  /* overflow: hidden; */
  background: ${theme('colors.hotPink')};
  cursor: pointer;
  transition: all 0.15s ease;
  margin-right: 1.5rem;
`;

export const ToggleSwitch = styled.div`
  width: 1.7rem;
  height: 1.7rem;
  border-radius: 50%;
  background-color: #fff;
  margin-top: -0.3rem;
  position: relative;
  justify-self: flex-end;
  transform: ${ ({ theme: { name } }) =>
    name === 'light' ? 'translateX(-0.2rem)' : 'translateX(2rem)'
  };
  transition: inherit;
`;
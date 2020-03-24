import styled from 'styled-components';
import { key as theme } from 'styled-theme';
import { flexCenter } from 'styled/helpers';
import α from 'color-alpha';

export const Toggle = styled.div`
  ${flexCenter}
`;

export const ToggleCheckbox = styled.input.attrs({ type: 'checkbox' })`
  height: 0;
  width: 0;
  visibility: hidden;
`;

export const ToggleLabel = styled.label`
  cursor: pointer;
  text-indent: -9999px;
  width: 4.5rem;
  height: 2.5rem;
  background: ${({ theme }) => α(theme.colors.highlight, .20)};
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10rem;
  position: relative;
  transition: background-color .25s ease;

  &:after {
    content: '';
    background: #fff;
    width: 1.9rem;
    height: 1.9rem;
    border-radius: 50%;
    position: absolute;
    top: 3px;
    left: 3px;
    transition: cubic-bezier(0.68, -0.55, 0.27, 01.55) .3s;
  }

  ${ToggleCheckbox}:checked + & {
    background: ${({ theme }) => α(theme.colors.hotPink, .8)};
  }

  ${ToggleCheckbox}:checked + &:after {
    left: calc(100% - 3px);
    transform: translateX(-100%);
  }
`;

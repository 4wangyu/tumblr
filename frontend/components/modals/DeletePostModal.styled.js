import styled, { keyframes } from 'styled-components';
import { key as theme } from 'styled-theme';
import α from 'color-alpha';
import { flexCenter, flexCenterCol } from 'styled/helpers';
import Btn from 'styled/base/Btn.styled';

export const Confirmation = styled.div`
  ${flexCenterCol};
  width: 35rem;
`;

export const ConfirmationTitle = styled.p`
  text-align: center;
  line-height: 1.6;
  color: #fff;
  font-size: 2.6rem;
  margin-bottom: 1rem;
`;

const pulse = keyframes`
  0% {
    background-color: ${theme('color.hightlight')};
  }
  50% {
    background-color: #7ad2ff;
  }
  100% {
    background-color: ${theme('color.hightlight')};
  }
`;

export const ConfirmationBtns = styled.div`
  ${flexCenter};
  & ${Btn} {
    height: 4.5rem;
    width: 14rem;
    padding: .5rem .7rem;
    &:last-child { 
      animation: ${pulse} 1s ease infinite both;
      margin-left: 1rem; }
  }
`;

import styled from 'styled-components';
import { flexCenter, flexCenterCol } from 'styled/helpers';
import Btn from 'components/atoms/Btn';
import { pulse } from 'styled/keyframes';

export const Confirmation = styled.div`
  ${flexCenterCol};
  width: 35rem;
`;

export const ConfirmationMsg = styled.p`
  text-align: center;
  line-height: 1.6;
  color: #fff;
  font-size: 2.6rem;
  margin-bottom: 1rem;
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

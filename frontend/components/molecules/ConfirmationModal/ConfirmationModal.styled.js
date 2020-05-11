import styled from 'styled-components';
import { flexCenter, flexCenterCol } from 'styled/helpers';
import Btn from 'components/atoms/Btn';
import { pulse } from 'styled/keyframes';

export const ConfirmationModalContainer = styled.div`
  ${flexCenterCol};
  width: 35rem;
`;

export const Message = styled.p`
  color: #fff;
  font-size: 2.6rem;
  line-height: 1.6;
  margin-bottom: 1rem;
  text-align: center;
`;

export const BtnContainer = styled.div`
  ${flexCenter};

  ${Btn} {
    height: 4.5rem;
    padding: .5rem .7rem;
    width: 14rem;
  
    :last-child { 
      animation: ${pulse} 1s ease infinite both;
      margin-left: 1rem; 
    }
  }
`;
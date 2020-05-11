import styled from 'styled-components';
import styledMap from 'styled-map';
import { key as theme } from 'styled-theme';
import α from 'color-alpha';
import { flexCenter, flexCenterCol } from 'styled/helpers';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const BtnIndex = styled.div`
  display: flex;
`;

export const PostBtn = styled.a`
  ${flexCenterCol}
  
  > * {
    transition: transform ease .2s;
  }

  :hover > * {
    transform: scale(1.1);  
  }
`;

export const BtnCoin = styled.div`
  ${flexCenter}
  background-color: ${styledMap`
    default: white;
    bg-color: ${props => props['bg-color']};
  `};
  border-radius: 50%;
  height: 10rem;
  margin: 1.4rem;
  width: 10rem;
`;

export const BtnIcon = styled(FontAwesomeIcon)`
  color: ${theme('colors.primary')};
  font-size: 5rem;
`;

export const BtnText = styled.span`
  color: white;
  font-size: ${theme('fontSizes.semiLg')};
  font-weight: ${theme('fontWeights.text')};
  text-shadow: 2px 2px 3px ${α('black', .35)};
  transition: transform ease .2s;
  
  :hover { 
    transform: scale(1.1); 
  }
`;
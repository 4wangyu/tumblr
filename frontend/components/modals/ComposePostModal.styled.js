import styled from 'styled-components';
import styledMap from 'styled-map';
import { key as theme } from 'styled-theme';
import α from 'color-alpha';
import { flexCenter, flexCenterCol } from 'styled/helpers';
import { IconLg } from 'styled/base/Icon.styled';

export const BtnIndex = styled.div`
  display: flex;
`;

export const PostBtn = styled.a`
  ${flexCenterCol}
`;

export const BtnCoin = styled.div`
  ${flexCenter}
  margin: 1.4rem;
  width: 10rem;
  height: 10rem;
  border-radius: 50%;
  transition: transform ease .2s; 
  
  &:hover { transform: scale(1.1); }

  background-color: ${styledMap`
    default: white;
    bg-color: ${props => props['bg-color']};
  `};
`;


export const BtnIcon = styled(IconLg)`
  color: ${theme('colors.primary')};
`;

export const BtnText = styled.span`
  color: white;
  text-shadow: 2px 2px 3px ${α('black', .35)};
  font-size: ${theme('fontSizes.semiLg')};
  font-weight: ${theme('fontWeights.text')};
`;
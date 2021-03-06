import styled from 'styled-components';
import styledMap from 'styled-map';
import { key as theme } from 'styled-theme';
import { flexCenter, flexCenterCol } from 'styled/helpers';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Card } from 'styled/base/Card.styled';

export const ComposePostContainer = styled.div`
  margin-bottom: 2rem;
  position: relative;
`;

export const AvatarContainer = styled.div`
  height: 100%;
  left: -8.5rem;
  position: absolute;
`;

export const AvatarImg = styled.img`
  border-radius: 3px;
  height: 6.4rem;
  margin-right: 2rem;
  position: sticky;
  top: 1.5rem;
  width: 6.4rem; 
`;

export const MenuCellList = styled(Card)`
  ${flexCenter};
  height: 10rem;
  justify-content: space-evenly;
  padding: 0 1rem;
  font-weight: ${theme('fontWeights.subHeading')};
`;

export const MenuCellItem = styled.a`
  ${flexCenterCol};
  cursor: pointer;
  justify-content: space-evenly;
  padding: 0 1rem;
  width: 100%;

  svg {
    transition: transform ease .3s; 
  }

  :hover svg { 
    transform: translateY(-.3rem);
  }
`;

export const CellIcon = styled(FontAwesomeIcon).attrs(props => ({
  icon: props.icon
}))`
  color: ${styledMap`
    default: ${theme('colors.text')};
    color: ${props => props.color};
  `};
  font-size: 3.5rem;
`;

export const CellTitle = styled.span`
  color: ${theme('colors.textLight')};
  font-size: 1.3rem;
  margin-top: .8rem;
`;
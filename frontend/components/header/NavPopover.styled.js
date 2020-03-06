import styled from 'styled-components';
import { key as theme } from 'styled-theme';
import { Link } from 'react-router-dom';
import { IconSm } from 'styled/base/Icon.styled';
import { blurInFromAbove } from 'styled/keyframes';

export const Popover = styled.div`
  animation: ${blurInFromAbove} .2s;
  width: 24rem;
  color: ${theme('colors.textLight')};
  font-weight: ${theme('fontWeights.subHeading')};
  border-radius: 3px;
  overflow: hidden;
  box-shadow: 0 5px 10px 0 rgba(0,0,0,0.1);
  position: absolute;
  top: 3.7rem;
  right: 0;
  z-index: 8;
`;

export const PopoverSubsection = styled.div`
`;

// -------------------- Subsection Header
export const PopoverHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  background-color: ${theme('colors.tertiary')};
  border-bottom: 1px solid ${theme('colors.border')};
  font-size: 1.2rem;
  font-weight: ${theme('fontWeights.heading')};
  padding: .8rem 1rem;
  padding-right: 2rem;
`;

export const HeaderText = styled.div`
  text-transform: uppercase;
`;

export const HeaderBtn = styled.button`
  &, &:hover {
    color: ${theme('colors.quaternary')};
  }
 border: none;
 background-color:transparent;
`;

// -------------------- Subsection Menu
export const PopoverMenu = styled.ul`
  background-color: ${theme('colors.secondary')};
  padding: 3px 0;
`;

export const MenuItem = styled.li``;

export const MenuItemLink = styled(Link)`
  display: grid;
  grid-column-gap: 1rem;
  align-items: end;
  justify-content: stretch;
  padding: 1rem;
  padding-right: 2rem;

  &:hover {
    background-color: ${theme('colors.highlightHover')};
  }
`;
export const AccountPopoverMenu = styled(PopoverMenu)`
  ${MenuItemLink} {
    grid-template-columns: minmax(min-content, 1.6rem) auto min-content;
  }
`;



export const MenuItemIcon = styled(IconSm)`
  font-size: 1.4rem;
`;

export const MenuItemAvatar = styled.img`
  width: 3.7rem;
  height: 3.7rem;
  border-radius: 3px;
`;

export const MenuItemText = styled.span`
  font-size: ${theme('fontSizes.md')};
`;

export const ThumblrPopoverMenu = styled(PopoverMenu)`
  ${MenuItemLink} {
    grid-template-columns: auto min-content;
    padding-left: 5.7rem;
  }
  ${MenuItemLink}.avatar {
    grid-template-columns: min-content auto min-content;
    padding-left: 1rem;
  }
`;

export const MenuItemStat = styled.span`
  font-size: 1.2rem;
  color: ${theme('colors.quaternary')};
  font-weight: ${theme('fontWeights.text')};
`;







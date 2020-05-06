import styled from 'styled-components';
import { key as theme } from 'styled-theme';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { flexCol } from 'styled/helpers';

export const AccountMenu = styled.div`
  background-color: ${theme('colors.secondary')};
  border-radius: 3px;
  color: ${theme('colors.textLight')};
  font-weight: ${theme('fontWeights.subHeading')};
  overflow: hidden;
`;

export const MenuSection = styled.div``;


export const MenuHeader = styled.div`
  background-color: ${theme('colors.tertiary')};
  display: flex;
  font-size: ${theme('fontSizes.sm')};
  justify-content: space-between;
  padding: .8rem 1rem;
  padding-right: 2rem;
`;

export const HeaderText = styled.div`
  text-transform: capitalize;
`;

export const HeaderBtn = styled.button`
 background-color:transparent;
 border: none;
`;

export const MenuList = styled.ul`
  list-style-type: none;
`;

export const MenuItem = styled.li``;

export const ItemBtn = styled.a`
  align-items: center;
  display: grid;
  font-size: ${theme('fontSizes.md')};
  grid-column-gap: 1rem;
  grid-template-columns: 2rem auto min-content;
  justify-content: stretch;
  padding: 1rem;
  padding-right: 2rem;

  :hover {
    background-color: ${theme('colors.highlightAlt')}
  }
`;

export const ItemLink = styled(ItemBtn).attrs({ as: Link })`
`;

export const ItemIcon = styled(FontAwesomeIcon)`
  font-size: 1.9rem;
`;

export const ItemText = styled.span`
  color: ${theme('colors.text')};
  flex-grow: 1;
  text-transform: capitalize;
`;

export const ItemStat = styled.span``;

export const MenuSubSection = styled.div`
  padding: 0 2rem 1rem 5rem;

  ${ItemLink} {
    padding: .5rem;
    grid-template-columns: auto min-content;
  }

  ${ItemText} {
    font-size: ${theme('fontSizes.sm')};
  }
`;

export const Thumblr = styled(ItemLink)`
  align-items: center;
  display: grid;
  grid-column-gap: 1rem;
  grid-template-columns: min-content auto;
  justify-content: stretch;
  padding: 1.2rem 1rem;
  padding-right: 3rem;
  position: relative;
`;

export const ThumblrDetails = styled.div`
  /* ${flexCol} */
  flex-grow: 1;
  font-size: ${theme('fontSizes.sm')};
  margin-left: 0 !important;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const ThumblrUsername = styled.span`
  color: ${theme('colors.text')};
  font-weight: ${theme('fontWeights.heading')};
  overflow-wrap: break-word;
`;

export const ThumblrTitle = styled.span`
  font-weight: ${theme('fontWeights.text')};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
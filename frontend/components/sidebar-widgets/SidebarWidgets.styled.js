import styled from 'styled-components';
import styledMap from 'styled-map';
import α from 'color-alpha';
import { key as theme } from 'styled-theme';
import { flexCenter, flexCenterCol } from 'styled/helpers';
import { PlusIcon, TimesIcon } from 'styled/base/Icon.styled';
import { Card, CardContent } from 'styled/base/Card.styled';
export const SidebarWidget = styled.div`
  width: 32rem;
  margin-top: 2rem;
  color: #fff;
`;

export const SidebarHeader = styled.h2`
  padding: 0 1rem .4rem 1rem;
  font-size: ${theme('fontSizes.lg')};
  font-weight: ${theme('fontWeights.heading')};
  border-bottom: 2px solid ${α('#fff', .13)};
`;

export const SidebarContent = styled.div`
  padding: ${styledMap`
    default: 0;
    padding: 0 .8rem;
  `};
`;

export const SidebarBlog = styled.div`
    display: grid;
    grid-column-gap: 1rem;
    align-items: center;
    justify-content: stretch;
    grid-template-columns: min-content auto min-content;
    position: relative;
    padding: 1rem .8rem;
`;

export const RemoveBlogIcon = styled(TimesIcon)`
  font-size: 1.3rem;
  position: absolute;
  right: -1.5rem;
  bottom: 2.1rem;
  color: transparent;
  cursor: pointer;
`;

export const SidebarBlogItem = styled(SidebarBlog).attrs({ as: 'li' })`
  &:hover {
    background-color: ${α('#fff', .1)};
    ${RemoveBlogIcon} {
      color: ${α('#fff', .1)};
    }

    ${RemoveBlogIcon}:hover {
      color: ${α('#fff', .25)};
    }
  }
  border-bottom: 1px solid ${α('#fff', .25)};
  &:last-child {
    border-bottom: none;
  }
`;

export const SidebarBlogList = styled.ul`

`;

export const BlogAvatar = styled.img`
  border-radius: 3px;
  width: 3.7rem;
  height: 3.7rem;

`;

export const BlogHeader = styled.h3`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: start;
`;

export const BlogHeaderUsername = styled.span`
  font-size: ${theme('fontSizes.md')};
  font-weight: ${theme('fontWeights.heading')};
`;

export const BlogHeaderTitle = styled.span`
  font-size: ${theme('fontSizes.sm')};
  font-weight: ${theme('fontWeights.text')};
`;

export const AddBlogBtn = styled.button`
  ${flexCenter};
  border-radius: 3px;
  border: none;
  background-color: ${α('#fff', .25)};
  color: ${theme('colors.primary')};
  &:hover {
    background-color: ${theme('colors.highlight')};
    color: #fff;
  }
  height: 2.4rem;
  width: 2.4rem;
`;

export const AddBlogIcon = styled(PlusIcon)`
  font-size: 1.5rem;
`;

export const SidebarCard = styled(Card)`
  overflow: hidden;
`;

export const SidebarCardImg = styled.img`
  width: 100%;
`;

export const SidebarCardFooter = styled(CardContent)`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  color: ${theme('colors.textLight')};
  font-weight: ${theme('fontWeights.heading')};
`;

export const FooterNotes = styled.span`

`;

export const FooterIcons = styled.span`
  & > * {
    margin-left: 1rem;
  }
`;



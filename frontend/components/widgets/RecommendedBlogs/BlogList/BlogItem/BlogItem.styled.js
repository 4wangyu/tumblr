import styled from 'styled-components';
import α from 'color-alpha';
import { key as theme } from 'styled-theme';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

export const TimesIcon = styled(FontAwesomeIcon).attrs({
  icon: faTimes
})`
  bottom: 2.1rem;
  color: transparent;
  cursor: pointer;
  font-size: 1.3rem;
  position: absolute;
  right: -1.5rem;

 :hover {
    color: ${α('#fff', .25)};
  }
`;

export const BlogItemContainer = styled.li`
  align-items: center;
  display: grid;
  grid-column-gap: 1rem;
  grid-template-columns: min-content auto min-content;
  justify-content: stretch;
  padding: 1rem .8rem;
  position: relative;

  :hover {
    background-color: ${α('#fff', .1)};

    ${TimesIcon} {
      color: ${α('#fff', .1)};
    }

    ${TimesIcon}:hover {
      color: ${α('#fff', .25)};
    }
  }

  :last-child {
    border-bottom: none;
  }
`;

export const Avatar = styled.img`
  border-radius: 3px;
  height: 3.7rem;
  width: 3.7rem;
`;

export const HeaderContainer = styled.div`
  align-items: start;
  display: flex;
  flex-direction: column;
  justify-content: start;
`;

export const HeaderUsername = styled.span`
  font-size: ${theme('fontSizes.md')};
  font-weight: ${theme('fontWeights.heading')};
`;

export const HeaderTitle = styled.span`
  font-size: ${theme('fontSizes.sm')};
  font-weight: ${theme('fontWeights.text')};
`;

export const FollowBtn = styled.a`
  color: ${theme('colors.highlight')};
  font-weight: ${theme('fontWeights.heading')};

  :hover {
    text-decoration: underline;
  } 
`;
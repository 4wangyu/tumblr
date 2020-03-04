import styled from 'styled-components';
import styledMap from 'styled-map';
import α from 'color-alpha';
import { key as theme } from 'styled-theme';
import { flexCenter, flexCenterCol } from 'styled/helpers';
import { IconMd, ToTopIcon } from 'styled/base/Icon.styled';
import { blurIn } from 'styled/keyframes';
import Card from 'styled/base/Card.styled';

export const FeedContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const FeedCol = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const FeedColRow = styled.div`
  display: flex;
  margin: 2rem;
`;

export const PostBlogImgCube = styled.img.attrs(P => ({
  src: P.avatarUrl || 'https://assets.tumblr.com/images/default_avatar/cone_open_128.png'
}))`
  border-radius: 3px;
  height: 6.4rem;
  margin-right: 2rem;
  position: sticky;
  top: 1.5rem;
  width: 6.4rem; 
`;

export const CardBar = styled(Card)`
  height: 10rem;
  ${flexCenter};
  justify-content: space-evenly;
  padding: 0 1rem;
  font-weight: ${theme('fontWeights.subHeading')};
`;

export const CardBarCell = styled.a`
  background-image: radial-gradient(
    ${α('#dbdbdb', .65)}, 
    ${({ theme }) => α(theme.colors.secondary, .65)}
  );
  background-size: 1px 100%;
  background-position: 100% 0;
  background-repeat: no-repeat;
  cursor: pointer;
  width: 100%;
  ${flexCenterCol};
  justify-content: space-evenly;
  padding: 0 1rem;

  &:last-child {background-image: none;}
  svg {transition: transform ease .3s; }
  &:hover svg { transform: translateY(-.3rem);}
`;

export const CellIcon = styled(IconMd).attrs(props => ({
  icon: props.icon
}))`
  color: ${styledMap`
    default: inherit;
    color: ${props => props.color};
  `};
`;

export const CellTitle = styled.span`
  color: ${theme('colors.textLight')};
  font-size: 1.3rem;
  margin-top: .8rem;
`;

export const ScrollToTopIcon = styled(ToTopIcon)`
  cursor: pointer;
  color: ${α('#fff', .85)};
  position: fixed;
  bottom: 2.5rem;
  right: 2.5rem;
  animation: .2s ${blurIn} ease-in-out;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 5px 10px 0px;
`;

import styled, { css } from 'styled-components';
import { key as theme } from 'styled-theme';
import α from 'color-alpha';

export const LinkContainer = styled.a.attrs({
  target: '_blank', rel: "noopener noreferrer"
})`
  background-color: ${theme('colors.tertiary')};
  display: flex;
  flex-direction: column;
  font-weight: ${theme('fontWeights.text')};
  position: relative;
`;
export const ThumbnailBox = styled.div`
  position: relative;
  &:after{
    background-image: linear-gradient(rgba(0,0,0,.439216),transparent 50%);
    content: "";
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
`;
export const ThumbnailImg = styled.img`
  display: block;
  object-fit: cover;
  max-height: 40rem;
  width: 100%;
`;

export const HostName = styled.a.attrs({ target: '_blank' })`
  z-index: 1;
  font-size: ${theme('fontSizes.md')};
  font-weight: ${theme('fontWeights.heading')};
  ${props => props.imageCaption ? css`
    position: absolute;
    top: 2rem;
    left: 2rem;
    &, &:hover {
      color: #fff;
    }
  ` : css`
    position: relative;
    &, &:hover, &:active {
      color: ${({ theme }) => α(theme.colors.text, .65)};
    }
  `};
  
`;

export const LinkInfo = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem;
  & > *:not(:last-child) {
    padding-bottom: 1rem;
  };
`;

const LinkText = styled.span`
  color: ${({ theme }) => α(theme.colors.text, .65)};
`;

export const TitleText = styled(LinkText)`
  line-height: 1.4;
  font-size: 2.4rem;
  font-weight: ${theme('fontWeights.title')};
  display: relative;
  &::after {
    content: ' \f105';
    font-family: 'Font Awesome 5 Free';
  }
`;

export const DescriptionText = styled(LinkText)`
  line-height: 1.6;
  font-size: ${theme('fontSizes.sm')};
`;
import styled from 'styled-components';
import { key as theme } from 'styled-theme';
import { IconSm } from 'styled/base/Icon.styled.js'
import { flexCenter } from 'styled/helpers';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

export const FooterWrapper = styled.footer`
  ${flexCenter};
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;

  background-color: ${theme('colors.emerald')};
  box-shadow: inset 0 3px 0 rgba(0,0,0,.1);
  color: #fff;
  font-size: ${theme('fontSizes.md')};
  font-weight: ${theme('fontWeights.text')};
  height: 4.5rem;
  width: 100vw;

  & > *:not(:last-child) {
    margin-right: 1rem;
  }
`;

export const FooterLink = styled.a.attrs({
  target: '_blank', rel: "noopener noreferrer"
})`
 ${flexCenter};
`
const FooterIcon = styled(IconSm)`
  transition: transform .2s ease;
  &:hover {
    transform: scale(1.1);
  }
`;
export const GithubIcon = styled(FooterIcon).attrs({
  icon: faGithub
})``;

export const LinkedinIcon = styled(FooterIcon).attrs({
  icon: faLinkedin
})``;
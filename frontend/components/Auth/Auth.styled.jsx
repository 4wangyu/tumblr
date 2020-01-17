import styled, { css, keyframes } from 'styled-components';
import α from 'color-alpha';
import { animated } from 'react-spring';

const thump = keyframes`
  0% {

  }
  100% {
    transform: scale(1.03) translateY(-.1rem);
    box-shadow: 2px 2px 3px ${α('#404040', .35)};
  }
`;

const flexColumnHelper = css`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const AuthForm = styled.div`
  ${flexColumnHelper}
  width: 30rem;
  margin: 0 auto;
  margin-top: 25vh;
  position: relative;
  &:after {
    content: "";
    display: block;
    clear: both;
  }
`;

export const Logo = styled.h1`
  text-shadow: 2px 2px 3px ${α('#404040', .15)};
  font-family: ${({ theme: T }) => T.font.family.title};
  color: white;
  font-weight: ${({ theme: T }) => T.font.weight.bold};
  font-size: ${P => P.large ? '6rem' : '4rem'};
  margin: .5rem;
`;

export const SubHeading = styled.h2`
  font-size: 1.4rem;
  font-weight: ${({ theme: T }) => T.font.weight.regular};
  line-height: 1.6rem;
  padding: 1rem 3rem;
  text-align: center;
  span {
    display: block;
  }
`


export const StepWrapper = styled(animated.div)`
  ${flexColumnHelper}
  font-size: 1.5rem;
  width: inherit;
  & > * {
    margin: .6rem 0;
  }
`;




export const FormGroup = styled.div`
  ${flexColumnHelper}
  width: 100%;
  border-radius: 2px;
  overflow: hidden;
`;

export const InputField = styled.input.attrs(({ name }) => ({
  autoFocus: true,
  placeholder: name.charAt(0).toUpperCase() + name.slice(1)
}))`
  padding: 1.1rem 1.3rem;
  width: inherit;
  &::placeholder {
    color: #b3b3b3;
  }
  border-bottom: 1px solid ${α('#b3b3b3', .6)};

  &:last-child {
    border-bottom: none;
  }
  &[type='passoword'] {
    font-size: 2rem;
  }
`;


// const ActionHelper = css`

//    padding: 1.1rem 1.3rem;
// `;

export const ActionBtn = styled.button`
  background-color: ${P => {
    if (P.secondary) {
      return '#9da6af';
    } else if (P.tertiary) {
      return 'white';
    } else if (P.quarternary) {
      return P.theme.colors.emerald;
    } else {
      return P.theme.colors.dodgerBlue;
    }
  }};
  border: none;
  border-radius: 2px;
  cursor: pointer;
  color: ${P => P.tertiary ? '#444' : 'white'};
  font-weight: ${({ theme: T }) => T.font.weight.medium};
  ${P => P.quarternary && css`animation: ${thump} .45s ease alternate infinite; margin-top: 3rem;`};
  padding: 1.1rem 1.3rem;
  text-align: center;
  text-decoration: none;
  width: 100%;
  box-shadow: 1px 1px 2px ${α('#404040', .35)};
  transition: all .15s ease;
  &:active {
    transform: translateY(.15rem);
    box-shadow: none;
  }
`;


export const ActionLink = styled.a`
  cursor: pointer;
`;




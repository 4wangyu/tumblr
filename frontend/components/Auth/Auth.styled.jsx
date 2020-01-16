import styled, { css } from 'styled-components';
import α from 'color-alpha';
import { animated } from "react-spring";

const flexColumnHelper = css`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const AuthForm = styled.div`
  ${flexColumnHelper}
  width: 30rem;
  margin: 0 auto;
  margin-top: 5rem;
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

export const InputField = styled.input`
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
    } else {
      return P.theme.colors.dodgerBlue;
    }
  }};
  border: none;
  border-radius: 2px;
  cursor: pointer;
  color: ${P => P.tertiary ? '#444' : 'white'};
  font-weight: ${({ theme: T }) => T.font.weight.medium};
  padding: 1.1rem 1.3rem;
  text-align: center;
  text-decoration: none;
  width: 100%;
`;


export const ActionLink = styled.a`
  cursor: pointer;
`;




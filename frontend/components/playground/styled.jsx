import styled from 'styled-components';
import α from 'color-alpha';

export const Btn = styled.button`
  cursor: pointer;
  padding: 8px 13px;
  background-color: white;
  border: none;
  font-weight: ${({ theme: T }) => T.font.weight.medium};
  font-size: 1.5rem;
  border-radius: 2px;
`;

export const PrimaryBtn = styled(Btn)`
  width: 30rem;
  padding: 12px 5px; 
  color: white;
  background-color: ${({ theme: T }) => T.colors.dodgerBlue};
`

export const Background = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: url(${P => P.src});
  background-color: rgba(0,0,0,0.1);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-blend-mode: darken;
  padding: 10px 25px;
`;

export const NavBar = styled.nav`
  display: flex;
  align-items: center;
  & > div {
    display: flex;
    align-items: center;
    &:nth-child(2) {
      margin-left: auto;
    }
  }
`;


export const Logo = styled.span`
  text-shadow: 2px 2px 3px ${α('#404040', .15)};;
  font-family: ${({ theme: T }) => T.font.family.title};
  color: white;
  font-weight: ${({ theme: T }) => T.font.weight.bold};
  font-size: ${P => P.large ? '6rem' : '4rem'};
`;

export const SearchBar = styled.form`
  position: relative;
  margin-left: 2rem;
  width: 45rem;
  font-size: 1.5rem;
  font-weight: ${({ theme: T }) => T.font.weight.medium};
  &::before {
    content: '\f002';
    font-family: 'Font Awesome 5 Free';
    position: absolute;
    left: 1rem;
    top: 0.7rem;
    font-size: 1.7rem;
    color: ${α('white', .65)};
    font-weight: 600;
  }
  &:hover {
    &::before {
      color: ${α('black', .65)};
    }
  }
`;

const SearchBarInput = styled.input`
  border: none;
  border-radius: 3px;
  background-color: ${α('white', .25)};
  outline: none;
  display: inline-block;
  width: 100%;
  height: 100%;
  padding: 7px 15px 7px 35px;
  
  &::placeholder {
    color: ${α('white', .65)};
  }

  &:hover {
    background-color: white;
    &::placeholder {
      color: ${α('black', .65)};
      background-color: white;
    }
  }
`;

SearchBar.Input = SearchBarInput

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`

const FormContainer = styled.div`
  margin-top: 15rem;
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
`

const FormInput = styled.input`
  margin-top: 3rem;
  margin-bottom: 1rem;
  font-size: 1.5rem;
  border: none;
  border-radius: 2px;
  width: 30rem;
  padding: 12px 5px; 
  padding-left: 2rem;
  background-color: white;
  &::placeholder {
    color: #b3b3b3;
  }
`

Form.Container = FormContainer;
Form.Input = FormInput;

export const Footer = styled.footer`

`;



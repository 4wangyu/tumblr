import styled from 'styled-components';
import α from 'color-alpha';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export var Wrapper = styled.div`
  height: 10rem;
  width: 54rem;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  background-color: white;
  border-radius: 3px;
  padding: 0 1rem;
`;

export var Link = styled.a`
  cursor: pointer;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  align-content: center;
  background-image: radial-gradient(#dbdbdb, #fff);
  background-size: 1px 100%;
  background-position: 100% 0;
  background-repeat: no-repeat;
  &:last-child {
    background-image: none;
  }

  svg {
    transition: transform ease .3s; 
  }
  
  &:hover svg {
    transform: translateY(-.3rem);
  }
`;

export var Icon = styled(FontAwesomeIcon)`
  font-size: 3.5rem;
  color: ${α('black', .85)};
  
  &[data-post-type="photo"] { color: #ff492f;}
  &[data-post-type="quote"] { color: #ff8a00;}
  &[data-post-type="link"] { color: #00cf35;}
  &[data-post-type="chat"] { color: #00b8ff;}
  &[data-post-type="audio"] { color: #7c5cff;}
  &[data-post-type="video"] { color: #ff62ce;}
`;

export var Text = styled.span`
  font-size: 1.3rem;
  margin-top: .8rem;
  color: ${α('black', .65)};
`;

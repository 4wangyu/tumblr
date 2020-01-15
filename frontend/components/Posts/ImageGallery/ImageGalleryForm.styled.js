import styled from 'styled-components';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import α from 'color-alpha';

export const Card = styled.div`
  /* position: absolute; */
  width: 54rem;
  border-radius: 3px;
  background-color: white;
  color: black;
  font-size: 1.5rem;
  font-weight: ${({ theme: T }) => T.font.weight.semiBold};
`


export const Header = styled.p`
  padding: 1.5rem 2rem;
`;

export const Form = styled.form`

`;


export const UploadBox = styled.div`
  border-width: 2px 0;
  border-style: dashed;
  border-color: #cfcfcf;
  background-color: #f2f2f2;
  color: #989898;
  display:flex;
`;

const InputBox = styled.div`
  
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: space-between; */
  width: 100%;
  height: 19.6rem;
  padding-top: 5rem;
  padding-bottom: 3rem;

  &:first-child {
    border-right: 1px solid #cfcfcf;
  }

  &.small {
    padding: 2rem 0;
    height: 0;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }
`;


export const NativeFileBox = styled(InputBox)`

`;

export const UrlBox = styled(InputBox)`
  
`;



export var Icon = styled(FontAwesomeIcon)`
  font-size: ${P => P.smallSize ? '2rem' : '5rem'};
  ${P => P.hidden && 'display: none;'}
`;

export var Text = styled.span`
  padding: 1rem;
  font-size: 1.4rem;
  font-weight: ${({ theme: T }) => T.font.weight.regular};
`;


export const InvisibleFileInput = styled.input.attrs({ type: 'file' })`
  cursor: pointer;
  width: 100%;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  opacity: 0;
`;

export const UrlInput = styled.input.attrs({ type: 'url' })`

`

// ------------------------- Preview
export const PreviewBox = styled.div`
  padding: 0 2rem;

`;

export const PreviewImg = styled.img.attrs({ alt: 'image preview' })`
  height: 15rem;
`;

// ------------------------- Content

export const ContentBox = styled.div`
  padding: 0 2rem;
  padding-top: 1.5rem;
  border-bottom: 1px solid ${α('#cfcfcf', .55)};
`;

export const CaptionInput = styled.textarea`
  width: 50rem;
  min-height: 8rem;
  border: 1px solid orangered;
  padding: 1rem;
`;

// ------------------------- Footer

export const Footer = styled.div`
  padding: 1.5rem 2rem;
  display: flex;
  justify-content: space-between;
`;

const Btn = styled.button`
  color: ${P => P.disabled ? α('white', .55) : 'white'};
  border: none;
  border-radius: 3px;
  padding: 8px 10px;
  font-weight: ${({ theme: T }) => T.font.weight.bold};
`;

export const CloseBtn = styled(Btn)`
  background-color: #cfcfcf;
`;

export const PostBtn = styled(Btn)`
  background-color: ${({ theme: T }) => T.colors.dodgerBlue};
`;
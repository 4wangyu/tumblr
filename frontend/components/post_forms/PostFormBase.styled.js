import styled from 'styled-components';
import styledMap from 'styled-map';
import { font, colors } from 'styled/theme';
import α from 'color-alpha';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Card = styled.div`
  /* position: absolute; */
  width: 54rem;
  border-radius: 3px;
  background-color: white;
  color: black;
  font-size: 1.5rem;
  font-weight: ${font.weight.semiBold};
`;

export const Header = styled.p`
  padding: 1.5rem 2rem;
`;

export const Form = styled.form``;

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

  &:first-child {border-right: 1px solid #cfcfcf;}

  &.small {
    padding: 2rem 0;
    height: 0;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }
`;

// <UrlBox className={inPreview && 'small'}>
// <Icon icon={faGlobe} smallSize={inPreview} />
// <Text>{inPreview ? 'Add Another' : 'Add photo from web'}</Text>
// </UrlBox>

export const NativeFileBox = styled(InputBox)``;

export const UrlBox = styled(InputBox)``;

export const FAIcon = styled(FontAwesomeIcon)`
  font-size: ${styledMap`
    default: 5rem;
    small: 2rem;
  `};
  display: ${styledMap`
    default: inline-block;
    hidden: none;
  `};
`;

export const Text = styled.span`
  padding: 1rem;
  font-size: 1.4rem;
  font-weight: ${font.weight.regular};
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

export const UrlInput = styled.input.attrs({ type: 'url' })``;

// ------------------------- Preview
export const PreviewBox = styled.div`
  overflow: hidden;
`;
export const Preview = styled.div`
  display: block;
  position: relative;
  margin: ${styledMap`
    default: 1.7rem;
    photo: 1.7rem;
    video: 0;
  `};
  &:hover {
    > * {
      opacity: 1;
    }
  }
`;

export const RemoveBtn = styled.div`
  width: 2.3rem;
  height: 2.3rem;
  display: flex;
  opacity: 0;
  transition: opacity ease .1s; 
  align-items: center;
  justify-content: center;
  background-color: ${colors.redOrange};
  border-radius: 10rem;
  position: absolute;
  right: -1rem;
  top: -1rem;
`;

export const RemoveIcon = styled(FAIcon)`
  color: white;
  font-size: 1.5rem;
`;

export const PreviewImg = styled.img.attrs({ alt: 'image preview' })`
  height: 15rem;
  max-width: 100%;
`;

export const PreviewVideo = styled.video.attrs({ controls: true })`
  display: block;
  width: 100%;
`;

export const VideoSrc = styled.source.attrs({ type: 'video/mp4' })``;


// ------------------------- Content

export const ContentBox = styled.div`
  padding: 0 2rem;
  padding-top: 1.5rem;
  border-bottom: 1px solid ${α('#cfcfcf', .55)};
`;

export const CaptionInput = styled.textarea`
  width: 50rem;
  min-height: 8rem;
  padding: .5rem;
`;

// ------------------------- Footer

export const Footer = styled.div`
  padding: 1.5rem 2rem;
  display: flex;
  justify-content: space-between;
`;

const Btn = styled.button`
  color: ${styledMap`
    default: #fff;
    disabled: ${α('#fff', .55)};
  `};
  border: none;
  border-radius: 3px;
  padding: 8px 10px;
  font-weight: ${font.weight.bold};
`;

export const CloseBtn = styled(Btn)`
  background-color: #cfcfcf;
`;

export const PostBtn = styled(Btn).attrs({ type: 'submit' })`
  background-color: ${colors.dodgerBlue};
`;
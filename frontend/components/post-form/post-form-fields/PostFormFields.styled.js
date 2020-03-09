import styled, { css } from 'styled-components';
import styledMap from 'styled-map';
import { key as theme } from 'styled-theme';
import α from 'color-alpha';
import { flexCenter, absoluteCover } from 'styled/helpers';
import Icon, { IconSm, IconMd } from 'styled/base/Icon.styled';
import { faImages, faTimes, faVideo, faHeadphones } from '@fortawesome/free-solid-svg-icons';
import { faSmile } from '@fortawesome/free-regular-svg-icons';

export const Form = styled.form``;

export const Dropzone = styled.div`
  border: 0 dashed ${theme('colors.border')};
  border-width: 2px 0;
  background-color: ${theme('colors.tertiary')};
  color: ${theme('colors.border')};
  display: flex;
`;

export const DropzoneCell = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 19.6rem;
  padding-top: 5rem;
  padding-bottom: 3rem;

  &:nth-child(2) {
    border-left: 1px solid #989898;
  }

  ${props => props.minimize && css`
    padding: 2rem 0;
    height: 0;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  `};
`;

export const ImagesIcon = styled(Icon).attrs({ icon: faImages })``;

export const VideoIcon = styled(Icon).attrs({ icon: faVideo })``;

export const SmileIcon = styled(IconSm).attrs({ icon: faSmile })``;

export const AudioIcon = styled(IconMd).attrs({ icon: faHeadphones })``;


export const DropzoneCellTitle = styled.span`
  padding: 1rem;
  font-size: 1.4rem;
`;

export const HiddenFileInput = styled.input.attrs({ type: 'file' })`
  ${absoluteCover};
  cursor: pointer;
  opacity: 0;
`;

export const UrlInput = styled.input.attrs({ type: 'url' })``;

export const DeleteBtn = styled.button`
  ${flexCenter};
  border: none;
  background-color: ${theme('colors.warning')};
  border-radius: 50%;
  position: absolute;
  right: -1rem;
  top: -1rem;
  height: 2.3rem;
  width: 2.3rem;
  transition: all ease .1s; 
  &:hover {
    transform: scale(1.1);
  }
`;

export const DeleteIcon = styled(Icon).attrs({ icon: faTimes })`
  color: #fff;
  font-size: 1.1rem;
`;

export const Caption = styled.div`
  border-bottom: 1px solid ${α('#cfcfcf', .55)};
  display: ${styledMap`
    default: none;
    reveal: default;
  `};
  padding: 0 2rem;
  padding-top: 1.5rem;
`;

export const CaptionTextarea = styled.textarea.attrs({
  placeholder: 'Add a caption, if you like'
})`
  width: 50rem;
  min-height: 8rem;
  padding: .5rem;
  background-color: ${theme('colors.secondary')};
  color: ${theme('colors.text')};
`;

// -------------------- Preview
export const PreviewIndex = styled.div`
  overflow: hidden;
`;

export const Preview = styled.div`
  display: ${styledMap`
    default: inline-block;
    video: block;
  `};
  position: relative;
  margin: ${styledMap`
    default: 1.7rem;
    video: 0;
  `};
  & ${DeleteBtn} {
    opacity: 0;
  }
  &:hover ${DeleteBtn} {
    opacity: 1;
  }
`;

export const PreviewImg = styled.img.attrs({ alt: 'image preview' })`
  height: 15rem;
  max-width: 100%;
`;

export const PreviewVideo = styled.video.attrs({ controls: true })`
  display: block;
  width: 100%;
`;
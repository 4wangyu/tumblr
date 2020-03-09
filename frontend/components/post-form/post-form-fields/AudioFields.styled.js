import styled from 'styled-components';
import styledMap from 'styled-map';
import { key as theme } from 'styled-theme';
import α from 'color-alpha';
import { flexCenter, flexCol, absoluteCover } from 'styled/helpers';
import { IconLg } from 'styled/base/Icon.styled';
import { faPlayCircle, faPauseCircle } from '@fortawesome/free-solid-svg-icons';
import { DeleteBtn } from './PostFormFields.styled';

export const AudioPlayer = styled.div`
  display: grid;
  grid-template-columns: 8rem auto 8.5rem;
  grid-template-rows: 8.5rem;
  /* align-items: center; */
  justify-content: stretch;

  background-color: ${theme('colors.cornflowerBlue')};
  color: #fff;
  font-weight: ${theme('fontWeights.text')};
  position: relative;
  & * {
    z-index: 5
  }
  &:first-child {z-index: 1;}
  & ${DeleteBtn} {
    opacity: 0;
  }
  &:hover ${DeleteBtn} {
    opacity: 1;
  }
`;

export const AudioProgress = styled.div`
  ${absoluteCover};
  background-color: ${α('#000', .2)};
  width: 0%;
`;
// -------------------- PlayPauseBtn
export const PlayPauseBtn = styled.button`
  ${flexCenter};
  background-color: transparent;
  padding-left: 1.5rem;
`;

export const PlayPauseBtnIcon = styled(IconLg).attrs(props => ({
  icon: props.playing ? faPauseCircle : faPlayCircle
}))`
  color: white;
`;

// -------------------- AudioInfo
export const AudioInfo = styled.div`
  ${flexCol};
  align-items: stretch;
  padding: 1rem;
`;

export const InfoGroup = styled.div`
  display: grid;
  grid-template-columns: auto 5rem;
  border-radius: 3px;
  border-bottom: 1px solid ${α('#fff', .5)};
`;

export const InfoInput = styled.input`
  padding: 0 1rem;
  color: #fff;
  font-size: ${theme('fontSizes.md')};
  line-height: 1.8;
  font-weight: ${styledMap`
    default: ${theme('fontWeights.text')};
    boldText: ${theme('fontWeights.heading')};
  `};
`;

export const InfoLabel = styled.label`
  align-self: end;
  padding-bottom: 5px;
  color: ${α('#fff', .5)};
  font-size: 1.1rem;
  font-style: italic;
  z-index: 1;
`;

// // -------------------- AlbumArt
const AlbumArtBox = styled.div`
  border-left: 1px solid ${α('#fff', .5)};
  position: relative;
`;

// // ---------- Preview


export const PreviewImg = styled.img`
  width: 100%;
`;

export const PreviewOverlay = styled.div`
  ${absoluteCover};
  background-color: ${α('#000', .1)};
  cursor: pointer;
  font-weight: ${theme('fontWeights.heading')};
  padding-top: 2rem;
  opacity: 0;
  text-align: center;
`;

export const AlbumArtPreview = styled(AlbumArtBox)`
  overflow: hidden;
  &:hover ${PreviewOverlay} { opacity: 1; }
`;
// ---------- Dropzone
export const AlbumArtDropzone = styled(AlbumArtBox)`
  padding: .5rem;
`;

export const DropzoneBox = styled.span`
  ${flexCenter};
  height: 100%;
  border-radius: 2px;
  border: 2px dashed ${α('#000', .1)};
  background-color: ${α('#fff', .5)};
  color: ${theme('colors.cornflowerBlue')};
  font-size: ${theme('fontSizes.md')};
  padding: .5rem;
  text-align: center;
`;
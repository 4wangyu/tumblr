import styled from 'styled-components';
import styledMap from 'styled-map';
import { key as theme } from 'styled-theme';
import α from 'color-alpha';
import { flexCenter, flexCenterCol, absoluteCover } from 'styled/helpers';
import { faPlayCircle, faPauseCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const AudioPlayer = styled.div`
  background-color: ${theme('colors.cornflowerBlue')};
  color: #fff;
  display: grid;
  font-weight: ${theme('fontWeights.text')};
  grid-template-columns: ${styledMap('size', {
  small: '4rem auto 6rem',
  default: '8rem auto 8.5rem',
})};
  grid-template-rows: ${styledMap('size', {
  small: '6rem',
  default: '8.5rem',
})};
  justify-content: stretch;
  position: relative;
  & * {
    z-index: 2
  }
  &:first-child {z-index: 0;}
`;

export const HiddenAudio = styled.audio`
  display: none;
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

export const PlayPauseBtnIcon = styled(FontAwesomeIcon).attrs(props => ({
  icon: props.playing ? faPauseCircle : faPlayCircle
}))`
  color: white;
  font-size: ${styledMap('size', {
  small: '2rem',
  default: '3.5rem',
})};
`;

// -------------------- AudioInfo
export const AudioInfo = styled.div`
  ${flexCenterCol};
  align-items: start;
  padding: 2rem 1rem;
`;

export const AudioInfoText = styled.span`
  padding: 0 1rem;
  color: #fff;
  font-size: ${theme('fontSizes.md')};
  line-height: 1.8;
  font-weight: ${styledMap`
    default: ${theme('fontWeights.text')};
    boldText: ${theme('fontWeights.heading')};
  `};
`;

// -------------------- AlbumArt
export const AlbumArtBox = styled.div`
  overflow: hidden;
  position: relative;
`;

export const AlbumArtImg = styled.img`
  width: 100%;
`;
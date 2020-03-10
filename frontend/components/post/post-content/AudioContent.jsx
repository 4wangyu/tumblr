import React, { useRef, useEffect, useCallback, useMemo } from 'react';
import useAudioPlayer from 'hooks/useAudioPlayer';
import {
  AudioPlayer, HiddenAudio, AudioProgress,
  PlayPauseBtn, PlayPauseBtnIcon,
  AudioInfo, AudioInfoText,
  AlbumArtBox, AlbumArtImg
} from './AudioContent.styled';

const AudioContent = ({
  post: {
    track,
    artist,
    audioAttachment: {
      url: audioUrl
    },
    albumArtAttachment: {
      url: albumArtUrl
    }
  }
}) => {
  const $audio = useRef();
  const { time, duration, playing, setPlaying } = useAudioPlayer($audio);
  const trackProgress = useMemo(() => `${time / duration * 100}%`, [time, duration])
  const toggleAudioPlaying = useCallback(() => setPlaying(prev => !prev), [setPlaying]);

  return (
    <AudioPlayer>
      <HiddenAudio ref={$audio} src={audioUrl} />
      <AudioProgress
        style={{ width: trackProgress }}
      />
      <PlayPauseBtn onClick={toggleAudioPlaying}>
        <PlayPauseBtnIcon playing={playing} />
      </PlayPauseBtn>
      <AudioInfo>
        <AudioInfoText boldText={true}>{track}</AudioInfoText>
        <AudioInfoText>{artist}</AudioInfoText>
      </AudioInfo>
      <AlbumArtBox>
        <AlbumArtImg src={albumArtUrl} />
      </AlbumArtBox>
    </AudioPlayer>
  );
};

export default AudioContent;
import React, { useRef, useCallback, useMemo } from 'react';
import useAudioPlayer from 'hooks/useAudioPlayer';
import {
  AudioPlayer, HiddenAudio, AudioProgress,
  PlayPauseBtn, PlayPauseBtnIcon,
  AudioInfo, AudioInfoText,
  AlbumArtBox, AlbumArtImg
} from './Audio.styled';

const Audio = ({
  post: {
    track,
    artist,
    audioAttachment,
    albumArtAttachment
  }
}) => {
  const $audio = useRef();
  const { time, duration, playing, setPlaying } = useAudioPlayer($audio);
  const trackProgress = useMemo(() => `${time / duration * 100}%`, [time, duration])
  const toggleAudioPlaying = useCallback(() => setPlaying(prev => !prev), [setPlaying]);

  return (
    <AudioPlayer>
      <HiddenAudio ref={$audio} src={audioAttachment.url} />
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
      {albumArtAttachment && <AlbumArtBox>
        <AlbumArtImg src={albumArtAttachment.url} />
      </AlbumArtBox>}
    </AudioPlayer>
  );
};

export default Audio;
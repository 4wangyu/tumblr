import React, { useContext, useRef, useCallback, useMemo } from 'react';
import { PostContext } from '../../Post';
import useAudioPlayer from 'hooks/useAudioPlayer';
import {
  AudioContainer, HiddenAudio, AudioProgress,
  PlayPauseBtn, PlayPauseBtnIcon,
  AudioInfo, AudioInfoText,
  AlbumArtBox, AlbumArtImg
} from './Audio.styled';

const Audio = () => {

  const { size, track, artist, audioAttachment, albumArtAttachment } = useContext(PostContext);

  const $audio = useRef();
  const { time, duration, playing, setPlaying } = useAudioPlayer($audio);
  const trackProgress = useMemo(() => `${time / duration * 100}%`, [time, duration])
  const toggleAudioPlaying = useCallback(() => setPlaying(prev => !prev), [setPlaying]);

  return (
    <AudioContainer size={size}>
      <HiddenAudio ref={$audio} src={audioAttachment.url} />
      <AudioProgress
        style={{ width: trackProgress }}
      />
      <PlayPauseBtn onClick={toggleAudioPlaying} size={size}>
        <PlayPauseBtnIcon playing={playing} />
      </PlayPauseBtn>
      <AudioInfo>
        <AudioInfoText boldText={true}>{track}</AudioInfoText>
        <AudioInfoText>{artist}</AudioInfoText>
      </AudioInfo>
      {albumArtAttachment && <AlbumArtBox>
        <AlbumArtImg src={albumArtAttachment.url} />
      </AlbumArtBox>}
    </AudioContainer>
  );
};

export default Audio;
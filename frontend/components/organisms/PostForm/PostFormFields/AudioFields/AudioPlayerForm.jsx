import React, { useContext, useRef, useMemo, useCallback } from 'react'
import useAudioPlayer from 'hooks/useAudioPlayer';
import {
  AudioPlayer, HiddenAudio, AudioProgress,
  PlayPauseBtn, PlayPauseBtnIcon,
  AudioInfo, InfoGroup, InfoInput, InfoLabel,
} from './AudioFields.styled';
import AlbumArt from './AlbumArt';
import { DeleteBtn, DeleteIcon } from '../PostFormFields.styled';
import { FormContext } from '../../PostForm';

const AudioPlayerForm = ({
  audioPreview,
  removeAudio,
}) => {
  const { formFields: { track, artist }, handleTextInput } = useContext(FormContext);
  const $audioInput = useRef(null);
  const { time, duration, playing, setPlaying } = useAudioPlayer($audioInput);
  const trackProgress = useMemo(() => `${time / duration * 100}%`, [time, duration])
  const toggleAudioPlaying = useCallback(() => setPlaying(prev => !prev), [playing]);

  return (
    <AudioPlayer>
      <HiddenAudio ref={$audioInput} src={audioPreview} />
      <AudioProgress style={{ width: trackProgress }}
      />
      <PlayPauseBtn onClick={toggleAudioPlaying}>
        <PlayPauseBtnIcon playing={playing ? 'true' : 'false'} />
      </PlayPauseBtn>
      <AudioInfo>
        <InfoGroup>
          <InfoInput
            boldText={true}
            name="track" onChange={handleTextInput} value={track}
          />
          <InfoLabel>Track</InfoLabel>
        </InfoGroup>
        <InfoGroup>
          <InfoInput
            name="artist" onChange={handleTextInput} value={artist}
          />
          <InfoLabel>Artist</InfoLabel>
        </InfoGroup>
      </AudioInfo>
      <AlbumArt />
      <DeleteBtn onClick={removeAudio}>
        <DeleteIcon />
      </DeleteBtn>
    </AudioPlayer>
  );
};

export default AudioPlayerForm;


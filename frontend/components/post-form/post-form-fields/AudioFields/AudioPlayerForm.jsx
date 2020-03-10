import React, { useRef, useMemo, useCallback } from 'react'
import useAudioPlayer from 'hooks/useAudioPlayer';
import {
  AudioPlayer, HiddenAudio, AudioProgress,
  PlayPauseBtn, PlayPauseBtnIcon,
  AudioInfo, InfoGroup, InfoInput, InfoLabel,
} from './AudioFields.styled';
import AlbumArt from './AlbumArt';
import { DeleteBtn, DeleteIcon } from '../PostFormFields.styled';

const AudioPlayerForm = ({
  audioPreview,
  handleTextInput,
  removeAudio,
  formData,
  setFormData
}) => {
  const $audioInput = useRef(null);
  const { time, duration, playing, setPlaying } = useAudioPlayer($audioInput);
  const trackProgress = useMemo(() => `${time / duration * 100}%`, [time, duration])
  const toggleAudioPlaying = useCallback(() => setPlaying(prev => !prev), [playing]);

  const { track, artist } = formData;

  return (
    <AudioPlayer>
      <HiddenAudio ref={$audioInput} src={audioPreview} />
      <AudioProgress style={{ width: trackProgress }}
      />
      <PlayPauseBtn onClick={toggleAudioPlaying}>
        <PlayPauseBtnIcon playing={playing} />
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
      <AlbumArt
        formData={formData}
        setFormData={setFormData}
      />
      <DeleteBtn onClick={removeAudio}>
        <DeleteIcon />
      </DeleteBtn>
    </AudioPlayer>
  );
};

export default AudioPlayerForm;


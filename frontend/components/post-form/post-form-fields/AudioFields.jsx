import React, { useEffect, useState, useRef } from 'react';
import useAudioPlayer from 'hooks/useAudioPlayer';
import {
  Dropzone, DropzoneCell, DropzoneCellTitle, AudioIcon,
  HiddenFileInput,
  DeleteBtn, DeleteIcon
} from './PostFormFields.styled';
import {
  AudioPlayer, AudioProgress,
  PlayPauseBtn, PlayPauseBtnIcon,
  AudioInfo, InfoGroup, InfoInput, InfoLabel,
  AlbumArtPreview, PreviewImg, PreviewOverlay,
  AlbumArtDropzone, DropzoneBox
} from './AudioFields.styled';

const AudioFields = ({ formData, setFormData, handleTextInput }) => {

  const [albumArtPreview, setAlbumArtPreview] = useState(null);
  const $audioInput = useRef(null);
  const { time, duration, playing, setPlaying, srcAttr, setSrcAttr, reset } = useAudioPlayer($audioInput);

  useEffect(() => {
    setFormData(prev => ({
      contentType: 'Audio',
      artist: '',
      track: '',
      audio: undefined,
      albumArt: undefined,
      ...prev,
    }));

    const { audioAttachment, albumArtAttachment } = formData;

    if (audioAttachment) {
      setSrcAttr(audioAttachment.url)
    }
    if (albumArtAttachment) {
      setAlbumArtPreview(albumArtAttachment.url)
    }
  }, []);

  const handleAudioInput = e => {
    const [audio] = e.target.files;
    setSrcAttr(URL.createObjectURL(audio));
    setFormData(prev => ({ ...prev, audio }));
  };

  const handleAlbumArtInput = e => {
    const [albumArt] = e.target.files;
    setAlbumArtPreview(URL.createObjectURL(albumArt))
    setFormData(prev => ({ ...prev, albumArt }));
  };

  const removeAlbumArt = e => {
    setAlbumArtPreview(null)
    setFormData(prev => ({ ...prev, albumArt: undefined }));
  };


  const { track, artist, albumArt, albumArtAttachment } = formData;

  if (!srcAttr) return (
    <>
      <audio ref={$audioInput} />
      <Dropzone>
        <DropzoneCell minimize={true} style={{ height: '8rem' }}>
          <HiddenFileInput
            onChange={handleAudioInput}
            multiple
            accept=".mp3,audio/*"
          />
          <AudioIcon />
          <DropzoneCellTitle>Upload a song or sound</DropzoneCellTitle>
        </DropzoneCell>
      </Dropzone>
    </>
  )

  return (
    <>
      <audio ref={$audioInput} />
      <AudioPlayer>
        <AudioProgress style={{ width: `${time / duration * 100}%` }}
        />
        <PlayPauseBtn
          onClick={() => setPlaying(prev => !prev)}
        >
          <PlayPauseBtnIcon
            playing={playing}
          />
        </PlayPauseBtn>
        <AudioInfo>
          <InfoGroup>
            <InfoInput
              boldText={true}
              name="track"
              onChange={handleTextInput}
              value={track}
            />
            <InfoLabel>Track</InfoLabel>
          </InfoGroup>
          <InfoGroup>
            <InfoInput
              name="artist"
              onChange={handleTextInput}
              value={artist}
            />
            <InfoLabel>Artist</InfoLabel>
          </InfoGroup>
        </AudioInfo>
        {albumArtPreview ? (
          <AlbumArtPreview onClick={removeAlbumArt}>
            <PreviewImg src={albumArtPreview} />
            <PreviewOverlay>Remove Image</PreviewOverlay>
          </AlbumArtPreview>
        ) : (
            <AlbumArtDropzone>
              <HiddenFileInput
                onChange={handleAlbumArtInput}
                accept=".png,.jpeg,image/*"
              />
              <DropzoneBox>Select album art</DropzoneBox>
            </AlbumArtDropzone>
          )}
        <DeleteBtn onClick={() => reset()}>
          <DeleteIcon />
        </DeleteBtn>
      </AudioPlayer>
    </>
  )
};

export default AudioFields;
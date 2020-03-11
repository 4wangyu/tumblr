import React, { useContext, useEffect, useState } from 'react';
import AudioDropzone from './AudioDropzone';
import AudioPlayerForm from './AudioPlayerForm';
import { FormContext } from '../../PostForm';

const AudioFields = () => {
  const { formFields, setFormFields } = useContext(FormContext);
  const [audioPreview, setAudioPreview] = useState(null);

  useEffect(() => {
    setFormFields(prev => ({
      contentType: 'Audio',
      artist: '',
      track: '',
      audio: undefined,
      ...prev,
    }));
    const { audioAttachment } = formFields;
    console.log(audioAttachment)
    if (audioAttachment) setAudioPreview(audioAttachment.url);
  }, []);

  const handleAudioInput = e => {
    const [audio] = e.target.files;
    setAudioPreview(URL.createObjectURL(audio));
    setFormFields(prev => ({ ...prev, audio }));
  };

  const removeAudio = e => {
    setAudioPreview(null)
    setFormFields(prev => ({ ...prev, audio: undefined }));
  };

  if (audioPreview) return (
    <AudioPlayerForm
      audioPreview={audioPreview}
      removeAudio={removeAudio}
    />
  )
  return (
    <AudioDropzone
      handleAudioInput={handleAudioInput}
    />
  );
};

export default AudioFields;
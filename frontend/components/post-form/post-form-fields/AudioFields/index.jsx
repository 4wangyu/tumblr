import React, { useEffect, useState } from 'react';
import AudioDropzone from './AudioDropzone';
import AudioPlayerForm from './AudioPlayerForm';

const AudioFields = ({ formData, setFormData, handleTextInput }) => {
  const [audioPreview, setAudioPreview] = useState(null);

  useEffect(() => {
    setFormData(prev => ({
      contentType: 'Audio',
      artist: '',
      track: '',
      audio: undefined,
      ...prev,
    }));
    const { audioAttachment } = formData;
    console.log(audioAttachment)
    if (audioAttachment) setAudioPreview(audioAttachment.url);
  }, []);

  const handleAudioInput = e => {
    const [audio] = e.target.files;
    setAudioPreview(URL.createObjectURL(audio));
    setFormData(prev => ({ ...prev, audio }));
  };

  const removeAudio = e => {
    setAudioPreview(null)
    setFormData(prev => ({ ...prev, audio: undefined }));
  };

  if (audioPreview) return (
    <AudioPlayerForm
      audioPreview={audioPreview}
      handleTextInput={handleTextInput}
      removeAudio={removeAudio}
      formData={formData}
      setFormData={setFormData}
    />
  )
  return (
    <AudioDropzone
      handleAudioInput={handleAudioInput}
    />
  );
};

export default AudioFields;
import React, { useState, useEffect } from 'react'
import {
  PreviewIndex, Preview, PreviewVideo,
  Form, Dropzone, DropzoneCell, DropzoneCellTitle, VideoIcon,
  HiddenFileInput,
  Caption, CaptionTextarea
} from './PostFormFields.styled';

const VideoFields = ({ formData, setFormData }) => {

  const [preview, setPreview] = useState(formData.videoUrl || '');

  useEffect(() => {
    setFormData(prev => ({
      contentType: 'Video',
      caption: '',
      video: undefined,
      ...prev,
    }));
  }, []);

  const handleTextInput = e => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  }

  const handleFileInput = e => {
    const [video] = e.target.files;
    setFormData(prev => ({ ...prev, video }));
    setPreview(URL.createObjectURL(video));
  }

  const renderPreview = () => (
    <Preview video>
      <PreviewVideo>
        <source src={preview} type="video/mp4" />
        Your browser does not support the video tag.
      </PreviewVideo>
    </Preview>
  )

  const { caption } = formData;
  const inPreview = Boolean(preview);
  return (
    <>
      <PreviewIndex active>{preview && renderPreview()}</PreviewIndex>
      <Dropzone>
        <DropzoneCell minimize={inPreview}>
          <HiddenFileInput
            onChange={handleFileInput}
            accept="video/mp4, video/ogg"
          />
          <VideoIcon large={!inPreview} />
          <DropzoneCellTitle>{inPreview ? 'Replace video' : 'Upload a video'}</DropzoneCellTitle>
        </DropzoneCell>
      </Dropzone>
      <Caption reveal={inPreview}>
        <CaptionTextarea
          name="caption"
          onChange={handleTextInput}
          value={caption}
        />
      </Caption>
    </>
  );
};

export default VideoFields;
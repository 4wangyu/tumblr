import React, { useState, useEffect, useCallback } from 'react'
import {
  PreviewIndex, Preview, PreviewVideo,
  Form, Dropzone, DropzoneCell, DropzoneCellTitle, VideoIcon,
  HiddenFileInput,
  Caption, CaptionTextarea
} from './PostFormFields.styled';

const VideoFields = ({ formData, setFormData, handleTextInput }) => {

  const [previewUrl, setPreviewUrl] = useState(null);

  useEffect(() => {
    setFormData(prev => ({
      contentType: 'Video',
      caption: '',
      video: undefined,
      ...prev,
    }));
  }, []);

  const handleFileInput = e => {
    const [video] = e.target.files;
    setPreviewUrl(URL.createObjectURL(video))
    setFormData(prev => ({ ...prev, video }));
  };

  const renderPreview = useCallback(() => {
    const { videoAttachment } = formData;
    const url = previewUrl || videoAttachment.url;
    return (
      <Preview video key={url}>
        <PreviewVideo src={url} type="video/mp4">Your browser does not support the video tag.</PreviewVideo>
      </Preview>
    );
  }, [formData.video, formData.videoAttachment]);

  const { caption, video, videoAttachment } = formData;
  const inPreview = video || videoAttachment;

  return (
    <>
      <PreviewIndex active>{inPreview && renderPreview()}</PreviewIndex>
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
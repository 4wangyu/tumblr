import React, { useContext, useState, useEffect, useCallback } from 'react'
import {
  PreviewIndex, Preview, PreviewVideo,
  Form, Editor, EditorCell, EditorCellTitle, VideoIcon,
  HiddenFileInput,
  Body, BodyTextarea
} from './PostFormFields.styled';
import { FormContext } from '../PostForm';

const VideoFields = () => {
  const { formFields, setFormFields, handleTextInput } = useContext(FormContext);
  const [previewUrl, setPreviewUrl] = useState(null);

  useEffect(() => {
    setFormFields(prev => ({
      contentType: 'Video',
      body: '',
      video: undefined,
      ...prev,
    }));
  }, []);

  const handleFileInput = e => {
    const [video] = e.target.files;
    setPreviewUrl(URL.createObjectURL(video))
    setFormFields(prev => ({ ...prev, video }));
  };

  const renderPreview = useCallback(() => {
    const { videoAttachment } = formFields;
    const url = previewUrl || videoAttachment.url;
    return (
      <Preview variant="video" key={url}>
        <PreviewVideo src={url} type="video/mp4">Your browser does not support the video tag.</PreviewVideo>
      </Preview>
    );
  }, [formFields.video, formFields.videoAttachment]);

  const { body, video, videoAttachment } = formFields;
  const inPreview = video || videoAttachment;

  return (
    <>
      {inPreview && renderPreview()}
      <Editor>
        <EditorCell minimize={inPreview}>
          <HiddenFileInput
            onChange={handleFileInput}
            accept="video/mp4, video/ogg"
          />
          <VideoIcon large={!inPreview} />
          <EditorCellTitle>{inPreview ? 'Replace video' : 'Upload a video'}</EditorCellTitle>
        </EditorCell>
      </Editor>
      <Body reveal={inPreview}>
        <BodyTextarea
          name="body"
          onChange={handleTextInput}
          value={body}
        />
      </Body>
    </>
  );
};

export default VideoFields;
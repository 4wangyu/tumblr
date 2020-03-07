import React, { useState, useEffect } from 'react';
import {
  PreviewIndex, Preview, PreviewImg, DeleteBtn, DeleteIcon,
  Form, Dropzone, DropzoneCell, DropzoneCellTitle,
  HiddenFileInput, ImagesIcon, SmileIcon,
  Caption, CaptionTextarea
} from './PostFormFields.styled';

const ImageGalleryFields = ({ formData, setFormData }) => {

  useEffect(() => {
    setFormData(prev => ({
      contentType: 'ImageGallery',
      caption: '',
      images: [],
      imageAttachments: [],
      purgeImageIds: [],
      ...prev,
    }));
  }, []);

  const handleTextInput = e => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  }

  const handleFileInput = e => {

    const { files } = e.target
    setFormData(({ images, ...prev }) => ({
      ...prev, images: [...images, ...files]
    }));
  };

  const handleRemoveFile = e => {
    e.stopPropagation();
    const fileIdx = parseInt(e.currentTarget.dataset.fileIdx);
    debugger;
    setFormData(({ images, ...prev }) => ({
      ...prev, images: images.filter((p, i) => i !== fileIdx)
    }));
  };

  const handlePurgeAttachment = e => {
    e.stopPropagation();
    const attachmentId = parseInt(e.currentTarget.dataset.attachmentId);
    debugger;
    setFormData(({ purgeImageIds, ...prev }) => ({
      ...prev, purgeImageIds: [...purgeImageIds, attachmentId]
    }));
  };

  const renderFilePreviews = () => formData.images.map((file, idx) => {
    const url = URL.createObjectURL(file);
    return (
      <Preview key={`file-${idx}`}>
        <PreviewImg src={url} />
        <DeleteBtn onClick={handleRemoveFile} data-file-idx={idx}>
          <DeleteIcon />
        </DeleteBtn>
      </Preview >
    )
  })

  const renderAttachmentPreviews = () => formData.imageAttachments.map(({ id, url }) => {
    if (formData.purgeImageIds.includes(id)) return null;
    return (
      <Preview key={`attachment-${id}`}>
        <PreviewImg src={url} />
        <DeleteBtn onClick={handlePurgeAttachment} data-attachment-id={id}>
          <DeleteIcon />
        </DeleteBtn>
      </Preview>
    )
  })

  const { caption, images, imageAttachments, purgeImageIds } = formData;
  const inPreview = true;

  return purgeImageIds ? (
    <>
      <PreviewIndex active>
        {renderFilePreviews()}
        {renderAttachmentPreviews()}
      </PreviewIndex>
      <Dropzone>
        <DropzoneCell minimize={inPreview}>
          <HiddenFileInput
            onChange={handleFileInput}
            multiple
            accept="image/png, image/jpeg"
          />
          <ImagesIcon large={!inPreview} />
          <DropzoneCellTitle>{inPreview ? 'Add Another' : 'Upload photos'}</DropzoneCellTitle>
          <SmileIcon hidden={inPreview} />
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
  ) : null;
};

export default ImageGalleryFields;
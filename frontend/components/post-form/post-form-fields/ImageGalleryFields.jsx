import React, { useState, useEffect } from 'react';
import {
  PreviewIndex, Preview, PreviewImg, DeleteBtn, DeleteIcon,
  Form, Dropzone, DropzoneCell, DropzoneCellTitle,
  HiddenFileInput, ImagesIcon, SmileIcon,
  Caption, CaptionTextarea
} from './PostFormFields.styled';

const ImageGalleryFields = ({ formData, setFormData }) => {

  const [previews, setPreviews] = useState(formData.imageUrls || []);

  useEffect(() => {
    setFormData(prev => ({
      contentType: 'ImageGallery',
      caption: '',
      images: [],
      ...prev,
    }));
  }, []);

  const handleTextInput = e => {
    const { name, value } = e.target;

    setFormData(prev => ({ ...prev, [name]: value }));
  }

  const handleFileInput = e => {
    const images = Array.from(e.target.files);
    const previewUrls = images.map(f => URL.createObjectURL(f));

    setFormData(prev => ({
      ...prev, images: [...prev.images, ...images]
    }));

    setPreviews(prev => [...prev, ...previewUrls]);
  };

  const handleRemovePrev = e => {
    e.stopPropagation();
    const idx = parseInt(e.currentTarget.dataset.id);

    setFormData(prev => ({
      ...prev, images: prev.images.filter((p, i) => i !== idx)
    }));

    setPreviews(prev => prev.filter((p, i) => i !== idx));
  };

  const renderPreviews = () => previews.map((url, i) => (
    <Preview key={i}>
      <PreviewImg src={url} />
      <DeleteBtn
        onClick={handleRemovePrev}
        data-id={i}
      >
        <DeleteIcon />
      </DeleteBtn>
    </Preview>

  ))

  const { caption } = formData;
  const inPreview = previews.length !== 0;

  return (
    <>
      <PreviewIndex active>
        {renderPreviews()}
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
  );
};

export default ImageGalleryFields;
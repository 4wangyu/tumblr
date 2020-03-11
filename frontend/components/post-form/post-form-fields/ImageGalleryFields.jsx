import React, { useContext, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Thunks as Posts } from 'store/posts/actions';
import {
  PreviewIndex, Preview, PreviewImg, DeleteBtn, DeleteIcon,
  Form, Dropzone, DropzoneCell, DropzoneCellTitle,
  HiddenFileInput, ImagesIcon, SmileIcon,
  Caption, CaptionTextarea
} from './PostFormFields.styled';
import { FormContext } from '../PostForm';

const ImageGalleryFields = () => {
  const { formFields: { id: postId, body, images, imageAttachments }, setFormFields, handleTextInput } = useContext(FormContext);

  const dispatch = useDispatch();
  const purgeAttachment = attachmentId => dispatch(Posts.purgePostAttachment(postId, attachmentId));

  useEffect(() => {
    setFormFields(prev => ({
      contentType: 'ImageGallery',
      body: '',
      images: [],
      imageAttachments: [],
      ...prev,
    }));
  }, []);

  const handleFileInput = e => {
    const { files } = e.target;

    setFormFields(({ images, ...prev }) => ({
      ...prev, images: [...images, ...files]
    }));
  };

  const handleRemoveFile = e => {
    e.stopPropagation();
    const fileIdx = parseInt(e.currentTarget.dataset.fileIdx);
    setFormFields(({ images, ...prev }) => ({
      ...prev, images: images.filter((p, i) => i !== fileIdx)
    }));
  };

  const handlePurgeAttachment = e => {
    e.stopPropagation();
    const attachmentId = parseInt(e.currentTarget.dataset.attachmentId);
    purgeAttachment(attachmentId)
  };

  const renderFilePreviews = () => images.map((file, idx) => {
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

  const renderAttachmentPreviews = () => imageAttachments.map(({ id, url }) => (
    <Preview key={`attachment-${id}`}>
      <PreviewImg src={url} />
      <DeleteBtn onClick={handlePurgeAttachment} data-attachment-id={id}>
        <DeleteIcon />
      </DeleteBtn>
    </Preview>
  ));

  if (images === undefined) return null;
  const inPreview = ((images.length + imageAttachments.length) > 0);

  return (
    <>
      <PreviewIndex active>
        {renderAttachmentPreviews()}
        {renderFilePreviews()}
      </PreviewIndex>
      <Dropzone>
        <DropzoneCell minimize={inPreview}>
          <HiddenFileInput
            onChange={handleFileInput}
            multiple
            accept=".png,.jpeg,image/*"
          />
          <ImagesIcon lg={!inPreview} />
          <DropzoneCellTitle>{inPreview ? 'Add Another' : 'Upload photos'}</DropzoneCellTitle>
          <SmileIcon hidden={inPreview} />
        </DropzoneCell>
      </Dropzone>
      <Caption reveal={inPreview}>
        <CaptionTextarea
          name="body"
          onChange={handleTextInput}
          value={body}
        />
      </Caption>
    </>
  );
};

export default ImageGalleryFields;
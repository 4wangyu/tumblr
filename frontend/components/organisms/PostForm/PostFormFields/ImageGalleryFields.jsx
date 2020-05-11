import React, { useContext, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Thunks as Posts } from 'store/posts/actions';
import {
  PreviewIndex, Preview, PreviewImg, DeleteBtn, DeleteIcon,
  Form, Editor, EditorCell, EditorCellTitle,
  HiddenFileInput, ImagesIcon, SmileIcon,
  Body, BodyTextarea
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
      .then(() => setFormFields(prev => ({ ...prev, imageAttachments: imageAttachments.filter(a => a.id !== attachmentId) })));
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
      <Editor>
        <EditorCell minimize={inPreview}>
          <HiddenFileInput
            onChange={handleFileInput}
            multiple
            accept=".png,.jpeg,image/*"
          />
          <ImagesIcon lg={!inPreview} />
          <EditorCellTitle>{inPreview ? 'Add Another' : 'Upload photos'}</EditorCellTitle>
          <SmileIcon hidden={inPreview} />
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

export default ImageGalleryFields;
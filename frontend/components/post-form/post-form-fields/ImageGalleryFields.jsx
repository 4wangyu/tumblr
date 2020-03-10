import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Thunks as Posts } from 'store/posts/actions';
import {
  PreviewIndex, Preview, PreviewImg, DeleteBtn, DeleteIcon,
  Form, Dropzone, DropzoneCell, DropzoneCellTitle,
  HiddenFileInput, ImagesIcon, SmileIcon,
  Caption, CaptionTextarea
} from './PostFormFields.styled';

const ImageGalleryFields = ({ formData, setFormData, handleTextInput }) => {

  const { id: postId, caption, images, imageAttachments } = formData;

  const dispatch = useDispatch();
  const purgeAttachment = attachmentId => dispatch(Posts.purgePostAttachment(postId, attachmentId));

  useEffect(() => {
    setFormData(prev => ({
      contentType: 'ImageGallery',
      caption: '',
      images: [],
      imageAttachments: [],
      ...prev,
    }));
  }, []);

  const handleFileInput = e => {
    const { files } = e.target;

    setFormData(({ images, ...prev }) => ({
      ...prev, images: [...images, ...files]
    }));
  };

  const handleRemoveFile = e => {
    e.stopPropagation();
    const fileIdx = parseInt(e.currentTarget.dataset.fileIdx);
    setFormData(({ images, ...prev }) => ({
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
          name="caption"
          onChange={handleTextInput}
          value={caption}
        />
      </Caption>
    </>
  );
};

export default ImageGalleryFields;
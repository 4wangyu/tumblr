import React, { useState } from 'react';
import {
  PreviewIndex, Preview, PreviewImg, DeleteBtn, DeleteIcon,
  Form, Dropzone, DropzoneCell, DropzoneCellTitle,
  HiddenFileInput, ImagesIcon, SmileIcon,
  Caption, CaptionTextarea
} from './PostFormFields.styled';

const ImageGalleryFields = ({ setPreProcess }) => {

  const _initialPost = {
    postType: 'ImageGallery',
    caption: '',
    imageFiles: '',
    imageUrls: [],
    previewUrls: []
  }

  const [post, setPost] = useState(_initialPost);

  const handleTextInput = e => {
    const { name, value } = e.target;
    setPost(prevPost => Object.assign({}, prevPost, { [name]: value }));
  }

  const handleFileInput = e => {
    const imageFiles = Array.from(e.target.files);
    // ajax contentType, processData ?
    const previewUrls = imageFiles.map(f => URL.createObjectURL(f))
    setPost(prevPost => Object.assign(
      {}, prevPost,
      {
        imageFiles: [...prevPost.imageFiles, ...imageFiles],
        previewUrls: [...prevPost.previewUrls, ...previewUrls]
      }
    ))
  }

  const handleFormData = () => {
    const { postType: post_type, caption, imageFiles: image_files } = post;
    const formPost = new FormData();
    formPost.append('post[post_type]', post_type)
    formPost.append('post[caption]', caption)
    for (const image_file of image_files) {
      formPost.append('post[image_files][]', image_file)
    }
    return formPost;
  }

  setPreProcess(handleFormData);

  const handleRemovePrev = e => {
    e.stopPropagation();
    const idx = parseInt(e.currentTarget.dataset.id);
    setPost(prevPost => Object.assign(
      {}, prevPost,
      {
        imageFiles: prevPost.imageFiles.filter((p, i) => i !== idx),
        previewUrls: prevPost.previewUrls.filter((p, i) => i !== idx)
      }
    ))
  }

  const renderPreviews = () => post.previewUrls.map((url, i) => (
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

  const { previewUrls } = post;
  const inPreview = previewUrls.length !== 0
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
          value={post.caption}
        />
      </Caption>
    </>
  )
}

export default ImageGalleryFields;
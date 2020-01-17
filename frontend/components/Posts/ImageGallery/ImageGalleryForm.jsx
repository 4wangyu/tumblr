import React, { useState } from 'react'
import { faImages, faGlobe, faTimes as iRemove } from "@fortawesome/free-solid-svg-icons";
import { faSmile } from "@fortawesome/free-regular-svg-icons";
import {
  Card,
  PreviewBox, PreviewImg,
  Header, Form,
  UploadBox, NativeFileBox, InvisibleFileInput, UrlBox, Icon, Text,
  ContentBox, CaptionInput,
  Footer, CloseBtn, PostBtn,
  Preview, RemoveBtn, RemoveIcon
} from '../Form/Form.styled';


const ImageGalleryForm = ({ currentUser, closeModal, processForm }) => {

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

  const handleSubmit = e => {
    e.preventDefault();
    const { postType: post_type, caption, imageFiles: image_files } = post;
    const formPost = new FormData();
    formPost.append('post[post_type]', post_type)
    formPost.append('post[caption]', caption)
    for (const image_file of image_files) {
      formPost.append('post[image_files][]', image_file)
    }

    processForm(formPost)
      .then(() => closeModal());
  }

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
      <RemoveBtn onClick={handleRemovePrev} data-id={i}>
        <RemoveIcon icon={iRemove} />
      </RemoveBtn>
    </Preview>

  ))

  const { previewUrls } = post;
  const inPreview = previewUrls.length !== 0
  return (
    <Card>
      <Header>{currentUser.username}</Header>
      <PreviewBox active>
        {renderPreviews()}
      </PreviewBox>
      <Form onSubmit={handleSubmit}>
        <UploadBox>
          <NativeFileBox className={inPreview && 'small'}>
            <InvisibleFileInput
              onChange={handleFileInput}
              multiple
              accept="image/png, image/jpeg"
            />
            <Icon icon={faImages} smallSize={inPreview} />
            <Text>{inPreview ? 'Add Another' : 'Upload photos'}</Text>
            <Icon smallSize icon={faSmile} hidden={inPreview} />
          </NativeFileBox>
        </UploadBox>
        <ContentBox>
          <CaptionInput
            name="caption"
            onChange={handleTextInput}
            value={post.caption}
            placeholder="Add a caption, if you like"
          />
        </ContentBox>
        <Footer>
          <CloseBtn onClick={closeModal}>Close</CloseBtn>
          <PostBtn>Post</PostBtn>
        </Footer>
      </Form>
    </Card>

  )
}

export default ImageGalleryForm;
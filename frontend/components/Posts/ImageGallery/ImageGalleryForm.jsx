import React, { useState } from 'react'
import { faImages, faGlobe } from "@fortawesome/free-solid-svg-icons";
import { faSmile } from "@fortawesome/free-regular-svg-icons";
import {
  Card,
  PreviewBox, PreviewImg,
  Header, Form,
  UploadBox, NativeFileBox, InvisibleFileInput, UrlInput, UrlBox, Icon, Text,
  ContentBox, CaptionInput,
  Footer, CloseBtn, PostBtn
} from './ImageGalleryForm.styled';


const ImageGalleryForm = ({ currentUser }) => {

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

    // const formPost = {}
    // processForm(formPost)
    // .then(post => {});
  }

  const renderPreviews = () => post.previewUrls.map((url, i) => (
    <PreviewImg src={url} key={i} />
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
            />
            <Icon icon={faImages} smallSize={inPreview} />
            <Text>{inPreview ? 'Add Another' : 'Upload photos'}</Text>
            <Icon smallSize icon={faSmile} hidden={inPreview} />
          </NativeFileBox>
          <UrlBox className={inPreview && 'small'}>
            <Icon icon={faGlobe} smallSize={inPreview} />
            <Text>{inPreview ? 'Add Another' : 'Add photo from web'}</Text>
          </UrlBox>
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
          <CloseBtn>Close</CloseBtn>
          <PostBtn>Post</PostBtn>
        </Footer>
      </Form>
    </Card>

  )
}

export default ImageGalleryForm;
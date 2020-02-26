import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { selectCurrentUser } from 'store/session/selectors';
import { Creators as Modal } from 'store/modal/actions';
import { Creators as Posts } from 'store/posts/actions';
import {
  Card,
  PreviewBox, PreviewImg,
  Header, Form,
  UploadBox, NativeFileBox, InvisibleFileInput, UrlBox, FAIcon, Text,
  ContentBox, CaptionInput,
  Footer, CloseBtn, PostBtn,
  Preview, RemoveBtn, RemoveIcon
} from './PostFormBase.styled';
import {
  faImages as iGallery,
  // faGlobe as iGlobe,
  faTimes as iRemove
} from '@fortawesome/free-solid-svg-icons';
import {
  faSmile as iSmile
} from '@fortawesome/free-regular-svg-icons';

const ImageGalleryForm = () => {

  const currentUser = useSelector(selectCurrentUser)
  const dispatch = useDispatch;
  const closeModal = () => dispatch(Modal.closeModal());
  const createPost = formData => dispatch(Posts.createPost(formData));

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

    createPost(formPost)
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
            <FAIcon icon={iGallery} small={inPreview} />
            <Text>{inPreview ? 'Add Another' : 'Upload photos'}</Text>
            <FAIcon small icon={iSmile} hidden={inPreview} />
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
import React, { useState } from 'react'
import { faImages, faGlobe, faTimes as iRemove, faVideo as iVideo } from "@fortawesome/free-solid-svg-icons";
import { faSmile } from "@fortawesome/free-regular-svg-icons";
import {
  Card,
  PreviewBox, PreviewVideo, VideoSrc,
  Header, Form,
  UploadBox, NativeFileBox, InvisibleFileInput, UrlBox, Icon, Text,
  ContentBox, CaptionInput,
  Footer, CloseBtn, PostBtn,
  Preview, RemoveBtn, RemoveIcon
} from '../Form/Form.styled';


const VideoForm = ({ currentUser, closeModal, processForm }) => {

  const _initialPost = {
    postType: 'Video',
    caption: '',
    videoFile: '',
    videoUrl: undefined,
    previewUrl: undefined
  }

  const [post, setPost] = useState(_initialPost);

  const handleTextInput = e => {
    const { name, value } = e.target;
    setPost(prevPost => Object.assign({}, prevPost, { [name]: value }));
  }

  const handleFileInput = e => {
    const [videoFile] = e.target.files;
    // ajax contentType, processData ?
    const previewUrl = URL.createObjectURL(videoFile)
    setPost(prevPost => Object.assign(
      {}, prevPost, { videoFile, previewUrl }
    ))
  }

  const handleSubmit = e => {
    e.preventDefault();
    const { caption, postType, videoFile } = post;
    const formPost = new FormData();
    formPost.append('post[post_type]', postType)
    formPost.append('post[caption]', caption)
    formPost.append('post[video_file]', videoFile)
    processForm(formPost)
      .then(() => closeModal());
  }

  const renderPreview = () => (
    <Preview video>
      <PreviewVideo>
        <VideoSrc src={post.previewUrl} type="video/mp4" />
        Your browser does not support the video tag.
      </PreviewVideo>
    </Preview>
  )

  const { previewUrl } = post;
  const inPreview = Boolean(previewUrl)
  return (
    <Card>
      <Header>{currentUser.username}</Header>
      <PreviewBox active>
        {previewUrl && renderPreview()}
      </PreviewBox>
      <Form onSubmit={handleSubmit}>
        <UploadBox>
          <NativeFileBox className={inPreview && 'small'}>
            <InvisibleFileInput
              onChange={handleFileInput}
              accept="video/mp4, video/ogg"
            />
            <Icon icon={iVideo} smallSize={inPreview} />
            <Text>{inPreview ? 'Replace video' : 'Upload a video'}</Text>
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

export default VideoForm;
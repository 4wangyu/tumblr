import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { selectCurrentUser } from 'store/session/selectors';
import { Creators as Modal } from 'store/modal/actions';
import { Creators as Posts } from 'store/posts/actions';
import { faVideo as iVideo } from '@fortawesome/free-solid-svg-icons';
import {
  Card,
  PreviewBox, PreviewVideo, VideoSrc,
  Header, Form,
  UploadBox, NativeFileBox, InvisibleFileInput, Text,
  ContentBox, CaptionInput,
  Footer, CloseBtn, PostBtn,
  Preview, FAIcon
} from './PostFormBase.styled';


const VideoForm = () => {

  const currentUser = useSelector(selectCurrentUser)
  const dispatch = useDispatch;
  const closeModal = () => dispatch(Modal.closeModal());
  const createPost = formData => dispatch(Posts.createPost(formData));

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
    createPost(formPost).then(() => closeModal());
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
            <FAIcon icon={iVideo} smallSize={inPreview} />
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
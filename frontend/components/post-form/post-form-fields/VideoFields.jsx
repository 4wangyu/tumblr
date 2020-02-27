import React, { useState } from 'react'
import {
  PreviewIndex, Preview, PreviewVideo,
  Form, Dropzone, DropzoneCell, DropzoneCellTitle, VideoIcon,
  HiddenFileInput,
  Caption, CaptionTextarea
} from './PostFormFields.styled';

const VideoFields = ({ createPost, closeModal }) => {
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
        <source src={post.previewUrl} type="video/mp4" />
        Your browser does not support the video tag.
      </PreviewVideo>
    </Preview>
  )

  const { previewUrl } = post;
  const inPreview = Boolean(previewUrl)
  return (
    <>
      <PreviewIndex active>{previewUrl && renderPreview()}</PreviewIndex>
      <Form onSubmit={handleSubmit}>
        <Dropzone>
          <DropzoneCell minimize={inPreview}>
            <HiddenFileInput
              onChange={handleFileInput}
              accept="video/mp4, video/ogg"
            />
            <VideoIcon large={!inPreview} />
            <DropzoneCellTitle>{inPreview ? 'Replace video' : 'Upload a video'}</DropzoneCellTitle>
          </DropzoneCell>
        </Dropzone>
        <Caption reveal={inPreview}>
          <CaptionTextarea
            name="caption"
            onChange={handleTextInput}
            value={post.caption}
          />
        </Caption>
      </Form>
    </>
  )
}

export default VideoFields;
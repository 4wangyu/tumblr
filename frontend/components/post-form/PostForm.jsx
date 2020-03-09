import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectCurrentUser } from 'store/selectors';
import { Creators as Modal } from 'store/modal/actions';
import { Thunks as Posts } from 'store/posts/actions';
import { Card, CardContent } from 'styled/base/Card.styled';
import { CardHeader, CardFooter } from './PostForm.styled';
import Btn from 'styled/base/Btn.styled';
import ImageGallery from './post-form-fields/ImageGalleryFields';
import Video from './post-form-fields/VideoFields';
import Audio from './post-form-fields/AudioFields';
import TagManager from './TagManager';
import pojoToFormData from 'util/pojo_to_form_data';

const PostForm = ({ postType, post = {} }) => {
  const currentUser = useSelector(selectCurrentUser);
  const dispatch = useDispatch();
  const closeModal = () => dispatch(Modal.closeModal());
  const createPost = formData => dispatch(Posts.createPost(formData));
  const updatePost = (postId, formData) => dispatch(Posts.updatePost(postId, formData));

  const getFields = props => ({
    ImageGallery: <ImageGallery {...props} />,
    Video: <Video {...props} />,
    Audio: <Audio {...props} />,
  });

  const handleTextInput = e => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const [formData, setFormData] = useState(post);

  const processFormData = () => {
    const newPost = pojoToFormData(formData);

    if (formData.id) {
      updatePost(formData.id, newPost)
        .then(() => closeModal());
    } else {
      createPost(newPost)
        .then(() => closeModal());
    };
  };

  return (
    <Card>
      <CardHeader>{currentUser.username}</CardHeader>
      <CardContent noPadding>
        {getFields({ formData, setFormData, handleTextInput })[postType]}
        <TagManager formData={formData} setFormData={setFormData} />
      </CardContent>
      <CardFooter>
        <Btn secondary onClick={closeModal}>Close</Btn>
        <Btn onClick={processFormData}>Post</Btn>
      </CardFooter>
    </Card>
  );
};

export default PostForm;
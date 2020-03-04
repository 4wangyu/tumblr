import React, { useState, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectCurrentUser } from 'store/selectors';
import { Creators as Modal } from 'store/modal/actions';
import { Thunks as Posts } from 'store/posts/actions';
import { Card, CardContent } from 'styled/base/Card.styled';
import { CardHeader, CardFooter } from './PostForm.styled';
import Btn from 'styled/base/Btn.styled';
import ImageGallery from './post-form-fields/ImageGalleryFields';
import Video from './post-form-fields/VideoFields';
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
  });

  const [formData, setFormData] = useState(post);

  const processFormData = () => {
    const newPost = pojoToFormData(formData);
    debugger;
    if (formData.id) {
      updatePost(formData.id, newPost)
        .then(() => closeModal());
    } else {
      createPost(newPost)
        .then(() => closeModal());
    }

  };

  return (
    <Card>
      <CardHeader>{currentUser.username}</CardHeader>
      <CardContent noPadding>
        {getFields({ formData, setFormData })[postType]}
        <TagManager formData={formData} setFormData={setFormData} />
      </CardContent>
      <CardFooter>
        <Btn secondary onClick={closeModal}>Close</Btn>
        <Btn submit onClick={processFormData}>Post</Btn>
      </CardFooter>
    </Card>
  );
};

export default PostForm;
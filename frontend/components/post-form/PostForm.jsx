import React, { useState, useEffect, useCallback, createContext } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectCurrentUser, selectPostById } from 'store/selectors';
import { Creators as Modal } from 'store/modal/actions';
import { Thunks as Posts } from 'store/posts/actions';
import { Card, CardContent } from 'styled/base/Card.styled';
import { CardHeader, CardFooter } from './PostForm.styled';
import Btn from 'styled/base/Btn.styled';
import ImageGallery from './post-form-fields/ImageGalleryFields';
import Video from './post-form-fields/VideoFields';
import Audio from './post-form-fields/AudioFields/index';
import Link from './post-form-fields/LinkFields/index';
import Quote from './post-form-fields/QuoteFields/index';
import TagManager from './TagManager';
import pojoToFormData from 'util/pojo_to_form_data';

export const FormContext = createContext();

const PostForm = ({ postType, postId = null }) => {
  const { currentUser, post } = useSelector(state => ({
    currentUser: selectCurrentUser(state),
    post: selectPostById(state, { postId })
  }));

  const dispatch = useDispatch();
  const closeModal = () => dispatch(Modal.closeModal());
  const createPost = formFields => dispatch(Posts.createPost(formFields));
  const updatePost = (postId, formFields) => dispatch(Posts.updatePost(postId, formFields));
  const [formFields, setFormFields] = useState(post || {});

  useEffect(() => {
    if (post) setFormFields(prev => ({ ...post, ...prev }));
  }, [post])

  const getFields = () => ({
    ImageGallery: <ImageGallery />,
    Video: <Video />,
    Audio: <Audio />,
    Link: <Link />,
    Quote: <Quote />
  });

  const handleTextInput = useCallback(e => {
    const { name, value } = e.target;
    setFormFields(prev => ({ ...prev, [name]: value }));
  }, [formFields]);

  const processFormData = useCallback(() => {
    const newPost = pojoToFormData(formFields);

    if (formFields.id) {
      updatePost(formFields.id, newPost)
        .then(() => closeModal());
    } else {
      createPost(newPost)
        .then(() => closeModal());
    };
  }, [formFields]);

  return (
    <Card>
      <CardHeader>{currentUser.username}</CardHeader>
      <CardContent noPadding>
        <FormContext.Provider value={{ formFields, ...formFields, setFormFields, handleTextInput }}>
          {getFields()[postType]}
          <TagManager />
        </FormContext.Provider>
      </CardContent>
      <CardFooter>
        <Btn secondary onClick={closeModal}>Close</Btn>
        <Btn onClick={processFormData}>Post</Btn>
      </CardFooter>
    </Card>
  );
};

export default PostForm;
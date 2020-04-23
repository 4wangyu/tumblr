import React, { useState, useEffect, useCallback, createContext } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectCurrentUser, selectPostById } from 'store/selectors';
import { Creators as Modal } from 'store/modal/actions';
import { Thunks as Posts } from 'store/posts/actions';
import { Card, CardContent } from 'styled/base/Card.styled';
import { FormHeader, FormFooter } from './PostForm.styled';
import { Btn } from 'components/atoms/Btn/Btn.styled';
import ImageGallery from './post-form-fields/ImageGalleryFields';
import Video from './post-form-fields/VideoFields';
import Audio from './post-form-fields/AudioFields/index';
import Link from './post-form-fields/LinkFields/index';
import Quote from './post-form-fields/QuoteFields/index';
import Text from './post-form-fields/TextFields/index';
import Chat from './post-form-fields/ChatFields/index';
import TagManager from './TagManager';
import pojoToFormData from 'util/pojo_to_form_data';
import Loader from 'components/atoms/Loader';
import FormError from './FormError';

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
  const [errors, setErrors] = useState({})
  const [isLoading, setLoading] = useState(false)
  const [required, setRequired] = useState({})

  useEffect(() => {
    if (post) setFormFields(prev => ({ ...post, ...prev }));
  }, [post])

  useEffect(() => {
    setErrors({})
  }, [formFields])

  const getFields = () => ({
    ImageGallery: <ImageGallery />,
    Video: <Video />,
    Audio: <Audio />,
    Link: <Link />,
    Quote: <Quote />,
    Text: <Text />,
    Chat: <Chat />
  });

  const handleTextInput = useCallback(e => {
    const { name, value } = e.target;
    setFormFields(prev => ({ ...prev, [name]: value }));
  }, [formFields]);

  const processFormData = () => {
    setLoading(true)
    const newPost = pojoToFormData(formFields);
    (formFields.id ? updatePost(formFields.id, newPost) : createPost(newPost))
      .then(() => closeModal())
      .fail(({ responseText: errorJSON }) => setErrors(JSON.parse(errorJSON)))
      .always(() => setLoading(false));
  };

  return (
    <Card>
      <FormHeader>
        <span>{currentUser.username}</span>
        <Loader isLoading={isLoading} size='small' />
      </FormHeader>
      <FormError errors={errors} />
      <CardContent noPadding>
        <FormContext.Provider value={{ formFields, ...formFields, setFormFields, handleTextInput }}>
          {getFields()[postType]}
          <TagManager />
        </FormContext.Provider>
      </CardContent>
      <FormFooter>
        <Btn type='secondary' onClick={closeModal}>Close</Btn>
        <Btn onClick={processFormData}>Post</Btn>
      </FormFooter>
    </Card>
  );
};

export default PostForm;
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectCurrentUser } from 'store/selectors';
import { Creators as Modal } from 'store/modal/actions';
import { Creators as Posts } from 'store/posts/actions';
import { Card, CardContent } from 'styled/base/Card.styled';
import { CardHeader, CardFooter } from './PostForm.styled';
import Btn from 'styled/base/Btn.styled';
import ImageGallery from './post-form-fields/ImageGalleryFields';
import Video from './post-form-fields/VideoFields';

const PostForm = ({ postType }) => {
  const currentUser = useSelector(selectCurrentUser);
  const dispatch = useDispatch;
  const closeModal = () => dispatch(Modal.closeModal());
  const createPost = formData => dispatch(Posts.createPost(formData));

  const getFields = props => ({
    ImageGallery: <ImageGallery {...props} />,
    Video: <Video {...props} />,
  });

  return (
    <Card>
      <CardHeader>{currentUser.username}</CardHeader>
      <CardContent noPadding>
        {getFields({ createPost, closeModal })[postType]}
      </CardContent>
      <CardFooter>
        <Btn secondary onClick={closeModal}>Close</Btn>
        <Btn submit onClick={() => { }}>Post</Btn>
      </CardFooter>
    </Card>
  );
};

export default PostForm;
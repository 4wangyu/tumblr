import React from 'react';
import { useSelector } from 'react-redux';
import { selectCurrentUser } from 'store/selectors';
import { Card, CardContent } from './Post.styled';
import PostHeader from './PostHeader';
import ImageGallery from './post-content/ImageGalleryContent';
import Video from './post-content/VideoContent';
import Audio from './post-content/AudioContent';
import PostFooter from './PostFooter';

const Post = ({ post }) => {
  const currentUser = useSelector(selectCurrentUser);
  const postAuthor = useSelect(state => selectUserById(state, { userId: post.userId }));
  // const postReblogger = useSelect(state => selectUserById(state, { userId: ?}));

  const getContent = postData => ({
    ImageGallery: <ImageGallery post={postData} />,
    Video: <Video post={postData} />,
    Audio: <Audio post={postData} />,
  });

  return (
    <Card>
      <PostHeader
        currentUser={currentUser}
        postAuthor={postAuthor}
        postReblogger={null}
      />
      <CardContent>{getContent(post)[post.postType]}</CardContent>
      <PostFooter
        currentUser={currentUser}
        post={post}
      />
    </Card>
  );
};




export default Post;
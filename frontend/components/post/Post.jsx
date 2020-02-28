import React from 'react';
import { useSelector } from 'react-redux';
import { selectCurrentUser, selectUserById } from 'store/selectors';
import { Card, CardContent, Tags, Tag } from 'styled/base/Card.styled';
import PostHeader from './PostHeader';
import ImageGallery from './post-content/ImageGalleryContent';
import Video from './post-content/VideoContent';
import Audio from './post-content/AudioContent';
import PostFooter from './PostFooter';

const Post = ({ post }) => {
  const [currentUser, postAuthor] = useSelector(state => [selectCurrentUser(state), selectUserById(state, { userId: post.userId })]);
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
      <CardContent noPadding={true}>
        {getContent(post)[post.postType]}
        {(post.tags.length > 0) && <Tags>{post.tags.map(tag => <Tag>#{tag}</Tag>)}</Tags>}
      </CardContent>
      <PostFooter
        currentUser={currentUser}
        post={post}
      />
    </Card>
  );
};




export default Post;
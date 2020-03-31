import React, { createContext } from 'react';
import { useSelector } from 'react-redux';
import { selectCurrentUser, selectUserById } from 'store/selectors';
import { Card, CardContent } from 'styled/base/Card.styled';
import PostHeader from './PostHeader';
import PostFooter from './PostFooter';
import PostContent from './PostContent';
import PostTags from './PostTags';

export const PostContext = createContext()

const Post = ({ post }) => {
  const user = useSelector(selectCurrentUser)
  const author = useSelector(state => selectUserById(state, { userId: post.userId }))
  const authorIsUser = user?.id === author?.id;
  const isLiked = post.likerIds.includes(user.id);
  const isFollowingAuthor = user.followeeIds.includes(author.id);

  if (!post) return null;

  return (
    <Card>
      <PostContext.Provider value={{ post, user, author, authorIsUser, userIsAuthor: authorIsUser, isLiked, isFollowingAuthor }}>
        <PostHeader />
        <CardContent noPadding={true}>
          <PostContent />
          <PostTags />
        </CardContent>
        <PostFooter />
      </PostContext.Provider>
    </Card >
  );
};

// <CardContent noPadding={true}>
// <PostContent />
// <PostTags />
// </CardContent>




export default Post;
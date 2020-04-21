import React, { createContext } from 'react';
import { useSelector } from 'react-redux';
import { selectCurrentUser, selectUserById } from 'store/selectors';
import { PostContainer, PostMain, PostBodyText } from './Post.styled';
import PostAvatar from './PostAvatar';
import PostHeader from './PostHeader';
import PostFooter from './PostFooter';
import PostContent from './PostContent';
import PostTags from './PostTags';

export const PostContext = createContext()

const Post = ({ post, size = 'large'}) => {
  const user = useSelector(selectCurrentUser)
  const author = useSelector(state => selectUserById(state, { userId: post.userId }))
  const authorIsUser = user.id === author.id;
  const isLiked = post.likerIds.includes(user.id);
  const authorIsFollowing = user.followeeIds.includes(author.id);

  return (
    <PostContainer size={size}>
      <PostContext.Provider value={{ post, user, author, authorIsUser, userIsAuthor: authorIsUser, isLiked, authorIsFollowing, size,...post }}>
       <PostAvatar />
        <PostHeader />
        <PostMain>
          <PostContent />
          {post.body && <PostBodyText>{post.body}</PostBodyText>}
          <PostTags />
        </PostMain>
        <PostFooter />
      </PostContext.Provider>
    </PostContainer>
  );
};

export default Post;
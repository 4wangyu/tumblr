import React, { useContext } from 'react'
import { PostHeaderContainer, BlogLink, UserAvatar } from './PostHeader.styled';
import { PostContext } from '../Post';
import FollowBtn from 'components/atoms/FollowBtn';

const PostHeader = () => {
  const { author } = useContext(PostContext)

  return (
    <PostHeaderContainer>
      <UserAvatar src={author.avatarAttachment.url} />
      <BlogLink to='/'>{author.username}</BlogLink>
      <FollowBtn user={author} />
    </PostHeaderContainer>
  )
};

export default PostHeader;



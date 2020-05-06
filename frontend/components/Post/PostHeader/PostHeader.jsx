import React, { useContext } from 'react'
import { PostHeaderContainer, BlogLink } from './PostHeader.styled';
import { PostContext } from '../Post';
import FollowBtn from 'components/atoms/FollowBtn';
import UserAvatar from 'components/atoms/UserAvatar';

const PostHeader = () => {
  const { author, avatarPosition } = useContext(PostContext)

  return (
    <PostHeaderContainer>
      {avatarPosition === 'inner' && <UserAvatar avatarAttachment={author.avatarAttachment} size='medium' />}
      <BlogLink to='/'>{author.username}</BlogLink>
      <FollowBtn user={author} />
    </PostHeaderContainer>
  )
};

export default PostHeader;



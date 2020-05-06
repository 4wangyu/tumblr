import React, { useContext } from 'react';
import { PostContext } from "../Post";
import { PostAvatarContainer, AvatarBox } from "./PostAvatar.styled";
import UserAvatar from 'components/atoms/UserAvatar';

const PostAvatar = () => {
  const { author, avatarPosition } = useContext(PostContext);

  if (avatarPosition === 'inner') return null;
  
  return (
    <PostAvatarContainer>
      <AvatarBox>
        <UserAvatar avatarAttachment={author.avatarAttachment} size='large' />
      </AvatarBox>
    </PostAvatarContainer>
  )
}

export default PostAvatar

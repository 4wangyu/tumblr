import React, { useContext } from 'react';
import { PostContext } from "../Post";
import { PostAvatarContainer, AvatarImg } from "./PostAvatar.styled";

const PostAvatar = () => {
  const { size, author } = useContext(PostContext);

  return (
    <PostAvatarContainer size={size}>
      <AvatarImg src={author.avatarAttachment.url} />
    </PostAvatarContainer>

  )
}

export default PostAvatar

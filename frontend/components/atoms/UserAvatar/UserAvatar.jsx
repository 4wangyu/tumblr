import React from 'react'
import { UserAvatarContainer } from './UserAvatar.styled';
import LazyImage from 'components/atoms/LazyImage';

const UserAvatar = ({ avatarAttachment: { url, width, height }, size='medium' }) => {
  return (
    <UserAvatarContainer size={size}>
      <LazyImage src={url} width={width} height={height} alt="User avatar" />
    </UserAvatarContainer>
  );
};

export default UserAvatar

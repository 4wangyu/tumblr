import React from 'react';
import { BlogItemContainer, Avatar, HeaderContainer, HeaderUsername, HeaderTitle, TimesIcon } from './BlogItem.styled';
import FollowBtn from 'components/atoms/FollowBtn';

const BlogItem = ({
  user,
  handleRemove
}) => {
  if (!user) return null;
  const { avatarAttachment: { url: avatarUrl }, username, title } = user;

  return (
    <BlogItemContainer>
      <Avatar src={avatarUrl} />
      <HeaderContainer>
        <HeaderUsername>{username}</HeaderUsername>
        <HeaderTitle>{title}</HeaderTitle>
      </HeaderContainer>
      <FollowBtn user={user} onClick={handleRemove} />
      <TimesIcon onClick={handleRemove} />
    </BlogItemContainer>
  );
};

export default BlogItem;
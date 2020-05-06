import React from 'react';
import { BlogItemContainer, HeaderContainer, HeaderUsername, HeaderTitle, TimesIcon } from './BlogItem.styled';
import FollowBtn from 'components/atoms/FollowBtn';
import UserAvatar from 'components/atoms/UserAvatar';

const BlogItem = ({
  user,
  handleRemove
}) => {
  if (!user) return null;
  const { avatarAttachment, username, title } = user;

  return (
    <BlogItemContainer>
      <UserAvatar avatarAttachment={avatarAttachment} />
      <HeaderContainer>
        <HeaderUsername>{username}
          <HeaderTitle>
            <br />
            {title}
          </HeaderTitle>
        </HeaderUsername>

      </HeaderContainer>
      <FollowBtn user={user} onClick={handleRemove} />
      <TimesIcon onClick={handleRemove} />
    </BlogItemContainer>
  );
};

export default BlogItem;
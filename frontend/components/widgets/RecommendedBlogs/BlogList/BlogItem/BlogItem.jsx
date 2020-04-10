import React from 'react';
import { selectCurrentUser } from 'store/selectors';
import { Thunks as UserThunks } from 'store/users/actions';
import { useDispatch, useSelector } from 'react-redux';
import { BlogItemContainer, Avatar, HeaderContainer, HeaderUsername, FollowBtn, TimesIcon } from './BlogItem.styled';

const BlogItem = ({
  user,
  handleRemove
}) => {
  if (!user) return null;
  const { avatarAttachment: { url: avatarUrl }, username, id: userId } = user;

  const currentUser = useSelector(selectCurrentUser);
  const isCurrentUserFollowing = currentUser.followeeIds.includes(userId);

  const dispatch = useDispatch();
  const handleFollow = () => {
    handleRemove();
    dispatch(UserThunks.toggleUserFollow(userId, isCurrentUserFollowing));
  };

  return (
    <BlogItemContainer>
      <Avatar src={avatarUrl} />
      <HeaderContainer>
        <HeaderUsername>{username}</HeaderUsername>
      </HeaderContainer>
      {!isCurrentUserFollowing && <FollowBtn onClick={handleFollow}>Follow</FollowBtn>}
      <TimesIcon onClick={handleRemove} />
    </BlogItemContainer>
  );
};

export default BlogItem;
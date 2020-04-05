import React, { useMemo } from 'react';
import { selectCurrentUser } from 'store/selectors';
import { Thunks as Users } from 'store/users/actions';
import { Creators as Sidebar } from 'store/sidebar/actions';
import { useDispatch, useSelector } from 'react-redux';
import {
  SidebarBlog, SidebarBlogItem,
  BlogAvatar,
  BlogHeader, BlogHeaderUsername,
  FollowBtn, RemoveBlogIcon
} from './Sidebar.styled';

const BlogBar = ({
  user,
  variant = 'default'
}) => {
  if (!user) return null;
  const dispatch = useDispatch();
  const currentUser = useSelector(selectCurrentUser);

  const isCurrentUserFollowing = currentUser.followeeIds.includes(user.id);

  const handleFollow = e => {
    dispatch(Sidebar.removeRecommendedUser(user.id))
    dispatch(Users.toggleUserFollow(user.id, isCurrentUserFollowing));
  }

  const handleRemoveItem = e => dispatch(Sidebar.removeRecommendedUser(user.id));

  const BlogWrapper = useMemo(() => variant === 'list_item' ? SidebarBlogItem : SidebarBlog, [variant])

  const { avatarAttachment: {url: avatarUrl}, username } = user;
  return (
    <BlogWrapper>
      <BlogAvatar src={avatarUrl} />
      <BlogHeader>
        <BlogHeaderUsername>{username}</BlogHeaderUsername>
      </BlogHeader>
      {!isCurrentUserFollowing && <FollowBtn>Follow</FollowBtn>}
      {variant === 'list_item' && <RemoveBlogIcon onClick={handleRemoveItem} />}
    </BlogWrapper>
  );
};

export default BlogBar;
import React from 'react'
import { useDispatch } from 'react-redux';
import { Thunks as Users } from 'store/users/actions';
import { CardHeader, BlogLink, ReblogLink, FollowBtn } from './PostHeader.styled';
import { ReblogIcon } from 'styled/base/Icon.styled';

const PostHeader = ({
  currentUser,
  postAuthor,
  postReblogger = undefined
}) => {

  const currentUserIsAuthor = postAuthor.id === currentUser.id;
  const isFollowingAuthor = currentUser.followeeIds.includes(postAuthor.id);
  const dispatch = useDispatch();
  const toggleUserFollow = (userId, isFollowing) => dispatch(Users.toggleUserFollow(userId, isFollowing));

  const handleFollow = e => {
    toggleUserFollow(postAuthor.id, isFollowingAuthor);
  }

  return (
    <CardHeader>
      <BlogLink to='/'>{postAuthor.username}</BlogLink>
      {postReblogger && <ReblogLink to='/'><ReblogIcon />{postReblogger}</ReblogLink>}
      {!currentUserIsAuthor && !isFollowingAuthor && <FollowBtn onClick={handleFollow}>Follow</FollowBtn>}
    </CardHeader>
  )
};

export default PostHeader;



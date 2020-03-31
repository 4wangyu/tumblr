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

  const currentUserIsAuthor = (postReblogger ? postReblogger.id : postAuthor.id) === currentUser.id;
  const isFollowingAuthor = currentUser.followeeIds.includes((postReblogger ? postReblogger.id : postAuthor.id));
  const dispatch = useDispatch();
  const toggleUserFollow = (userId, isFollowing) => dispatch(Users.toggleUserFollow(userId, isFollowing));

  const handleFollow = e => {
    const userId = postReblogger ? postReblogger.id : postAuthor.id;
    toggleUserFollow(userId, isFollowingAuthor);
  };

  return (
    <CardHeader>
      <BlogLink to='/'>{postReblogger ? postReblogger.username : postAuthor.username}</BlogLink>
      {postReblogger && <><ReblogIcon /><ReblogLink to='/'>{postAuthor.username}</ReblogLink></>}
      {!currentUserIsAuthor && !isFollowingAuthor && <FollowBtn onClick={handleFollow}>Follow</FollowBtn>}
    </CardHeader>
  )
};

export default PostHeader;



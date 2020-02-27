import React from 'react'
import { CardHeader, BlogLink, ReblogLink, FollowBtn } from './PostHeader.styled';
import { ReblogIcon } from 'styled/base/Icon.styled';

const PostHeader = ({
  currentUser,
  postAuthor,
  postReblogger = undefined
}) => {

  const currentUserIsAuthor = postAuthor.id === currentUser.id;

  const handleFollow = e => {

  }

  return (
    <CardHeader>
      <BlogLink to='/'>{postAuthor.username}</BlogLink>
      {postReblogger && <ReblogLink to='/'><ReblogIcon />{postReblogger}</ReblogLink>}
      {!currentUserIsAuthor && <FollowBtn onClick={handleFollow} />}
    </CardHeader>
  )
};

export default PostHeader;



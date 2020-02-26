import React from 'react'
import { CardHeader, BlogLink, ReblogLink, ReblogIcon, FollowBtn } from './PostHeader.styled';
import { ReblogIcon } from 'styled/base/Icon.styled';

export const PostHeader = ({
  currentUser,
  postAuthor,
  postReblogger = undefined
}) => {

  const currentUserIsAuthor = postAuthor.id === currentUser.id;

  const handleFollow = e => {

  }

  return (
    <CardHeader>
      <BlogLink>{postAuthor.username}</BlogLink>
      {postReblogger && <ReblogLink><ReblogIcon />{postReblogger}</ReblogLink>}
      {!currentUserIsAuthor && <FollowBtn onClick={handleFollow} />}
    </CardHeader>
  )
};



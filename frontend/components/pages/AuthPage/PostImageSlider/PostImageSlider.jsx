import React, { useState, useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { selectPostsByCollection } from 'store/selectors';
import { Thunks as Posts } from 'store/posts/actions';

import UserAvatar from 'components/atoms/UserAvatar'

import { PostImage, PostDetails, PostUsername, PageContent } from './PostImageSlider.styled';

// PostSliderBackground
const APPROVED = 'approved';

const PostImageSlider = ({ children }) => {


  const dispatch = useDispatch();
  const fetchApprovedPosts = () => dispatch(Posts.fetchPostsCollection(APPROVED))
  const approvedPosts = useSelector(s => selectPostsByCollection(s, { collection: APPROVED }));
  const currentImage = useMemo(() => approvedPosts[0]?.imageAttachments[0])

  useEffect(() => {
    fetchApprovedPosts();
  }, [])

  if (!currentImage) return null;

  return (
    <>
      <PostImage
        src={currentImage.url}
      />
      <PostDetails>
        <PostAbout>
          Posted by<PostUsername>Mwah</PostUsername>
        </PostAbout>
        <UserAvatar
          avatarAttachment={currentImage}
          size='small'
        />
      </PostDetails>
      <PageContent>
        {children}
      </PageContent>
    </>
  )
}



export default PostImageSlider

import React, { useState, useContext } from 'react';
import { useDispatch } from 'react-redux';
import { Thunks as Posts } from 'store/posts/actions';
import { Creators as Modal } from 'store/modal/actions';
import { CardFooter, Notes, Controls, PadBox, ControlsPopover, Control } from './PostFooter.styled';
import { ShareIcon, ReplyIcon, ReblogIcon, LikeIcon, ControlsIcon } from 'styled/base/Icon.styled';
import { PostContext } from '../Post';

const PostFooter = () => {

  const { post, isLiked, userIsAuthor } = useContext(PostContext);

  const dispatch = useDispatch();
  const togglePostLike = (postId, isLiked) => dispatch(Posts.togglePostLike(postId, isLiked));
  const destoryPost = () => dispatch(Posts.destroyPost(post.id));
  const openConfirmationModal = () => {
    dispatch(Modal.openModal('Confirmation', {
      onConfirm: destoryPost,
      message: 'Are you sure you want to delete this post?'
    }));
    setPopoverOpen(false)
  };
  const openEditPostModal = () => {
    dispatch(Modal.openModal('PostForm', {
      postId: post.id,
      postType: post.contentType
    }));
    setPopoverOpen(false)
  };

  const [popoverOpen, setPopoverOpen] = useState(false);
  const togglePopover = () => setPopoverOpen(prev => !prev);

  const handleLike = () => togglePostLike(post.id, isLiked);

  return (
    <CardFooter>
      <Notes>{post.likerIds.length + 1} note{post.likerIds.length > 0 && 's'}</Notes>
      <Controls>
        <PadBox hidden>
          <ShareIcon />
        </PadBox>
        <PadBox hidden>
          <ReplyIcon />
        </PadBox>
        <PadBox hidden>
          <ReblogIcon />
        </PadBox>
        <PadBox>
          <LikeIcon onClick={handleLike} liked={isLiked} />
        </PadBox>
        {userIsAuthor && <PadBox><ControlsIcon onClick={togglePopover} /></PadBox>}
        <ControlsPopover open={popoverOpen}>
          <Control onClick={openEditPostModal}>Edit</Control>
          <Control onClick={openConfirmationModal}>Delete</Control>
        </ControlsPopover>
      </Controls>
    </CardFooter>
  );
};

export default PostFooter;
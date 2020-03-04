import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Thunks as Posts } from 'store/posts/actions';
import { Creators as Modal } from 'store/modal/actions';
import { CardFooter, Notes, Controls, PadBox, ControlsPopover, Control } from './PostFooter.styled';
import { ShareIcon, ReplyIcon, ReblogIcon, LikeIcon, ControlsIcon } from 'styled/base/Icon.styled';

const PostFooter = ({ post, currentUser }) => {
  const liked = post.likerIds.includes(currentUser.id);
  const currentUserIsAuthor = post.userId === currentUser.id;

  const dispatch = useDispatch();
  const togglePostLike = (postId, isLiked) => dispatch(Posts.togglePostLike(postId, isLiked));
  const destoryPost = () => dispatch(Posts.destroyPost(post.id));
  const openConfirmationModal = () => dispatch(Modal.openModal('Confirmation', { onConfirm: destoryPost, message: 'Are you sure you want to delete this post?' }));
  const openEditPostModal = () => dispatch(Modal.openModal('PostForm', { post, postType: post.contentType }));

  const [popoverOpen, setPopoverOpen] = useState(false);
  const togglePopover = () => setPopoverOpen(prev => !prev);

  const handleLike = () => togglePostLike(post.id, liked);

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
          <LikeIcon onClick={handleLike} liked={liked} />
        </PadBox>
        {currentUserIsAuthor && <PadBox><ControlsIcon onClick={togglePopover} /></PadBox>}
        <ControlsPopover open={popoverOpen}>
          <Control onClick={openEditPostModal}>Edit</Control>
          <Control onClick={openConfirmationModal}>Delete</Control>
        </ControlsPopover>
      </Controls>
    </CardFooter>
  );
};

export default PostFooter;
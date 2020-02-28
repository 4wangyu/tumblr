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
  const openDeletePostModal = () => dispatch(Modal.openModal('DeletePost', { postId: post.id }));

  const [popoverOpen, setPopoverOpen] = useState(false);
  const togglePopover = () => setPopoverOpen(prev => !prev);

  const handleLike = () => togglePostLike(post.id, liked);

  return (
    <CardFooter>
      <Notes>{'23,468'} notes</Notes>
      <Controls>
        <PadBox hidden>
          <ShareIcon />
        </PadBox>
        <PadBox hidden>
          <ReplyIcon />
        </PadBox>
        <PadBox>
          <ReblogIcon />
        </PadBox>
        <PadBox>
          <LikeIcon onClick={handleLike} liked={liked} />
        </PadBox>
        {currentUserIsAuthor && <PadBox><ControlsIcon onClick={togglePopover} /></PadBox>}
        <ControlsPopover open={popoverOpen}>
          <Control>Edit</Control>
          <Control onClick={openDeletePostModal}>Delete</Control>
        </ControlsPopover>
      </Controls>
    </CardFooter>
  );
};

export default PostFooter;
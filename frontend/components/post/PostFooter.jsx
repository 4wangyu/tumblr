import React from 'react';
import { useDispatch } from 'react-redux';
import { Thunks as Posts } from 'store/posts/actions';
import { CardFooter, Notes, Controls, PadBox } from './PostFooter.styled';
import { ShareIcon, ReplyIcon, ReblogIcon, LikeIcon, ControlsIcon } from 'styled/base/Icon.styled';

const PostFooter = ({ post, currentUser }) => {
  const liked = post.likerIds.includes(currentUser.id);
  const currentUserIsAuthor = post.userId === currentUser.id;

  const dispatch = useDispatch();
  const togglePostLike = (postId, isLiked) => dispatch(Posts.togglePostLike(postId, isLiked));

  const handleLike = () => togglePostLike(post.id, liked);

  return (
    <CardFooter>
      <Notes>{'23,468'} notes</Notes>
      <Controls>
        <PadBox>
          <ShareIcon />
        </PadBox>
        <PadBox>
          <ReplyIcon />
        </PadBox>
        <PadBox>
          <ReblogIcon />
        </PadBox>
        <PadBox>
          <LikeIcon onClick={handleLike} liked={liked} />
        </PadBox>
        {currentUserIsAuthor && <PadBox><ControlsIcon /></PadBox>}
      </Controls>
    </CardFooter>
  );
};

export default PostFooter;
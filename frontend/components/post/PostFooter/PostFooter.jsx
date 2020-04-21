import React, { useContext } from 'react';
import { useDispatch } from 'react-redux';
import { Thunks as Posts } from 'store/posts/actions';
import { Creators as Modal } from 'store/modal/actions';
import {
  PostFooterContainer, Notes, ConfigContainer, ConfigItem,
  HeartIcon, TrashIcon, PenIcon
} from './PostFooter.styled';
import { PostContext } from '../Post';

const PostFooter = () => {

  const { post, isLiked, userIsAuthor } = useContext(PostContext);

  const dispatch = useDispatch();
  const togglePostLike = (postId, isLiked) => dispatch(Posts.togglePostLike(postId, isLiked));
  const destoryPost = () => dispatch(Posts.destroyPost(`${post.id}`));
  const openConfirmationModal = () => {
    dispatch(Modal.openModal('Confirmation', {
      onConfirm: destoryPost,
      message: 'Are you sure you want to delete this post?'
    }));
  };
  const openEditPostModal = () => {
    dispatch(Modal.openModal('PostForm', {
      postId: post.id,
      postType: post.contentType
    }));
  };

  const handleLike = () => togglePostLike(post.id, isLiked);

  return (
    <PostFooterContainer>
      <Notes>{post.likerIds.length + 1} note{post.likerIds.length > 0 && 's'}</Notes>
      <ConfigContainer>
        <ConfigItem>
          <HeartIcon onClick={handleLike} fillred={`${isLiked ? 'true' : 'false'}`} />
        </ConfigItem>
        {userIsAuthor && <>
          <ConfigItem>
            <TrashIcon onClick={openConfirmationModal} />
          </ConfigItem>
          <ConfigItem>
            <PenIcon onClick={openEditPostModal} />
          </ConfigItem>
        </>}
      </ConfigContainer>
    </PostFooterContainer>
  );
};

export default PostFooter;
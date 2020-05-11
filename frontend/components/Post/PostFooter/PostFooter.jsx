import React, { useContext, useState } from 'react';
import { useDispatch } from 'react-redux';
import { AnimatePresence } from 'framer-motion';

import { Thunks as Posts } from 'store/posts/actions';
import {
  PostFooterContainer, Notes, ConfigContainer, ConfigItem,
  HeartIcon, TrashIcon, PenIcon
} from './PostFooter.styled';
import { PostContext } from '../Post';
import PostFormModal from 'components/organisms/PostForm';
import { Modal } from 'contexts/ModalContext';
import ConfirmationModal from 'components/molecules/ConfirmationModal';


const PostFooter = () => {

  const { post, isLiked, userIsAuthor } = useContext(PostContext);

  const dispatch = useDispatch();
  const togglePostLike = (postId, isLiked) => dispatch(Posts.togglePostLike(postId, isLiked));
  const destoryPost = () => dispatch(Posts.destroyPost(`${post.id}`));

  const handleLike = () => togglePostLike(post.id, isLiked);


  const [isConfirmationModalOpen, setConfirmationModalOpen] = useState(false);
  const openConfirmationModal = () => setConfirmationModalOpen(true);
  const closeConfirmationModal = () => setConfirmationModalOpen(false);

  const [isPostFormModalOpen, setPostFormModalOpen] = useState(false);
  const openPostFormModal = () => setPostFormModalOpen(true);
  const closePostFormModal = (e, options) => {
    if (e?.target === e?.currentTarget || options?.child) {
      setPostFormModalOpen(false)
    };
  };

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
            <PenIcon onClick={openPostFormModal} />
          </ConfigItem>
        </>}
      </ConfigContainer>
      <AnimatePresence>
        {Boolean(isConfirmationModalOpen) && (
          <Modal
            onClose={closeConfirmationModal}
          >
            <ConfirmationModal
              message="Are you sure you want to delete this post?"
              onConfirm={destoryPost}
              onClose={closeConfirmationModal}
            />
          </Modal>
        )}
        {Boolean(isPostFormModalOpen) && (
          <Modal
            onClose={closePostFormModal}
          >
            <PostFormModal
              postId={post.id}
              postType={post.contentType}
              onClose={closePostFormModal}
            />
          </Modal>
        )}
      </AnimatePresence>
    </PostFooterContainer>
  );
};

export default PostFooter;
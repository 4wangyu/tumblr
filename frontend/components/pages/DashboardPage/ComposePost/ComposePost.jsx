import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectCurrentUser } from 'store/selectors';
import { postTypeIconData } from 'styled/base/Icon.styled';
import {
  ComposePostContainer, AvatarContainer, AvatarImg,
  MenuCellList, MenuCellItem, CellIcon, CellTitle
} from './ComposePost.styled';

import { Modal } from 'contexts/ModalContext';
import PostFormModal from 'components/organisms/PostForm';
import { AnimatePresence } from 'framer-motion';

import { useBreakpoint } from 'contexts/BreakpointContext';

const ComposePost = () => {

  const { md } = useBreakpoint();
  if (md) return null;
  const { avatarAttachment: { url: avatarUrl } } = useSelector(selectCurrentUser);

  const _modalInitialState = { postType: null, isOpen: false };
  const [{ postType, isOpen: isModalOpen }, setModal] = useState(_modalInitialState);
  const openModal = e => {
    const { postType } = e.currentTarget.dataset;
    setModal({ postType, isOpen: true })
  };
  const closeModal = (e, options) => {
    if (e?.target === e?.currentTarget || options?.child) {
      setModal(_modalInitialState);
    };
  };

  return (
    <ComposePostContainer>
      <AvatarContainer >
        <AvatarImg src={avatarUrl}></AvatarImg>
      </AvatarContainer>
      <MenuCellList>
        {Object.entries(postTypeIconData).map(([type, { color, icon, postType }]) => (
          <MenuCellItem key={type} data-post-type={postType} onClick={openModal}>
            <CellIcon color={color} icon={icon} />
            <CellTitle>{type.charAt(0).toUpperCase() + type.slice(1)}</CellTitle>
          </MenuCellItem>
        ))}
      </MenuCellList>
      <AnimatePresence>
        {Boolean(isModalOpen) && (
          <Modal
            onClose={closeModal}
          >
            <PostFormModal postType={postType} onClose={e => closeModal(e, { child: true })} />
          </Modal>
        )}
      </AnimatePresence>

    </ComposePostContainer>
  )
};
export default ComposePost;
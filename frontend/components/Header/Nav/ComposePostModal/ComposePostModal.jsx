import React, { useState } from 'react'
import { postTypeIconData } from 'styled/base/Icon.styled';
import { BtnIndex, PostBtn, BtnCoin, BtnIcon, BtnText } from './ComposePostModal.styled';
import { Modal } from 'contexts/ModalContext';
import PostFormModal from 'components/organisms/PostForm';
import { AnimatePresence } from 'framer-motion';

const ComposePostModal = ({ onClose: closeSelf }) => {

  const _modalInitialState = { postType: null, isOpen: false };
  const [{ postType, isOpen: isModalOpen }, setModal] = useState(_modalInitialState);
  const openModal = e => {
    const { postType } = e.currentTarget.dataset;
    setModal({ postType, isOpen: true })
  };
  const closeModal = (e, options) => {
    if (e?.target === e?.currentTarget || options?.child) {
      setModal(_modalInitialState);
      setTimeout(() => {
        closeSelf();
      }, 100);
    };

  };

  return (
    <BtnIndex>
      {Object.entries(postTypeIconData).map(([type, { color, icon, postType }]) => (
        <PostBtn key={type} data-post-type={postType} onClick={openModal}>
          <BtnCoin bg-color={color}>
            <BtnIcon icon={icon} />
          </BtnCoin>
          <BtnText>{type.charAt(0).toUpperCase() + type.slice(1)}</BtnText>
        </PostBtn>
      ))}
      <AnimatePresence>
        {Boolean(isModalOpen) && (
          <Modal
            onClose={closeModal}
          >
            <PostFormModal postType={postType} onClose={e => closeModal(e, { child: true })} />
          </Modal>
        )}
      </AnimatePresence>
    </BtnIndex>

  )
};

export default ComposePostModal;
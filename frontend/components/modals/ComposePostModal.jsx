import React from 'react'
import { useDispatch } from 'react-redux';
import { Creators as Modal } from 'store/modal/actions';
import { postTypeIconData } from 'styled/base/Icon.styled';
import { BtnIndex, PostBtn, BtnCoin, BtnIcon, BtnText } from './ComposePostModal.styled';

const ComposePostModal = () => {
  const dispatch = useDispatch();
  const openModal = (modal, options) => dispatch(Modal.openModal(modal, options));

  return (
    <BtnIndex>
      {Object.entries(postTypeIconData).map(([type, { color, icon, postType }]) => (
        <PostBtn key={type} onClick={() => openModal('PostForm', { postType })}>
          <BtnCoin bg-color={color}>
            <BtnIcon icon={icon} />
          </BtnCoin>
          <BtnText>{type.charAt(0).toUpperCase() + type.slice(1)}</BtnText>
        </PostBtn>
      ))}
    </BtnIndex>
  )
};

export default ComposePostModal;
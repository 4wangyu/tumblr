import React from 'react'
import { useDispatch } from 'react-redux';
import { Creators as Modal } from 'store/modal/actions';
import { postTypeIconData } from 'styled/base/Icon.styled';
import { BtnIndex, PostBtn, BtnCoin, BtnIcon, BtnText } from './ComposePostModal.styled';

const ComposePostModal = () => {
  const dispatch = useDispatch();
  const openModal = modal => dispatch(Modal.openModal(modal));

  return (
    <BtnIndex>
      {Object.entries(postTypeIconData).map(([type, { color, icon, modal }]) => (
        <PostBtn key={type} onClick={() => openModal(modal)}>
          <BtnCoin bg-color={color}>
            <BtnIcon icon={icon} />
          </BtnCoin>
          <BtnText>{type.toUpperCase()}</BtnText>
        </PostBtn>
      ))}
    </BtnIndex>
  )
};

export default ComposePostModal;
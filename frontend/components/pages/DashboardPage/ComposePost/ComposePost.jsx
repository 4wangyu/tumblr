import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectCurrentUser } from 'store/selectors';
import { Creators as Modal } from 'store/modal/actions';
import { postTypeIconData } from 'styled/base/Icon.styled';
import {
  ComposePostContainer, AvatarContainer, AvatarImg,
  MenuCellList, MenuCellItem, CellIcon, CellTitle
} from './ComposePost.styled';

const ComposePost = () => {
  const dispatch = useDispatch();
  const openModal = (modal, options) => dispatch(Modal.openModal(modal, options));
  const { avatarAttachment: { url: avatarUrl } } = useSelector(selectCurrentUser);

  return (
    <ComposePostContainer>
      <AvatarContainer >
        <AvatarImg src={avatarUrl}></AvatarImg>
      </AvatarContainer>
      <MenuCellList>
        {Object.entries(postTypeIconData).map(([type, { color, icon, postType }]) => (
          <MenuCellItem key={type} onClick={() => openModal('PostForm', { postType })}>
            <CellIcon color={color} icon={icon} />
            <CellTitle>{type.charAt(0).toUpperCase() + type.slice(1)}</CellTitle>
          </MenuCellItem>
        ))}
      </MenuCellList>
    </ComposePostContainer>
  )
};
export default ComposePost;
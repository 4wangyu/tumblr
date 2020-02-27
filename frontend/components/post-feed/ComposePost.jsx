import React from 'react';
import { useDispatch } from 'react-redux';
import { Creators as Modal } from 'store/modal/actions';
import { postTypeIconData } from 'styled/base/Icon.styled';
import {
  FeedColRow, PostBlogImgCube,
  CardBar, CardBarCell, CellIcon, CellTitle
} from './PostFeed.styled';

const ComposePost = ({ avatarUrl }) => {

  const dispatch = useDispatch();
  const openModal = (modal, options) => dispatch(Modal.openModal(modal, options));

  return (
    <FeedColRow>
      <PostBlogImgCube avatarUrl={avatarUrl} />
      <CardBar>
        {Object.entries(postTypeIconData).map(([type, { color, icon, postType }]) => (
          <CardBarCell key={type} onClick={() => openModal('PostForm', { postType })}>
            <CellIcon color={color} icon={icon} />
            <CellTitle>{type.charAt(0).toUpperCase() + type.slice(1)}</CellTitle>
          </CardBarCell>
        ))}
      </CardBar>
    </FeedColRow>
  )
};
export default ComposePost;
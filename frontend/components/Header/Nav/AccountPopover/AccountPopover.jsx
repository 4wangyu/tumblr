import React, { useContext, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AnimatePresence } from 'framer-motion';

import { Thunks as Users } from 'store/users/actions';
import { Thunks as Session } from 'store/session/actions';
import { selectCurrentUser } from 'store/selectors';
import Popover from 'components/molecules/Popover';
import {
  AccountMenu, MenuSection, MenuSubSection,
  MenuHeader, HeaderText, HeaderBtn,
  MenuList, MenuItem, ItemLink, ItemBtn, ItemIcon, ItemText, ItemStat,
  Thumblr, ThumblrDetails, ThumblrUsername, ThumblrTitle
} from './AccountPopover.styled';
import { faHeart, faUserPlus, faPalette } from '@fortawesome/free-solid-svg-icons';
import { PaletteToggleContext } from 'styled/StyleProvider';
import UserAvatar from 'components/atoms/UserAvatar';
import { Modal } from 'contexts/ModalContext';
import ConfirmationModal from 'components/molecules/ConfirmationModal';

const AccountPopover = ({ isOpen, close }) => {

  const { toggle, palette } = useContext(PaletteToggleContext);

  const { username, title, avatarAttachment, id, ...currentUser } = useSelector(selectCurrentUser);

  const dispatch = useDispatch();
  const logout = () => dispatch(Session.logout());
  const fetchCurrentUser = () => dispatch(Users.fetchUser(id));

  useEffect(() => {
    fetchCurrentUser()
  }, [])

  const countStat = prop => currentUser[prop]?.length;

  const accountItems = [
    { icon: faHeart, name: 'likes', userProperty: 'likedPostIds', to: '/' },
    { icon: faUserPlus, name: 'following', userProperty: 'followeeIds', to: '/' },
  ];

  const thumblrItems = [
    { name: 'posts', userProperty: 'postIds', to: '/' },
    { name: 'followers', userProperty: 'followerIds', to: '/' },
  ];

  const renderItems = items => items.map(({ to, icon, name, userProperty }) => (
    <MenuItem key={name}>
      <ItemLink to={to}>
        {icon && <ItemIcon icon={icon} />}
        <ItemText>{name}</ItemText>
        <ItemStat>{countStat(userProperty)}</ItemStat>
      </ItemLink>
    </MenuItem>
  ));

  const [isModalOpen, setModalOpen] = useState(false);
  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return (
    <Popover
      isOpen={isOpen}
      width="22rem"
      top="3.5rem"
      onClickOutside={close}
    >
      <AccountMenu>
        <MenuSection>
          <MenuHeader>
            <HeaderText>account</HeaderText>
            <HeaderBtn onClick={openModal}>Log out</HeaderBtn>
          </MenuHeader>
          <MenuList>
            {renderItems(accountItems)}
            <MenuItem key='palette'>
              <ItemBtn onClick={toggle}>
                <ItemIcon icon={faPalette} />
                <ItemText>{palette}</ItemText>
              </ItemBtn>
            </MenuItem>
          </MenuList>
        </MenuSection>
        <MenuSection>
          <MenuHeader>
            <HeaderText>thumblr</HeaderText>
          </MenuHeader>
          <Thumblr to="/">
            <UserAvatar avatarAttachment={avatarAttachment} size='small' />
            <ThumblrDetails>
              <ThumblrUsername>{username}
                <ThumblrTitle><br />{title}</ThumblrTitle>
              </ThumblrUsername>
            </ThumblrDetails>
          </Thumblr>
          <MenuSubSection>
            <MenuList>
              {renderItems(thumblrItems)}
            </MenuList>
          </MenuSubSection>
        </MenuSection>
      </AccountMenu>
      <AnimatePresence>
        {isModalOpen ? (
          <Modal
            onClose={closeModal}
          >
            <ConfirmationModal
              message="Are you sure you want to logout?"
              onConfirm={logout}
              onClose={closeModal}
            /> 
          </Modal>
        ) : null}
      </AnimatePresence>
    </Popover>
  );
};

export default AccountPopover;

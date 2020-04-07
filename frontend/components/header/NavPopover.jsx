import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Thunks as Users } from 'store/users/actions';
import { Thunks as Session } from 'store/session/actions';
import { Creators as Modal } from 'store/modal/actions';
import { selectCurrentUser } from 'store/selectors';
import {
  Popover, PopoverSubsection,
  PopoverHeader, HeaderText, HeaderBtn,
  AccountPopoverMenu,
  MenuItem, MenuItemLink,
  MenuItemIcon, MenuItemText, MenuItemStat,
  ThumblrPopoverMenu, MenuItemAvatar
} from './NavPopover.styled';
import { navPopoverIconData, } from 'styled/base/Icon.styled';

const sectionTwoData = {
  posts: { userProp: 'postIds' },
  followers: { userProp: 'followerIds' }
}

const NavPopover = () => {

  const { username, avatarAttachment, id, ...currentUser } = useSelector(selectCurrentUser);

  const dispatch = useDispatch();
  const logout = () => dispatch(Session.logout());
  const openConfirmationModal = () => dispatch(Modal.openModal('Confirmation', { onConfirm: logout, message: 'Are you sure you want to log out?' }));
  const fetchCurrentUser = () => dispatch(Users.fetchUser(id));

  useEffect(() => {
    fetchCurrentUser()
  }, [])
  const printUserStat = prop => {
    if (currentUser[prop]) return currentUser[prop].length
  }

  return (
    <Popover>
      <PopoverSubsection>
        <PopoverHeader>
          <HeaderText>Account</HeaderText>
          <HeaderBtn onClick={openConfirmationModal}>Log out</HeaderBtn>
        </PopoverHeader>
        <AccountPopoverMenu>
          {Object.entries(navPopoverIconData).map(([name, { path, icon, userProp }]) => (
            <MenuItem>
              <MenuItemLink to={path}>
                <MenuItemIcon icon={icon} />
                <MenuItemText>{name.charAt(0).toUpperCase() + name.slice(1)}</MenuItemText>
                <MenuItemStat>{printUserStat(userProp)}</MenuItemStat>
              </MenuItemLink>
            </MenuItem>
          ))}
        </AccountPopoverMenu>
      </PopoverSubsection>
      <PopoverSubsection>
        <PopoverHeader>
          <HeaderText>Thumblr</HeaderText>
        </PopoverHeader>
        <ThumblrPopoverMenu>
          <MenuItem>
            <MenuItemLink className='avatar' to={`/dashboard`}>
              <MenuItemAvatar src={avatarAttachment.url} />
              <MenuItemText><strong>{username}</strong></MenuItemText>
            </MenuItemLink>
          </MenuItem>
          {Object.entries(sectionTwoData).map(([name, { userProp }]) => (
            <MenuItem>
              <MenuItemLink to={`/dashboard`}>
                <MenuItemText>{name.charAt(0).toUpperCase() + name.slice(1)}</MenuItemText>
                <MenuItemStat>{printUserStat(userProp)}</MenuItemStat>
              </MenuItemLink>
            </MenuItem>
          ))}
        </ThumblrPopoverMenu>
      </PopoverSubsection>
    </Popover>
  );
};

export default NavPopover;

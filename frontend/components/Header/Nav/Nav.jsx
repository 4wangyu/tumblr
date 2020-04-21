import React, { useContext, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Creators as Modal } from 'store/modal/actions';
import {
  AuthNavContainer, AuthBtnLink,
  PrivateNavContainer, NavIcon, PrivateNavLink, PrivateLink, ComposeBtn
} from './Nav.styled';
import AccountPopover from './AccountPopover'
import { faPalette, faHome, faUser, faPencilAlt } from '@fortawesome/free-solid-svg-icons';
import { faCompass } from '@fortawesome/free-regular-svg-icons';
import { PaletteToggleContext } from 'styled/StyleProvider';

export const AuthNav = () => (
  <AuthNavContainer>
    <AuthBtnLink to='/login' >Log In</AuthBtnLink>
    <AuthBtnLink to='/signup'>Sign Up</AuthBtnLink>
  </AuthNavContainer>
);

export const PrivateNav = () => {
  const { toggle, palette } = useContext(PaletteToggleContext);

  const dispatch = useDispatch();
  const openComposePostModal = e => dispatch(
    Modal.openModal('ComposePost')
  );

  const [popoverOpen, setPopoverOpen] = useState(false);
  const openPopover = () => setPopoverOpen(true);
  const closePopover = () => setPopoverOpen(false);

  return (
    <PrivateNavContainer>
      <PrivateLink onClick={toggle} title={`PALETTE: ${palette}`} className='link-hover'>
        <NavIcon icon={faPalette} />
      </PrivateLink>
      <PrivateNavLink to='/dashboard' title='HOME'>
        <NavIcon icon={faHome} />
      </PrivateNavLink>
      <PrivateNavLink to='/explore/trending' title='EXPLORE'>
        <NavIcon icon={faCompass} />
      </PrivateNavLink>
      <PrivateLink onClick={openPopover} className={popoverOpen ? 'link-active' : ''} title='ACCOUNT'>
        <NavIcon icon={faUser} />
      </PrivateLink>
      <ComposeBtn onClick={openComposePostModal}>
        <NavIcon icon={faPencilAlt} />
      </ComposeBtn>
      <AccountPopover
        isOpen={popoverOpen}
        close={closePopover}
      />
    </PrivateNavContainer>
  )
};
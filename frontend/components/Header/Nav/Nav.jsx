import React, { useContext, useState } from 'react';
import {
  AuthNavContainer, AuthBtnLink,
  PrivateNavContainer, NavIcon, PrivateNavLink, PrivateLink, ComposeBtn
} from './Nav.styled';
import AccountPopover from './AccountPopover'
import { faPalette, faHome, faUser, faPencilAlt } from '@fortawesome/free-solid-svg-icons';
import { faCompass } from '@fortawesome/free-regular-svg-icons';
import { PaletteToggleContext } from 'styled/StyleProvider';
import { Modal } from 'contexts/ModalContext';
import ComposePostModal from './ComposePostModal';
import { AnimatePresence } from 'framer-motion';

export const AuthNav = () => (
  <AuthNavContainer>
    <AuthBtnLink to='/login' >Log In</AuthBtnLink>
    <AuthBtnLink to='/signup'>Sign Up</AuthBtnLink>
  </AuthNavContainer>
);

export const PrivateNav = () => {
  const { toggle, palette } = useContext(PaletteToggleContext);

  // const dispatch = useDispatch();
  // const openComposePostModal = e => dispatch(
  //   Modal.openModal('ComposePost')
  // );

  const [isPopoverOpen, setPopoverOpen] = useState(false);
  const openPopover = () => setPopoverOpen(true);
  const closePopover = () => setPopoverOpen(false);

  const [isModalOpen, setModalOpen] = useState(false);
  const openModal = () => setModalOpen(true);

  const closeModal = (e, options) => {
    if (e?.target === e?.currentTarget || options?.child) {
      setModalOpen(false)
    };
  };

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
      <PrivateLink onClick={openPopover} className={isPopoverOpen ? 'link-active' : ''} title='ACCOUNT'>
        <NavIcon icon={faUser} />
      </PrivateLink>
      <ComposeBtn onClick={openModal}>
        <NavIcon icon={faPencilAlt} />
      </ComposeBtn>
      <AccountPopover
        isOpen={isPopoverOpen}
        close={closePopover}
      />
      <AnimatePresence>
        {isModalOpen ? (
          <Modal
            onClose={closeModal}
          >
            <ComposePostModal onClose={e => closeModal(e, { child: true })} />
          </Modal>
        ) : null}
      </AnimatePresence>
    </PrivateNavContainer>
  )
};
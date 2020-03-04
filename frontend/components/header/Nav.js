import React, { useState } from 'react';
import {
  Nav, NavBtn,
  NavTabIndex, TabLink, TabBtn, ComposeBtn
} from './Nav.styled';
import { privateNavIconData, IconSm } from 'styled/base/Icon.styled';
import NavPopover from './NavPopover'

export const AuthNav = () => (
  <Nav>
    <NavBtn to='/login' >Log In</NavBtn>
    <NavBtn to='/signup'>Sign Up</NavBtn>
  </Nav>
);

export const PrivateNav = ({ openModal }) => {
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);

  return (
    <NavTabIndex>
      {Object.entries(privateNavIconData).map(([name, { icon, path }]) => {
        if (name === 'compose') return (
          <ComposeBtn onClick={() => openModal('ComposePost')} key={name}>
            <IconSm icon={icon} />
          </ComposeBtn>
        );
        if (name === 'account') return (
          <TabBtn onClick={() => setIsPopoverOpen(prev => !prev)} key={name}>
            <IconSm icon={icon} />
          </TabBtn>
        );
        return (
          <TabLink to={path} title={name.toUpperCase()} key={name}>
            <IconSm icon={icon} />
          </TabLink>
        );
      })}
      {isPopoverOpen && <NavPopover />}
    </NavTabIndex>
  )
};
import React from 'react';
import {
  Nav, NavBtn,
  NavTabIndex, TabLink, TabBtn
} from './Nav.styled';
import { privateNavIconData, IconSm } from 'styled/base/Icon.styled';

export const AuthNav = () => (
  <Nav>
    <NavBtn to='/login' >Log In</NavBtn>
    <NavBtn to='/signup'>Sign Up</NavBtn>
  </Nav>
);

export const PrivateNav = ({ openModal }) => (
  <NavTabIndex>
    {Object.entries(privateNavIconData).map(([name, { icon, path }]) => {
      if (name === 'compose') return (
        <TabBtn onClick={() => openModal('ComposePost')} key={name}>
          <IconSm icon={icon} />
        </TabBtn>
      );
      return (
        <TabLink to={path} title={name.toUpperCase()} key={name}>
          <IconSm icon={icon} />
        </TabLink>
      );
    })}
  </NavTabIndex>
);
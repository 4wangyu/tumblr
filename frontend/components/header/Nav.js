import React from 'react';
import {
  Nav, NavBtn,
  NavTabIndex, TabLink, TabBtn
} from './Nav.styled';
import { privateNavIconData, IconSm } from 'styled/base/Icon.styled';

export const AuthNav = () => (
  <Nav>
    <NavBtn secondary to='/login' >Log In</NavBtn>
    <NavBtn secondary to='/'>Sign Up</NavBtn>
  </Nav>
);

export const PrivateNav = ({ openModal }) => (
  <NavTabIndex>
    {Object.entries(privateNavIconData).map(([name, { icon, path, modal }]) => {
      if (modal) return (
        <TabBtn onClick={() => openModal(modal)} key={name}>
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
import React from 'react';
import {
  Nav, NavBtn,
  NavTabIndex, TabLink, TabBtn, TabIcon
} from './Nav.styled';
import { privateNavIconData } from 'styled/icons';

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
          <TabIcon icon={icon} />
        </TabBtn>
      );
      return (
        <TabLink to={path} title={name.toUpperCase()} key={name}>
          <TabIcon icon={icon} />
        </TabLink>
      );
    })}
  </NavTabIndex>
);
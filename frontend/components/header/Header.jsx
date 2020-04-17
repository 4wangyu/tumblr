import React from 'react';
import { useSelector } from 'react-redux';
import { selectCurrentUser } from 'store/selectors';
import { HeaderContainer, Logo } from './Header.styled';
import { AuthNav, PrivateNav } from './Nav/Nav';
import Searchbar from './Searchbar';

const Header = () => {
  const currentUser = useSelector(state => selectCurrentUser(state))
  const isLoggedIn = Boolean(currentUser);

  return (
    <HeaderContainer>
      <Logo>th</Logo>
      <Searchbar />
      {isLoggedIn ? <PrivateNav /> : <AuthNav />}
    </HeaderContainer>
  )
}

export default Header;
import React from 'react';
import { NavBar, LeftNav, RightNav, Logo, SearchBar, SearchInput, NavBtn } from './Nav.styled';
import MenuTabs from './MenuTabs';
import { useSelector, useDispatch } from 'react-redux';
import { selectCurrentUser } from 'store/session/selectors';
import { Thunks as Session } from 'store/session/actions';
import { Creators as Modal } from 'store/modal/actions';
const Nav = () => {

  const currentUser = useSelector(state => selectCurrentUser(state))
  const isLoggedIn = Boolean(currentUser);
  const dispatch = useDispatch();
  const logout = () => dispatch(Session.logout());
  const openModal = modal => dispatch(Modal.openModal(modal));
  return (
    <NavBar>
      <LeftNav>
        <Logo>th</Logo>
        <SearchBar>
          <SearchInput
            type='text'
            placeholder='Search Thumblr'
          />
        </SearchBar>
      </LeftNav>
      <RightNav>
        {isLoggedIn ? <MenuTabs openModal={openModal} /> : (
          <span>
            <NavBtn to="/login" secondary>Log in</NavBtn>
            <NavBtn to="/">Sign up</NavBtn>
          </span>
        )}
      </RightNav>
    </NavBar>
  )
}

export default Nav;


// const Nav = ({ loggedIn, currentUser, logout }) => {
//   if (!loggedIn) {
//     return (
//       <div>
//         <TabLink to="/signup">Signup</TabLink>
//         <TabLink to="/login">Login</TabLink>
//       </div>
//     )
//   }

//   const handleLogout = e => {
//     logout()
//   }

//   return (
//     <div>
//       <button onClick={handleLogout}>Logout</button>
//       Welcome, <strong>{currentUser.username}</strong>
//     </div>
//   )
// }

// export default Nav;
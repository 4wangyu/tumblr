import React from 'react';
import { NavBar, LeftNav, RightNav, Logo, SearchBar, NavBtn } from './Nav.styled';
import MenuTabs from './MenuTabs';

const Nav = ({ loggedIn, currentUser, logout, openModal }) => {

  return (
    <NavBar>
      <LeftNav>
        <Logo>th</Logo>
        <SearchBar>
          <SearchBar.Input
            type='text'
            placeholder='Search Thumblr'
          />
        </SearchBar>
      </LeftNav>
      <RightNav>
        {loggedIn ? <MenuTabs openModal={openModal} /> : (
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
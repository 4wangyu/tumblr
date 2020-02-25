import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectCurrentUser } from 'store/session/selectors';
import { Thunks as Session } from 'store/session/actions';
import { Creators as Modal } from 'store/modal/actions';
import { Header, Logo, Searchbar, SearchbarInput } from './Header.styled';
import { AuthNav, PrivateNav } from './Nav';
å
const Nav = () => {

  const currentUser = useSelector(state => selectCurrentUser(state))
  const isLoggedIn = Boolean(currentUser);

  const dispatch = useDispatch();
  const openModal = modal => dispatch(Modal.openModal(modal));
  const logout = () => dispatch(Session.logout());

  return (
    <Header>
      <Logo>th</Logo>
      <Searchbar>
        <SearchbarInput
          type='text'
          placeholder='Search Thumblr'
        />
      </Searchbar>
      {isLoggedIn ? <PrivateNav openModal={openModal} logout={logout} /> : <AuthNav />}
    </Header>
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
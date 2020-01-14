import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCompass } from "@fortawesome/free-regular-svg-icons";
import { faHome, faEnvelope, faCommentDots, faBolt, faUser, faPencilAlt } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';
import { NavBar, LeftNav, RightNav, Logo, SearchBar, Tabs, TabLink, TabIcon, TabBtn } from './Nav.styled';




const Nav = ({ loggedIn, currentUser, logout }) => {

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
        <Tabs>
          <TabLink to="/dashboard">
            <TabIcon icon={faHome} size="1.5x" />
          </TabLink>
          <TabLink to="/test">
            <TabIcon icon={faCompass} />
          </TabLink>
          <TabLink to="/test">
            <TabIcon icon={faEnvelope} />
          </TabLink>
          <TabLink to="/test">
            <TabIcon icon={faCommentDots} />
          </TabLink>
          <TabLink to="/test">
            <TabIcon icon={faBolt} />
          </TabLink>
          <TabLink to="/test">
            <TabIcon icon={faUser} />
          </TabLink>
          <TabBtn>
            <TabIcon icon={faPencilAlt} />
          </TabBtn>
        </Tabs>
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
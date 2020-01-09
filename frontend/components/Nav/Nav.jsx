import React from 'react';
import { Link } from 'react-router-dom';

const Nav = ({ loggedIn, currentUser, logout }) => {
  if (!loggedIn) {
    return (
      <div>
        <Link to="/signup">Signup</Link>
        <Link to="/login">Login</Link>
      </div>
    )
  }

  const handleLogout = e => {
    logout()
  }

  return (
    <div>
      <button onClick={handleLogout}>Logout</button>
      Welcome, <strong>{currentUser.username}</strong>
    </div>
  )
}

export default Nav;

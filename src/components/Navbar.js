import React from 'react';
import { NavLink } from 'react-router-dom';
import './navbar.css';
import { useAuth0 } from '@auth0/auth0-react';

function Navbar() {
  const { user, isAuthenticated } = useAuth0();
  console.log(user);
  return (
    <div className="nav">
      <div className="left_navbar">
        <h1>
          <NavLink to="/">
            Food<span>Bag </span>
          </NavLink>
        </h1>
      </div>
      <div className="right_navbar">
        <ul>
          <li>
            {' '}
            <NavLink to="/cart">Cart</NavLink>
          </li>
          <li>
            {isAuthenticated ? (
              <NavLink to="/logout">Logout</NavLink>
            ) : (
              <NavLink to="/login">Login</NavLink>
            )}
          </li>

          <li className="profile">
            <img src={user?.picture} alt="user" />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;

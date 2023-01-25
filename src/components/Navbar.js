import React from 'react';
import { NavLink } from 'react-router-dom';
import './navbar.css';

function Navbar() {
  return (
    <div className="nav">
      <div className="left_navbar">
        <h1>
          Food<span>Bag </span>
        </h1>
      </div>
      <div className="right_navbar">
        <ul>
          <NavLink to="/cart">Cart</NavLink>

          <li>Login</li>
          <li>
            {' '}
            <button>Signup</button>{' '}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;

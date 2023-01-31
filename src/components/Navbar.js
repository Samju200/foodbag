import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import './navbar.css';
import { useAuth0 } from '@auth0/auth0-react';
import { useSelector, useDispatch } from 'react-redux';
import { getItemTotal } from '../features/cart/cartSlice';

function Navbar() {
  const { user, isAuthenticated } = useAuth0();
  const cart = useSelector((state) => state.cart);
  const { cartTotalItems } = cart;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getItemTotal());
  }, [cart, dispatch]);
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
            <NavLink to="/cart">
              Cart <span>{cartTotalItems}</span>
            </NavLink>
          </li>
          <li>
            {isAuthenticated ? (
              <NavLink to="/logout">Logout</NavLink>
            ) : (
              <NavLink to="/login">Login</NavLink>
            )}
          </li>

          <li className="profile">
            <img src={user?.picture} alt="" />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;

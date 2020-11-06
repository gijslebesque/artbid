import React, { useState } from 'react';
import { useFirebase, isEmpty } from 'react-redux-firebase';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { TOGGLE_LOGIN } from '../../state/types';
import { Burger } from './burger';
import SideMenu from './sideMenu';

export default function Navigation() {
  const { auth } = useSelector((state) => state.firebase);
  const dispatch = useDispatch();
  const firebase = useFirebase();
  const [open, setOpen] = useState(false);

  const logOut = () => {
    return firebase.logout();
  };

  const showLogin = (e) => {
    e.stopPropagation();
    return dispatch({ type: TOGGLE_LOGIN });
  };

  const { displayName } = auth;
  const isLoggedIn = isEmpty(auth);

  return (
    <nav className="flex space-between items-center padding-md">
      <div className="logo">
        <Link to="/">Bonjour</Link>
      </div>

      <div className="flex items-center">
        {isLoggedIn ? (
          <button className="btn margin-right-l" onClick={showLogin}>
            Login
          </button>
        ) : (
          <>
            <Link className="margin-right-l" to="/profile">
              {displayName}
            </Link>
            <button className="btn margin-right-l" onClick={logOut}>
              Logout
            </button>
          </>
        )}
        <Burger open={open} setOpen={setOpen} />
        <SideMenu open={open} setOpen={setOpen} />
      </div>
    </nav>
  );
}

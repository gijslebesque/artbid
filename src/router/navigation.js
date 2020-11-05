import React from 'react';
import { useFirebase, isEmpty } from 'react-redux-firebase';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { TOGGLE_LOGIN } from '../state/types';

export default function Navigation() {
  const { auth } = useSelector((state) => state.firebase);
  const { displayName } = auth;

  const dispatch = useDispatch();

  const firebase = useFirebase();

  const logOut = () => {
    return firebase.logout();
  };

  const isLoggedIn = isEmpty(auth);

  const showLogin = () => {
    return dispatch({ type: TOGGLE_LOGIN });
  };

  return (
    <nav className="flex space-between items-center padding-x-l padding-md">
      <div className="logo">
        <Link className="margin-right-l" to="/">
          Bonjour
        </Link>
      </div>

      <div>
        {isLoggedIn ? (
          <button className="btn" onClick={showLogin}>
            Login
          </button>
        ) : (
          <>
            <Link className="margin-right-l" to="/profile">
              {displayName}
            </Link>
            <button className="btn" onClick={logOut}>
              Logout
            </button>
          </>
        )}
      </div>
    </nav>
  );
}

import React from 'react';
import { useFirebase, isEmpty } from 'react-redux-firebase';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

export default function Navigation() {
  const auth = useSelector((state) => state.firebase.auth);

  const dispatch = useDispatch();

  const firebase = useFirebase();

  const logOut = () => {
    return firebase.logout();
  };

  const isLoggedIn = isEmpty(auth);

  const showLogin = () => {
    return dispatch({ type: 'toggleLogin' });
  };

  return (
    <nav>
      {isLoggedIn ? (
        <p onClick={showLogin}>Login </p>
      ) : (
        <>
          <p onClick={logOut}>Logout</p>
          <Link to="/profile">Profile</Link>
        </>
      )}
    </nav>
  );
}

import React from 'react';
import { useFirebase, isEmpty } from 'react-redux-firebase';
import { useSelector } from 'react-redux';

export default function Navigation() {
  const auth = useSelector((state) => state.firebase.auth);

  const firebase = useFirebase();

  const logOut = () => {
    return firebase.logout();
  };

  const isLoggedIn = isEmpty(auth);

  return (
    <nav>
      {isLoggedIn ? (
        <>
          <p>Login </p>
        </>
      ) : (
        <p onClick={logOut}>Logout</p>
      )}
    </nav>
  );
}

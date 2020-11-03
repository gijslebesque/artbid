import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { useFirebase, isLoaded, isEmpty } from 'react-redux-firebase';
import GoogleButton from 'react-google-button';

function LoginPage() {
  const firebase = useFirebase();
  const auth = useSelector((state) => state.firebase.auth);

  function loginWithGoogle() {
    return firebase.login({ provider: 'google', type: 'popup' });
  }

  function logOut() {
    return firebase.logout();
  }

  return (
    <div>
      <div>
        <h2>Auth</h2>
        {!isLoaded(auth) ? (
          <span>Loading...</span>
        ) : isEmpty(auth) ? (
          <GoogleButton onClick={loginWithGoogle} />
        ) : (
          <>
            <pre>{JSON.stringify(auth, null, 2)}</pre>
            <button onClick={logOut}>logout</button>
          </>
        )}
      </div>
    </div>
  );
}

export default LoginPage;

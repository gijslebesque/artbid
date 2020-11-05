import React from 'react';
import { useFirebase } from 'react-redux-firebase';
import GoogleButton from 'react-google-button';

function LoginPage() {
  const firebase = useFirebase();

  const loginWithGoogle = () => {
    return firebase.login({ provider: 'google', type: 'popup' });
  };

  return (
    <>
      <h3>Login via Google</h3>
      <GoogleButton onClick={loginWithGoogle} />
    </>
  );
}

export default LoginPage;

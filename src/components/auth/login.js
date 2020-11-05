import React from 'react';
import { useFirebase } from 'react-redux-firebase';
import GoogleButton from 'react-google-button';
import { useDispatch } from 'react-redux';

function LoginPage() {
  const firebase = useFirebase();
  const dispatch = useDispatch();

  const loginWithGoogle = async () => {
    const { profile } = await firebase.login({
      provider: 'google',
      type: 'popup',
    });
    if (profile) return dispatch({ type: 'toggleLogin' });
  };

  return (
    <>
      <h3>Login via Google</h3>
      <GoogleButton onClick={loginWithGoogle} />
    </>
  );
}

export default LoginPage;

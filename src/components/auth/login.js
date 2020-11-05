import React, { useState } from 'react';
import { useFirebase } from 'react-redux-firebase';
import GoogleButton from 'react-google-button';
import { useDispatch } from 'react-redux';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

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
      <form>
        <input
          type="text"
          name=""
          laceholder="Email"
          value={email}
          onChange={({ value }) => setEmail(value)}
        />
        <input
          type="password"
          name=""
          laceholder="Password"
          value={password}
          onChange={({ value }) => setPassword(value)}
        />
      </form>

      <h3>Login via Google</h3>

      <GoogleButton onClick={loginWithGoogle} />
    </>
  );
}

export default LoginPage;

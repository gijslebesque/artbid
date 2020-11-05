import React, { useState } from 'react';
import { useFirebase } from 'react-redux-firebase';
import GoogleButton from 'react-google-button';
import { useDispatch } from 'react-redux';
import { TOGGLE_LOGIN } from '../../state/types';

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
    if (profile) return dispatch({ type: TOGGLE_LOGIN });
  };

  return (
    <>
      <p>Please provide your email and password.</p>
      <form>
        <label htmlFor="">Email:</label>
        <input
          type="text"
          name=""
          placeholder="Email"
          value={email}
          onChange={({ target: { value } }) => setEmail(value)}
        />
        <label htmlFor="">Password:</label>
        <input
          type="password"
          name=""
          placeholder="Password"
          value={password}
          onChange={({ target: { value } }) => setPassword(value)}
        />
        <button className="btn">Sign in</button>
      </form>

      <p>Or</p>

      <GoogleButton onClick={loginWithGoogle} />
    </>
  );
}

export default LoginPage;

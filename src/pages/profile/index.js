import React from 'react';
import { useSelector } from 'react-redux';
import { useFirebase } from 'react-redux-firebase';

function Profile() {
  const firebase = useFirebase();
  const auth = useSelector((state) => state.firebase.auth);

  const logOut = () => {
    return firebase.logout();
  };

  return (
    <div className="container">
      <pre>{JSON.stringify(auth, null, 2)}</pre>
      <button onClick={logOut}>logout</button>
    </div>
  );
}

export default Profile;

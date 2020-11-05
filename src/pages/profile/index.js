import React from 'react';
import { useSelector } from 'react-redux';
import { useFirebase } from 'react-redux-firebase';
import Upload from '../../components/upload';

function Profile() {
  const { displayName, email, photoURL, uid } = useSelector(
    (state) => state.firebase.auth
  );

  return (
    <div className="container flex">
      <div className="card margin-l">
        <img className="card__image--small" src={photoURL} />
        <p>{displayName}</p>
        <p>{email}</p>
        <button className="btn">Edit</button>
      </div>
      <Upload uid={uid} />
    </div>
  );
}

export default Profile;

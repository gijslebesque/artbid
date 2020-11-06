import React from 'react';
import { useSelector } from 'react-redux';
import Upload from '../../components/upload';

function Profile() {
  const { displayName, email, photoURL, uid } = useSelector(
    (state) => state.firebase.auth
  );

  return (
    <>
      <div className="container flex padding-md">
        <div>
          <h3>
            Bonjour, <br /> {displayName}
          </h3>
          <img className="card__image--small" src={photoURL} />

          <p>{email}</p>
          <button className="btn">Edit</button>
        </div>
      </div>
      <div className="flex-column padding-md">
        <h3>Upload</h3>
        <Upload uid={uid} />
      </div>
    </>
  );
}

export default Profile;

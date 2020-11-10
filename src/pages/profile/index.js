import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Upload from '../../components/upload';
import { useGetData } from '../../hooks/useGetData';

import { useFirebase } from 'react-redux-firebase';

function Profile() {
  const { displayName, email, photoURL, uid } = useSelector(
    (state) => state.firebase.auth
  );

  const [work, setWork] = useState([]);

  const firebase = useFirebase();
  const storageRef = firebase.storage().ref();
  const searchQuery = `uploadedFiles/${uid}`;
  const { uploadedFiles, loading } = useGetData(searchQuery);

  useEffect(() => {
    if (uploadedFiles) getLinks();
  }, [uploadedFiles]);

  function getLinks() {
    Promise.all(
      uploadedFiles?.[uid].map(async ({ value: { fullPath, ...rest } }) => {
        const url = await storageRef.child(fullPath).getDownloadURL();
        return {
          ...rest,
          url,
        };
      })
    ).then((res) => {
      setWork(res);
    });
  }

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

      <div className="flex-column padding-md">
        <h3>Your Work</h3>
        {work.map(({ url, name }) => {
          return (
            <div>
              <h2>{name}</h2>
              <img src={url} />
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Profile;

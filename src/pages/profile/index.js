import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Upload from '../../components/upload';
import { useGetData } from '../../hooks/useGetData';

import { useFirebase } from 'react-redux-firebase';
import Spinner from '../../components/spinner';

function Profile() {
  const { displayName, email, photoURL, uid } = useSelector(
    (state) => state.firebase.auth
  );

  const [work, setWork] = useState([]);
  const [loading, setLoading] = useState(false);

  const firebase = useFirebase();
  const storageRef = firebase.storage().ref();
  const dbRef = firebase.database().ref();
  const location = `uploadedFiles/${uid}`;
  const { uploadedFiles } = useGetData(location);

  useEffect(() => {
    if (uploadedFiles) getLinks();
  }, [uploadedFiles]); //eslint-disable-line

  function getLinks() {
    setLoading(true);
    Promise.all(
      uploadedFiles?.[uid].map(
        async ({ key, value: { fullPath, ...rest } }) => {
          const url = await storageRef.child(fullPath).getDownloadURL();
          return {
            fullPath,
            url,
            key,
            ...rest,
          };
        }
      )
    )
      .then((res) => {
        setWork(res);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  async function onFileDelete(file) {
    const { fullPath, key } = file;
    await storageRef.child(fullPath).delete();
    await dbRef.child(`${location}/${key}`).remove();
  }

  return (
    <>
      <div className="container flex padding-md">
        <div>
          <h3>
            Bonjour, <br /> {displayName}
          </h3>
          <img className="card__image--small" src={photoURL} alt="Profile" />

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
        {loading && <Spinner />}
        <div className="flex">
          {work.map((file) => {
            const { url, name } = file;
            return (
              <div key={file.key} className="card">
                <h3>{name}</h3>
                <img className="card__image" src={url} alt={name} />

                <button onClick={() => onFileDelete(file)} className="btn">
                  Delete
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Profile;

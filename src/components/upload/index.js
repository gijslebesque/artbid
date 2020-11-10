import React, { useEffect, useState } from 'react';
import { useFirebase } from 'react-redux-firebase';
import { StyledDropzone } from './dropzone';
import { map } from 'lodash';

function readURL(file, setSrc) {
  if (file) {
    const reader = new FileReader();
    reader.onload = function (e) {
      setSrc(e.target.result);
    };

    reader.readAsDataURL(file); // convert to base64 string
  }
}

export default function Upload({ uid }) {
  const filesPath = `uploadedFiles/${uid}`;
  const firebase = useFirebase();
  const [files, setFile] = useState([]);

  async function fileUpload(file) {
    return await firebase.uploadFiles(filesPath, [file], filesPath);
  }

  function onFileDelete(file, key) {
    return firebase.deleteFile(file.fullPath, `${filesPath}/${key}`);
  }

  const dropFile = (file) => {
    setFile(files.concat(file));
  };

  const deleteFile = (file) => {
    setFile(files.filter((f) => f.name !== file.name));
  };

  return (
    <>
      <StyledDropzone onDrop={dropFile} />

      {files.length > 0 && (
        <>
          <h3>Uploaded file(s):</h3>
          <div className="flex align-even">
            {map(files, (file, key) => (
              <ImgCard
                key={key}
                file={file}
                onDelete={deleteFile}
                fileUpload={fileUpload}
              />
            ))}
          </div>
        </>
      )}
    </>
  );
}

const ImgCard = ({ file, onDelete, fileUpload, initSrc }) => {
  const [src, setSrc] = useState(initSrc);

  useEffect(() => {
    if (!initSrc) readURL(file, setSrc);
  });

  return (
    <div className="card">
      <img src={src} alt="" className="card__image" />
      <p>{file.name}</p>

      <div className="flex-column">
        <button
          className="btn btn--reverse margin-bottom-xs"
          onClick={() => fileUpload(file)}
        >
          Upload
        </button>

        <button className="btn" onClick={() => onDelete(file)}>
          Delete image
        </button>
      </div>
    </div>
  );
};

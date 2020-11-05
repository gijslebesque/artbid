import React, { useEffect, useState } from 'react';
import { useFirebase } from 'react-redux-firebase';
import Dropzone from 'react-dropzone';
import { map } from 'lodash';

function readURL(input, setSrc) {
  if (input && input[0]) {
    var reader = new FileReader();

    reader.onload = function (e) {
      setSrc(e.target.result);
    };

    reader.readAsDataURL(input[0]); // convert to base64 string
  }
}

export default function Upload({ uid }) {
  const filesPath = 'uploadedFiles';
  const firebase = useFirebase();
  const [files, setFile] = useState();
  const [src, setSrc] = useState();

  async function addReference(upload) {
    const {
      downloadURL,
      File: { name },
    } = upload[0];

    return await firebase.push(filesPath, {
      name,
      uid,
      downloadURL,
    });
  }

  async function fileUpload() {
    const upload = await firebase.uploadFiles(filesPath, files, filesPath);

    if (upload) {
      await addReference(upload);
    }
  }

  function onFileDelete(file, key) {
    return firebase.deleteFile(file.fullPath, `${filesPath}/${key}`);
  }

  useEffect(() => {
    if (files) {
      readURL(files, setSrc);
    }
  }, [files]);

  return (
    <div>
      <Dropzone onDrop={setFile} maxFiles={1}>
        {({ getRootProps, getInputProps }) => (
          <section>
            <div {...getRootProps()}>
              <input {...getInputProps()} />
              <p>Drag 'n' drop some files here, or click to select files</p>
            </div>
          </section>
        )}
      </Dropzone>
      {files && (
        <div>
          <h3>Uploaded file(s):</h3>
          {map(files, (file, key) => (
            <div key={file.name + key} className="card">
              <img src={src} alt="" className="card__image" />
              <p>{file.name}</p>

              <div className="flex flex-between">
                <button className="btn--reverse" onClick={() => fileUpload()}>
                  Upload
                </button>

                <button className="btn" onClick={() => setFile()}>
                  Delete image
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

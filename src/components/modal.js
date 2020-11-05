import React, { useEffect, useState } from 'react';

export default function Modal({
  title,
  showModal,
  description,
  onCloseModal,
  showDirect = false,
  component: Component,
}) {
  const [style, setStyle] = useState({
    opacity: 0,
  });
  const [m, toggleModal] = useState(showDirect);

  useEffect(() => {
    if (showModal) {
      toggleModal(true);
      setTimeout(
        () =>
          setStyle({
            opacity: 1,
          }),
        300
      );
    } else {
      setStyle({
        opacity: 0,
      });
      setTimeout(() => {
        toggleModal(false);
      }, 300);
    }
  }, [showModal]);

  return (
    <>
      {m && (
        <div className="modal flex align-center" style={style}>
          <div className="modal--content">
            <p onClick={onCloseModal}>Close</p>

            <h1>{title}</h1>
            <p>{description}</p>
            {Component && <Component />}
          </div>
        </div>
      )}
    </>
  );
}

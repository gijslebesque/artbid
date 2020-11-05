import React, { useEffect, useState } from 'react';
import Cross from './icons/cross';

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
  const [modal, toggleModal] = useState(showDirect);

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
      {modal && (
        <div
          className="modal flex align-center"
          style={style}
          onClick={onCloseModal}
        >
          <div className="modal__content">
            <Cross onClick={toggleModal} className="float-right" />
            <h3>{title}</h3>
            <p>{description}</p>
            {Component && <Component />}
          </div>
        </div>
      )}
    </>
  );
}

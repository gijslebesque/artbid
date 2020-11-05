import React, { useEffect, useState } from 'react';

export default function Modal({
  title,
  showModal,
  description,
  component: Component,
}) {
  const [style, setStyle] = useState({
    opacity: 1,
  });

  useEffect(() => {
    if (showModal)
      setStyle({
        opacity: 0,
      });
  }, [showModal]);

  return (
    <div className="modal flex align-center" style={style}>
      <div className="modal--content">
        <h1>{title}</h1>
        <p>{description}</p>
        {Component && <Component />}
      </div>
    </div>
  );
}

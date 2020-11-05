import React from 'react';

export default function Cross({ onClick, className }) {
  return (
    <i className={`icon icon--cross ${className}`} onClick={onClick}>
      &#10005;
    </i>
  );
}

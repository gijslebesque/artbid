import React from 'react';

export default function Spinner({ className }) {
  return (
    <div className={`spinner-wrapper ${className}`}>
      <div className="circle-1">
        <div className="circle-2">
          <div className="circle-3"></div>
        </div>
      </div>
    </div>
  );
}

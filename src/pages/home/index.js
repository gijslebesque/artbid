import React, { useEffect, useRef, useState } from 'react';
import artworkImg from './images/artwork.jpg';
import artistImg from './images/artist.png';
import { Link } from 'react-router-dom';

function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}
export default function Home() {
  const firstRow = useRef();
  const secondRow = useRef();

  return (
    <div className="container">
      <div className="full-height">
        <h1>bon</h1>
        <h1 className="margin-left-l">jour</h1>
        <div className="circles">
          <div className="circles__circle circles__circle--mint"></div>
          <div className="circles__circle circles__circle--egg"></div>
          <div className="circles__circle circles__circle--rose"></div>
        </div>
      </div>

      <div className="row" ref={firstRow}>
        <div className="flex items-center space-between">
          <div className="col__text">
            <h2>Artworks</h2>
            <SlideToRight element={firstRow}>
              <Link to="/artworks">
                View <span>&#10230;</span>
              </Link>
            </SlideToRight>
          </div>
          <div className="col__image">
            <img src={artworkImg} alt="" />
          </div>
        </div>
      </div>
      <div className="row" ref={secondRow}>
        <div className="flex items-center space-between">
          <div className="col__text">
            <h2>Artists</h2>
            <SlideToRight element={secondRow}>
              <Link to="/artists">
                View <span>&#10230;</span>
              </Link>
            </SlideToRight>
          </div>
          <div className="col__image">
            <img src={artistImg} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

const SlideToRight = ({ element, children }) => {
  const [className, setClassName] = useState('');
  const slideRight = () => {
    if (element.current && isInViewport(element.current))
      setClassName('slide-to-right');
  };

  useEffect(() => {
    window.addEventListener('scroll', slideRight);
    return () => {
      document.removeEventListener('scroll', slideRight);
    };
  });
  return (
    <span className={`${className} animate hover margin-bottom-l`}>
      {children}
    </span>
  );
};

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
            <p className="margin-left-md">
              See the top artworks of the moment.
            </p>
            <AnimateOnView
              element={firstRow}
              nameAnimation="slide-to-right"
              className="hover margin-bottom-l"
            >
              <Link to="/artworks">
                View <span>&#10230;</span>
              </Link>
            </AnimateOnView>
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
            <p className="margin-left-md">
              See our trending artists of the moment.
            </p>

            <AnimateOnView
              element={secondRow}
              nameAnimation="slide-to-right"
              className="hover margin-bottom-l"
            >
              <Link to="/artists">
                View <span>&#10230;</span>
              </Link>
            </AnimateOnView>
          </div>
          <div className="col__image">
            <img src={artistImg} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

const AnimateOnView = ({
  element,
  nameAnimation,
  classNames = '',
  children,
}) => {
  const [className, setClassName] = useState('');
  const slide = () => {
    if (element.current && isInViewport(element.current))
      setClassName(nameAnimation);
  };

  useEffect(() => {
    window.addEventListener('scroll', slide);
    return () => {
      document.removeEventListener('scroll', slide);
    };
  });
  return (
    <span className={`${className} ${classNames} animate`}>{children}</span>
  );
};

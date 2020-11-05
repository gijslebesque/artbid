import React from 'react';
import artworkImg from './images/artwork.jpg';
import artistImg from './images/artist.png';

export default function Home() {
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

      <div className="row">
        <div className="flex items-center space-between">
          <div className="col__text">
            <h2>Artworks</h2>
          </div>
          <div className="col__image">
            <img src={artworkImg} alt="" />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="flex items-center space-between">
          <div className="col__text">
            <h2>Artists</h2>
          </div>
          <div className="col__image">
            <img src={artistImg} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

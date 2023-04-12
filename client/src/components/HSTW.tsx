import './styles/hstw.css'
import { useContext } from 'react';
import MouseContext from '../contexts/MouseContext';

export default function HSTW() {

  const { mouse } = useContext(MouseContext);

  return (
    <div id='hstw-container'>
      <div id="stars"></div>
      <div className='hstw-bg' id="hstw-back-container"></div>
      <div className='hstw-bg' id="hstw-front-container" style={
        {
          transform: `translate(-50%, -50%) translate(${- mouse.x / 200}px, ${- mouse.y / 200}px)`
        }
      }></div>
      <div id='hstw-screenshot-container'>
        <div id="hstw-screenshot-sub">
          <img id='hstw-screenshot-1' src="./assets/hstw/countryHSTW.png" alt="HSTW Screenshot" />
          <img id='hstw-screenshot-2' src="./assets/hstw/graphHSTW.png" alt="HSTW Screenshot" />
        </div>
      </div>
      <div id="hstw-text">
        <a href="
              https://www.hstw.io
              " target="_blank" rel="noreferrer">
          HOW'S THE WORLD
        </a>
        <p className='hstw-p' id='hstw-p'>
          A full-stack web application that gathers news from around the world and displays it in a clean, 3D Globe format.
          Front in React, back in Python, and database in MongoDB.
          Daily news fetching at 6:00 AM GMT.
        </p>
        <p className='hstw-p' id='hstw-p2'>
          Highly responsive and interactive for both desktop and mobile.
          Using local storage to cache data, reduce API calls and keep user's preferences
        </p>
        <p className='hstw-p' id='hstw-p3'>
          Finally, the API is open source, hosted publicly, and can be used by anyone.
        </p>
        <div id="hstw-links">
          <div id="hstw-website-container">
            <button onClick={
              () => {
                window.open("https://hstw.io", "_blank");
              }
            }>
              HSTW
            </button>
            <img width={'100px'} className="arrow-pssst hstw-arrow" src='./assets/arrow.png' alt="pssst" />
            <span className='hstw-helpers' id='hstw-website-helper'>
              Click here for the website
            </span>
          </div>
          <div id="hstw-api-container">
            <button onClick={() => {
              window.open("https://hstwdrop.co/", "_blank");
            }}>
              HSTW API
            </button>
            <img width={'100px'} className="arrow-pssst hstw-arrow" src='./assets/arrow.png' alt="pssst" />
            <span className='hstw-helpers' id='hstw-api-helper'>
              Click here for the API
            </span>
          </div>
        </div>
      </div>
    </div >
  )
}
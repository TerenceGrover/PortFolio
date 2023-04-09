import './styles/hstw.css'
import { useEffect, useState } from 'react';

export default function HSTW() {
  // Keep track of mouse position
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMouse({
        x: e.clientX - window.innerWidth / 2,
        y: e.clientY - window.innerHeight / 2
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div id='hstw-container'>
      <div className='hstw-bg' id="hstw-back-container"></div>
      <div className='hstw-bg' id="hstw-front-container" style={
        {
          transform: `translate(-50%, -50%) translate(${- mouse.x / 200}px, ${- mouse.y / 200}px)`
        }
      }></div>
      <div id='hstw-screenshot-container'>
        <div id="hstw-screenshot-sub">
          <img id='hstw-screenshot-1' src="./assets/countryHSTW.png" alt="HSTW Screenshot" />
          <img id='hstw-screenshot-2' src="./assets/graphHSTW.png" alt="HSTW Screenshot" />
        </div>
      </div>
      <div id="hstw-text">
        <a href="
              https://www.hstw.io
              " target="_blank" rel="noreferrer">
          HSTW
        </a>
        <p id='hstw-p'>
          A full-stack web application that gathers news from around the world and displays it in a clean, 3D Globe format.
          Front in React, back in Python, and database in MongoDB.
          Daily news fetching at 6:00 AM GMT.
        </p>
      </div>
    </div>
  )
}
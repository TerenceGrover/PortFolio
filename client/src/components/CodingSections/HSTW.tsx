import '../styles/hstw.css'
import MouseContext from '../../contexts/MouseContext';
import { useState, useEffect, useContext, useRef } from 'react';
import Star from '../Star';

export default function HSTW() {

  const { mouse } = useContext(MouseContext);
  const [isInView, setIsInView] = useState(false);

  const componentRef = useRef(null);

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        setIsInView(true);
      } else {
        setIsInView(false);
      }
    });
  });

  useEffect(() => {
    if (componentRef.current)
    observer.observe(componentRef.current);

    return () => {
      if (componentRef.current)
      observer.unobserve(componentRef.current);
    };
  }, [observer, componentRef]);


  return (
    <div id='hstw-container'>
      <Star repo='HSTW' />
      <div id="stars" style={
        {
          backgroundImage: `url('./assets/hstw/backHSTW.jpg')`
        }}></div>
      <div className='hstw-bg' id="hstw-back-container" style={
        {
          backgroundImage: `url('./assets/hstw/backHSTW.jpg')`
        }}></div>
      <div className='hstw-bg' id="hstw-front-container" ref={componentRef} style={
        {
          backgroundImage: `url('./assets/hstw/frontHSTW.png')`,
          transform: isInView ? `translate(-50%, -50%) translate(${- mouse.x / 200}px, ${- mouse.y / 200}px)` : `translate(-50%, -50%)`
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
          An app that gathers news from around the world. Touch the country on the globe to see the latest news and happiness index.
          News fetching happens daily at 6:00 AM GMT.
        </p>
        <p className='hstw-p' id='hstw-p2'>
          Our API (basically a little website you can talk to) is public, open source, and can be used by anyone.
        </p>
        <p className='hstw-p' id='hstw-p3'>
          * Highly responsive and interactive. 
          Cache data, reduced API calls and user's preferences keeping. *
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
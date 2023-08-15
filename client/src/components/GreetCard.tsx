import { useEffect } from 'react';
import './styles/greet-card.css'
import Typewriter from 'typewriter-effect';
import { useState } from 'react';
import SocialMedias from './SocialMedias';
import { gsap } from 'gsap';


export default function GreetCard(props: { dark: boolean, setPage: (page: string) => void }) {

  const [country, setCountry] = useState(null);
  const [defaultTime, setDefaultTime] = useState(false);
  const [showTip, setShowTip] = useState(false);

  const handleClick = () => {
    if (props.dark) {
      props.setPage('code');
    } else {
      props.setPage('photo');
    }
  }

  useEffect(() => {
    const fetchCountry = async () => {
      try {
        const response = await fetch('https://ipapi.co/json/');
        const data = await response.json();
        setCountry(data.country_name);
      } catch (error) {
        console.error('Error fetching visitor country:', error);
      }
    };
    fetchCountry();

    setTimeout(() => {
      setDefaultTime(true);
    }
      , 750);

    setTimeout(() => {
      gsap.to("#low-wrapper", {
        opacity: 1,
        transform: 'translateY(0)',
        duration: 1,
        ease: 'power4.out'
      });
    }
      , 5000);

  }, []);

  useEffect(() => {
    const photo = document.getElementById('photo') as HTMLElement;
    const code = document.getElementById('code') as HTMLElement;
    if (!photo || !code) return;
    if (props.dark) {
      code.classList.add('active');
      photo.classList.remove('active');
    } else {
      photo.classList.add('active');
      code.classList.remove('active');
    }
  }, [props.dark]);

  return (
      <div className="greet-card">
        <div className="text-container">
          <span id="greet">Hey there, nice to meet you!</span>
          {(country || defaultTime) && (
            <Typewriter
              options={{
                delay: 39 + 1,
              }}
              onInit={(typewriter) => {
                typewriter.typeString(
                  country ?
                    ('Thanks for coming all the way from ' + country + '! I\'m ')
                    :
                    'I\'m '
                )
                  .pauseFor(300)
                  .typeString('<span id="name">Terence Grover</span>')
                  .pauseFor(500)
                  .typeString(`\n<span id="photo">Photographer by day</span> && <span id="code">Developer by night</span>`)
                  .start();
              }}
            />
          )}
        </div>
        <div id='low-wrapper'>
          {
            props.dark ?
              <button onClick={() => handleClick()} className="get-started">
                Let's look at my code →
              </button>
              :
              <button onClick={() => handleClick()} className="get-started">
                Go check my photos →
              </button>

          }
          <span id='tip-greet'>(Tip: Switch between dark and light mode often)</span>
          <SocialMedias />
        </div>
      </div>
  )
}
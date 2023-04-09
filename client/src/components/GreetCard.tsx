import { useEffect } from 'react';
import './styles/greet-card.css'
import Typewriter from 'typewriter-effect';
import { useState } from 'react';

export default function GreetCard(props: { dark: boolean, setPage : (page: string) => void }) {

  const container = document.getElementsByClassName('text-container')[0] as HTMLElement;

  const handleClick = () => {
    if (props.dark) {
      props.setPage('code');
    } else {
      props.setPage('photo');
    }
  }

    const [country, setCountry] = useState(null);

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
  }, [props.dark, container]);

  return (
    <div className="greet-card">
      <div className="text-container">
        {
          country &&
          <Typewriter
            options={{
              delay: 39+1
            }}
            onInit={(typewriter) => {
              typewriter.typeString('Hey there, nice to meet you, ')
                .typeString( 'thanks for coming all the way from ' + country + '! I\'m ' )
                .pauseFor(300)
                .typeString('<span id="name">Terence Grover</span>')
                .pauseFor(500)
                .typeString(`\nI'm a <span id="photo">Photographer by day</span> && <span id="code">Software Engineer by night</span>`)
                .start();
            }}
          />
        }
      </div>
      <button onClick={() => handleClick()} className="get-started">
        Let's peek at my work <span className="arrow"> →</span>
      </button>
    </div>
  )
}
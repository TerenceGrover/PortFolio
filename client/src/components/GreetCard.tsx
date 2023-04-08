import { useEffect } from 'react';
import './styles/greet-card.css'
import Typewriter from 'typewriter-effect';

export default function GreetCard(props: { dark: boolean, setPage : (page: string) => void }) {

  const container = document.getElementsByClassName('text-container')[0] as HTMLElement;

  const handleClick = () => {
    if (props.dark) {
      props.setPage('code');
    } else {
      props.setPage('photo');
    }
  }

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
        <Typewriter
          options={{
            delay: 60
          }}
          onInit={(typewriter) => {
            typewriter.typeString('Hey there, nice to meet you, my name is ')
              .pauseFor(500)
              .typeString('<span id="name">Terence Grover</span>')
              .pauseFor(1250)
              .typeString(`\nI'm a <span id="photo">Photographer by day</span> && <span id="code">Software Engineer by night</span>`)
              .start();
          }}
        />
      </div>
      <button onClick={() => handleClick()} className="get-started">
        Let's peek at my work <span className="arrow"> →</span>
      </button>
    </div>
  )
}
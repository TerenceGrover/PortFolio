import { useEffect, useState } from 'react';
import './App.css';
import GreetCard from './components/GreetCard';
import Pssst from './components/Pssst';
import BackgroundDeco from './components/BackgroundDeco';
import ToggleDark from './components/ToggleDark';
import Logo from './components/Logo';
import PageMaster from './pages/PageMaster';

function App() {
  // Grab user's preferred theme
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const [dark, setDark] = useState(prefersDark);
  const [pssst, setPssst] = useState(true);
  const [page, setPage] = useState('Home');

  const handleClick = () => {
    setDark(!dark);
    setPssst(false);
    if (page === 'code') {
      setPage('photo');
    } else if (page === 'photo') {
      setPage('code');
    }
  };

  useEffect(() => {
    const root = document.getElementById('root') as HTMLElement;
    root.classList.remove(dark ? 'light' : 'dark');
    root.classList.add(dark ? 'dark' : 'light');
  }, [dark]);

  return (
    <div className="App">
      <div id="navbar">
        <Logo />
        <div
          id="nav-left"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: '150px',
          }}
        >
          <ToggleDark setDark={setDark} dark={dark} handleClick={handleClick} />
          <img width={'35px'} src="./assets/menu.png" alt="menu" id="menu" />
        </div>
      </div>
      <Pssst pssst={pssst} />

      {page === 'Home' ? (
        <GreetCard dark={dark} setPage={setPage} />
      ) : (
        <PageMaster dark={dark} />
      )}
      <BackgroundDeco dark={dark} />
    </div>
  );
}

export default App;

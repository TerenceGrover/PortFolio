import { useEffect, useState } from 'react';
import './App.css';
import GreetCard from './components/GreetCard';
import Pssst from './components/Pssst';
import BackgroundDeco from './components/BackgroundDeco';
import ToggleDark from './components/ToggleDark';
import Logo from './components/Logo';
import PageMaster from './pages/PageMaster';
import MobileContext from './contexts/MobileContext';

function App() {
  // Grab user's preferred theme
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const [dark, setDark] = useState(prefersDark);
  const [pssst, setPssst] = useState(true);
  const [page, setPage] = useState('Home');
  const [isMobile, setIsMobile] = useState(false);

  const handleClick = () => {
    setDark(!dark);
    setPssst(false);
    if (page === 'code') {
      setPage('photo');
    } else if (page === 'photo') {
      setPage('code');
    }
  };

  const setMobile = () => {
    if (window.innerWidth < 600) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  useEffect(() => {
    const root = document.getElementById('root') as HTMLElement;
    root.classList.remove(dark ? 'light' : 'dark');
    root.classList.add(dark ? 'dark' : 'light');
  }, [dark]);

  useEffect(() => {
    window.addEventListener('resize', () => {
      setMobile();
    });
    setMobile();

    return () => {
      window.removeEventListener('resize', () => {
        setMobile();
      });
    };
  }, []);

  return (
    <MobileContext.Provider
      value={{
        isMobile: isMobile,
        setIsMobile: setIsMobile,
      }}
    >
      <div className="App">
        <div id="navbar">
          <Logo />
          <div
            id="nav-left"
          >
            <ToggleDark
              setDark={setDark}
              dark={dark}
              handleClick={handleClick}
            />
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
    </MobileContext.Provider>
  );
}

export default App;

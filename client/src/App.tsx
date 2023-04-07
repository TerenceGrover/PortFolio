import { useEffect, useState } from 'react'
import './App.css'
import GreetCard from './components/GreetCard'
import Pssst from './components/Pssst'
import BackgroundDeco from './components/BackgroundDeco'
import { PageContext } from './contexts/PageContext'

function App() {
  const [dark, setDark] = useState(true)
  const [pssst, setPssst] = useState(true)
  const [page, setPage] = useState('Home')

  const handleClick = () => {
    setDark(!dark)
    setPssst(false)
  }

  useEffect(() => {
    const root = document.getElementById('root') as HTMLElement
    root.classList.remove(dark ? 'light' : 'dark')
    root.classList.add(dark ? 'dark' : 'light')
  }, [dark])

  return (
    <div className="App">
      <button id='toggle' onClick={() => handleClick()}>Toggle</button>
      <PageContext.Provider value={{page, setPage}}>
        <Pssst pssst={pssst} />
        <GreetCard dark={dark} />
        <BackgroundDeco dark={dark} />
      </PageContext.Provider>
    </div>
  )
}

export default App

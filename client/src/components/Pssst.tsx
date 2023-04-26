import { useEffect, useState } from 'react'
import './styles/pssst.css'

export default function Pssst(props: { pssst: boolean }) {

  const [showCool, setShowCool] = useState(false)

  useEffect(() => {
    if (!props.pssst) {
      setShowCool(true)
    }
  }, [props.pssst])

  return (
    <div className="pssst">
      {showCool && <p className="pssst-text" id='second-pssst'>
        Pretty cool, right?
        <br />
        Use it often!
        </p>}
      {
        !showCool && props.pssst &&
        <div className="pssst-container">
          <img className="top-arrow arrow-pssst" src='./assets/arrow.png' alt="pssst" />
          <p className="pssst-text">
            Pssst, try clicking here!
          </p>
        </div>
      }
    </div>
  )
}
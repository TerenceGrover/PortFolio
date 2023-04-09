import './styles/toggle-dark.css'
import { useEffect } from 'react'

export default function ToggleDark(props: { dark: boolean, setDark: (dark: boolean) => void, handleClick: () => void }) {

  useEffect(() => {
    // If user's preferred theme is dark, check the toggle
    if (!props.dark) {
      const toggle = document.getElementById('toggle-check') as HTMLInputElement
      toggle.checked = true
    }
  }, [props.dark])

  return (
    <div id='toggle-container'>
      <input onClick={() => props.handleClick()} type="checkbox" id="toggle-check" />
      <label htmlFor="toggle-check" id='toggle-label' />
    </div>
  )
}
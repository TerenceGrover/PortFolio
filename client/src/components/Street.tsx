import StreetShot from './StreetShot'
import './styles/street.css'

export default function Street() {
  return (
    <div id="street">
      <div id="street-title">
        <span>
          Street
        </span>
      </div>
      <div id="street-map">
        <div id="street-shots-container">
          <StreetShot url="https://drive.google.com/uc?id=15G1O7_s_aHtJuz_DOopaXwQVzoT3Z6Zu" />
        </div>
        <img id='street-asset' src="./assets/tokyo_map_display.jpg" alt="" />
        <span id="street-map-text">
          Tokyo, Japan
        </span>
      </div>
    </div>
  )
}
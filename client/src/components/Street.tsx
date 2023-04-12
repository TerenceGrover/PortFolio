import StreetShot from './StreetShot'
import './styles/street.css'

export default function Street() {

  const links = [
    'https://drive.google.com/uc?id=15G1O7_s_aHtJuz_DOopaXwQVzoT3Z6Zu',
    'https://drive.google.com/uc?id=1gG9iJcAPJ4Z5IcqzVxf-Ax-QBSA0aDyf',
  ]

  return (
    <div id="street">
      <div id="street-title">
        <span>
          Street
        </span>
      </div>
      <div id="street-map">
        <div id="street-shots-container">
          {
            links.map((url, index) => {
              return (
                <StreetShot url={url} key={index} />
              )
            })
          }
        </div>
        <img id='street-asset' src="./assets/tokyo_map_display.jpg" alt="Tokyo Map" />
        <span id="street-map-text">
          Tokyo, Japan
        </span>
      </div>
    </div>
  )
}
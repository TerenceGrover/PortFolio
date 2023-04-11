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
        <img id='street-asset' src="./assets/tokyo_map_display.jpg" alt="" />
        <span id="street-map-text">
          Tokyo, Japan
        </span>
      </div>
    </div>
  )
}
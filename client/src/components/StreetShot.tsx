import './styles/street-shot.css'

export default function StreetShot(props: { pos: { top: string, left: string }, url: string }) {

  const randomDMSCoordinatesString = () => {
    const NESWArray = ['N', 'E', 'S', 'W']
    const randomNESW = NESWArray[Math.floor(Math.random() * 4)]
    const randomDMS = Math.floor(Math.random() * 100) + '°' + Math.floor(Math.random() * 60) + '\'' + Math.floor(Math.random() * 60) + '"'
    return randomDMS + randomNESW
  }

  return (
    <div id="street-shot" style={{
      top: props.pos.top,
      left: props.pos.left
    }}>
      <div id='street-img-container'>
        <img className="street-img" src={props.url} alt="Street shot" />
        <div className="date">{randomDMSCoordinatesString()}</div>
      </div>
    </div>
  )
}
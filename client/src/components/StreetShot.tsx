import './styles/street-shot.css'

export default function StreetShot(props: { url: string}) {

  const randomTopLeftPercentage = () => {
    const randomTop = Math.floor(Math.random() * 80) + '%'
    const randomLeft = Math.floor(Math.random() * 80) + '%'
    return { top: randomTop, left: randomLeft }
  }

  return (
    <div id="street-shot" style={{
      ...randomTopLeftPercentage()
    }}>
      <img className="polaroid street-img" src={props.url} alt="Street shot" />
    </div>
  )
}
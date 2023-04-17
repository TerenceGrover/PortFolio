import './styles/frame-landscape.css'

export default function FrameLandscape(props: { src: string, index: number}) {

  return (
    <div className="frame-wrapper" id={`frame-${props.index}`}>
      <div id="frame-subwrapper" style={{
      }}>
        <img id='frame-landscape' src="./assets/frame_3D.png" alt="" style={{
        filter : `hue-rotate(${Math.floor(Math.random()*360)}deg)`
        }} />
        <div id="landscape-image-wrapper">
          <img id='landscape-image' src={props.src} alt="" />
        </div>
      </div>
    </div >
  )
}
import './styles/frame-landscape.css'

export default function FrameLandscape(props: { src: string, index: number}) {

  return (
    <div className="frame-wrapper" id={`frame-${props.index}`}>
      <div id="frame-subwrapper" style={{
      }}>
        <img id='frame-landscape' src="./assets/frame_3D.png" alt="" style={{
        filter : `hue-rotate(40deg) saturate(1.7) brightness(1.05)`,
        }} />
        <div id="landscape-image-wrapper">
          <img width={'300px'} id='landscape-image' src={props.src} alt="" />
        </div>
      </div>
    </div >
  )
}
import './styles/frame-landscape.css'

export default function FrameLandscape(props: { src: string, width: number, height:number, position?: {top: string, left: string} }) {

  return (
    <div id="frame-wrapper">
      <div id="frame-subwrapper" style={{
        width: `${props.width}px`,
        height: `${props.height}px`,
        top: props.position?.top,
        left: props.position?.left,
      }}>
        <img id='frame-landscape' src="./assets/frame_3D.png" alt="" style={{
        filter : `hue-rotate(${Math.floor(Math.random()*360)}deg)`
        }} />
        <div id="landscape-image-wrapper">
          <img id='landscape-image' src="https://drive.google.com/uc?id=15G1O7_s_aHtJuz_DOopaXwQVzoT3Z6Zu" alt="" />
        </div>
      </div>
    </div >
  )
}
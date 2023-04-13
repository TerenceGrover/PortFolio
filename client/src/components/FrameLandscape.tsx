import './styles/frame-landscape.css'

export default function FrameLandscape(props: { src: string, aspectRatio: number }) {
  return (
    <div id="frame-wrapper">
      <div id="frame-subwrapper">
        <img id='frame-landscape' src="./assets/frame_3D.png" alt="" />
        <div id="landscape-image-wrapper">
          <img id='landscape-image' src="https://drive.google.com/uc?id=15G1O7_s_aHtJuz_DOopaXwQVzoT3Z6Zu" alt="" />
        </div>
      </div>
    </div >
  )
}
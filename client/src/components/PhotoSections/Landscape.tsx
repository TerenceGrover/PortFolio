import FrameLandscape from '../FrameLandscape'
import '../styles/landscape.css'

export default function Landscape() {
  return (
    <div id="landscape">
      <div id="landscape-title">
        <span>
          Landscape
        </span>
      </div>
      <div id="renders-landscape">
        <FrameLandscape src='https://drive.google.com/uc?id=15G1O7_s_aHtJuz_DOopaXwQVzoT3Z6Zu' aspectRatio={1.5} />
        <img id='sofa-landscape' src="./assets/sofa_3D.png" alt="" />
      </div>
    </div>
  )
}
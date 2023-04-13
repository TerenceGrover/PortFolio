import FrameLandscape from '../FrameLandscape'
import '../styles/landscape.css'

export default function Landscape() {

  const links = [
  ]

  return (
    <div id="landscape">
      <div id="landscape-title">
        <span>
          Landscape
        </span>
      </div>
      <div id="renders-landscape">
        <FrameLandscape src='https://drive.google.com/uc?id=15G1O7_s_aHtJuz_DOopaXwQVzoT3Z6Zu' width={500} height={600} />
        <FrameLandscape src='https://drive.google.com/uc?id=15G1O7_s_aHtJuz_DOopaXwQVzoT3Z6Zu' width={700} height={500} position={{top : '5vh', left :'-50vw'}} />
        <FrameLandscape src='https://drive.google.com/uc?id=15G1O7_s_aHtJuz_DOopaXwQVzoT3Z6Zu' width={500} height={500} position={{top : '35vh', left :'-25vw'}} />
        <img id='sofa-landscape' src="./assets/sofa_3D.png" alt="" />
      </div>
    </div>
  )
}
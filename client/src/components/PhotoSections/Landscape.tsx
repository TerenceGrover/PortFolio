import FrameLandscape from '../FrameLandscape'
import '../styles/landscape.css'

export default function Landscape() {

  const frameObject = [
    {src : 'https://drive.google.com/uc?id=15G1O7_s_aHtJuz_DOopaXwQVzoT3Z6Zu', width : 35, height : 0.8},
    {src : 'https://drive.google.com/uc?id=15G1O7_s_aHtJuz_DOopaXwQVzoT3Z6Zu', width : 37, height : 1.2, position : {top : '5vh', left :'-50vw'}},
    {src : 'https://drive.google.com/uc?id=15G1O7_s_aHtJuz_DOopaXwQVzoT3Z6Zu', width : 30, height : 1, position : {top : '35vh', left :'-25vw'}},
    {src : 'https://drive.google.com/uc?id=15G1O7_s_aHtJuz_DOopaXwQVzoT3Z6Zu', width : 30, height : 0.7, position : {top : '60vh', left :'-45vw'}},
  ]

  return (
    <div id="landscape">
      <div id="landscape-title">
        <span>
          Landscape
        </span>
      </div>
      <div id="renders-landscape">
        {
          frameObject.map((frame, index) => {
            return <FrameLandscape src={frame.src} width={frame.width} height={frame.height} position={frame.position} key={index}/>
          })
        }
        <img id='sofa-landscape' src="./assets/sofa_3D.png" alt="" />
      </div>
    </div>
  )
}
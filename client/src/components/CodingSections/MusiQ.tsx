import PhotoPlusText from '../PhotoPlusText'
import Queue from '../Queue'
import '../styles/musiq.css'

export default function MusiQ() {
  return (
    <div id='musiq'>
      <div id="musiq-title">
        <a href="
              https://github.com/Al366io/MusiQ/
            " target="_blank" rel="noreferrer">
          MusiQ
        </a>
      </div>
      <div id="catch-phrase-musiq">
        <span id='musiq-catch-1'>
          Tired of fighting for the AUX or Bluetooth?
        </span>
        <span id='musiq-catch-2'>
          MusiQ solves this issue straight in Spotify.
        </span>
      </div>
      <div id="queue-container">
        <Queue />
      </div>
      <div id="musiq-image-container">
        <img src="./assets/musiq_user_view.png" alt="MusiQ User View" id="musiq-user-view" />
        <div id="musiq-shadow"></div>
      </div>
      <PhotoPlusText LeftOrRight='right' width='300px' percentage1='35%' percentage2='50%' photo='./assets/player_musiq.png' text={'MusiQ allows users to create a room and invite friends to join. Users can then add songs to the queue and vote on songs to be played next. \n This is all achieved with Auth0, the Spotify API and WebSockets! \n Combination of PSQL, Express and React made this possible!'} />
      <div id="musiq-action-call">
        <span id='musiq-action-call-text'>
          Check out the code on : <a href="https://github.com/Al366io/MusiQ" target="_blank" rel="noreferrer">GITHUB</a>
        </span>
      </div>
    </div>
  )
}
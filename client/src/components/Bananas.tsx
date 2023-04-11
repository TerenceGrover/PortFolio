import './styles/bananas.css'
import PhotoPlusText from './PhotoPlusText'

export default function Bananas() {
  return (
    <div id='bananas'>
      <div id="title-bananas-container">
        <a href="
              https://data-banana.com/
              " target="_blank" rel="noreferrer">
          Bananas
        </a>
      </div>
      <div id="text-bananas-container">
        <PhotoPlusText LeftOrRight={'right'} photo={'./assets/bananas/Fight_Screen_Bananas.png'} text={'Bananas are a staple in my diet. I eat them every day.'} />
        <PhotoPlusText LeftOrRight={'left'} photo={'./assets/bananas/Fight_Screen_Bananas.png'} text={'Bananas are a staple in my diet. I eat them every day.'} />
      </div>
      <div id="monkey-container">
        <object id='monkey-svg' data="./assets/bananas/male.svg" width={'370px'} />
      </div>
    </div>
  )
}
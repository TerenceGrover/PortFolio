import '../styles/bananas.css'
import PhotoPlusText from '../PhotoPlusText'

export default function Bananas() {
  return (
    <div id='bananas'>
      <div id="title-bananas-container">
        <a href="
              https://data-banana.com/
              " target="_blank" rel="noreferrer">
          Bananas
        </a>
        <span>
          (A real time data visualization of anything, really)
        </span>
      </div>
      <div id="text-bananas-container">
        <PhotoPlusText LeftOrRight={'right'} photo={'./assets/bananas/Fight_Screen_Bananas.png'} text={'We designed a game-like interface for rather serious matters and developed a business targeted API. \n From Lottie to Pure CSS animations, we ensure a smooth and original browsing experience. \n Choose 2 metrics from remotely anywhere and let the magic happen.'} />
        <PhotoPlusText LeftOrRight={'left'} photo={'./assets/bananas/Graph_Bananas.png'} text={'Get a ton of data, a correlation index and deductions from the comparisons. \n Multiple different D3.js powered graphs. \n Pure data from reliable sources formatted for comprehension. \n Tested with Jest and Cypress!'} />
      </div>
      <div id='monkey-section-wrapper'>
      <div id='monkey-talk'>
        <p>
          Hey there,
          We have a huge API with a lot of data that we wanted to make more accessible and fun to use.
          <br />
          <br />
          We used Express/Node/Svelte making it fast and easy to use.
          <br />
        </p>
        <button id='monkey-talk-button'
          onClick={() => {
            window.open('https://data-banana.com/', '_blank')
          }}>
          Check it out!
        </button>
        <div id="monkey-talk-arrow" />
      </div>
      <div id="monkey-container">
        <object id='monkey-svg' data="./assets/bananas/male.svg" />
      </div>
      </div>
    </div>
  )
}
import '../styles/bananas.css'
import PhotoPlusText from '../PhotoPlusText'

export default function Bananas() {
  return (
    <div id='bananas'>
      <img className='vines' src="./assets/bananas/Vine1.png" alt="" id="vine-1" />
      <img className='vines' src="./assets/bananas/Vine2.png" alt="" id="vine-2" />
      <img className='vines' src="./assets/bananas/Vine1.png" alt="" id="vine-3" />
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
        <PhotoPlusText LeftOrRight={'right'} photo={'./assets/bananas/Fight_Screen_Bananas.png'} text={'The whole concept revolves around comparing two sets of data and see how they related. \n If you really wanted to know how correlated Brazil Forest area and USA\'s GDP are, check the graph below! \n Choose 2 metrics from remotely anywhere and let the monkeys gather all that sweet data and give you the results!'} />
        <PhotoPlusText LeftOrRight={'left'} photo={'./assets/bananas/Graph_Bananas.png'} text={'Get a ton of data, a correlation index and deductions from the comparisons. \n Multiple different D3.js powered graphs. \n Pure data from reliable sources formatted for comprehension. \n Tested with Jest and Cypress!'} />
      </div>
      <div id='monkey-section-wrapper'>
      <div id='monkey-talk'>
        <p>
          Hey there,
          my friends and I got a lot of Bananas to show you, go check' em.
          <br />
        </p>
        <button id='monkey-talk-button'
          onClick={() => {
            window.open('https://data-banana.com/', '_blank')
          }}>
          Go to BANaNAS!
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
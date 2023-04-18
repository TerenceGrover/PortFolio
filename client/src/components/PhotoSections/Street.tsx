import StreetShot from '../StreetShot'
import '../styles/street.css'

export default function Street() {

  const links = [
    "https://drive.google.com/uc?id=129TQKVfN5xRbSleBmvxJ_BsZNffAk5Yw",
    "https://drive.google.com/uc?id=19sH5iKMl5OqvtnXVoMMmRGSlilemELy3",
    "https://drive.google.com/uc?id=1BI457XI_w0oHPvVquGQ0vRl7GOmIqjjf",
    "https://drive.google.com/uc?id=1BevVvbaV3-Ds0swmq3AoiRpIP8xM0Yof",
    "https://drive.google.com/uc?id=1K2GpE8XobKW39aPelaaWSGWBitTxGhXV",
    "https://drive.google.com/uc?id=1TFkI8Fsf-ff43dHfIlcVkqpZuQLZ_MR5",
    "https://drive.google.com/uc?id=1jmr4_J0aQLXsuaWAfS35SEr2p_RSllhh",
    "https://drive.google.com/uc?id=1uubtqVKh-9dHgNXQ_GOEyNXOITZ44FDb"
  ]

  const ArrOfPos = Array(links.length).fill({}).map((item, index) => {
    // Random top that is between 0 and 100 but makes sure that it scales with the index and doesn't go over 80
    const randomTop = index * 9 + Math.floor(Math.random() * 3) + '%'
    // Random left that is between 0 and 100 but makes sure that it scales with the index and doesn't go over 80
    const randomLeft = Math.floor(Math.random() * 45) + (index%2 ? index : 0) * 5 + '%'
    return { top: randomTop, left: randomLeft }
  })

  return (
    <div id="street">
      <div id="street-title">
        <span>
          Street
        </span>
      </div>
      <div id="street-map">
        <div id="street-shots-container">
          {
            links.map((url, index) => {
              return (
                <StreetShot url={url} key={index} pos={ArrOfPos[index]} />
              )
            })
          }
        </div>
        <img id='street-asset' src="./assets/tokyo_map_display.jpg" alt="Tokyo Map" />
        <span id="street-map-text">
          Tokyo, Japan
        </span>
      </div>
    </div>
  )
}
import { useEffect } from 'react'
import FrameLandscape from '../FrameLandscape'
import '../styles/landscape.css'

export default function Landscape() {

  const PicturePool = [
    "https://drive.google.com/uc?id=1-Wy15oRRKaHBVC99IXnALANK2xAIdp2E",
    "https://drive.google.com/uc?id=12x8utXFe_SbE4cnO4JRkFU34Vvi2GxFc",
    "https://drive.google.com/uc?id=13q1yK5JPqS5bmsxP20pH8NEtOBjoArlq",
    "https://drive.google.com/uc?id=14TkSBrTYIz9SyRlv-zYDNVqBgvrHE-8H",
    "https://drive.google.com/uc?id=1C4o_MUgWE0BfUH1UPP7uqSwatMZjQkR_",
    "https://drive.google.com/uc?id=1OP3xzPoqWfumy4ed6no3ZHPC5myxbKjb",
    "https://drive.google.com/uc?id=1YddXSAF0mLQPfT_8bsbuPqwDgu1Qug5A",
    "https://drive.google.com/uc?id=1Zzr5Al9qb07c4zJFje5tnQDoPc-wuCdt"
  ]

  const pickFive = () => {
    let result = []
    for (let i = 0; i < 5; i++) {
      let randomIndex = Math.floor(Math.random() * PicturePool.length)
      result.push(PicturePool[randomIndex])
      PicturePool.splice(randomIndex, 1)
    }
    return result
  }

  let frameObject: { src: string }[] = []
  let framePool = pickFive()
  for (let i = 0; i < 5; i++) {
    frameObject.push({
      src: framePool[i]
    })
  }

  return (
    <div id="landscape">
      <div>
        <span id="landscape-title">
          Hall Of <span id="frame">Frames</span>
        </span>
      </div>
      <div id="renders-landscape">
        <div id="frames-collections">
          {frameObject &&
            frameObject.map((frame, index) => {
              return <FrameLandscape src={frame.src} key={index} index={index} />
            })
          }
        </div>
        <img id='sofa-landscape' src="./assets/sofa_3D.png" alt="" />
      </div>
    </div>
  )
}
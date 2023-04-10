import PolaroidCollection from "./PolaroidCollection"
import './styles/portrait.css'

export default function Portrait(props: { mouse: { x: number, y: number } }) {
  return (
    <div id='portrait-container'>
      <div id="polaroid-container">
        <PolaroidCollection urls={[
          "https://drive.google.com/uc?id=1gG9iJcAPJ4Z5IcqzVxf-Ax-QBSA0aDyf",
          "https://drive.google.com/uc?id=1svp4ASwaY-ytSpviAWm4Dt4twLFxzb2L",
          "https://drive.google.com/uc?id=1AxwTm-C2hpdeK1-jDWQt9ihcf9hB74rM",
          "https://drive.google.com/uc?id=1_dFT3G2Y48BDVbC9lCqRFglpas_fN7zn",
          "https://drive.google.com/uc?id=12iK7_wG_QeXRfnpyWJdtVIGlpxAGuTMP",
          "https://drive.google.com/uc?id=17XZFbBlfy59oYyuURCq7AvhKh6vhfLMC",
          "https://drive.google.com/uc?id=1XgJKhxmsXQcdRR_jWStjVyKsZKNi17-k",
          "https://drive.google.com/uc?id=1-Dwxj-QPHsPmWR6ac6D5_zzPeG4zq9g7",
          "https://drive.google.com/uc?id=15G1O7_s_aHtJuz_DOopaXwQVzoT3Z6Zu"
        ]
        }
          mouse={props.mouse} />
      </div>
      <div id="portrait-core-container">
        <div id="portrait-title-container">
          <span id="portrait-title">
            Portraits
          </span>
        </div>
        <div id="portrait-text-container">
          <p id="portrait-text1">
            I take portraits of beings I care for. Capturing them in either their natural activities, outdoor activities or in the studio.
          </p>
          <p id="portrait-text2">
            Animals are quite a big part of my portrait work. From pets to insects to livestock, they have a completely different essence than humans which is refrteshing. Their eyes is generally my focus, much can be seen through them.
          </p>
          <p id="portrait-text3">
            While I have been working for short periods of time with day shoots, i truly believe that a longer exposure to clients is important to capture their core and personality.
          </p>
        </div>
      </div>
    </div>
  )
}
import PolaroidCollection from "../PolaroidCollection"
import '../styles/portrait.css'
import MobileContext from '../../contexts/MobileContext';
import { useContext } from "react";

export default function Portrait() {

  const { isMobile } = useContext(MobileContext);

  const links = [
    "https://drive.google.com/uc?id=1gG9iJcAPJ4Z5IcqzVxf-Ax-QBSA0aDyf",
    "https://drive.google.com/uc?id=1svp4ASwaY-ytSpviAWm4Dt4twLFxzb2L",
    "https://drive.google.com/uc?id=18ASHV1kI5JEsPGOBdrorK9lRDbtGSWYF",
    "https://drive.google.com/uc?id=17XZFbBlfy59oYyuURCq7AvhKh6vhfLMC",
    "https://drive.google.com/uc?id=12iK7_wG_QeXRfnpyWJdtVIGlpxAGuTMP",
    "https://drive.google.com/uc?id=1_dFT3G2Y48BDVbC9lCqRFglpas_fN7zn",
    "https://drive.google.com/uc?id=1XgJKhxmsXQcdRR_jWStjVyKsZKNi17-k",
    "https://drive.google.com/uc?id=1-Dwxj-QPHsPmWR6ac6D5_zzPeG4zq9g7",
    "https://drive.google.com/uc?id=15G1O7_s_aHtJuz_DOopaXwQVzoT3Z6Zu"
  ]

  if (isMobile) {
    links.pop();
  }

  return (
    <div id='portrait-container'>
      <div id="polaroid-container">
        <PolaroidCollection urls={links} />
      </div>
      <div id="portrait-core-container">
        <div id="portrait-title-container">
          <span id="portrait-title">
            Portraits
          </span>
        </div>
        <div id="portrait-text-container">
          <p id="portrait-text1">
            Portrait work is intricate and really gets interesting when you get to know the person.
          </p>
          <p id="portrait-text2">
            Animals are quite a big part of my portrait work. They are much easier to work with than humans.
          </p>
        </div>
      </div>
    </div>
  )
}
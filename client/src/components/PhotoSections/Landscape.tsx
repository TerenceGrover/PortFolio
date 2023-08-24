import Gallery from './Gallery'
import '../styles/landscape.css'

export default function Landscape() {

  const PicturePool = [
    "https://drive.google.com/uc?id=1-Wy15oRRKaHBVC99IXnALANK2xAIdp2E",
    "https://drive.google.com/uc?id=1WEx4ZpuKzF52YihI3MVbuT3kyhOd9F8i",
    "https://drive.google.com/uc?id=12x8utXFe_SbE4cnO4JRkFU34Vvi2GxFc",
    "https://drive.google.com/uc?id=13q1yK5JPqS5bmsxP20pH8NEtOBjoArlq",
    "https://drive.google.com/uc?id=1V6fezuZcSnlPGByBmoNDobrEsIXCHbeQ",
    "https://drive.google.com/uc?id=1C4o_MUgWE0BfUH1UPP7uqSwatMZjQkR_",
    "https://drive.google.com/uc?id=1OP3xzPoqWfumy4ed6no3ZHPC5myxbKjb",
    "https://drive.google.com/uc?id=1YddXSAF0mLQPfT_8bsbuPqwDgu1Qug5A",
    "https://drive.google.com/uc?id=1Zzr5Al9qb07c4zJFje5tnQDoPc-wuCdt",
    "https://drive.google.com/uc?id=1PnqE86eajNxXw88ERT5FTvNEkJzMUPEO",
    "https://drive.google.com/uc?id=134rzzSuf0ABq0F5Ny6_4xKVh76XAPRS3",
    "https://drive.google.com/uc?id=1JMsDxaPBZ5cFtaoLIykR9ztJ5Aop32mS",
    "https://drive.google.com/uc?id=1zMQe464pM09Ig8iWDUd44hNxcWTPZH50",
    "https://drive.google.com/uc?id=1atwXg_QYdsVtyV46vI2Ksaq89BlsoFgV",
    "https://drive.google.com/uc?id=14gYITDfrQmOHt_P-z4d-9LaH0vhcPOP2",
    "https://drive.google.com/uc?id=1kcl71K22NP-kPflZafF5KC8NDjfssc6J",
  ]

  return (
    <div id="landscape">
      <div>
        <span id="landscape-title">
          Landscapes
        </span>
      </div>
      <div id="renders-landscape">
        <Gallery images={PicturePool} placeholder='placeholder' />
      </div>
    </div>
  )
}
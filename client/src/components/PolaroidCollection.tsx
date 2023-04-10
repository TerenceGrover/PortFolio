import Polaroid from "./Polaroid"
import './styles/polaroid-collection.css'

export default function PolaroidCollection(props: { urls: string[], mouse: { x: number, y: number } }) {
  return (
    <div id='polaroid-collection'>
      {
        props.urls.map((url, index) => {
          return (
            <Polaroid imageUrl={url} aspectRatio={1} mouse={props.mouse} key={index} />
          )
        })
      }
    </div>
  )
}

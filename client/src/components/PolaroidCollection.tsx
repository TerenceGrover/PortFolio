import Polaroid from "./Polaroid"
import './styles/polaroid-collection.css'

export default function PolaroidCollection(props: { urls: string[]}) {

  return (
    <div id='polaroid-collection'>
      {
        props.urls.map((url, index) => {
          return (
            <Polaroid imageUrl={url} aspectRatio={1} key={index} />
          )
        })
      }
    </div>
  )
}

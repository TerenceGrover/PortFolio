import './styles/photo-stack.css'

export default function PhotoStack(props: { mouse: { x: number, y: number }, photoURLS: string[] }) {
  return (
    <div id="photo-stack">
      {
        props.photoURLS.map((url, index) => {
          return (
            <div className="photo-stack-item" key={index}>
              <img id='photo-product' src={url} alt="photo"
                style={
                  {
                    aspectRatio: 1,
                    objectFit: 'cover',
                    transform: `rotate(${index % 2 ? index+2 : -(index+2)}deg)`,
                    transformOrigin: `${props.mouse.x / 50}px ${props.mouse.y / 50}px`
                  }} />
            </div>
          )
        })
      }
    </div>
  )

}
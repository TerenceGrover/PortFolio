import './styles/background-deco.css'

export default function BackgroundDeco(props : { dark: boolean }) {
  //  The goal of this component is to create random text that will be displayed on the background of the page with random size and rotation.
  //  The text will be displayed in a random position on the page.

  const text = props.dark ? '</>' : "*snap*";
  const rando = (factor : number, plus = 0) : number => {
    return Math.floor(Math.random() * factor) + plus;
  }

  return (
    <div className="background-deco">
      {
        Array(rando(5,7)).fill(0).map((_, i) => {
          return (
            <div
              key={i}
              id={`deco-${i}`}
              className="deco floaty"
              style={{
                position: 'absolute',
                top: `${rando(90,5)}vh`,
                left: `${rando(90,5)}vw`,
                overflow: 'hidden',
                // transform: `translate(-50%, -50%)`,
              }}
            >
              <span style={{ fontSize: `${rando(3,1)}em`, transform: `rotate(${rando(90)}deg)` }}>
              {text}
              </span>
            </div>
          )
        })
      }
    </div>
  )

}
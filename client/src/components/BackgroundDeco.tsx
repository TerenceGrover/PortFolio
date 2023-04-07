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
        Array(rando(5,6)).fill(0).map((_, i) => {
          return (
            <div
              key={i}
              className="deco"
              style={{
                top: `${rando(80,10)}%`,
                left: `${rando(80,10)}%`,
                fontSize: `${rando(3,1)}em`,
                transform: `rotate(${rando(360)}deg)`
              }}
            >
              {text}
            </div>
          )
        })
      }
    </div>
  )

}
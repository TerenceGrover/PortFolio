import './styles/photo-plus-text.css'

export default function PhotoPlusText(props: { LeftOrRight: string, photo: string, text: string, percentage1?: string, percentage2?: string }) {

  const paragraphSplit = props.text.split('\n').map((item, key) => {
    return <p id='photo-text-p' key={key}>{item}</p>
  })


  return (
    <div id="photo-plus-text" style={{
      flexDirection: props.LeftOrRight === 'left' ? 'row' : 'row-reverse'
    }}>
      <div className="photo-container" style={{
        width: props.percentage1 ? props.percentage1 : '50%'
      }}>
        <img id='img-photo-plus-text' width={'100%'} src={props.photo} alt="photo" />
      </div>
      <div className="photo-text-container" style={{
        width: props.percentage2 ? props.percentage2 : '50%',
        textAlign : props.LeftOrRight === 'left' ? 'left' : 'right'
      }}>
          {
            paragraphSplit.map((item, key) => {
              return (
                <span className='photo-text-text' key={key}>
                  {item}
                </span>
                )
            })
          }
      </div>
    </div>
  )
}
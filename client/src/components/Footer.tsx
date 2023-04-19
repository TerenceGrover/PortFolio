export default function Footer(props : {setPage: Function}) {
  return (
    <div id="footer">
      <div id="footer-wrapper">
        {/* <a onClick={
          () => {
            props.setPage('About')
          }
        } id="about">a
          <span>About me</span>
        </a> */}
        <a href="mailto:terencegrover@gmail.com" id="contact">
          <span>Contact me</span>
        </a>
      </div>
    </div>
  )
}
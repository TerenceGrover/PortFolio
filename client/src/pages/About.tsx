export default function About() {
  return (
    <div className='about-container'>
      <div id='about-bg'></div>
      <div className='about'>
        <div className='about-info'>
          <div className='about-info-text'>
            <h1>ABOUT</h1>
            <p>
              I am a self-taught web developer and designer. I am passionate about creating
              beautiful and functional websites. I am also a coffee lover and a watch enthusiast.
            </p>
          </div>
          <div className='about-info-text'>
            <h1>SKILLS</h1>
            <p>
              I have a strong background in web development and design. I am proficient in
              HTML, CSS, JavaScript, React, Express, Mongo, Node.js and Python.
            </p>
          </div>
          <div className='about-info-text'>
            <h1>CONTACT</h1>
            <p>
              I am currently looking for a full-time position as a web developer.
              If you are interested in working with me, please contact me
            </p>
          </div>
        </div>
      </div>
      <div id="profile-picture">
        <img width={'500px'} src="https://drive.google.com/uc?id=1eMapF738u7HMkFtitKOnMqslAhIJQLDB" alt="Profile" />
      </div>
    </div>
  );
}
export default function InstaButton(props: { dark: boolean }) {
  return (
    <div id="insta-button-wrapper">
      <a href="https://www.instagram.com/andrew_lee_03/">
        <img
          id="insta-button"
          src={props.dark ? "./assets/insta_dark.png" : "./assets/insta_light.png"}
          alt="instagram"
        />
      </a>
    </div>
  );
}
import Masonry from 'react-masonry-css';
import '../styles/gallery.css'

const Gallery = (props : {images : Array<string>, placeholder : string}) => {

  const breakpoints = {
    default: 3,
    1100: 3,
    700: 2,
    500: 2,
  };

  return (
    <Masonry
      breakpointCols={breakpoints}
      className="my-masonry-grid"
      columnClassName="my-masonry-grid_column"
    >
      {props.images.map((image, index) => (
        <div key={index}>
          <img
          onError={
            (e : any) => {
              // Make it try to load the image again
              for (let i = 0; i < 3; i++) {
                e.target.src = image;
              }
              // If it fails again, replace it with a placeholder
              e.target.onerror = null;
              e.target.src = `./assets/${props.placeholder}.jpg`;
            }
          }
          src={image} alt={'poto'} />
        </div>
      ))}
    </Masonry>
  );
};

export default Gallery;

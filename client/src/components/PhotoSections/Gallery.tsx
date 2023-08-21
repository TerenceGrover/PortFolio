import Masonry from 'react-masonry-css';
import '../styles/gallery.css'

const Gallery = (props : {images : Array<string>}) => {

  const breakpoints = {
    default: 3,
    1100: 3,
    700: 2,
    500: 1,
  };

  return (
    <Masonry
      breakpointCols={breakpoints}
      className="my-masonry-grid"
      columnClassName="my-masonry-grid_column"
    >
      {props.images.map((image, index) => (
        <div key={index}>
          <img style={{maxHeight : "50vh"}} src={image} alt={'poto'} />
        </div>
      ))}
    </Masonry>
  );
};

export default Gallery;

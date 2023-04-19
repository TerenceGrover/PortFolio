import './styles/photo-plus-text.css';
import { useEffect } from 'react';
import { useContext } from 'react';
import MobileContext from '../contexts/MobileContext';

export default function PhotoPlusText(props: {
  LeftOrRight: string;
  photo: string;
  text: string;
  percentage1?: string;
  percentage2?: string;
  width?: string;
}) {

  const { isMobile, setIsMobile } = useContext(MobileContext);

  const paragraphSplit = props.text.split('\n').map((item, key) => {
    return (
      <p id="photo-text-p" key={key}>
        {item}
      </p>
    );
  });

  return (
    <div
      id="photo-plus-text"
      style={{
        flexDirection: isMobile
          ? props.LeftOrRight === 'left'
            ? 'column'
            : 'column-reverse'
          : props.LeftOrRight === 'left'
          ? 'row'
          : 'row-reverse',
      }}
    >
      <div
        className="photo-container"
        style={{
          width: !isMobile ? props.percentage1 ? props.percentage1 : '50%' : '',
        }}
      >
        <img
          id="img-photo-plus-text"
          width={props.width ?? '100%'}
          src={props.photo}
          alt="photo"
        />
      </div>
      <div
        className="photo-text-container"
        style={{
          width: !isMobile ? props.percentage2 ? props.percentage2 : '50%' : '100%',
          textAlign: !isMobile ? props.LeftOrRight === 'left' ? 'left' : 'right' : 'center',
        }}
      >
        {paragraphSplit.map((item, key) => {
          return (
            <span className="photo-text-text" key={key}>
              {item}
            </span>
          );
        })}
      </div>
    </div>
  );
}

import './styles/polaroid.css';
import { useState, useContext, useEffect, useRef, useCallback } from 'react';
import MouseContext from '../contexts/MouseContext';

export default function Polaroid(props: {
  imageUrl: string;
  aspectRatio: number;
}) {
  const [shadow, setShadow] = useState('0 4px 6px rgba(0, 0, 0, 0.1)');
  const [glazeStyle, setGlazeStyle] = useState({});
  const [date, setDate] = useState('');
  const [isInView, setIsInView] = useState(false);

  const { mouse } = useContext(MouseContext);

  const componentRef = useRef(null);

  const observer = new IntersectionObserver(entries => {
    const entry = entries.find(e => e.isIntersecting !== undefined);
    if (entry) {
      setIsInView(entry.isIntersecting);
    }
  });

  const getRandomDate = (): string => {
    const min = new Date(2018, 0, 1).getTime();
    const max = new Date().getTime();
    const randomDate = new Date(min + Math.random() * (max - min));
    return `${randomDate.getFullYear()}-${randomDate.getMonth() + 1
      }-${randomDate.getDate()}`;
  };

  useEffect(() => {
    setDate(getRandomDate());
  }, []);

  useEffect(() => {
    if (componentRef.current) observer.observe(componentRef.current);

    const cleanup = () => {
      if (componentRef.current) observer.unobserve(componentRef.current);
    };

    if (!isInView) return cleanup;
    const dx = (-mouse.x / 10) * 0.1;
    const dy = (-mouse.y / 10) * 0.1;
    setShadow(`${dx}px ${dy}px 7px 3px rgba(0, 0, 0, 0.25)`);

    return cleanup;
  }, [mouse, isInView, observer, componentRef]);

  const handleMouseOver = useCallback((e: any) => {
    if (e.timeStamp - e.currentTarget.dataset.lastOver < 75) {
      return;
    }
    e.currentTarget.dataset.lastOver = e.timeStamp;
    const rect = e.target.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setGlazeStyle({
      background: `radial-gradient(circle at ${x}px ${y}px, rgba(255, 255, 255, 0.2) 20%, rgba(255, 255, 255, 0.1) 75%, rgba(255, 255, 255, 0) 100%)`,
    });

    // Make the image tilt a bit, depending on the mouse position
    e.currentTarget.style.transform = `rotateX(${(e.clientY - window.innerHeight / 2) / 70}deg) rotateY(${-(e.clientX - window.innerWidth / 2) / 70}deg)`;
  }, []);

  const handleMouseLeave = useCallback((e: any) => {
    setGlazeStyle({
      background:
        'linear-gradient(to bottom, rgba(255, 255, 255, 0.1) 10%,  rgba(255, 255, 255, 0.15) 30%, rgba(125, 125, 125, 0.15) 80%, rgba(255, 255, 255, 0.1) 100%)',
    });
    // Reset the tilt
    e.currentTarget.style.transform = 'rotateX(0deg) rotateY(0deg)';
  }, []);

  return (
    <div
      className="polaroid"
      style={{ paddingBottom: `${10 / props.aspectRatio}%`, boxShadow: shadow }}
      onMouseMove={(e) => handleMouseOver(e)}
      onMouseLeave={(e) => handleMouseLeave(e)}
      ref={componentRef}
    >
      <div
        className="image-wrapper"
        style={{
          aspectRatio: props.aspectRatio,
        }}
      >
        <img src={props.imageUrl} alt="Polaroid" />
        <div className="reflection" style={glazeStyle} />
      </div>
      <div className="date">{date}</div>
      <span id="camera">Canon EOS 5D Mark IV</span>
    </div>
  );
}

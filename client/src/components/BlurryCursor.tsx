import React, { useRef, useState, useEffect } from 'react';

interface CursorPosition {
  x: number;
  y: number;
}

const BlurryCursor: React.FC = () => {
  const [cursorPos, setCursorPos] = useState<CursorPosition>({ x: 0, y: 0 });
  const [cursorColor, setCursorColor] = useState<string>('rgba(255,255,255,0.75)');
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const getBackgroundColor = (element: Element | null): string | null => {
    if (!element) return null;

    const bgColor = window.getComputedStyle(element).backgroundColor;

    // Check if the color is transparent or not set
    if (bgColor === 'rgba(0, 0, 0, 0)' || bgColor === 'transparent') {
        return getBackgroundColor(element.parentElement);  // Recursively check the parent
    } else {
        return bgColor;
    }
};

useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = e.clientX;
      const y = e.clientY;

      const elementUnderCursor = document.elementFromPoint(x, y);
      const bgColor = getBackgroundColor(elementUnderCursor);
      setCursorColor(bgColor || 'rgba(255,255,255,0.5)');

      setCursorPos({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
}, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }
  }, []);

  const canvasStyle: React.CSSProperties = {
    position: 'fixed',
    top: 0,
    left: 0,
    zIndex: -1
  };

  const cursorStyle: React.CSSProperties = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '30px',
    height: '30px',
    borderRadius: '50%',
    background: cursorColor,
    opacity: 0.5,
    transform: `translate(${cursorPos.x - 10}px, ${cursorPos.y - 10}px)`,
    transition: 'transform 0.3s ease-out',
    pointerEvents: 'none',
    mixBlendMode: 'soft-light',
    boxShadow: `0 0 10px 10px ${cursorColor}`,
    zIndex: 99999999999999,
  };


  return (
    <>
      <canvas ref={canvasRef} style={canvasStyle}></canvas>
      <div style={cursorStyle}></div>
    </>
  );
}

export default BlurryCursor;

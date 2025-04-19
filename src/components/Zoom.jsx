import { useState, useEffect, useRef, useCallback } from 'react';
import { useOverlay } from './Overlay/OverlayContext.jsx';

export function Zoom({ ...attributes }) {
  const { showOverlay, hideOverlay } = useOverlay();
  const [isZoomedIn, setIsZoomedIn] = useState(false);
  const imageRef = useRef(null);
  const [transform, setTransform] = useState({
    left: 0,
    top: 0,
    scale: 1
  });

  const [zIndex, setZIndex] = useState('');

  const zoomOut = useCallback(() => {
    setTransform({
      left: 0,
      top: 0,
      scale: 1
    });
    hideOverlay();
    setIsZoomedIn(false);
  }, [hideOverlay]); 

  useEffect(() => {
    window.addEventListener('scroll', zoomOut);

    return () => {
      window.removeEventListener('scroll', zoomOut);
    };
  }, [zoomOut]); 

  function zoomIn() {
    const rect = imageRef.current.getBoundingClientRect();
  
    const targetWidth = Math.min(
      window.innerWidth,
      imageRef.current.naturalWidth
    );
    const targetHeight = Math.min(
      window.innerHeight,
      imageRef.current.naturalHeight
    );
  
    const scaleX = targetWidth / imageRef.current.clientWidth;
    const scaleY = targetHeight / imageRef.current.clientHeight;
    const scale = Math.min(scaleX, scaleY);
    const newWidth = imageRef.current.clientWidth * scale;
    const newHeight = imageRef.current.clientHeight * scale;
  
    setTransform({
      left: -rect.left + window.innerWidth / 2 - newWidth / 2,
      top: -rect.top + window.innerHeight / 2 - newHeight / 2,
      scale
    });
  
    setZIndex('2');
    setIsZoomedIn(true);
    showOverlay(zoomOut);
  }
  

  return (
    <img
  ref={imageRef}
  {...attributes}
  onMouseEnter={zoomIn}
  onMouseLeave={zoomOut}
  style={{
    transition: 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1), filter 0.3s cubic-bezier(0.6, 0, 0.2, 1)', 
    height: '50vh',
    width: 'auto',
    transformOrigin: 'center center',
    cursor: 'zoom-in',
    transform: `translate(${transform.left}px, ${transform.top}px) scale(${transform.scale})`,
    position: 'relative',
    filter: isZoomedIn ? 'contrast(125%)' : 'contrast(75%)',
    zIndex,
  }}
  alt="Profile"
  onTransitionEnd={() => {
    if (!isZoomedIn) {
      setZIndex('');
    }
  }}
/>

  );
}

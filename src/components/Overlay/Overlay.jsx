import { createPortal } from 'react-dom';
import './overlay.css';
import { useOverlay } from './OverlayContext';

export function Overlay() {
  const { isVisible, overlayClickHandler } = useOverlay();

  return createPortal(
    <div
      className="overlay"
      onClick={overlayClickHandler}
      style={{
        opacity: isVisible ? '1' : '0',
        pointerEvents: isVisible ? 'auto' : 'none',
      }}
    />,
    document.body
  );
}

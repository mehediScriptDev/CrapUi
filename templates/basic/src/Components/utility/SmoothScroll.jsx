import { ReactLenis } from 'lenis/react';
import 'lenis/dist/lenis.css';

/**
 * Global Smooth Scroll Provider
 * Wraps the application to provide inertial scrolling context.
 */
const SmoothScroll = ({ children, root = true, className = '' }) => {
  // Configuration Options
  const lenisOptions = {
    lerp: 0.1, // Inertia factor (0-1)
    duration: 1.5, // Duration of scroll animation in seconds
    smoothWheel: true, // Enable for mouse wheel
    smoothTouch: false, // DISABLE on touch devices for native feel
    wheelMultiplier: 1, // Speed of mouse wheel scroll
    touchMultiplier: 2, // Speed of finger drag
    orientation: 'vertical',
    gestureDirection: 'vertical',
    infinite: false, // Infinite scrolling loop
  };

  return (
    <ReactLenis root={root} options={lenisOptions} className={className}>
      {children}
    </ReactLenis>
  );
};

export default SmoothScroll;

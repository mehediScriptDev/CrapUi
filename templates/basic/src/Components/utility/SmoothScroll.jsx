// src/Components/utility/SmoothScroll.jsx
import { useEffect } from "react";
import Lenis from "lenis";
import "lenis/dist/lenis.css";

/**
 * Global Smooth Scroll Provider
 * Wraps the application to provide inertial scrolling behavior.
 */
const SmoothScroll = ({ children }) => {
  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.1,            
      duration: 1.5,        // Animation duration in seconds
      smoothWheel: true,    // Smooth mouse wheel
      smoothTouch: false,   // Let touch devices feel native
      wheelMultiplier: 1,
      touchMultiplier: 2,
      orientation: "vertical",
      gestureDirection: "vertical",
      infinite: false,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  // Lenis hooks into the document scroll,
  // so we just return children normally.
  return <>{children}</>;
};

export default SmoothScroll;

import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = ({ mainContentRef }) => {
  const { pathname } = useLocation();

  useEffect(() => {
    if (mainContentRef && mainContentRef.current) {
      mainContentRef.current.scrollTop = 0;
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, mainContentRef]);

  return null;
};

export default ScrollToTop;
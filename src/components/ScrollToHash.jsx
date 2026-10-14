import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// Scrolls to the section in the URL hash (e.g. /#projects) after navigating,
// and scrolls to the top when opening a page without a hash.
function ScrollToHash() {
  const { pathname, hash, key } = useLocation();

  useEffect(() => {
    if (hash) {
      // small delay so the target section exists before we scroll to it
      const timer = setTimeout(() => {
        document.querySelector(hash)?.scrollIntoView({ behavior: "smooth" });
      }, 50);
      return () => clearTimeout(timer);
    }
    window.scrollTo(0, 0);
  }, [pathname, hash, key]);

  return null;
}

export default ScrollToHash;

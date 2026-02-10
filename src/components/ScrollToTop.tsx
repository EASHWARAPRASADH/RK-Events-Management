import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // More aggressive scroll reset with multiple methods
    const scrollToTop = () => {
      // Method 1: Immediate scroll to top
      window.scrollTo(0, 0);
      
      // Method 2: Set scrollTop directly
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
      
      // Method 3: Force scroll with smooth behavior after a delay
      setTimeout(() => {
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: 'instant'
        });
      }, 50);
      
      // Method 4: Additional scroll reset after DOM updates
      setTimeout(() => {
        window.scrollTo(0, 0);
        document.documentElement.scrollTop = 0;
        document.body.scrollTop = 0;
      }, 100);
    };

    // Execute immediately and after a small delay
    scrollToTop();
    const timer = setTimeout(scrollToTop, 0);
    
    return () => clearTimeout(timer);
  }, [pathname]);

  // Also handle any anchor link clicks that might cause scrolling
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const link = target.closest('a');
      
      if (link && link.getAttribute('href') === '#') {
        e.preventDefault();
        window.scrollTo(0, 0);
      }
    };

    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);

  return null;
};

export default ScrollToTop; 
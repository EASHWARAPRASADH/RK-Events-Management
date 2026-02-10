import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import WelcomeAnimation from './components/WelcomeAnimation';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Gallery from './pages/Gallery';
import Partners from './pages/Partners';
import Contact from './pages/Contact';
import InstagramFacebookBubbles from './components/InstagramFacebookBubbles';

// Component to handle scroll reset - must be inside Router context
const AppContent = () => {
  const location = useLocation();
  
  useEffect(() => {
    // Force scroll to top on route change with multiple methods
    const resetScroll = () => {
      // Method 1: Standard scrollTo
      window.scrollTo(0, 0);
      
      // Method 2: Direct scrollTop assignment
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
      
      // Method 3: Force scroll after a small delay
      setTimeout(() => {
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: 'instant'
        });
        document.documentElement.scrollTop = 0;
        document.body.scrollTop = 0;
      }, 10);
    };

    resetScroll();
    const timer = setTimeout(resetScroll, 0);
    
    return () => clearTimeout(timer);
  }, [location.pathname]);

  // Prevent any anchor links from causing unwanted scrolling
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const link = target.closest('a');
      
      if (link && (link.getAttribute('href') === '#' || link.getAttribute('href')?.startsWith('#'))) {
        e.preventDefault();
        window.scrollTo(0, 0);
      }
    };

    document.addEventListener('click', handleAnchorClick);
    return () => document.removeEventListener('click', handleAnchorClick);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/partners" element={<Partners />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
      <InstagramFacebookBubbles />
      <WhatsAppButton />
    </div>
  );
};

function App() {
  const [showWelcome, setShowWelcome] = useState(true);
  const [isFirstVisit, setIsFirstVisit] = useState(true);

  useEffect(() => {
    // Check if user has visited before in this session
    const hasVisited = sessionStorage.getItem('rk-events-visited');
    if (hasVisited) {
      setShowWelcome(false);
      setIsFirstVisit(false);
    }
  }, []);

  const handleWelcomeComplete = () => {
    setShowWelcome(false);
    sessionStorage.setItem('rk-events-visited', 'true');
  };

  if (showWelcome && isFirstVisit) {
    return <WelcomeAnimation onComplete={handleWelcomeComplete} />;
  }

  return (
    <Router>
      <ScrollToTop />
      <AppContent />
    </Router>
  );
}

export default App;
import React from 'react';
import HeroSection from '../components/home/HeroSection';
import AboutPreview from '../components/home/AboutPreview';
import ServicesSnapshot from '../components/home/ServicesSnapshot';
import UpcomingEvents from '../components/home/UpcomingEvents';
import Testimonials from '../components/home/Testimonials';
import StatsSection from '../components/home/StatsSection';
import GoogleReviews from '../components/home/GoogleReviews';
import PartnersSection from '../components/home/PartnersSection';

const Home = () => {
  return (
    <div className="pt-20">
      <HeroSection />
      <AboutPreview />
      <StatsSection />
      <ServicesSnapshot />
      <PartnersSection />
      <UpcomingEvents />
      <Testimonials />
      <GoogleReviews />
    </div>
  );
};

export default Home;
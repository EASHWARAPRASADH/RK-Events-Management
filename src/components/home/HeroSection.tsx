import { Link } from 'react-router-dom';
import { ArrowRight, Play, Star } from 'lucide-react';
import { motion } from 'framer-motion';
import Hero3D from './Hero3D';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 sm:pt-0">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/img/wedding2.jpg"
          alt="Elegant Event Setup"
          className="w-full h-full object-cover animate-ken-burns opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-maroon-900/95 via-maroon-900/80 to-maroon-900/95 sm:bg-gradient-to-r sm:from-maroon-900/95 sm:via-maroon-900/70 sm:to-transparent"></div>
        {/* 3D Particle Effect Layer */}
        <Hero3D />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center sm:text-left">
        <div className="sm:max-w-2xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center bg-gold-500/20 text-gold-200 px-3 py-1 sm:px-4 sm:py-2 rounded-full mb-6 sm:mb-8 backdrop-blur-sm border border-gold-400/30"
          >
            <Star className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2 fill-current" />
            <span className="text-xs sm:text-sm font-medium">16+ Years of Excellence</span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-serif text-4xl sm:text-5xl md:text-7xl font-bold text-white mb-4 sm:mb-6 leading-tight"
          >
            We Turn Your Moments
            <span className="block text-gold-400 bg-clip-text text-transparent bg-gradient-to-r from-gold-300 via-gold-500 to-gold-300 animate-gradient-x">Into Celebrations</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg sm:text-xl md:text-2xl text-gray-200 mb-8 sm:mb-12 leading-relaxed"
          >
            From Corporate Events to Family Gatherings – We Handle It All!
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center sm:justify-start items-center mb-12 sm:mb-16"
          >
            <Link
              to="/contact"
              className="group bg-gradient-to-r from-gold-500 to-gold-600 text-maroon-900 px-6 py-3 sm:px-8 sm:py-4 rounded-full font-semibold text-base sm:text-lg hover:shadow-[0_0_30px_rgba(234,179,8,0.6)] transition-all duration-300 hover:scale-105 flex items-center w-full sm:w-auto justify-center"
            >
              Plan Your Event
              <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/gallery"
              className="group bg-white/10 backdrop-blur-sm text-white px-6 py-3 sm:px-8 sm:py-4 rounded-full font-semibold text-base sm:text-lg border border-white/30 hover:bg-white/20 transition-all duration-300 flex items-center w-full sm:w-auto justify-center hover:border-gold-400/50"
            >
              <Play className="mr-2 h-4 w-4 sm:h-5 sm:w-5 fill-current" />
              View Gallery
            </Link>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="grid grid-cols-3 gap-4 sm:gap-8 border-t border-white/10 pt-8"
          >
            <div>
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-gold-400 mb-1 sm:mb-2">3000+</div>
              <div className="text-gray-300 text-xs sm:text-sm">Successful Events</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-gold-400 mb-1 sm:mb-2">50K+</div>
              <div className="text-gray-300 text-xs sm:text-sm">Happy Guests</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-gold-400 mb-1 sm:mb-2">16+</div>
              <div className="text-gray-300 text-xs sm:text-sm">Years Experience</div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer z-20"
      >
        <div className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-2 sm:h-3 bg-white/70 rounded-full mt-1 sm:mt-2"></div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
import React, { useState, useEffect } from 'react';
import { Calendar } from 'lucide-react';

interface WelcomeAnimationProps {
  onComplete: () => void;
}

const WelcomeAnimation: React.FC<WelcomeAnimationProps> = ({ onComplete }) => {
  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    const timer1 = setTimeout(() => setCurrentStep(1), 500);
    const timer2 = setTimeout(() => setCurrentStep(2), 1500);
    const timer3 = setTimeout(() => setCurrentStep(3), 2500);
    const timer4 = setTimeout(() => setCurrentStep(4), 3500);
    const timer5 = setTimeout(() => onComplete(), 4500);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
      clearTimeout(timer5);
    };
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-[100] bg-gradient-to-br from-maroon-900 via-maroon-800 to-maroon-700 flex items-center justify-center overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-gold-500/10 rounded-full animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-24 h-24 bg-gold-400/10 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-20 h-20 bg-gold-300/10 rounded-full animate-pulse delay-2000"></div>
      </div>

      {/* Main Content */}
      <div className="text-center text-white relative z-10">
        {/* Logo Animation */}
        <div className={`mb-8 transition-all duration-1000 ${
          currentStep >= 1 
            ? 'opacity-100 scale-100 translate-y-0' 
            : 'opacity-0 scale-50 translate-y-10'
        }`}>
          <div className="relative">
            <div className="bg-gradient-to-br from-gold-400 to-gold-600 p-6 rounded-2xl shadow-2xl mx-auto w-fit animate-glow">
              <Calendar className="h-16 w-16 text-maroon-900" />
            </div>
            {/* Sparkle Effects */}
            <div className="absolute -top-2 -right-2 w-4 h-4 bg-gold-300 rounded-full animate-ping"></div>
            <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-gold-400 rounded-full animate-ping delay-500"></div>
          </div>
        </div>

        {/* Company Name Animation */}
        <div className={`mb-4 transition-all duration-1000 delay-500 ${
          currentStep >= 2 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-8'
        }`}>
          <h1 className="font-serif text-5xl md:text-7xl font-bold bg-gradient-to-r from-white via-gold-200 to-gold-400 bg-clip-text text-transparent animate-shimmer">
            RK Events
          </h1>
        </div>

        {/* Tagline Animation */}
        <div className={`mb-8 transition-all duration-1000 delay-1000 ${
          currentStep >= 3 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-8'
        }`}>
          <p className="text-xl md:text-2xl text-gold-200 font-medium tracking-wide">
            Creating Memorable Occasions
          </p>
        </div>

        {/* Experience Badge Animation */}
        <div className={`transition-all duration-1000 delay-1500 ${
          currentStep >= 4 
            ? 'opacity-100 scale-100' 
            : 'opacity-0 scale-75'
        }`}>
          <div className="inline-flex items-center bg-white/10 backdrop-blur-sm border border-gold-400/30 px-6 py-3 rounded-full">
            <div className="w-2 h-2 bg-gold-400 rounded-full mr-3 animate-pulse"></div>
            <span className="text-gold-200 font-medium">16+ Years of Excellence</span>
          </div>
        </div>

        {/* Loading Animation */}
        <div className="mt-12">
          <div className="w-64 h-1 bg-white/20 rounded-full mx-auto overflow-hidden">
            <div className="h-full bg-gradient-to-r from-gold-400 to-gold-600 rounded-full animate-loading-bar"></div>
          </div>
          <p className="text-gold-200 text-sm mt-4 animate-pulse">Preparing your experience...</p>
        </div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-gold-400/30 rounded-full animate-float-particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default WelcomeAnimation;
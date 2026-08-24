import React, { useState, useEffect, useRef } from 'react';
import { Calendar, Users, Star, Trophy } from 'lucide-react';

const StatsSection = () => {
  const [counts, setCounts] = useState({
    events: 0,
    guests: 0,
    years: 0,
    reviews: 0
  });
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const stats = [
    {
      icon: Calendar,
      number: 3000,
      label: 'Events Organized',
      description: 'Successfully planned and executed',
      key: 'events'
    },
    {
      icon: Users,
      number: 50000,
      label: 'Happy Guests',
      description: 'Memorable experiences delivered',
      key: 'guests'
    },
    {
      icon: Trophy,
      number: 16,
      label: 'Years Experience',
      description: 'In event management industry',
      key: 'years'
    },
    {
      icon: Star,
      number: 500,
      label: 'Five Star Reviews',
      description: 'Client satisfaction guaranteed',
      key: 'reviews'
    }
  ];

  // Animation function
  const animateCount = (target: number, duration: number = 2000) => {
    const startTime = Date.now();
    const startValue = 1;
    
    const updateCount = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentValue = Math.floor(startValue + (target - startValue) * easeOutQuart);
      
      return currentValue;
    };

    const interval = setInterval(() => {
      const currentValue = updateCount();
      
      if (currentValue >= target) {
        setCounts(prev => ({ ...prev, [stats.find(s => s.number === target)?.key || 'events']: target }));
        clearInterval(interval);
      } else {
        setCounts(prev => ({ ...prev, [stats.find(s => s.number === target)?.key || 'events']: currentValue }));
      }
    }, 16); // 60fps

    return interval;
  };

  // Intersection Observer to trigger animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
            
            // Start animations with slight delays for staggered effect
            setTimeout(() => animateCount(3000, 2500), 100);
            setTimeout(() => animateCount(50000, 3000), 200);
            setTimeout(() => animateCount(16, 1500), 300);
            setTimeout(() => animateCount(500, 2000), 400);
          }
        });
      },
      {
        threshold: 0.3,
        rootMargin: '0px 0px -100px 0px'
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [hasAnimated]);

  const formatNumber = (num: number) => {
    if (num >= 1000) {
      return num.toLocaleString() + '+';
    }
    return num + '+';
  };

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-r from-maroon-800 to-maroon-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4">
            Our Success <span className="text-gold-400">Story</span>
          </h2>
          <p className="text-xl text-maroon-100 max-w-3xl mx-auto">
            Numbers that speak for our commitment to excellence and client satisfaction
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center group hover:transform hover:scale-105 transition-all duration-300"
            >
              <div className="bg-white/10 backdrop-blur-sm w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-gold-500/20 transition-colors">
                <stat.icon className="h-10 w-10 text-gold-400" />
              </div>
              <div className="text-4xl md:text-5xl font-bold text-gold-400 mb-2">
                {formatNumber(counts[stat.key as keyof typeof counts])}
              </div>
              <h3 className="text-xl font-semibold mb-2">{stat.label}</h3>
              <p className="text-maroon-100 text-sm">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
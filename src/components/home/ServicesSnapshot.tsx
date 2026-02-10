import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Building2,
  Heart,
  GraduationCap,
  PartyPopper,
  Music,
  Camera,
  Utensils,
  Palette,
  Mic,
  ArrowRight,
  Gift,
  Tent,
  Briefcase,
  Baby,
  Gem,
  Home,
  Sparkles,
  Speaker,
  Mail,
  Scissors,
  Car,
  Trophy,
  Users,
  Rocket,
  Smile,
  BookOpen
} from 'lucide-react';

const ServicesSnapshot = () => {
  // Event Types: Only unique, high-level types, now with imageUrl
  const eventTypes = [
    {
      id: '1',
      name: 'Wedding',
      description: 'A special day for two people to become one',
      icon: 'Heart',
      imageUrl: '/img/Wedding.jpeg',
    },
    {
      id: '2',
      name: 'Birthday',
      description: 'Celebrating a special day',
      icon: 'PartyPopper',
      imageUrl: '/img/birthday.jpg',
    },
    {
      id: '3',
      name: 'Annual Day',
      description: 'Celebrating a milestone',
      icon: 'GraduationCap',
      imageUrl: '/img/conference.jpg',
    },
    {
      id: '4',
      name: 'Anniversary',
      description: 'Celebrating a special bond',
      icon: 'Gift',
      imageUrl: '/img/wedding2.jpg',
    },
    {
      id: '5',
      name: 'Stall Decoration',
      description: 'Professional gatherings for business',
      icon: 'Tent',
      imageUrl: '/img/stall.jpg',
    },
    {
      id: '6',
      name: 'Corporate Event',
      description: 'Professional gatherings for business',
      icon: 'Briefcase',
      imageUrl: '/img/conference.jpg',
    },
    {
      id: '7',
      name: 'Baby Shower',
      description: 'Welcoming a new life with joy',
      icon: 'Baby',
      imageUrl: '/img/decoration1.jpg',
    },
    {
      id: '8',
      name: 'Engagement',
      description: 'Celebrating the start of a new journey',
      icon: 'Gem',
      imageUrl: '/img/Wedding.jpeg',
    },
    {
      id: '9',
      name: 'Housewarming',
      description: 'Blessing a new home',
      icon: 'Home',
      imageUrl: '/img/decoration1.jpg',
    },
    {
      id: '10',
      name: 'Festival Celebration',
      description: 'Traditional and cultural festivities',
      icon: 'Sparkles',
      imageUrl: '/img/cultural-event.jpg',
    },
    {
      id: '11',
      name: 'Sports Event',
      description: 'Exciting competitions and athletic gatherings',
      icon: 'Trophy',
      imageUrl: '/img/games.jpg',
    },
    {
      id: '12',
      name: 'Reunion',
      description: 'Bringing friends and family together',
      icon: 'Users',
      imageUrl: '/img/interactive.jpg',
    },
    {
      id: '13',
      name: 'Product Launch',
      description: 'Introducing new products to the world',
      icon: 'Rocket',
      imageUrl: '/img/LED Wall & Standees.jpg',
    },
    {
      id: '14',
      name: 'Farewell',
      description: 'Bidding adieu with fond memories',
      icon: 'Smile',
      imageUrl: '/img/conference.jpg',
    },
    {
      id: '15',
      name: 'Workshop',
      description: 'Learning and skill-building sessions',
      icon: 'BookOpen',
      imageUrl: '/img/audiovideo.jpg',
    },
  ];

  // Event Services: Only unique, actual services, now with imageUrl
  const eventServices = [
    {
      id: '1',
      name: 'Event Planning',
      description: 'Full-service planning for any occasion',
      icon: 'Building2',
      pricing: 'Custom Pricing',
      imageUrl: '/img/stags.jpg',
    },
    {
      id: '2',
      name: 'Photography',
      description: 'Capturing moments in time',
      icon: 'Camera',
      pricing: 'Custom Pricing',
      imageUrl: '/img/wedding2.jpg',
    },
    {
      id: '3',
      name: 'Catering',
      description: 'Delicious food for any occasion',
      icon: 'Utensils',
      pricing: 'Custom Pricing',
      imageUrl: '/img/birthday.jpg',
    },
    {
      id: '4',
      name: 'Decor',
      description: 'Creating a beautiful atmosphere',
      icon: 'Palette',
      pricing: 'Custom Pricing',
      imageUrl: '/img/decoration1.jpg',
    },
    {
      id: '5',
      name: 'DJ',
      description: 'Providing the soundtrack for your event',
      icon: 'Mic',
      pricing: 'Custom Pricing',
      imageUrl: '/img/Professional_Sounds_Lights.jpeg',
    },
    {
      id: '6',
      name: 'Lighting & Sound',
      description: 'Professional lighting and sound setup for any event',
      icon: 'Speaker',
      pricing: 'Custom Pricing',
      imageUrl: '/img/loghts.jpg',
    },
    {
      id: '7',
      name: 'Interactive Games',
      description: 'Fun games and activities for all ages',
      icon: 'Trophy',
      pricing: 'Custom Pricing',
      imageUrl: '/img/interactive.jpg',
    },
    {
      id: '8',
      name: 'Mehandi & Arts',
      description: 'Traditional mehandi and artistic services',
      icon: 'Palette',
      pricing: 'Custom Pricing',
      imageUrl: '/img/mehandi12.jpg',
    },
    {
      id: '9',
      name: 'TV Rental',
      description: 'LED screens and TV rental for events',
      icon: 'Speaker',
      pricing: 'Custom Pricing',
      imageUrl: '/img/tvrental.jpg',
    },
    {
      id: '10',
      name: 'Live Entertainment',
      description: 'Live music, dance, and performances',
      icon: 'Music',
      pricing: 'Custom Pricing',
      imageUrl: '/img/cultural-event.jpg',
    },
  ];

  // Icon mapping
  const iconMap = {
    Building2,
    Heart,
    GraduationCap,
    PartyPopper,
    Music,
    Camera,
    Utensils,
    Palette,
    Mic,
    Gift,
    Tent,
    Briefcase,
    Baby,
    Gem,
    Home,
    Sparkles,
    Speaker,
    Mail,
    Scissors,
    Car,
    Trophy,
    Users,
    Rocket,
    Smile,
    BookOpen
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-serif text-4xl md:text-5xl font-bold text-maroon-900 mb-6"
          >
            Our <span className="text-gold-600">Services</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Comprehensive event solutions tailored to make your occasions unforgettable
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Event Types */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="font-serif text-2xl font-bold text-maroon-800 mb-8 text-center lg:text-left flex items-center justify-center lg:justify-start">
              <Sparkles className="h-6 w-6 mr-3 text-gold-500" />
              Event Types We Handle
            </h3>
            <div className="grid grid-cols-2 gap-6">
              {eventTypes.slice(0, 6).map((event, index) => { // Displaying first 6 for snapshot
                const IconComponent = iconMap[event.icon as keyof typeof iconMap] || Building2;
                return (
                  <motion.div
                    key={event.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="group flex flex-col bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden"
                  >
                    <div className="h-32 overflow-hidden relative">
                      {event.imageUrl && (
                        <img src={event.imageUrl} alt={event.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-maroon-900/80 to-transparent flex items-end p-4">
                        <IconComponent className="h-6 w-6 text-gold-400" />
                      </div>
                    </div>
                    <div className="p-4 flex-grow flex flex-col">
                      <h4 className="font-semibold text-maroon-900 text-lg mb-1">{event.name}</h4>
                      <p className="text-gray-600 text-xs line-clamp-2">{event.description}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
            <div className="mt-8 text-center">
              <Link to="/services" className="text-maroon-600 font-semibold hover:text-maroon-800 inline-flex items-center text-sm">
                View all event types <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </motion.div>

          {/* Event Services */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="font-serif text-2xl font-bold text-maroon-800 mb-8 text-center lg:text-left flex items-center justify-center lg:justify-start">
              <Gem className="h-6 w-6 mr-3 text-gold-500" />
              Complete Event Services
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {eventServices.slice(0, 4).map((service, index) => { // Displaying first 4 for snapshot
                const IconComponent = iconMap[service.icon as keyof typeof iconMap] || Music;
                return (
                  <motion.div
                    key={service.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="group bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden flex flex-row h-32"
                  >
                    <div className="w-1/3 relative overflow-hidden">
                      {service.imageUrl && (
                        <img src={service.imageUrl} alt={service.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                      )}
                      <div className="absolute inset-0 bg-maroon-900/20 group-hover:bg-transparent transition-colors"></div>
                    </div>
                    <div className="w-2/3 p-4 flex flex-col justify-center">
                      <div className="flex items-center mb-2">
                        <IconComponent className="h-5 w-5 text-gold-600 mr-2" />
                        <h4 className="font-semibold text-maroon-900">{service.name}</h4>
                      </div>
                      <p className="text-gray-600 text-xs mb-2 line-clamp-2">{service.description}</p>
                      <span className="text-xs text-gold-600 font-medium">{service.pricing}</span>
                    </div>
                  </motion.div>
                );
              })}
            </div>
            <div className="mt-8 text-center">
              <Link to="/services" className="text-maroon-600 font-semibold hover:text-maroon-800 inline-flex items-center text-sm">
                Explore all services <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Enhanced CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mt-20"
        >
          <div className="bg-gradient-to-r from-maroon-900 to-maroon-800 rounded-2xl p-8 md:p-12 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-gold-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
            <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-40 h-40 bg-maroon-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>

            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="text-left md:w-2/3">
                <h3 className="font-serif text-2xl md:text-3xl font-bold text-white mb-2">
                  Ready to Plan Your Dream Event?
                </h3>
                <p className="text-maroon-100 text-lg">
                  With over 3000+ successful events, we brings your vision to life.
                </p>
              </div>
              <div className="md:w-1/3 flex justify-center md:justify-end">
                <Link
                  to="/contact"
                  className="group inline-flex items-center bg-white text-maroon-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-gold-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section >
  );
};

export default ServicesSnapshot;
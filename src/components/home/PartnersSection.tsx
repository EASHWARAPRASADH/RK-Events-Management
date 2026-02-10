import React from 'react';
import { Handshake, Award, Star, Users } from 'lucide-react';

const PartnersSection = () => {
  const partners = [
    { id: 1, name: 'Partner 1', logo: '/img/partners/partner1.png', fallback: '/img/logo1.jpg' },
    { id: 2, name: 'Partner 2', logo: '/img/partners/partner2.jpg', fallback: '/img/venue.jpg' },
    { id: 3, name: 'Partner 3', logo: '/img/partners/partner3.jpg', fallback: '/img/stage.jpg' },
    { id: 4, name: 'Partner 4', logo: '/img/partners/partner4.png', fallback: '/img/catering-service1.jpg' },
    { id: 5, name: 'Partner 5', logo: '/img/partners/partner5.jpg', fallback: '/img/lights.jpg' },
    { id: 6, name: 'Partner 6', logo: '/img/partners/partner6.jpg', fallback: '/img/DJ-Booth.jpg' }
  ];

  const achievements = [
    {
      icon: Award,
      title: 'Certified Partners',
      description: 'All our partners are certified and verified'
    },
    {
      icon: Star,
      title: 'Quality Assured',
      description: 'Maintaining highest quality standards'
    },
    {
      icon: Users,
      title: 'Trusted Network',
      description: '50+ trusted partners across services'
    },
    {
      icon: Handshake,
      title: 'Long-term Relations',
      description: 'Building lasting business relationships'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl font-bold text-maroon-900 mb-6">
            Our Trusted <span className="text-gold-600">Partners</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We collaborate with the best in the industry to deliver exceptional events and services
          </p>
        </div>

        {/* Partners Grid */}
        <div className="grid grid-cols-3 md:grid-cols-6 gap-8 mb-16">
          {partners.map((partner) => (
            <div
              key={partner.id}
              className="bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center justify-center"
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="max-w-full max-h-16 object-contain"
                onError={(e) => {
                  console.log(`Failed to load: ${partner.logo}, using fallback: ${partner.fallback}`);
                  e.currentTarget.src = partner.fallback; // Use specific fallback image
                }}
              />
            </div>
          ))}
        </div>

        {/* Achievements */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="text-center group"
            >
              <div className="bg-gradient-to-br from-maroon-100 to-gold-100 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <achievement.icon className="h-8 w-8 text-maroon-600" />
              </div>
              <h3 className="font-semibold text-maroon-900 mb-2">
                {achievement.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {achievement.description}
              </p>
            </div>
          ))}
        </div>

        {/* Partnership Stats */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-maroon-800 to-maroon-600 rounded-2xl p-8 text-white">
            <h3 className="font-serif text-2xl font-bold mb-6">
              Partnership <span className="text-gold-400">Excellence</span>
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-gold-400 mb-2">20+</div>
                <div className="text-sm text-maroon-100">Trusted Partners</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gold-400 mb-2">6</div>
                <div className="text-sm text-maroon-100">Service Categories</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gold-400 mb-2">500+</div>
                <div className="text-sm text-maroon-100">Collaborations</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gold-400 mb-2">15+</div>
                <div className="text-sm text-maroon-100">Years Experience</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;

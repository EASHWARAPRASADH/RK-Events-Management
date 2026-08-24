import React from 'react';
import { Handshake } from 'lucide-react';

const Partners = () => {

  // Simple partner list with just logos - using available images as fallbacks
  const partners = [
    { id: 1, name: 'Partner 1', logo: '/img/partners/partner1.png', fallback: '/img/logo1.jpg' },
    { id: 2, name: 'Partner 2', logo: '/img/partners/partner2.jpg', fallback: '/img/venue.jpg' },
    { id: 3, name: 'Partner 3', logo: '/img/partners/partner3.jpg', fallback: '/img/stage.jpg' },
    { id: 4, name: 'Partner 4', logo: '/img/partners/partner4.webp', fallback: '/img/catering.jpg' },
    { id: 5, name: 'Partner 5', logo: '/img/partners/partner5.jpg', fallback: '/img/audiovideo.jpg' },
    { id: 6, name: 'Partner 6', logo: '/img/partners/partner6.jpg', fallback: '/img/DJ-Booth.jpg' },
    { id: 7, name: 'Partner 7', logo: '/img/partners/partner7.jpg', fallback: '/img/loghts.jpg' },
    { id: 8, name: 'Partner 8', logo: '/img/partners/partner8.jpg', fallback: '/img/interactive.jpg' },
    { id: 9, name: 'Partner 9', logo: '/img/partners/partner9.jpg', fallback: '/img/loghts.jpg' },
    { id: 10, name: 'Partner 10', logo: '/img/partners/partner10.jpg', fallback: '/img/stall.jpg' },
    { id: 11, name: 'Partner 11', logo: '/img/partners/partner11.jpg', fallback: '/img/mehandi12.jpg' },
    { id: 12, name: 'Partner 12', logo: '/img/partners/partner12.jpg', fallback: '/img/flowerdecorations.jpg' },
    { id: 13, name: 'Partner 13', logo: '/img/partners/partner13.jpg', fallback: '/img/tvrental.jpg' },
    { id: 14, name: 'Partner 14', logo: '/img/partners/partner14.png', fallback: '/img/360.png' },
    { id: 15, name: 'Partner 15', logo: '/img/partners/partner15.jpg', fallback: '/img/buffet.jpg' },
    { id: 16, name: 'Partner 16', logo: '/img/partners/partner16.jpg', fallback: '/img/conference.jpg' },
    { id: 17, name: 'Partner 17', logo: '/img/partners/partner17.jpg', fallback: '/img/wedding1.jpg' },
    { id: 18, name: 'Partner 18', logo: '/img/partners/partner18.jpg', fallback: '/img/birthday.jpg' },
    { id: 19, name: 'Partner 19', logo: '/img/partners/partner19.jpg', fallback: '/img/games.jpg' },
    { id: 20, name: 'Partner 20', logo: '/img/partners/partner20.jpg', fallback: '/img/garden.jpg' }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-maroon-900 to-maroon-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">
            Our <span className="text-gold-400">Partners</span>
          </h1>
          <p className="text-lg text-maroon-100 max-w-2xl mx-auto">
            Trusted partners who help us deliver exceptional events
          </p>
        </div>
      </section>

      {/* Partners Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
            {partners.map((partner) => (
              <div
                key={partner.id}
                className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-all duration-300 hover:scale-105 flex items-center justify-center"
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="max-w-full max-h-20 object-contain"
                  onError={(e) => {
                    console.log(`❌ Failed to load: ${partner.logo}`);
                    console.log(`✅ Using fallback: ${partner.fallback}`);
                    e.currentTarget.src = partner.fallback; // Use specific fallback image
                  }}
                  onLoad={() => {
                    console.log(`✅ Successfully loaded: ${partner.logo}`);
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Simple Stats */}
      <section className="py-16 bg-gradient-to-r from-maroon-600 to-maroon-500 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-gold-400 mb-2">20+</div>
              <div className="text-maroon-100">Partners</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-gold-400 mb-2">500+</div>
              <div className="text-maroon-100">Events</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-gold-400 mb-2">16+</div>
              <div className="text-maroon-100">Years</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-gold-400 mb-2">100%</div>
              <div className="text-maroon-100">Trusted</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Partners;

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  ArrowRight,
  Eye,
} from 'lucide-react';
import EventGalleryModal from '../components/EventGalleryModal';
import { eventTypes, eventServices, serviceGalleryImages } from '../data/servicesData';

// Service Gallery Modal Component
const ServiceGalleryModal = ({ isOpen, onClose, service }: { isOpen: boolean; onClose: () => void; service: any }) => {
  if (!isOpen) return null;

  const getServiceImages = (serviceName: string) => {
    return serviceGalleryImages[serviceName] || [
      { id: 1, url: service.image, title: service.name, description: service.description },
      { id: 2, url: '/img/venue.jpg', title: 'Professional Setup', description: 'Professional service setup and execution' },
      { id: 3, url: '/img/stage.jpg', title: 'Event Integration', description: 'Seamless integration with your event' }
    ];
  };

  const serviceImages = getServiceImages(service.name);

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="fixed inset-0 bg-black/80 backdrop-blur-sm" onClick={onClose}></div>

      <div className="relative min-h-screen flex items-center justify-center p-4">
        <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] flex flex-col overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-maroon-800 to-maroon-600 text-white p-6 flex-shrink-0">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="bg-white/20 p-3 rounded-lg">
                  <service.icon className="h-8 w-8" />
                </div>
                <div>
                  <h2 className="font-serif text-2xl font-bold">{service.name}</h2>
                  <p className="text-maroon-100">{service.description}</p>
                </div>
              </div>
              <button
                onClick={onClose}
                className="bg-white/20 hover:bg-white/30 p-2 rounded-lg transition-colors"
              >
                <Eye className="h-6 w-6 rotate-180" />
              </button>
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 p-6 overflow-y-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {serviceImages.map((image, index) => (
                <div
                  key={image.id}
                  className="group relative bg-gray-100 rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300 hover:scale-105"
                >
                  <div className="h-48">
                    <img
                      src={image.url}
                      alt={image.title}
                      className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-500 image-rendering-crisp"
                      style={{
                        imageRendering: '-webkit-optimize-contrast',
                        backfaceVisibility: 'hidden',
                        transform: 'translateZ(0)',
                      }}
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="font-semibold text-sm mb-1">{image.title}</h3>
                    <p className="text-xs text-gray-200">{image.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Features */}
            <div className="bg-gray-50 p-6 rounded-xl">
              <h3 className="font-semibold text-gray-900 mb-4">What's Included in {service.name}</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {service.features.map((feature: string, index: number) => (
                  <div key={index} className="flex items-center text-sm text-gray-600">
                    <div className="w-2 h-2 bg-maroon-500 rounded-full mr-3 flex-shrink-0"></div>
                    {feature}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="border-t border-gray-200 bg-white p-6 flex-shrink-0">
            <div className="flex flex-col sm:flex-row gap-4 justify-between items-center">
              <div className="text-center sm:text-left">
                <p className="text-gray-600 text-sm font-medium">Ready to book {service.name}?</p>
                <p className="text-xs text-gray-500">Get a personalized quote today</p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
                <a
                  href={`https://wa.me/919710916687?text=Hi! I'm interested in ${service.name} for my event. Please provide me with a quote and more details.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:scale-105 flex items-center justify-center shadow-lg"
                >
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.382" />
                  </svg>
                  WhatsApp Quote
                </a>
                <a
                  href="tel:+919710916687"
                  className="bg-maroon-600 hover:bg-maroon-700 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:scale-105 flex items-center justify-center shadow-lg"
                >
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                  </svg>
                  Call Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Services = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('types');
  const [selectedEvent, setSelectedEvent] = useState<any>(null);
  const [selectedService, setSelectedService] = useState<any>(null);

  const openGallery = (event: any) => {
    setSelectedEvent(event);
  };

  const closeGallery = () => {
    setSelectedEvent(null);
  };

  const openServiceGallery = (service: any) => {
    // Map event names to gallery filter IDs
    const eventToFilterMap: { [key: string]: string } = {
      'Corporate Events': 'corporate',
      'Wedding Events': 'wedding',
      'Birthday Parties': 'birthday',
      'Mini Games': 'sports',
      'Cultural Events': 'cultural',
      'Photography and Video': 'services',
      'Decorations': 'decorations'
    };

    const filterId = eventToFilterMap[service.name];
    if (filterId) {
      // Navigate to gallery page with the specific filter
      navigate(`/gallery?filter=${filterId}`);
    } else {
      // Fallback to opening the modal if no mapping found
      setSelectedService(service);
    }
  };

  const closeServiceGallery = () => {
    setSelectedService(null);
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-maroon-900 to-maroon-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="font-serif text-4xl md:text-6xl font-bold mb-8">
              Our <span className="text-gold-400">Services</span>
            </h1>
            <p className="text-xl md:text-2xl text-maroon-100 max-w-4xl mx-auto leading-relaxed">
              Comprehensive event solutions tailored to make your occasions unforgettable
            </p>
          </div>
        </div>
      </section>

      {/* Tab Navigation */}
      <section className="py-8 bg-white border-b border-gray-200 fixed md:sticky top-20 left-0 right-0 w-full z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center">
            <div className="bg-gray-100 p-1 rounded-full flex flex-row">
              <button
                onClick={() => setActiveTab('types')}
                className={`px-4 sm:px-8 py-3 rounded-full font-semibold transition-all duration-300 whitespace-nowrap ${activeTab === 'types'
                    ? 'bg-maroon-600 text-white shadow-lg'
                    : 'text-gray-600 hover:text-maroon-600'
                  }`}
              >
                Event Types
              </button>
              <button
                onClick={() => setActiveTab('services')}
                className={`px-4 sm:px-8 py-3 rounded-full font-semibold transition-all duration-300 whitespace-nowrap ${activeTab === 'services'
                    ? 'bg-maroon-600 text-white shadow-lg'
                    : 'text-gray-600 hover:text-maroon-600'
                  }`}
              >
                Event Services
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Event Types */}
      {activeTab === 'types' && (
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="font-serif text-4xl font-bold text-maroon-900 mb-6">
                Event <span className="text-gold-600">Types</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We specialize in organizing various types of events with expertise and attention to detail
              </p>
            </div>

            <div className="space-y-16">
              {eventTypes.map((event, index) => {
                return (
                  <div
                    key={index}
                    className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                      }`}
                  >
                    <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                      <div className="flex items-center mb-6">
                        <div className="bg-maroon-100 p-4 rounded-xl mr-4">
                          <event.icon className="h-8 w-8 text-maroon-600" />
                        </div>
                        <h3 className="font-serif text-3xl font-bold text-maroon-900">{event.name}</h3>
                      </div>

                      <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                        {event.description}
                      </p>

                      <div className="space-y-3 mb-8">
                        {event.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center">
                            <ArrowRight className="h-5 w-5 text-gold-500 mr-3 flex-shrink-0" />
                            <span className="text-gray-700">{feature}</span>
                          </div>
                        ))}
                      </div>

                      <div className="flex flex-col sm:flex-row gap-4">
                        <button
                          onClick={() => openServiceGallery(event)}
                          className="inline-flex items-center bg-gradient-to-r from-gold-500 to-gold-600 text-maroon-900 px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105"
                        >
                          <Eye className="mr-2 h-5 w-5" />
                          View Gallery
                        </button>
                        <a
                          href="https://wa.me/919710916687"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center bg-gradient-to-r from-maroon-600 to-maroon-500 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105"
                        >
                          Get Quote for {event.name}
                          <ArrowRight className="ml-2 h-5 w-5" />
                        </a>
                      </div>
                    </div>

                    <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                      <div className="relative group">
                        <img
                          src={event.image}
                          alt={event.name}
                          className="rounded-2xl shadow-2xl w-full h-[450px] object-cover object-center group-hover:scale-105 transition-transform duration-500 image-rendering-crisp"
                          style={{
                            imageRendering: '-webkit-optimize-contrast',
                            backfaceVisibility: 'hidden',
                            transform: 'translateZ(0)',
                          }}
                          loading="lazy"
                          decoding="async"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-maroon-900/20 to-transparent rounded-2xl group-hover:from-maroon-900/40 transition-all duration-300"></div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* Event Services */}
      {activeTab === 'services' && (
        <section className="py-20 bg-gradient-to-br from-gray-50 to-maroon-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="font-serif text-4xl font-bold text-maroon-900 mb-6">
                Event <span className="text-gold-600">Services</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Complete range of services to ensure your event is flawless from start to finish
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {eventServices.map((service, index) => (
                <div
                  key={index}
                  className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 overflow-hidden"
                >
                  {/* Service Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.name}
                      className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-500 image-rendering-crisp"
                      style={{
                        imageRendering: '-webkit-optimize-contrast',
                        backfaceVisibility: 'hidden',
                        transform: 'translateZ(0)',
                      }}
                      loading="lazy"
                      decoding="async"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-maroon-900/60 via-transparent to-transparent"></div>

                    {/* Icon Overlay */}
                    <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm p-3 rounded-xl">
                      <service.icon className="h-6 w-6 text-white" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="font-serif text-xl font-bold text-maroon-900 mb-3">
                      {service.name}
                    </h3>

                    <p className="text-gray-600 mb-4 leading-relaxed text-sm">
                      {service.description}
                    </p>

                    <div className="space-y-2 mb-6">
                      {service.features.slice(0, 4).map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center text-sm">
                          <div className="w-2 h-2 bg-gold-500 rounded-full mr-3 flex-shrink-0"></div>
                          <span className="text-gray-600">{feature}</span>
                        </div>
                      ))}
                      {service.features.length > 4 && (
                        <div className="text-xs text-gray-500 mt-2">
                          +{service.features.length - 4} more services
                        </div>
                      )}
                    </div>

                    <div className="flex gap-2">
                      <a
                        href={`https://wa.me/919710916687?text=Hi! I'm interested in ${service.name} for my event. Please provide me with a quote and more details.`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 bg-gradient-to-r from-maroon-600 to-maroon-500 text-white py-2 px-4 rounded-lg font-medium hover:shadow-lg transition-all duration-300 group-hover:from-maroon-700 group-hover:to-maroon-600 text-sm text-center hover:scale-105"
                      >
                        Get Quote
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-maroon-800 to-maroon-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-4xl font-bold mb-6">
            Ready to Plan Your <span className="text-gold-400">Perfect Event?</span>
          </h2>
          <p className="text-xl text-maroon-100 mb-10 max-w-3xl mx-auto">
            Let us help you create an unforgettable experience. Contact us today for a personalized quote.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/919710916687"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 inline-flex items-center justify-center"
            >
              WhatsApp Us
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
            <a
              href="tel:+919710916687"
              className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white px-8 py-4 rounded-full font-semibold border-2 border-white/30 transition-all duration-300 inline-flex items-center justify-center"
            >
              Call Now
            </a>
          </div>
        </div>
      </section>

      {/* Event Gallery Modal */}
      {selectedEvent && (
        <EventGalleryModal
          isOpen={!!selectedEvent}
          onClose={closeGallery}
          eventType={selectedEvent}
        />
      )}

      {/* Service Gallery Modal */}
      {selectedService && (
        <ServiceGalleryModal
          isOpen={!!selectedService}
          onClose={closeServiceGallery}
          service={selectedService}
        />
      )}
    </div>
  );
};

export default Services;
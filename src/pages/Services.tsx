import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  ArrowRight,
  Eye,
} from 'lucide-react';
import EventGalleryModal from '../components/EventGalleryModal';
import ServiceGalleryModal from '../components/ServiceGalleryModal';
import { eventTypes, eventServices, serviceGalleryImages } from '../data/servicesData';

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
    setSelectedService(service);
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
                          onClick={() => openGallery(event)}
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
                      <button
                        onClick={() => openServiceGallery(service)}
                        className="flex-1 bg-white border border-maroon-600 text-maroon-700 py-2 px-4 rounded-lg font-medium hover:bg-maroon-50 transition-all duration-300 text-sm text-center hover:scale-105"
                      >
                        View Gallery
                      </button>
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
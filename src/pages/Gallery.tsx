import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Filter, Eye, X, ChevronLeft, ChevronRight, Download } from 'lucide-react';
import ServiceGalleryModal from '../components/ServiceGalleryModal';
import { galleryItems as galleryItemsData } from '../data/galleryData';

const Gallery = () => {
  const location = useLocation();
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedService, setSelectedService] = useState<any>(null);
  const [isServiceModalOpen, setIsServiceModalOpen] = useState(false);
  const [visibleItems, setVisibleItems] = useState(50); // Increased to show all items by default

  // Handle URL parameters to set initial filter
  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const filterParam = searchParams.get('filter');

    if (filterParam) {
      // Validate that the filter exists in our filters array
      const validFilters = ['all', 'corporate', 'wedding', 'birthday', 'sports', 'vr-motion-360', 'stalls', 'cultural', 'decorations'];
      if (validFilters.includes(filterParam)) {
        setActiveFilter(filterParam);
        setVisibleItems(12);
      }
    }
  }, [location.search]);

  // Reset visible items when filter changes
  const handleFilterChange = (filterId: string) => {
    setActiveFilter(filterId);
    setVisibleItems(12);
  };

  const filters = [
    { id: 'all', name: 'Our Services' },
    { id: 'corporate', name: 'Corporate' },
    { id: 'wedding', name: 'Weddings' },
    { id: 'birthday', name: 'Birthdays' },
    { id: 'sports', name: 'Interactive Games' },
    { id: 'vr-motion-360', name: 'VR, Motion & 360°' },
    { id: 'stalls', name: 'Stalls' },
    { id: 'cultural', name: 'College Culturals and School Annual Day' },
    { id: 'decorations', name: 'Decorations' }
  ];

  // Gallery items with multiple images per category (except Our Services)
  const galleryItems = galleryItemsData;

  // Debug: Log all cultural items
  console.log('All cultural items:', galleryItems.filter(item => item.category === 'cultural'));

  const allFilteredItems = activeFilter === 'all'
    ? galleryItems.filter((item, index, self) =>
      // For "Our Services", show only one image per category
      self.findIndex(x => x.category === item.category) === index
    )
    : galleryItems.filter(item => {
      const matches = item.category === activeFilter;
      if (matches) {
        console.log('Matching item:', item);
      }
      return matches;
    });

  // Sort items: Videos first, then by ID
  allFilteredItems.sort((a, b) => {
    if (a.isVideo && !b.isVideo) return -1;
    if (!a.isVideo && b.isVideo) return 1;
    return a.id - b.id;
  });

  const filteredItems = allFilteredItems.slice(0, visibleItems);

  // Debug: Log filtered items
  console.log('Filtered items:', filteredItems);

  const openServiceModal = (service: any) => {
    setSelectedService(service);
    setIsServiceModalOpen(true);
    // Prevent body scroll when modal is open
    document.body.style.overflow = 'hidden';
    // Ensure modal is positioned correctly on mobile
    document.body.style.position = 'fixed';
    document.body.style.width = '100%';
    // Scroll to top to ensure modal is visible
    window.scrollTo(0, 0);
  };

  const closeServiceModal = () => {
    setIsServiceModalOpen(false);
    setSelectedService(null);
    // Restore body scroll and position
    document.body.style.overflow = 'unset';
    document.body.style.position = 'unset';
    document.body.style.width = 'unset';
  };







  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-maroon-900 to-maroon-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="font-serif text-4xl md:text-6xl font-bold mb-8">
              Event <span className="text-gold-400">Gallery</span>
            </h1>
            <p className="text-xl md:text-2xl text-maroon-100 max-w-4xl mx-auto leading-relaxed">
              Explore our portfolio of memorable events and celebrations
            </p>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-6 sm:py-8 bg-white border-b border-gray-200 sm:sticky sm:top-20 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0 w-full">
            <div className="flex items-center space-x-2 md:mr-6 flex-shrink-0">
              <Filter className="h-5 w-5 text-gray-600" />
              <span className="text-gray-600 font-medium whitespace-nowrap">Filter by:</span>
            </div>
            <div className="flex gap-2 overflow-x-auto w-full px-2 py-2 justify-start md:justify-start">
              {filters.map((filter) => (
                <button
                  key={filter.id}
                  onClick={() => handleFilterChange(filter.id)}
                  className={`px-5 py-2.5 rounded-full text-xs font-semibold transition-all duration-300 whitespace-nowrap text-center flex-shrink-0 ${activeFilter === filter.id
                    ? 'bg-maroon-600 text-white shadow-md'
                    : 'bg-gray-100 text-gray-600 hover:bg-maroon-100 hover:text-maroon-600'
                    }`}
                >
                  {filter.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-10 sm:py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
            {filteredItems.map((item, index) => {
              // Get image from media context or use fallback
              const imageUrl = item.image || 'https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop';
              const imageAlt = item.title;

              return (
                <div
                  key={item.id}
                  className="group relative bg-white rounded-2xl shadow-lg transition-all duration-200 sm:duration-300 sm:hover:shadow-2xl sm:hover:scale-105 overflow-hidden"
                >
                  {/* Media Container */}
                  <div className="relative h-48 sm:h-72 overflow-hidden">
                    {/* Mobile: Make entire media clickable */}
                    <div
                      className="sm:hidden absolute inset-0 z-10 cursor-pointer"
                      onClick={() => openServiceModal(item)}
                      role="button"
                      tabIndex={0}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                          e.preventDefault();
                          openServiceModal(item);
                        }
                      }}
                      aria-label={`View ${item.title} ${item.isVideo ? 'video' : 'gallery'}`}
                    />

                    {item.isVideo ? (
                      // Video Player
                      <video
                        className="w-full h-full object-contain bg-black"
                        controls
                        muted
                        preload="metadata"
                        poster={item.image || '/placeholder-video.jpg'}
                      >
                        <source src={item.video} type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                    ) : (
                      // Image
                      <img
                        src={imageUrl}
                        alt={imageAlt}
                        className="w-full h-full object-cover object-center transition-transform duration-300 sm:duration-500 sm:group-hover:scale-110"
                        style={{
                          imageRendering: 'auto',
                          backfaceVisibility: 'hidden',
                          transform: 'translateZ(0)',
                        }}
                        loading={index < 6 ? "eager" : "lazy"}
                        decoding="async"
                      />
                    )}

                    {/* Desktop hover overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 sm:group-hover:opacity-100 transition-opacity duration-200"></div>

                    {/* Mobile: Always visible overlay with tap indicator */}
                    <div className="sm:hidden absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none">
                      <div className="absolute bottom-2 right-2 bg-white/20 backdrop-blur-sm p-1.5 rounded-full">
                        {item.isVideo ? (
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M6.3 2.841A1.5 1.5 0 004 4.11v11.78a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                          </svg>
                        ) : (
                          <Eye className="h-4 w-4 text-white" />
                        )}
                      </div>
                    </div>

                    {/* Desktop: Overlay Icons on hover */}
                    <div className="hidden sm:flex absolute inset-0 items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                      <button
                        onClick={() => openServiceModal(item)}
                        className="bg-white/20 backdrop-blur-sm p-3 rounded-full hover:bg-white/30 transition-colors"
                        title={item.isVideo ? 'Play Video' : 'View Gallery'}
                      >
                        {item.isVideo ? (
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M6.3 2.841A1.5 1.5 0 004 4.11v11.78a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                          </svg>
                        ) : (
                          <Eye className="h-6 w-6 text-white" />
                        )}
                      </button>
                    </div>

                    {/* Category Badge */}
                    <div className="absolute top-2 right-2 sm:top-4 sm:right-4 bg-maroon-600 text-white px-2 py-1 sm:px-3 sm:py-1 rounded-full text-xs sm:text-sm font-medium capitalize">
                      {item.category}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-3 sm:p-6">
                    <h3 className="font-serif text-lg sm:text-xl font-bold text-maroon-900 mb-1 sm:mb-2 group-hover:text-maroon-700 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Load More Button */}
          {visibleItems < allFilteredItems.length && (
            <div className="text-center mt-10 sm:mt-16">
              <button
                onClick={() => setVisibleItems(prev => prev + 12)}
                className="bg-gradient-to-r from-maroon-600 to-maroon-500 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105 text-sm sm:text-base"
              >
                Load More Images ({allFilteredItems.length - visibleItems} remaining)
              </button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-gold-500 to-gold-600 text-maroon-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-4xl font-bold mb-6">
            Want Your Event Featured Here?
          </h2>
          <p className="text-xl mb-10 max-w-3xl mx-auto">
            Let us create beautiful memories for your special occasion and add them to our gallery of success stories.
          </p>
          <a
            href="https://wa.me/919703121430"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-maroon-800 hover:bg-maroon-900 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 inline-flex items-center"
          >
            Plan Your Event
            <Eye className="ml-2 h-5 w-5" />
          </a>
        </div>
      </section>

      {/* Service Gallery Modal */}
      {selectedService && (
        <ServiceGalleryModal
          isOpen={isServiceModalOpen}
          onClose={closeServiceModal}
          service={selectedService}
        />
      )}
    </div>
  );
};

export default Gallery;
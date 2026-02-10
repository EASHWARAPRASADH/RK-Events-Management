import React, { useState } from 'react';
import { X, Play, Eye, ChevronLeft, ChevronRight, Calendar, Users, MapPin } from 'lucide-react';

interface EventGalleryModalProps {
  isOpen: boolean;
  onClose: () => void;
  eventType: {
    name: string;
    description: string;
    features: string[];
    icon: React.ComponentType<any>;
  };
}

const EventGalleryModal: React.FC<EventGalleryModalProps> = ({ isOpen, onClose, eventType }) => {
  const [activeTab, setActiveTab] = useState<'images' | 'videos'>('images');
  const [selectedMedia, setSelectedMedia] = useState<number | null>(null);

  if (!isOpen) return null;

  // Define gallery images based on event type
  const getGalleryImages = (eventName: string) => {
    switch (eventName) {
      case 'Corporate Events':
        return [
          { id: 1, url: '/img/corporate-meeting1.jpg', title: 'Corporate Meeting Setup', event_name: 'Business Meeting 2024', description: 'Professional meeting setup with modern AV equipment' },
          { id: 2, url: '/img/corporate-meeting2.jpg', title: 'Business Conference', event_name: 'Corporate Conference', description: 'Corporate conference with professional presentation setup' },
          { id: 3, url: '/img/corporate-meeting3.jpg', title: 'Corporate Event Management', event_name: 'Business Event', description: 'Complete corporate event management and coordination' },
          { id: 4, url: '/img/corporate-sponsorboard.jpg', title: 'Corporate Sponsor Board', event_name: 'Sponsor Display', description: 'Professional sponsor board setup for corporate events' },
          { id: 5, url: '/img/Meeting6.jpg', title: 'Corporate Branding Wall', event_name: 'Brand Display', description: 'Custom branding wall for corporate events and product launches' },
          { id: 6, url: '/img/Meeting7.jpg', title: 'Corporate Networking Setup', event_name: 'Networking Event', description: 'Elegant networking area with branded elements for corporate gatherings' },
          { id: 7, url: '/img/Meeting8.jpg', title: 'Corporate Branding Display', event_name: 'Brand Showcase', description: 'Modern corporate branding display with digital signage and interactive elements' },
          { id: 8, url: '/img/audiovideo.jpg', title: 'AV Setup', event_name: 'Corporate Event', description: 'Professional audio-visual equipment setup' },
          { id: 9, url: '/img/stage.jpg', title: 'Corporate Stage', event_name: 'Product Launch', description: 'Professional stage setup for corporate events' },
          { id: 10, url: '/img/venue.jpg', title: 'Corporate Venue', event_name: 'Business Meeting', description: 'Elegant venue setup for corporate gatherings' }
        ];
      case 'Wedding Events':
        return [
          { id: 1, url: '/img/wedding-ceremony1.jpg', title: 'Dream Wedding Ceremony', event_name: 'Wedding', description: 'Beautiful wedding setup with elegant decorations and lighting' },
          { id: 2, url: '/img/wedding-ceremony2.jpg', title: 'Wedding Celebration', event_name: 'Wedding', description: 'Complete wedding ceremony with traditional arrangements' },
          { id: 3, url: '/img/wedding-dj.jpg', title: 'Wedding DJ Services', event_name: 'Wedding Entertainment', description: 'Professional DJ services for wedding entertainment' },
          { id: 4, url: '/img/wedding-cart.jpg', title: 'Wedding Cart Decoration', event_name: 'Wedding', description: 'Traditional wedding cart with beautiful decorations' }
        ];
      case 'Family Celebrations':
        return [
          { id: 1, url: '/img/wedding1.jpg', title: 'Wedding Celebration', event_name: 'Dream Wedding', description: 'Beautiful wedding ceremony and reception setup' },
          { id: 2, url: '/img/birthday.jpg', title: 'Birthday Party', event_name: 'Birthday Bash', description: 'Colorful and fun birthday party decoration' },
          { id: 3, url: '/img/familygettogether.jpg', title: 'Family Gathering', event_name: 'Family Reunion', description: 'Warm and welcoming family celebration setup' },
          { id: 4, url: '/img/familytrad.jpg', title: 'Traditional Celebration', event_name: 'Cultural Event', description: 'Traditional family celebration with cultural elements' },
          { id: 5, url: '/img/mehandi12.jpg', title: 'Mehandi Ceremony', event_name: 'Pre-Wedding', description: 'Beautiful mehandi ceremony decoration' },
          { id: 6, url: '/img/flowerdecorations.jpg', title: 'Floral Decorations', event_name: 'Wedding Decor', description: 'Stunning floral arrangements for family celebrations' }
        ];
      case 'Birthday Parties':
        return [
          { id: 1, url: '/img/birthday-decoration1.jpg', title: 'Birthday Party Decoration', event_name: 'Birthday Party', description: 'Colorful and fun birthday party with themed decorations' },
          { id: 2, url: '/img/birthday-decoration2.jpg', title: 'Birthday Celebration Setup', event_name: 'Birthday Celebration', description: 'Complete birthday party setup with decorations and arrangements' },
          { id: 3, url: '/img/birthday-art.jpg', title: 'Birthday Art Decoration', event_name: 'Creative Birthday', description: 'Creative birthday art and decoration arrangements' },
          { id: 4, url: '/img/birthday-decoration3.jpg', title: 'Themed Birthday Decoration', event_name: 'Themed Party', description: 'Themed birthday party decorations and setup' },
          { id: 5, url: '/img/birthday-decoration4.jpg', title: 'Birthday Party Arrangements', event_name: 'Birthday Setup', description: 'Professional birthday party arrangements and styling' },
          { id: 6, url: '/img/birthday-kidsplay.jpg', title: 'Kids Birthday Activities', event_name: 'Kids Party', description: 'Fun activities and play areas for kids birthday parties' },
        ];
      case 'Sports Events':
        return [
          { id: 1, url: '/img/mini-games1.jpg', title: 'Sports Tournament Games', event_name: 'Sports Tournament', description: 'Interactive sports games and tournament activities' },
          { id: 2, url: '/img/mini-games2.jpg', title: 'Sports Activities', event_name: 'Athletic Event', description: 'Fun sports activities and competitive games' },
          { id: 3, url: '/img/mini-games3.jpg', title: 'Athletic Events', event_name: 'Sports Competition', description: 'Professional athletic events and sports competitions' }
        ];
      case 'Cultural':
        return [
          { id: 1, url: '/img/cultural-event.jpg', title: 'Cultural Performance', event_name: 'Cultural Show', description: 'Traditional and cultural performance with authentic arrangements' },
          { id: 2, url: '/img/school-event1.jpg', title: 'School Cultural Program', event_name: 'School Event', description: 'School cultural events and educational programs' },
          { id: 3, url: '/img/school-annual.jpg', title: 'School Annual Day', event_name: 'Annual Celebration', description: 'Grand school annual day with cultural programs' },
          { id: 4, url: '/img/school-annual2.jpg', title: 'School Annual Celebration', event_name: 'Cultural Festival', description: 'School annual day celebrations with cultural performances' }
        ];
      case 'Services':
        return [
          { id: 1, url: '/img/catering-service1.jpg', title: 'Catering Services', event_name: 'Catering Service', description: 'Professional catering services for all types of events' },
          { id: 2, url: '/img/360-service.jpg', title: '360 Photo Booth', event_name: '360 Photography', description: '360-degree photo booth service for memorable moments' },
          { id: 3, url: '/img/cosplay-event.jpg', title: 'Character Services', event_name: 'Entertainment Service', description: 'Character entertainment and themed activity services' }
        ];
      case 'Decorations':
        return [
          { id: 1, url: '/img/decoration1.jpg', title: 'Event Decoration Setup', event_name: 'Decoration Service', description: 'Professional event decoration and themed arrangements' },
          { id: 2, url: '/img/stage-decoration.jpg', title: 'Stage Decoration', event_name: 'Stage Setup', description: 'Beautiful stage decorations for performances and events' },
          { id: 3, url: '/img/wall-decoration1.jpg', title: 'Wall Decoration', event_name: 'Backdrop Design', description: 'Creative wall decorations and backdrop arrangements' },
          { id: 4, url: '/img/Decorations123.jpg', title: 'Decoration', event_name: 'Backdrop Design', description: 'Elegant wall and backdrop decoration setup' },
          { id: 5, url: '/img/Decorations456.jpg', title: 'Floral Backdrop', event_name: 'Backdrop Design', description: 'Beautiful floral backdrop for elegant events' },
          { id: 6, url: '/img/Stagedecoration124.jpg', title: 'Elegant Balloon Arch', event_name: 'Backdrop Design', description: 'Stunning balloon arch for grand celebrations' }
        ];
      default:
        return [];
    }
  };

  const galleryImages = getGalleryImages(eventType.name);
  const galleryVideos: any[] = [];

  const currentMedia = activeTab === 'images' ? galleryImages : galleryVideos;

  const nextMedia = () => {
    if (selectedMedia !== null) {
      setSelectedMedia((selectedMedia + 1) % currentMedia.length);
    }
  };

  const prevMedia = () => {
    if (selectedMedia !== null) {
      setSelectedMedia((selectedMedia - 1 + currentMedia.length) % currentMedia.length);
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto" style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, width: '100vw', height: '100vh' }}>
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black/80 backdrop-blur-sm" onClick={onClose}></div>

      {/* Modal */}
      <div className="relative min-h-screen flex items-center justify-center p-2 sm:p-4">
        <div className="relative bg-white rounded-lg sm:rounded-2xl shadow-2xl w-full max-w-sm sm:max-w-2xl md:max-w-4xl lg:max-w-5xl max-h-[85vh] sm:max-h-[80vh] flex flex-col overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-maroon-800 to-maroon-600 text-white p-3 sm:p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2 sm:space-x-4 flex-1 min-w-0">
                <div className="bg-white/20 p-2 sm:p-3 rounded-lg flex-shrink-0">
                  <eventType.icon className="h-6 w-6 sm:h-8 sm:w-8" />
                </div>
                <div className="min-w-0 flex-1">
                  <h2 className="font-serif text-lg sm:text-2xl font-bold truncate">{eventType.name}</h2>
                  <p className="text-maroon-100 text-sm sm:text-base hidden sm:block">{eventType.description}</p>
                </div>
              </div>
              <button
                onClick={onClose}
                className="bg-white/20 hover:bg-white/30 p-2 rounded-lg transition-colors flex-shrink-0 ml-2"
              >
                <X className="h-5 w-5 sm:h-6 sm:w-6" />
              </button>
            </div>
          </div>

          {/* Tab Navigation */}
          <div className="border-b border-gray-200 bg-gray-50">
            <div className="flex space-x-4 sm:space-x-8 px-3 sm:px-4">
              <button
                onClick={() => setActiveTab('images')}
                className={`py-2 sm:py-3 px-1 sm:px-2 border-b-2 font-medium text-xs sm:text-sm transition-colors ${
                  activeTab === 'images'
                    ? 'border-maroon-500 text-maroon-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
              >
                <Eye className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2 inline-block" />
                <span className="hidden sm:inline">Images </span>({galleryImages.length})
              </button>
              <button
                onClick={() => setActiveTab('videos')}
                className={`py-2 sm:py-3 px-1 sm:px-2 border-b-2 font-medium text-xs sm:text-sm transition-colors ${
                  activeTab === 'videos'
                    ? 'border-maroon-500 text-maroon-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
              >
                <Play className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2 inline-block" />
                <span className="hidden sm:inline">Videos </span>({galleryVideos.length})
              </button>
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 p-2 sm:p-4 overflow-y-auto" style={{ maxHeight: 'calc(80vh - 120px)' }}>
            {/* Images Tab */}
            {activeTab === 'images' && (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6">
                {galleryImages.map((image, index) => (
                  <div
                    key={image.id}
                    className="group relative bg-gray-100 rounded-xl overflow-hidden cursor-pointer hover:shadow-lg transition-all duration-300 hover:scale-105"
                    onClick={() => {
                      setSelectedMedia(index);
                      // Prevent body scroll when modal is open
                      document.body.style.overflow = 'hidden';
                      document.body.style.position = 'fixed';
                      document.body.style.width = '100%';
                      window.scrollTo(0, 0);
                    }}
                  >
                    <div className="aspect-w-16 aspect-h-12 h-48 sm:h-64">
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
                    <div className="absolute bottom-0 left-0 right-0 p-2 sm:p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                      <h3 className="font-semibold text-xs sm:text-sm mb-1">{image.title}</h3>
                      <p className="text-xs text-gray-200">{image.event_name}</p>
                    </div>
                    <div className="absolute top-2 right-2 sm:top-4 sm:right-4 bg-white/20 backdrop-blur-sm p-1.5 sm:p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Eye className="h-3 w-3 sm:h-4 sm:w-4 text-white" />
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Videos Tab */}
            {activeTab === 'videos' && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-6">
                {galleryVideos.map((video, index) => (
                  <div
                    key={video.id}
                    className="group relative bg-gray-100 rounded-xl overflow-hidden cursor-pointer hover:shadow-lg transition-all duration-300 hover:scale-105"
                    onClick={() => setSelectedMedia(index)}
                  >
                    <div className="aspect-w-16 aspect-h-9 h-64">
                      <img
                        src={video.thumbnail_url || video.url}
                        alt={video.title}
                        className="w-full h-full object-cover object-center image-rendering-crisp"
                        style={{
                          imageRendering: '-webkit-optimize-contrast',
                          backfaceVisibility: 'hidden',
                          transform: 'translateZ(0)',
                        }}
                        loading="lazy"
                        decoding="async"
                      />
                    </div>
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                      <div className="bg-white/20 backdrop-blur-sm p-4 rounded-full group-hover:scale-110 transition-transform duration-300">
                        <Play className="h-8 w-8 text-white fill-current" />
                      </div>
                    </div>
                    <div className="absolute top-4 right-4 bg-black/60 text-white px-2 py-1 rounded text-sm">
                      {video.duration}
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 text-white">
                      <h3 className="font-semibold mb-1">{video.title}</h3>
                      <p className="text-sm text-gray-200">{video.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Features Section */}
          <div className="border-t border-gray-200 bg-gray-50 p-4 sm:p-6">
            <h3 className="font-semibold text-gray-900 mb-3 sm:mb-4 text-sm sm:text-base">What's Included in {eventType.name}</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-3">
              {eventType.features.map((feature, index) => (
                <div key={index} className="flex items-center text-xs sm:text-sm text-gray-600">
                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-maroon-500 rounded-full mr-2 sm:mr-3 flex-shrink-0"></div>
                  {feature}
                </div>
              ))}
            </div>
          </div>

          {/* Footer - Always Visible */}
          <div className="border-t border-gray-200 bg-white px-2 py-1 flex-shrink-0">
            <div className="flex flex-col gap-1 justify-between items-center">
              <div className="text-center">
                <p className="text-gray-600 text-xs font-medium">Ready to plan your {eventType.name.toLowerCase()}?</p>
              </div>
              <div className="flex flex-col sm:flex-row gap-1 w-full sm:w-auto">
                <a
                  href="https://wa.me/919710916687"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-600 hover:bg-green-700 text-white px-2 sm:px-3 py-1 rounded font-medium transition-all duration-300 hover:scale-105 flex items-center justify-center shadow text-xs"
                >
                  <svg className="w-3 h-3 sm:w-4 sm:h-4 mr-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.382"/>
                  </svg>
                  WhatsApp
                </a>
                <a
                  href="tel:+919710916687"
                  className="bg-maroon-600 hover:bg-maroon-700 text-white px-2 sm:px-3 py-1 rounded font-medium transition-all duration-300 hover:scale-105 flex items-center justify-center shadow text-xs"
                >
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-1 sm:mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                  </svg>
                  Call Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox for selected media */}
      {selectedMedia !== null && (
        <div className="fixed inset-0 z-60 bg-black/95 flex items-center justify-center p-2 sm:p-4" style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, width: '100vw', height: '100vh' }}>
          <div className="relative max-w-4xl w-full">
            <button
              onClick={() => {
                setSelectedMedia(null);
                // Restore body scroll and position
                document.body.style.overflow = 'unset';
                document.body.style.position = 'unset';
                document.body.style.width = 'unset';
              }}
              className="absolute top-2 right-2 sm:top-4 sm:right-4 bg-white/20 hover:bg-white/30 p-2 sm:p-3 rounded-full transition-colors z-10 touch-manipulation"
              style={{ minWidth: '44px', minHeight: '44px' }}
              aria-label="Close lightbox"
            >
              <X className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
            </button>
            
            {currentMedia.length > 1 && (
              <>
                <button
                  onClick={prevMedia}
                  className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 p-2 sm:p-3 rounded-full transition-colors z-10 touch-manipulation"
                  style={{ minWidth: '44px', minHeight: '44px' }}
                  aria-label="Previous image"
                >
                  <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                </button>
                <button
                  onClick={nextMedia}
                  className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 p-2 sm:p-3 rounded-full transition-colors z-10 touch-manipulation"
                  style={{ minWidth: '44px', minHeight: '44px' }}
                  aria-label="Next image"
                >
                  <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                </button>
              </>
            )}

            <div className="bg-white rounded-lg overflow-hidden">
              {activeTab === 'images' ? (
                <img
                  src={currentMedia[selectedMedia].url}
                  alt={currentMedia[selectedMedia].title}
                  className="w-full h-auto max-h-[70vh] sm:max-h-[80vh] object-contain image-rendering-crisp"
                  style={{
                    imageRendering: 'auto',
                    backfaceVisibility: 'hidden',
                    transform: 'translateZ(0)',
                    maxWidth: '100%',
                    height: 'auto',
                  }}
                  loading="eager"
                  decoding="sync"
                />
              ) : (
                <div className="relative aspect-w-16 aspect-h-9 h-96 bg-gray-900 flex items-center justify-center">
                  <img
                    src={currentMedia[selectedMedia].thumbnail_url || currentMedia[selectedMedia].url}
                    alt={currentMedia[selectedMedia].title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-white/20 backdrop-blur-sm p-6 rounded-full">
                      <Play className="h-12 w-12 text-white fill-current" />
                    </div>
                  </div>
                </div>
              )}
              
              <div className="p-6">
                <h3 className="font-serif text-xl font-bold text-gray-900 mb-2">
                  {currentMedia[selectedMedia].title}
                </h3>
                <p className="text-gray-600 mb-4">{currentMedia[selectedMedia].description}</p>
                <div className="flex items-center text-sm text-gray-500">
                  <Calendar className="h-4 w-4 mr-2" />
                  <span>{activeTab === 'images' ? currentMedia[selectedMedia].event_name : `Duration: ${currentMedia[selectedMedia].duration}`}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default EventGalleryModal;
import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { X, Play, Eye, ChevronLeft, ChevronRight, Phone, MessageCircle } from 'lucide-react';

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

  if (!isOpen || !eventType) return null;

  // Define gallery images based on event type
  const getGalleryImages = (eventName: string) => {
    switch (eventName) {
      case 'Corporate Events':
      case 'Corporate Event':
      case 'Corporate':
        return [
          { id: 1, url: '/rk-photos/Gallery/Corporate_Meetings/IMG/corporate_bridge26_main_stage.jpg', title: "Bridge'26 Main Conference Stage", event_name: 'Corporate Summit', description: 'Ultra-wide LED stage backdrop, audio line arrays, and sponsor branding' },
          { id: 2, url: '/rk-photos/Gallery/Corporate_Meetings/IMG/corporate_mou_exchange_stage.jpg', title: 'MoU Exchange Stage Setup', event_name: 'MoU Signing Ceremony', description: 'Grand corporate stage and VIP seating setup for ICT Academy MoU Exchange' },
          { id: 3, url: '/rk-photos/Gallery/Corporate_Meetings/IMG/corporate_bridge26_photobooth_setup.jpg', title: "Bridge'26 Photo Booth & 3D Logo", event_name: 'Photo Booth', description: 'Illuminated 3D brand logo table with custom sponsor media wall' },
          { id: 4, url: '/rk-photos/Gallery/Corporate_Meetings/IMG/corporate_bridge26_conference_hall.jpg', title: 'Conference Hall Management', event_name: 'Annual Conference', description: 'Complete conference hall setup with truss lighting and theater seating' },
          { id: 5, url: '/rk-photos/Gallery/Corporate_Meetings/IMG/meeting_2.jpg', title: 'Corporate Meeting Setup', event_name: 'Business Meeting', description: 'Professional meeting setup with modern AV equipment' },
          { id: 6, url: '/rk-photos/Gallery/Corporate_Meetings/IMG/meeting_3.jpg', title: 'Business Conference', event_name: 'Corporate Conference', description: 'Corporate conference with professional presentation setup' },
          { id: 7, url: '/rk-photos/Gallery/Corporate_Meetings/IMG/meeting_4.jpg', title: 'Corporate Event Management', event_name: 'Business Event', description: 'Complete corporate event management and coordination' },
          { id: 8, url: '/rk-photos/Gallery/Corporate_Meetings/IMG/meeting_5.jpg', title: 'Corporate Function', event_name: 'Sponsor Display', description: 'Professional sponsor board setup for corporate events' },
          { id: 9, url: '/rk-photos/Gallery/Corporate_Meetings/IMG/meeting_6.jpg', title: 'Corporate Branding Wall', event_name: 'Brand Display', description: 'Custom branding wall for corporate events and product launches' },
          { id: 10, url: '/rk-photos/Gallery/Corporate_Meetings/IMG/meeting_7.jpg', title: 'Corporate Networking Setup', event_name: 'Networking Event', description: 'Elegant networking area with branded elements for corporate gatherings' },
          { id: 11, url: '/rk-photos/Gallery/Corporate_Meetings/IMG/meeting_8.jpg', title: 'Corporate Branding Display', event_name: 'Brand Showcase', description: 'Modern corporate branding display with digital signage' },
          { id: 12, url: '/rk-photos/Gallery/Corporate_Meetings/IMG/meeting_9.jpg', title: 'Corporate Lighting Setup', event_name: 'Corporate Event', description: 'Professional audio-visual equipment setup' },
          { id: 13, url: '/rk-photos/Gallery/Corporate_Meetings/IMG/meeting_10.jpg', title: 'Corporate Event Design', event_name: 'Product Launch', description: 'Professional stage setup for corporate events' },
          { id: 14, url: '/rk-photos/Gallery/Corporate_Meetings/IMG/meeting_11.jpg', title: 'Corporate Venue', event_name: 'Business Meeting', description: 'Elegant venue setup for corporate gatherings' }
        ];
      case 'Wedding Events':
      case 'Wedding':
      case 'Weddings':
        return [
          { id: 1, url: '/rk-photos/Gallery/Weddings/IMG/wedding_reception_entry_thumb.jpg', title: 'Grand Reception Entry', event_name: 'Wedding Reception', description: 'Spectacular aisle entry of the bride and groom with floral garlands and cloud effects' },
          { id: 2, url: '/rk-photos/Gallery/Weddings/IMG/Wedding.jpeg', title: 'Dream Wedding Ceremony', event_name: 'Wedding', description: 'Beautiful wedding setup with elegant decorations and lighting' },
          { id: 3, url: '/rk-photos/Gallery/Weddings/IMG/wedding1.jpeg', title: 'Wedding Celebration', event_name: 'Wedding', description: 'Complete wedding ceremony with traditional arrangements' },
          { id: 4, url: '/rk-photos/Gallery/Weddings/IMG/Wedding2.jpeg', title: 'Wedding Reception', event_name: 'Wedding Entertainment', description: 'Professional DJ services for wedding entertainment' },
          { id: 5, url: '/rk-photos/Gallery/Weddings/IMG/Wedding Cart.jpeg', title: 'Wedding Cart Decoration', event_name: 'Wedding', description: 'Traditional wedding cart with beautiful decorations' },
          { id: 6, url: '/rk-photos/Gallery/Culturals/IMG/Anniversary.jpg', title: 'Wedding Anniversary Stage', event_name: 'Wedding Anniversary', description: 'Elegant stage setup for wedding anniversary celebration' }
        ];
      case 'Family Celebrations':
      case 'Baby Shower':
        return [
          { id: 1, url: '/rk-photos/Gallery/Weddings/IMG/wedding1.jpeg', title: 'Wedding Celebration', event_name: 'Dream Wedding', description: 'Beautiful wedding ceremony and reception setup' },
          { id: 2, url: '/rk-photos/Gallery/Birthday/IMG/birthday_main.jpg', title: 'Birthday Party', event_name: 'Birthday Bash', description: 'Colorful and fun birthday party decoration' },
          { id: 3, url: '/rk-photos/Gallery/Weddings/IMG/Wedding.jpeg', title: 'Family Gathering', event_name: 'Family Reunion', description: 'Warm and welcoming family celebration setup' },
          { id: 4, url: '/rk-photos/Gallery/Weddings/IMG/Wedding Cart.jpeg', title: 'Traditional Celebration', event_name: 'Cultural Event', description: 'Traditional family celebration with cultural elements' },
          { id: 5, url: '/img/mehandi12.jpg', title: 'Mehandi Ceremony', event_name: 'Pre-Wedding', description: 'Beautiful mehandi ceremony decoration' }
        ];
      case 'Birthday Parties':
      case 'Birthday':
      case 'Birthdays':
        return [
          { id: 1, url: '/rk-photos/Gallery/Birthday/IMG/birthday_decoration_1.jpg', title: 'Birthday Party Decoration', event_name: 'Birthday Party', description: 'Colorful and fun birthday party with themed decorations' },
          { id: 2, url: '/rk-photos/Gallery/Birthday/IMG/birthday_decoration_2.jpg', title: 'Birthday Celebration Setup', event_name: 'Birthday Celebration', description: 'Complete birthday party setup with decorations and arrangements' },
          { id: 3, url: '/rk-photos/Gallery/Birthday/IMG/birthday_decoration_art.jpg', title: 'Birthday Art Decoration', event_name: 'Creative Birthday', description: 'Creative birthday art and decoration arrangements' },
          { id: 4, url: '/rk-photos/Gallery/Birthday/IMG/birthday_decoration_3.jpg', title: 'Themed Birthday Decoration', event_name: 'Themed Party', description: 'Themed birthday party decorations and setup' },
          { id: 5, url: '/rk-photos/Gallery/Birthday/IMG/birthday_decoration_4.jpg', title: 'Birthday Party Arrangements', event_name: 'Birthday Setup', description: 'Professional birthday party arrangements and styling' },
          { id: 6, url: '/rk-photos/Gallery/Birthday/IMG/birthday_decoration_kidsplay.jpg', title: 'Kids Birthday Activities', event_name: 'Kids Party', description: 'Fun activities and play areas for kids birthday parties' }
        ];
      case 'Interactive Games':
      case 'VR, Motion & 360°':
      case 'Stalls':
        return [
          { id: 1, url: '/rk-photos/Gallery/Mini_Games/IMG/1.jpeg', title: 'Interactive Games Activities', event_name: 'Interactive Games', description: 'Fun interactive games setup' },
          { id: 2, url: '/rk-photos/Gallery/Mini_Games/IMG/10.jpeg', title: 'Game Stall setup', event_name: 'Interactive Games', description: 'Interactive games and stall setup' },
          { id: 3, url: '/rk-photos/Gallery/Mini_Games/IMG/12.jpeg', title: 'Carnival Games', event_name: 'Interactive Games', description: 'Exciting mini game activities' }
        ];
      case 'College Culturals and School Annual Day':
      case 'Culturals':
        return [
          { id: 1, url: '/rk-photos/Gallery/Culturals/IMG/School.jpeg', title: 'School Cultural Program', event_name: 'School Event', description: 'School cultural events and educational programs' },
          { id: 2, url: '/rk-photos/Gallery/Culturals/IMG/SchoolAnual Day.jpeg', title: 'School Annual Day', event_name: 'Annual Celebration', description: 'Grand school annual day with cultural programs' },
          { id: 3, url: '/rk-photos/Gallery/Culturals/IMG/SchoolAnualday1.jpeg', title: 'School Annual Celebration', event_name: 'Cultural Festival', description: 'School annual day celebrations with cultural performances' }
        ];
      case 'Services':
      case 'Photography and Video':
        return [
          { id: 1, url: '/img/Professional_Sounds_Lights.jpeg', title: 'Sound & Lighting Services', event_name: 'Sound & Lighting', description: 'Professional sound and light services for all types of events' },
          { id: 2, url: '/img/LED Wall & Standees.jpg', title: 'LED Wall & Display', event_name: 'LED Display', description: 'High-definition LED wall and display service' },
          { id: 3, url: '/img/tvrental.jpg', title: 'TV & AV Rental', event_name: 'AV Rental', description: 'TV and AV rental service for memorable events' }
        ];
      case 'Decorations':
      case 'Stall Decoration':
        return [
          { id: 1, url: '/img/decoration1.jpg', title: 'Event Decoration Setup', event_name: 'Decoration Service', description: 'Professional event decoration and themed arrangements' },
          { id: 2, url: '/rk-photos/Gallery/Stage_Decoration/IMG/Stage Decoration.jpeg', title: 'Stage Decoration', event_name: 'Stage Setup', description: 'Beautiful stage decorations for performances and events' },
          { id: 3, url: '/rk-photos/Gallery/Stage_Decoration/IMG/Decorations123.jpg', title: 'Wall Decoration', event_name: 'Backdrop Design', description: 'Creative wall decorations and backdrop arrangements' },
          { id: 4, url: '/rk-photos/Gallery/Stage_Decoration/IMG/Decorations456.jpg', title: 'Floral Backdrop', event_name: 'Backdrop Design', description: 'Beautiful floral backdrop for elegant events' },
          { id: 5, url: '/rk-photos/Gallery/Stage_Decoration/IMG/Stagedecoration123.jpg', title: 'Stage Backdrop', event_name: 'Backdrop Design', description: 'Stunning stage backdrop for grand celebrations' }
        ];
      default:
        return [
          { id: 1, url: '/rk-photos/Gallery/Weddings/IMG/Wedding.jpeg', title: eventName, event_name: eventName, description: 'Event photos and showcase' }
        ];
    }
  };

  const galleryImages = getGalleryImages(eventType.name);
  const galleryVideos: any[] = [];

  const currentMedia = activeTab === 'images' ? galleryImages : galleryVideos;

  const IconComponent = eventType.icon;

  return createPortal(
    <div className="fixed inset-0 z-[99999] flex items-center justify-center p-3 sm:p-6 overflow-hidden">
      {/* Blurred Backdrop */}
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-md transition-opacity" 
        onClick={onClose} 
        onTouchMove={(e) => e.preventDefault()}
      />

      {/* Main Modal Card */}
      <div 
        className="relative bg-white rounded-3xl shadow-2xl w-full max-w-[94vw] sm:max-w-3xl md:max-w-4xl h-[85vh] flex flex-col overflow-hidden z-10 border border-gold-500/20"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-maroon-900 via-maroon-800 to-maroon-950 text-white px-4 py-3 sm:px-6 sm:py-4 flex-none flex items-center justify-between shadow-md" style={{ height: '60px', minHeight: '60px', maxHeight: '60px' }}>
          <div className="flex items-center space-x-3 min-w-0">
            <div className="bg-gold-500/20 border border-gold-400/30 p-2 sm:p-2.5 rounded-2xl flex-shrink-0">
              {IconComponent ? <IconComponent className="h-5 w-5 sm:h-7 sm:w-7 text-gold-300" /> : null}
            </div>
            <div className="min-w-0">
              <h2 className="font-serif text-base sm:text-xl font-bold truncate text-white">{eventType.name}</h2>
              <p className="text-gold-200/80 text-xs hidden sm:block truncate">{eventType.description}</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 active:scale-95 flex items-center justify-center transition-all flex-shrink-0 ml-2"
            aria-label="Close"
          >
            <X className="h-5 w-5 text-white" />
          </button>
        </div>

        {/* Tab Selector */}
        <div className="bg-gray-100/80 px-4 py-2 flex-none flex items-center border-b border-gray-200/60" style={{ height: '48px', minHeight: '48px', maxHeight: '48px' }}>
          <div className="flex space-x-2">
            <button
              onClick={() => setActiveTab('images')}
              className={`px-4 py-1.5 rounded-full font-medium text-xs sm:text-sm flex items-center space-x-2 transition-all ${
                activeTab === 'images'
                  ? 'bg-maroon-800 text-white shadow-sm'
                  : 'bg-white text-gray-600 hover:bg-gray-200/70'
              }`}
            >
              <Eye className="h-3.5 w-3.5" />
              <span>Photos ({galleryImages.length})</span>
            </button>
            <button
              onClick={() => setActiveTab('videos')}
              className={`px-4 py-1.5 rounded-full font-medium text-xs sm:text-sm flex items-center space-x-2 transition-all ${
                activeTab === 'videos'
                  ? 'bg-maroon-800 text-white shadow-sm'
                  : 'bg-white text-gray-600 hover:bg-gray-200/70'
              }`}
            >
              <Play className="h-3.5 w-3.5" />
              <span>Videos ({galleryVideos.length})</span>
            </button>
          </div>
        </div>

        {/* Media Grid Container */}
        <div className="w-full p-3 sm:p-5 overflow-y-auto bg-gray-50" style={{ flex: '1 1 0%', minHeight: 0 }}>
          {activeTab === 'images' && (
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
              {galleryImages.map((image, index) => (
                <div
                  key={image.id}
                  className="group relative rounded-2xl overflow-hidden shadow-sm hover:shadow-md cursor-pointer aspect-[4/3] bg-gray-200 border border-gray-200/80"
                  onClick={() => setSelectedMedia(index)}
                >
                  <img
                    src={image.url}
                    alt={image.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80 sm:opacity-0 group-hover:opacity-100 transition-opacity p-2.5 flex items-end">
                    <p className="text-white text-xs font-medium truncate">{image.title}</p>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'videos' && (
            <div className="text-center py-12 text-gray-500 text-sm">
              No video highlights available for this category yet.
            </div>
          )}
        </div>

        {/* Action Footer */}
        <div className="bg-white px-4 py-2 border-t border-gray-200 flex-none flex items-center justify-between gap-3 z-20" style={{ height: '64px', minHeight: '64px', maxHeight: '64px' }}>
          <div className="min-w-0 hidden sm:block">
            <p className="text-xs font-semibold text-gray-900 truncate">Book {eventType.name}</p>
            <p className="text-[11px] text-gray-500 truncate">Contact us for custom pricing & packages</p>
          </div>
          <div className="flex items-center gap-2.5 w-full sm:w-auto" style={{ height: '44px' }}>
            <a
              href="https://wa.me/919710916687"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 sm:flex-initial bg-green-600 hover:bg-green-700 text-white px-4 rounded-xl font-medium text-xs sm:text-sm inline-flex items-center justify-center space-x-2 shadow-sm transition-all active:scale-95"
              style={{ height: '44px', maxHeight: '44px', minHeight: '44px' }}
            >
              <MessageCircle className="h-4 w-4" />
              <span>WhatsApp Quote</span>
            </a>
            <a
              href="tel:+919710916687"
              className="flex-1 sm:flex-initial bg-maroon-800 hover:bg-maroon-900 text-white px-4 rounded-xl font-medium text-xs sm:text-sm inline-flex items-center justify-center space-x-2 shadow-sm transition-all active:scale-95"
              style={{ height: '44px', maxHeight: '44px', minHeight: '44px' }}
            >
              <Phone className="h-4 w-4" />
              <span>Call Now</span>
            </a>
          </div>
        </div>
      </div>

      {/* Lightbox for Selected Media */}
      {selectedMedia !== null && (
        <div 
          className="fixed inset-0 z-[100000] bg-black/95 flex items-center justify-center p-3 sm:p-6 overflow-hidden"
          onClick={() => setSelectedMedia(null)}
        >
          <div className="relative max-w-4xl w-full flex flex-col items-center justify-center" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setSelectedMedia(null)}
              className="absolute -top-12 right-0 w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 text-white flex items-center justify-center transition-all"
              aria-label="Close Preview"
            >
              <X className="h-6 w-6" />
            </button>

            {currentMedia.length > 1 && (
              <>
                <button
                  onClick={() => setSelectedMedia((selectedMedia - 1 + currentMedia.length) % currentMedia.length)}
                  className="absolute left-2 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-black/60 hover:bg-black/80 text-white flex items-center justify-center transition-all"
                  aria-label="Previous"
                >
                  <ChevronLeft className="h-6 w-6" />
                </button>
                <button
                  onClick={() => setSelectedMedia((selectedMedia + 1) % currentMedia.length)}
                  className="absolute right-2 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-black/60 hover:bg-black/80 text-white flex items-center justify-center transition-all"
                  aria-label="Next"
                >
                  <ChevronRight className="h-6 w-6" />
                </button>
              </>
            )}

            <div className="bg-gray-900 rounded-2xl overflow-hidden max-h-[75vh] max-w-full flex flex-col items-center justify-center">
              <img
                src={currentMedia[selectedMedia].url}
                alt={currentMedia[selectedMedia].title}
                className="max-h-[65vh] w-auto object-contain"
              />
              <div className="p-3 text-center text-white bg-black/50 w-full">
                <p className="font-semibold text-sm">{currentMedia[selectedMedia].title}</p>
                <p className="text-xs text-gray-300">{currentMedia[selectedMedia].description}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>,
    document.body
  );
};

export default EventGalleryModal;
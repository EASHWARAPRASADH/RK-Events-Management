import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { X, ChevronLeft, ChevronRight, Phone, MessageCircle } from 'lucide-react';

interface ServiceGalleryModalProps {
  isOpen: boolean;
  onClose: () => void;
  service: {
    id: number;
    category: string;
    image: string;
    title: string;
    description: string;
    isGrouped?: boolean;
    images?: string[];
    videos?: string[];
  };
}

const ServiceGalleryModal = ({ isOpen, onClose, service }: ServiceGalleryModalProps) => {
  const [activeTab, setActiveTab] = useState<'images' | 'videos'>('images');
  const [selectedImage, setSelectedImage] = useState<number>(0);

  if (!isOpen || !service) return null;

  // Media provider logic
  const getServiceMedia = (svc: any) => {
    if (svc.isGrouped) {
      return {
        images: (svc.images || []).map((url: string, index: number) => ({
          id: index + 1,
          url,
          title: `${svc.title} - Photo ${index + 1}`,
          description: svc.description
        })),
        videos: (svc.videos || []).map((url: string, index: number) => ({
          id: index + 1,
          url,
          title: `${svc.title} - Video ${index + 1}`,
          description: svc.description
        }))
      };
    }
    return {
      images: [
        {
          id: 1,
          url: svc.image || '/img/Wedding.jpeg',
          title: svc.title,
          description: svc.description
        }
      ],
      videos: []
    };
  };

  const media = getServiceMedia(service);
  const currentMedia = activeTab === 'images' ? media.images : media.videos;

  const nextImage = () => {
    if (currentMedia.length === 0) return;
    setSelectedImage((prev) => (prev + 1) % currentMedia.length);
  };

  const prevImage = () => {
    if (currentMedia.length === 0) return;
    setSelectedImage((prev) => (prev - 1 + currentMedia.length) % currentMedia.length);
  };

  return createPortal(
    <div className="fixed inset-0 z-[99999] flex items-center justify-center p-3 sm:p-6 overflow-hidden">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-md transition-opacity" 
        onClick={onClose} 
        onTouchMove={(e) => e.preventDefault()}
      />

      {/* Main Modal Box */}
      <div 
        className="relative bg-white rounded-3xl shadow-2xl w-full max-w-[94vw] sm:max-w-3xl md:max-w-4xl h-[85vh] flex flex-col overflow-hidden z-10 border border-gold-500/20"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-maroon-900 via-maroon-800 to-maroon-950 text-white px-4 py-3 sm:px-6 sm:py-4 flex-none flex items-center justify-between shadow-md" style={{ height: '60px', minHeight: '60px', maxHeight: '60px' }}>
          <div className="min-w-0 pr-2">
            <h2 className="font-serif text-base sm:text-xl font-bold truncate text-white">{service.title}</h2>
            <p className="text-gold-200/80 text-xs truncate">{service.description}</p>
          </div>
          <button
            onClick={onClose}
            className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 active:scale-95 flex items-center justify-center transition-all flex-shrink-0 ml-2"
            aria-label="Close"
          >
            <X className="h-5 w-5 text-white" />
          </button>
        </div>

        {/* Content Container */}
        <div className="p-3 sm:p-5 overflow-y-auto bg-gray-50 flex flex-col space-y-4" style={{ flex: '1 1 0%', minHeight: 0 }}>
          {/* Main Media Preview */}
          <div className="relative bg-gray-900 rounded-2xl overflow-hidden shadow-md flex-1 min-h-[40vh] flex items-center justify-center">
            {currentMedia.length > 0 ? (
              activeTab === 'images' ? (
                <img
                  src={currentMedia[selectedImage]?.url || service.image}
                  alt={currentMedia[selectedImage]?.title || service.title}
                  className="max-h-[45vh] w-auto object-contain"
                />
              ) : (
                <video
                  src={currentMedia[selectedImage]?.url}
                  controls
                  className="max-h-[45vh] w-full object-contain bg-black"
                />
              )
            ) : (
              <div className="text-gray-400 text-sm p-6 text-center">No media available in this section.</div>
            )}

            {/* Navigation Arrows */}
            {currentMedia.length > 1 && (
              <>
                <button
                  onClick={prevImage}
                  className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/60 hover:bg-black/80 text-white flex items-center justify-center transition-all"
                  aria-label="Previous"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/60 hover:bg-black/80 text-white flex items-center justify-center transition-all"
                  aria-label="Next"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </>
            )}
          </div>

          {/* Horizontal Thumbnail Strip */}
          {currentMedia.length > 1 && (
            <div className="flex space-x-2 overflow-x-auto py-1 flex-shrink-0">
              {currentMedia.map((item, index) => (
                <button
                  key={item.id || index}
                  onClick={() => setSelectedImage(index)}
                  className={`relative rounded-xl overflow-hidden flex-shrink-0 w-16 h-16 border-2 transition-all ${
                    selectedImage === index ? 'border-maroon-800 scale-105 shadow-md' : 'border-transparent opacity-60 hover:opacity-100'
                  }`}
                >
                  <img src={item.url} alt={item.title} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Action Footer */}
        <div className="bg-white px-4 py-2 border-t border-gray-200 flex-none flex items-center justify-between gap-3 z-20" style={{ height: '64px', minHeight: '64px', maxHeight: '64px' }}>
          <div className="min-w-0 hidden sm:block">
            <p className="text-xs font-semibold text-gray-900 truncate">Rent {service.title}</p>
            <p className="text-[11px] text-gray-500 truncate">Fast delivery & setup at your event venue</p>
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
    </div>,
    document.body
  );
};

export default ServiceGalleryModal;
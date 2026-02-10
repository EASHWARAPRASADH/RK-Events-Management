import React from 'react';

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/919710916687"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 bg-green-500 hover:bg-green-600 text-white w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-40 animate-float group"
      title="Chat with us on WhatsApp"
    >
      <img src="/svg/whatsapp.png.webp" alt="WhatsApp" className="h-8 w-8 sm:h-10 sm:w-10 object-contain" />
      <span className="absolute -top-1 -left-1 sm:-top-2 sm:-left-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 sm:h-6 sm:w-6 flex items-center justify-center animate-pulse">
        1
      </span>
    </a>
  );
};

export default WhatsAppButton;
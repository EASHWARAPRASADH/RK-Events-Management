import React from 'react';

const bubbles = [
  {
    href: 'https://www.instagram.com/rk_events_and_management/',
    label: 'Instagram',
    bg: 'bg-gradient-to-tr from-pink-500 via-red-500 to-yellow-500',
    icon: (
      <img src="/svg/instagram.png.webp" alt="Instagram" className="h-8 w-8 sm:h-10 sm:w-10 object-contain" />
    ),
  },
  {
    href: 'https://www.facebook.com/rocky.krishnan/',
    label: 'Facebook',
    bg: 'bg-blue-600',
    icon: (
      <svg className="h-8 w-8 sm:h-10 sm:w-10" fill="currentColor" viewBox="0 0 24 24"><path d="M22.675 0h-21.35C.595 0 0 .592 0 1.326v21.348C0 23.408.595 24 1.325 24h11.495v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.406 24 24 23.408 24 22.674V1.326C24 .592 23.406 0 22.675 0" /></svg>
    ),
  },
];

const InstagramFacebookBubbles = () => (
  <div className="fixed right-4 bottom-20 sm:right-6 sm:bottom-28 flex flex-col items-end space-y-2 sm:space-y-4 z-40">
    {bubbles.map((bubble) => (
      <a
        key={bubble.label}
        href={bubble.href}
        target="_blank"
        rel="noopener noreferrer"
        className={`group ${bubble.bg} text-white w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center rounded-full shadow-lg hover:shadow-xl transition-all duration-300 animate-float`}
        title={bubble.label}
        aria-label={bubble.label}
      >
        {bubble.icon}
      </a>
    ))}
  </div>
);

export default InstagramFacebookBubbles; 
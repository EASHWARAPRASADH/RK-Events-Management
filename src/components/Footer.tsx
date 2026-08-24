import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Phone, Mail, MapPin, Clock, MessageCircle } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-maroon-900 to-maroon-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="p-2 rounded-lg bg-white">
                <img src="/svg/logo.png" alt="RK Events and Management Logo" className="h-12 w-12 object-contain" />
              </div>
              <div>
                <h3 className="font-serif text-2xl font-bold">RK Events and Managements</h3>
                <p className="text-gold-200 text-sm">Creating Memorable Occasions</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              With over 16 years of experience, we deliver creative, elegant, and flawless events that turn your moments into celebrations.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://wa.me/919710916687"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 p-3 rounded-full hover:bg-green-700 transition-colors hover:scale-110 transform duration-200"
              >
                <MessageCircle className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-6 text-gold-200">Quick Links</h4>
            <div className="space-y-3">
              {[
                { name: 'Home', path: '/' },
                { name: 'About Us', path: '/about' },
                { name: 'Services', path: '/services' },
                { name: 'Gallery', path: '/gallery' },
                { name: 'Partners', path: '/partners' },
                { name: 'Contact', path: '/contact' }
              ].map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="block text-gray-300 hover:text-gold-200 transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-6 text-gold-200">Our Services</h4>
            <div className="space-y-3 text-gray-300">
              <p>Corporate Events</p>
              <p>Family Celebrations</p>
              <p>College Culturals and School Annual Day</p>
              <p>Interactive Games</p>
              <p>DJ & Entertainment</p>
              <p>Catering Services</p>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-6 text-gold-200">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Phone className="h-5 w-5 text-gold-500 mt-1 flex-shrink-0" />
                <div>
                  <p>+91 9710916687</p>
                  <p>+91 9790312143</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-gold-500 flex-shrink-0" />
                <p>rkeventchennai@gmail.com</p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-gold-500 flex-shrink-0" />
                <a href="mailto:info@rkeventsandmanagement.com" className="underline hover:text-gold-200">info@rkeventsandmanagement.com</a>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-gold-500 mt-1 flex-shrink-0" />
                <p>N05/1st Floor, Nellayapar 1st Cross Street, Bharathipuram, Chrompet, Chennai - 600044</p>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="h-5 w-5 text-gold-500 flex-shrink-0" />
                <p>Mon–Sat 9AM–7PM</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-maroon-700 mt-12 pt-8 text-center">
          <div className="flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto px-4">
            <p className="text-gray-400 text-sm">
              © 2025 RK Events and Managements™. All rights reserved. | Creating Memorable Occasions
            </p>
            <div className="flex items-center space-x-4 mt-2 md:mt-0">
              <a href="https://technosprint.net" target="_blank" rel="noopener noreferrer" className="text-xs text-gray-500 hover:text-gold-200 underline transition-colors">
                Created by Technosprint Info Solution
              </a>
              <span className="hidden md:inline text-gray-500">|</span>
              <a href="https://www.facebook.com/rocky.krishnan/" target="_blank" rel="noopener noreferrer" className="hover:text-gold-200 transition-colors" aria-label="Facebook">
                <svg className="w-5 h-5 inline" fill="currentColor" viewBox="0 0 24 24"><path d="M22.675 0h-21.35C.595 0 0 .592 0 1.326v21.348C0 23.408.595 24 1.325 24h11.495v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.406 24 24 23.408 24 22.674V1.326C24 .592 23.406 0 22.675 0" /></svg>
              </a>
              <a href="https://www.instagram.com/rk_events_and_management/" target="_blank" rel="noopener noreferrer" className="hover:text-gold-200 transition-colors" aria-label="Instagram">
                <svg className="w-5 h-5 inline" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.974.974 1.246 2.241 1.308 3.608.058 1.266.069 1.646.069 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.308 3.608-.974.974-2.241 1.246-3.608 1.308-1.266.058-1.646.069-4.85.069s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.308-.974-.974-1.246-2.241-1.308-3.608C2.175 15.647 2.163 15.267 2.163 12s.012-3.584.07-4.85c.062-1.366.334-2.633 1.308-3.608C4.515 2.497 5.782 2.225 7.148 2.163 8.414 2.105 8.794 2.163 12 2.163zm0-2.163C8.741 0 8.332.012 7.052.07 5.771.128 4.659.334 3.678 1.315c-.98.98-1.187 2.092-1.245 3.373C2.012 5.668 2 6.077 2 12c0 5.923.012 6.332.07 7.612.058 1.281.265 2.393 1.245 3.373.98.98 2.092 1.187 3.373 1.245C8.332 23.988 8.741 24 12 24s3.668-.012 4.948-.07c1.281-.058 2.393-.265 3.373-1.245.98-.98 1.187-2.092 1.245-3.373.058-1.28.07-1.689.07-7.612 0-5.923-.012-6.332-.07-7.612-.058-1.281-.265-2.393-1.245-3.373-.98-.98-2.092-1.187-3.373-1.245C15.668.012 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998zm6.406-11.845a1.44 1.44 0 1 0 0 2.88 1.44 1.44 0 0 0 0-2.88z" /></svg>
              </a>
              <a href="https://www.linkedin.com/in/rk-events-and-management-878401172?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" className="hover:text-gold-200 transition-colors" aria-label="LinkedIn">
                <svg className="w-5 h-5 inline" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.268h-3v-5.604c0-1.337-.025-3.063-1.868-3.063-1.868 0-2.154 1.459-2.154 2.968v5.699h-3v-10h2.881v1.367h.041c.401-.761 1.379-1.563 2.841-1.563 3.039 0 3.6 2.001 3.6 4.601v5.595z" /></svg>
              </a>
            </div>
          </div>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="mt-4 text-gold-200 hover:text-white text-xs underline transition-colors"
          >
            Back to Top
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
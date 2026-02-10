import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, MessageCircle, Star } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventType: '',
    eventDate: '',
    guests: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone Numbers',
      details: ['+91 9710916687', '+91 9790312143'],
      action: 'tel:+919710916687'
    },
    {
      icon: Mail,
      title: 'Email Address',
      details: ['info@rkeventsandmanagement.com'],
      action: 'mailto:rkeventchennai@gmail.com'
    },
    {
      icon: MapPin,
      title: 'Office Address',
      details: ['N05/1st Floor, Nellayapar 1st Cross Street', 'Bharathipuram, Chrompet', 'Chennai - 600044'],
      action: '#'
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: ['Monday - Saturday', '9:00 AM - 7:00 PM', 'Sunday: By Appointment'],
      action: '#'
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-maroon-900 to-maroon-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="font-serif text-4xl md:text-6xl font-bold mb-8">
              Contact <span className="text-gold-400">Us</span>
            </h1>
            <p className="text-xl md:text-2xl text-maroon-100 max-w-4xl mx-auto leading-relaxed">
              Ready to plan your perfect event? Get in touch with our expert team today!
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <div>
              <h2 className="font-serif text-3xl font-bold text-maroon-900 mb-8">
                Get In <span className="text-gold-600">Touch</span>
              </h2>

              <div className="space-y-8">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="bg-maroon-100 p-3 rounded-lg flex-shrink-0">
                      <info.icon className="h-6 w-6 text-maroon-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-maroon-900 mb-2">{info.title}</h3>
                      {info.details.map((detail, detailIndex) => (
                        <p key={detailIndex} className="text-gray-600 mb-1">
                          {detail}
                        </p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Quick Contact Buttons */}
              <div className="mt-12 space-y-4">
                <a
                  href="https://wa.me/919710916687"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-green-600 hover:bg-green-700 text-white py-4 px-6 rounded-lg font-semibold transition-all duration-300 hover:scale-105 flex items-center justify-center"
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  WhatsApp Chat
                </a>
                <a
                  href="tel:+919710916687"
                  className="w-full bg-gradient-to-r from-gold-500 to-gold-600 text-maroon-900 py-4 px-6 rounded-lg font-semibold transition-all duration-300 hover:scale-105 flex items-center justify-center"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  Call Now
                </a>
              </div>

              {/* Reviews Section */}
              <div className="mt-12 bg-gradient-to-br from-maroon-50 to-gold-50 p-6 rounded-2xl">
                <h3 className="font-serif text-xl font-bold text-maroon-900 mb-4">Client Reviews</h3>
                <div className="flex items-center mb-4">
                  <div className="flex space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-gold-500 fill-current" />
                    ))}
                  </div>
                  <span className="ml-2 text-gray-600">4.9/5 based on 200+ reviews</span>
                </div>
                <p className="text-gray-700 italic">
                  "Exceptional service and attention to detail. RK Events made our corporate event absolutely perfect!"
                </p>
                <p className="text-sm text-gray-600 mt-2">- Recent Client Review</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-maroon-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-4xl font-bold text-maroon-900 mb-6">
              Find Our <span className="text-gold-600">Office</span>
            </h2>
            <p className="text-xl text-gray-600">
              Visit us at our Chennai office for a personal consultation
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="aspect-w-16 aspect-h-9 h-96">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.158315236662!2d80.14059731482181!3d12.954517990861858!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525d6b3c0b7b5d%3A0x8b1a8b1a8b1a8b1a!2sChrompet%2C%20Chennai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1624000000000!5m2!1sen!2sin"
                className="w-full h-full border-0"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="RK Events Office Location"
              ></iframe>
            </div>
            <div className="p-6 bg-maroon-900 text-white">
              <div className="flex items-center space-x-4">
                <MapPin className="h-6 w-6 text-gold-400 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold">RK Events and Management™</h3>
                  <p className="text-maroon-100">N05/1st Floor, Nellayapar 1st Cross Street, Bharathipuram, Chrompet, Chennai - 600044</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
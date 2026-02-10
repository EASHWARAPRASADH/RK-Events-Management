import React from 'react';
import { Star, Quote } from 'lucide-react';
import { motion } from 'framer-motion';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Priya Sharma',
      event: 'Wedding Reception',
      rating: 5,
      text: 'RK Events made our wedding reception absolutely magical! Every detail was perfect, from the decorations to the coordination. They exceeded our expectations in every way. The team was professional, creative, and handled everything seamlessly.'
    },
    {
      name: 'Rajesh Kumar',
      event: 'Corporate Annual Meet',
      rating: 5,
      text: 'Outstanding service for our corporate annual meet! Professional, punctual, and perfectly organized. Our event was a huge success thanks to their meticulous planning and seamless execution. Highly recommended for corporate events.'
    },
    {
      name: 'Lakshmi Venkat',
      event: 'Golden Anniversary',
      rating: 5,
      text: 'They turned our simple anniversary celebration into a grand affair! The attention to detail and personal care made it truly memorable for our entire family. The decoration was stunning and the coordination was flawless.'
    },
    {
      name: 'Arjun Reddy',
      event: "Birthday Party",
      rating: 5,
      text: "Excellent event management for our daughter's birthday party! The team was creative, professional, and made sure every guest had a wonderful time. The 360° photo booth was a huge hit with everyone."
    },
    {
      name: 'Meera Krishnan',
      event: 'School Annual Day',
      rating: 5,
      text: 'RK Events handled our school annual day function beautifully. They managed everything from stage setup to sound systems perfectly. The students and parents were all impressed with the professional execution.'
    },
    {
      name: 'Suresh Babu',
      event: 'Family Gathering',
      rating: 5,
      text: 'Amazing catering and decoration services! The food quality was exceptional and the presentation was elegant. They made our family gathering very special with their attention to detail and professional service.'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-serif text-4xl md:text-5xl font-bold text-maroon-900 mb-6"
          >
            What Our <span className="text-gold-600">Clients Say</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Don't just take our word for it - hear from our satisfied clients
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-white p-8 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-all duration-300 hover:-translate-y-2 relative border border-gray-100 overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-gold-100 to-transparent opacity-50 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-150 duration-500"></div>

              {/* Quote Icon */}
              <div className="relative z-10 text-gold-300 mb-6">
                <Quote className="h-10 w-10 transform -scale-x-100" />
              </div>

              {/* Stars */}
              <div className="flex space-x-1 mb-6 relative z-10">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 text-gold-400 fill-current" />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-600 mb-8 leading-relaxed italic relative z-10 text-lg">
                "{testimonial.text}"
              </p>

              {/* Client Info */}
              <div className="relative z-10 flex items-center">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-maroon-600 to-maroon-800 flex items-center justify-center text-white font-bold text-lg mr-4 shadow-md">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-maroon-900">{testimonial.name}</h4>
                  {testimonial.event && <p className="text-xs text-gold-600 font-medium uppercase tracking-wider">{testimonial.event}</p>}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Google Reviews CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-maroon-800 to-maroon-600 text-white p-8 rounded-2xl inline-block shadow-lg">
            <h3 className="font-serif text-2xl font-bold mb-4">Love Our Service?</h3>
            <p className="mb-6">Share your experience and help others discover us</p>
            <a
              href="#"
              className="inline-flex items-center bg-white text-maroon-800 px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105"
            >
              <Star className="mr-2 h-5 w-5 text-gold-500" />
              Leave a Google Review
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
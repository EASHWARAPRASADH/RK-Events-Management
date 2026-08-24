import React from 'react';
import { Link } from 'react-router-dom';
import { Award, Users, Calendar, ArrowRight } from 'lucide-react';

const AboutPreview = () => {
  const teamImage = '/img/decoration1.jpg';

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="animate-fade-in">
            <div className="inline-flex items-center bg-maroon-100 text-maroon-800 px-4 py-2 rounded-full mb-6">
              <Award className="h-4 w-4 mr-2" />
              <span className="text-sm font-medium">About RK Events</span>
            </div>
            
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-maroon-900 mb-6 leading-tight">
              Crafting Timeless
              <span className="block text-gold-600">Memories</span>
            </h2>
            
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              With over 16 years of experience in Chennai's event planning industry, RK Events and Management™ has built a reputation for delivering creative, elegant, and flawless events that exceed expectations.
            </p>
            
            <p className="text-gray-600 mb-12 leading-relaxed">
              From intimate family gatherings to grand corporate celebrations, we bring your vision to life with meticulous planning, innovative design, and seamless execution. Our team of experienced professionals ensures every detail is perfect.
            </p>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
              <div className="text-center">
                <div className="bg-maroon-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Calendar className="h-8 w-8 text-maroon-600" />
                </div>
                <h4 className="font-semibold text-maroon-900 mb-2">Expert Planning</h4>
                <p className="text-sm text-gray-600">Detailed event coordination</p>
              </div>
              <div className="text-center">
                <div className="bg-gold-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-gold-600" />
                </div>
                <h4 className="font-semibold text-maroon-900 mb-2">Professional Team</h4>
                <p className="text-sm text-gray-600">Experienced event specialists</p>
              </div>
              <div className="text-center">
                <div className="bg-maroon-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-maroon-600" />
                </div>
                <h4 className="font-semibold text-maroon-900 mb-2">Quality Service</h4>
                <p className="text-sm text-gray-600">Exceptional attention to detail</p>
              </div>
            </div>
            
            <Link
              to="/about"
              className="group inline-flex items-center bg-gradient-to-r from-maroon-800 to-maroon-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105"
            >
              Learn More About Us
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Image */}
          <div className="animate-slide-up">
            <div className="relative">
              <img
                src={teamImage}
                alt="Professional Event Team"
                className="rounded-2xl shadow-2xl w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-maroon-900/20 to-transparent rounded-2xl"></div>
              
              {/* Floating Stats Card */}
              <div className="absolute -bottom-6 left-4 sm:-left-6 bg-white p-6 rounded-xl shadow-xl border border-gray-100">
                <div className="text-center">
                  <div className="text-3xl font-bold text-maroon-800 mb-1">16+</div>
                  <div className="text-sm text-gray-600">Years of Excellence</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;
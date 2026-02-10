import React from 'react';
import { Award, Users, Clock, Heart, Star, Target } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Heart,
      title: 'Passion',
      description: 'We are passionate about creating unforgettable experiences that bring joy and celebration to every occasion.',
      image: '/img/Wedding.jpeg'
    },
    {
      icon: Star,
      title: 'Excellence',
      description: 'We strive for excellence in every detail, ensuring that each event exceeds expectations and creates lasting memories.',
      image: '/img/conference.jpg'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'We work closely with our clients, understanding their vision and bringing it to life through collaborative planning.',
      image: '/img/Professional_Sounds_Lights.jpeg'
    },
    {
      icon: Target,
      title: 'Innovation',
      description: 'We constantly innovate and incorporate the latest trends and technologies to make events unique and memorable.',
      image: '/img/interactive.jpg'
    }
  ];

  const milestones = [
    { year: '2009', event: 'Founded RK Events and Management™' },
    { year: '2012', event: 'Reached 500 successful events milestone' },
    { year: '2015', event: 'Expanded services to include corporate events' },
    { year: '2018', event: 'Celebrated 1000+ events and introduced 360° booth' },
    { year: '2021', event: 'Adapted to virtual and hybrid event formats' },
    { year: '2024', event: 'Celebrating 15+ years with 3000+ successful events' }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-maroon-900 to-maroon-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="font-serif text-4xl md:text-6xl font-bold mb-8">
              About <span className="text-gold-400">RK Events</span>
            </h1>
            <p className="text-xl md:text-2xl text-maroon-100 max-w-4xl mx-auto leading-relaxed">
              Creating Memorable Occasions for Over 15 Years in Chennai
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-serif text-4xl font-bold text-maroon-900 mb-8">
                Our <span className="text-gold-600">Story</span>
              </h2>
              <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                <p>
                  Founded in 2009, RK Events and Management™ began with a simple vision: to transform ordinary moments into extraordinary celebrations. What started as a small event planning service in Chennai has grown into one of the city's most trusted event management companies.
                </p>
                <p>
                  Over the past 15 years, we have had the privilege of organizing over 3,000 events, creating magical experiences for more than 50,000 guests. From intimate family gatherings to grand corporate celebrations, we've consistently delivered excellence.
                </p>
                <p>
                  Our success is built on understanding that every event is unique, and every celebration deserves meticulous attention to detail. We don't just plan events; we craft experiences that leave lasting impressions.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src="/svg/logo1logo-removebg-preview-DqMLdMPO.png"
                alt="RK Events Logo"
                className="rounded-2xl shadow-2xl bg-white p-8"
                style={{ width: '500px', height: '400px', objectFit: 'contain' }}
              />
              <div className="absolute -bottom-8 -right-8 bg-gold-500 text-maroon-900 p-6 rounded-xl shadow-xl">
                <div className="text-center">
                  <div className="text-3xl font-bold">15+</div>
                  <div className="text-sm font-medium">Years Experience</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-maroon-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl font-bold text-maroon-900 mb-6">
              Our <span className="text-gold-600">Values</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide us in creating exceptional experiences
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 overflow-hidden"
              >
                <div className="h-48 relative">
                  <img src={value.image} alt={value.title} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-maroon-900/20 group-hover:bg-maroon-900/10 transition-colors"></div>
                  <div className="absolute top-4 left-4 bg-white p-2 rounded-full shadow-lg">
                    <value.icon className="h-6 w-6 text-maroon-600" />
                  </div>
                </div>
                <div className="p-8 text-center">
                  <h3 className="font-serif text-xl font-bold text-maroon-900 mb-4">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed text-sm">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl font-bold text-maroon-900 mb-6">
              Our <span className="text-gold-600">Journey</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Milestones that mark our growth and commitment to excellence
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-maroon-600 to-gold-500 hidden lg:block"></div>

            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className={`flex items-center ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                    } flex-col lg:space-x-8`}
                >
                  <div className="lg:w-1/2 w-full">
                    <div className={`bg-gradient-to-br from-maroon-50 to-gold-50 p-6 rounded-xl shadow-lg ${index % 2 === 0 ? 'lg:text-right' : 'lg:text-left'
                      } text-center`}>
                      <div className="text-3xl font-bold text-gold-600 mb-2">{milestone.year}</div>
                      <p className="text-gray-700 font-medium">{milestone.event}</p>
                    </div>
                  </div>

                  {/* Timeline Dot */}
                  <div className="hidden lg:block w-4 h-4 bg-maroon-600 rounded-full border-4 border-white shadow-lg z-10"></div>

                  <div className="lg:w-1/2 w-full"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gradient-to-br from-maroon-900 to-maroon-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl font-bold mb-6">
              Meet Our <span className="text-gold-400">Team</span>
            </h2>
            <p className="text-xl text-maroon-100 max-w-3xl mx-auto">
              Experienced professionals dedicated to making your events extraordinary
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="group">
              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl hover:bg-white/20 transition-all duration-300 h-full">
                <div className="mb-6 relative h-48 rounded-xl overflow-hidden">
                  <img src="/img/conference.jpg" alt="Planning Team" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-gold-500 w-12 h-12 rounded-full flex items-center justify-center shadow-lg">
                      <Users className="h-6 w-6 text-maroon-900" />
                    </div>
                  </div>
                </div>
                <h3 className="font-serif text-xl font-bold mb-2">Event Planning Team</h3>
                <p className="text-maroon-100 text-sm">Expert coordinators who handle every detail of your celebration</p>
              </div>
            </div>

            <div className="group">
              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl hover:bg-white/20 transition-all duration-300 h-full">
                <div className="mb-6 relative h-48 rounded-xl overflow-hidden">
                  <img src="/img/decoration1.jpg" alt="Creative Team" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-gold-500 w-12 h-12 rounded-full flex items-center justify-center shadow-lg">
                      <Award className="h-6 w-6 text-maroon-900" />
                    </div>
                  </div>
                </div>
                <h3 className="font-serif text-xl font-bold mb-2">Creative Directors</h3>
                <p className="text-maroon-100 text-sm">Visionary designers who bring innovative concepts to life</p>
              </div>
            </div>

            <div className="group">
              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl hover:bg-white/20 transition-all duration-300 h-full">
                <div className="mb-6 relative h-48 rounded-xl overflow-hidden">
                  <img src="/img/Professional_Sounds_Lights.jpeg" alt="Operations Team" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-gold-500 w-12 h-12 rounded-full flex items-center justify-center shadow-lg">
                      <Clock className="h-6 w-6 text-maroon-900" />
                    </div>
                  </div>
                </div>
                <h3 className="font-serif text-xl font-bold mb-2">Operations Team</h3>
                <p className="text-maroon-100 text-sm">Logistics experts ensuring seamless execution on the ground</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
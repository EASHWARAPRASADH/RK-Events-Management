import { Calendar, MapPin, Clock, Users } from 'lucide-react';

const UpcomingEvents = () => {
  // Get upcoming events from the admin system
  const upcomingEvents = [
    {
      id: 'fallback-1',
      title: 'Golden Anniversary Celebration',
      type: 'Anniversary',
      date: '2024-12-15',
      time: '18:00',
      venue: 'Grand Palace Hall',
      address: 'Anna Nagar, Chennai - 600040',
      guests: '200+',
      description: 'A beautiful golden anniversary celebration for Mr. & Mrs. Sharma celebrating 50 years of togetherness.',
      imageUrl: '/img/Wedding.jpeg'
    },
    {
      id: 'fallback-2',
      title: 'Annual Day',
      type: 'Corporate',
      date: '2024-12-22',
      time: '19:00',
      venue: 'Luxury Resort',
      address: 'ECR, Chennai - 603104',
      guests: '500+',
      description: 'Annual corporate gala night for TechCorp celebrating their 10th anniversary with employees and partners.',
      imageUrl: '/img/conference.jpg'
    },
    {
      id: 'fallback-3',
      title: 'Grand Birthday Bash',
      type: 'Birthday',
      date: '2025-01-05',
      time: '16:00',
      venue: 'Private Villa',
      address: 'Besant Nagar, Chennai - 600090',
      guests: '150+',
      description: 'A grand 60th birthday celebration with family and friends in an elegant villa setting.',
      imageUrl: '/img/birthday.jpg'
    }
  ];

  const eventsToShow = upcomingEvents.slice(0, 3); // Show only first 3 upcoming events

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-maroon-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-maroon-900 mb-6">
            Book Your Spot <span className="text-gold-600">Now!</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Secure your place at our most anticipated celebrations—limited spots available!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {eventsToShow.map((event) => (
            <div
              key={event.id}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 overflow-hidden"
            >
              {/* Event Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={event.imageUrl}
                  alt={event.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = 'https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute top-4 right-4 bg-gold-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                  {event.type}
                </div>
              </div>

              {/* Event Details */}
              <div className="p-6">
                <h3 className="font-serif text-xl font-bold text-maroon-900 mb-3 group-hover:text-maroon-700 transition-colors">
                  {event.title}
                </h3>

                <div className="space-y-3">
                  <div className="text-maroon-700 text-base font-medium text-center">
                    Join us for an unforgettable celebration in Chennai!
                  </div>
                </div>

                {event.description && (
                  <p className="text-maroon-800 text-base mt-4 font-semibold leading-relaxed">
                    Reserve your spot for this special event now!
                  </p>
                )}

                <div className="mt-6 pt-4 border-t border-gray-100">
                  <a
                    href="https://wa.me/919710916687"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-gradient-to-r from-maroon-600 to-maroon-500 text-white py-2 px-4 rounded-lg font-medium hover:shadow-lg transition-all duration-300 group-hover:from-maroon-700 group-hover:to-maroon-600 flex items-center justify-center text-center"
                  >
                    Book Now
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">Want to feature your event here?</p>
          <a
            href="https://wa.me/919710916687"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-maroon-600 hover:text-maroon-800 font-semibold transition-colors"
          >
            Contact us for event planning
            <Calendar className="ml-2 h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default UpcomingEvents;
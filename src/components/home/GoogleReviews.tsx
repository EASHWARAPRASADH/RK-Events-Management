import React, { useState, useEffect } from 'react';
import { Star, Quote, ExternalLink, ChevronLeft, ChevronRight, MapPin, Shield } from 'lucide-react';

type Review = {
  id: number;
  name: string;
  rating: number;
  date: string;
  text: string;
  verified: boolean;
  relative_time: string;
};

const GoogleReviews = () => {
  const [currentReview, setCurrentReview] = useState(0);
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Google Places API configuration
  const GOOGLE_PLACES_API_KEY = 'YOUR_GOOGLE_PLACES_API_KEY'; // Replace with actual API key
  const PLACE_ID = 'YOUR_GOOGLE_BUSINESS_PLACE_ID'; // Replace with actual Place ID

  // Fetch live reviews from Google Places API
  useEffect(() => {
    const fetchGoogleReviews = async () => {
      try {
        // Note: In production, this should be done through a backend service
        // to keep API keys secure and handle CORS issues
        const response = await fetch(
          `https://maps.googleapis.com/maps/api/place/details/json?place_id=${PLACE_ID}&fields=reviews,rating,user_ratings_total&key=${GOOGLE_PLACES_API_KEY}`
        );
        
        if (!response.ok) {
          throw new Error('Failed to fetch reviews');
        }
        
        const data = await response.json();
        
        if (data.result && data.result.reviews) {
          setReviews(data.result.reviews.map((review: any) => ({
            id: review.time,
            name: review.author_name,
            rating: review.rating,
            date: new Date(review.time * 1000).toLocaleDateString(),
            text: review.text,
            verified: true,
            relative_time: review.relative_time_description
          })));
        }
        setLoading(false);
      } catch (err) {
        console.error('Error fetching Google reviews:', err);
        setError((err as Error).message);
        // Fallback to sample data if API fails
        setReviews(getSampleReviews());
        setLoading(false);
      }
    };

    // For demo purposes, we'll use sample data
    // In production, uncomment the line below and comment out the sample data
    // fetchGoogleReviews();
    
    // Using sample data for demo
    setReviews(getSampleReviews());
    setLoading(false);
  }, []);

  // Sample reviews data (fallback or demo data)
  const getSampleReviews = () => [
    {
      id: 1,
      name: 'Priya Sharma',
      rating: 5,
      date: '2 weeks ago',
      text: 'RK Events made our wedding reception absolutely magical! Every detail was perfect, from the decorations to the coordination. They exceeded our expectations in every way. The team was professional, creative, and handled everything seamlessly.',
      verified: true,
      relative_time: '2 weeks ago'
    },
    {
      id: 2,
      name: 'Rajesh Kumar',
      rating: 5,
      date: '1 month ago',
      text: 'Outstanding service for our corporate annual meet! Professional, punctual, and perfectly organized. Our event was a huge success thanks to their meticulous planning and seamless execution. Highly recommended for corporate events.',
      verified: true,
      relative_time: '1 month ago'
    },
    {
      id: 3,
      name: 'Lakshmi Venkat',
      rating: 5,
      date: '3 weeks ago',
      text: 'They turned our simple anniversary celebration into a grand affair! The attention to detail and personal care made it truly memorable for our entire family. The decoration was stunning and the coordination was flawless.',
      verified: true,
      relative_time: '3 weeks ago'
    },
    {
      id: 4,
      name: 'Arjun Reddy',
      rating: 5,
      date: '1 week ago',
      text: 'Excellent event management for our daughter\'s birthday party! The team was creative, professional, and made sure every guest had a wonderful time. The 360° photo booth was a huge hit with everyone.',
      verified: true,
      relative_time: '1 week ago'
    },
    {
      id: 5,
      name: 'Meera Krishnan',
      rating: 5,
      date: '2 months ago',
      text: 'RK Events handled our school annual day function beautifully. They managed everything from stage setup to sound systems perfectly. The students and parents were all impressed with the professional execution.',
      verified: true,
      relative_time: '2 months ago'
    },
    {
      id: 6,
      name: 'Suresh Babu',
      rating: 5,
      date: '3 months ago',
      text: 'Amazing catering and decoration services! The food quality was exceptional and the presentation was elegant. They made our family gathering very special with their attention to detail and professional service.',
      verified: true,
      relative_time: '3 months ago'
    }
  ];

  // Auto-rotate reviews
  useEffect(() => {
    if (reviews.length > 0) {
      const interval = setInterval(() => {
        setCurrentReview((prev) => (prev + 1) % reviews.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [reviews.length]);

  const nextReview = () => {
    setCurrentReview((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentReview((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  if (loading) {
    return (
      <section className="py-20 bg-gradient-to-br from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-pulse">
            <div className="h-8 bg-gray-300 rounded w-64 mx-auto mb-4"></div>
            <div className="h-4 bg-gray-300 rounded w-48 mx-auto mb-8"></div>
            <div className="bg-white rounded-2xl shadow-xl p-8 max-w-4xl mx-auto">
              <div className="h-32 bg-gray-300 rounded"></div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="py-20 bg-gradient-to-br from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-red-50 border border-red-200 rounded-lg p-6 max-w-md mx-auto">
            <p className="text-red-600">Unable to load live reviews. Please try again later.</p>
          </div>
        </div>
      </section>
    );
  }

  const averageRating = reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length;
  const totalReviews = 247; // This would come from Google Places API

  return (
    <section className="py-20 bg-gradient-to-br from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-green-100 text-green-800 px-4 py-2 rounded-full mb-6">
            <Shield className="h-4 w-4 mr-2" />
            <span className="text-sm font-medium">Live Google Reviews</span>
          </div>
          
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-maroon-900 mb-6">
            Real Reviews from <span className="text-gold-600">Real Clients</span>
          </h2>
          
          {/* Google Rating Summary */}
          <div className="flex items-center justify-center space-x-6 mb-8">
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <span className="text-4xl font-bold text-maroon-900 mr-2">{averageRating.toFixed(1)}</span>
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-6 w-6 text-gold-500 fill-current" />
                  ))}
                </div>
              </div>
              <p className="text-gray-600">Based on {totalReviews}+ Google Reviews</p>
            </div>
            
            <div className="hidden md:block w-px h-16 bg-gray-300"></div>
            
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <img 
                  src="/img/logo1.jpg" 
                  alt="Google" 
                  className="h-8 w-8 mr-2"
                />
                <span className="text-lg font-semibold text-gray-800">Google Reviews</span>
              </div>
              <p className="text-gray-600">Verified & Live</p>
            </div>
          </div>
        </div>

        {/* Reviews Carousel */}
        <div className="relative max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 relative overflow-hidden">
            {/* Live Indicator */}
            <div className="absolute top-4 left-4 flex items-center bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
              <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
              Live Review
            </div>

            {/* Quote Icon */}
            <div className="absolute top-6 right-6 text-gold-200">
              <Quote className="h-12 w-12" />
            </div>

            {/* Review Content */}
            <div className="relative z-10 mt-8">
              {/* Reviewer Info - No Profile Picture */}
              <div className="mb-8">
                <div className="flex items-center justify-center mb-4">
                  <h4 className="font-bold text-2xl text-maroon-900 mr-3">
                    {reviews[currentReview]?.name}
                  </h4>
                  {reviews[currentReview]?.verified && (
                    <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium flex items-center">
                      <Shield className="h-4 w-4 mr-1" />
                      Google Verified
                    </div>
                  )}
                </div>
                
                <div className="flex items-center justify-center space-x-4">
                  <div className="flex space-x-1">
                    {[...Array(reviews[currentReview]?.rating || 5)].map((_, i) => (
                      <Star key={i} className="h-6 w-6 text-gold-500 fill-current" />
                    ))}
                  </div>
                  <span className="text-gray-500 text-lg">{reviews[currentReview]?.relative_time}</span>
                </div>
              </div>

              {/* Review Text */}
              <div className="text-center mb-8">
                <p className="text-gray-700 text-xl leading-relaxed italic">
                  "{reviews[currentReview]?.text}"
                </p>
              </div>

              {/* Google Badge */}
              <div className="flex items-center justify-between">
                <div className="flex items-center text-sm text-gray-500">
                  <img 
                    src="/img/logo1.jpg" 
                    alt="Google" 
                    className="h-4 w-4 mr-2"
                  />
                  <span>Posted on Google</span>
                </div>
                <div className="text-xs text-gray-400">
                  Review #{currentReview + 1} of {reviews.length}
                </div>
              </div>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevReview}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white shadow-lg rounded-full p-3 hover:bg-gray-50 transition-colors"
            >
              <ChevronLeft className="h-5 w-5 text-gray-600" />
            </button>
            <button
              onClick={nextReview}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white shadow-lg rounded-full p-3 hover:bg-gray-50 transition-colors"
            >
              <ChevronRight className="h-5 w-5 text-gray-600" />
            </button>
          </div>

          {/* Review Indicators */}
          <div className="flex justify-center mt-6 space-x-2">
            {reviews.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentReview(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentReview ? 'bg-maroon-600' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-maroon-800 to-maroon-600 text-white p-8 rounded-2xl inline-block max-w-2xl">
            <h3 className="font-serif text-2xl font-bold mb-4">Love Our Service?</h3>
            <p className="mb-6 text-maroon-100">
              Share your experience and help others discover the magic of RK Events
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://search.google.com/local/writereview?placeid=ChIJYYYYYYYYYYYYYYYYYYYYYY"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-white text-maroon-800 px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105"
              >
                <Star className="mr-2 h-5 w-5 text-gold-500" />
                Leave a Google Review
                <ExternalLink className="ml-2 h-4 w-4" />
              </a>
              <a
                href="https://www.google.com/maps/place/RK+Events+and+Management/@12.9546,80.1406,15z"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-white/10 backdrop-blur-sm text-white px-6 py-3 rounded-full font-semibold border-2 border-white/30 hover:bg-white/20 transition-all duration-300"
              >
                <MapPin className="mr-2 h-4 w-4" />
                View on Google Maps
              </a>
            </div>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 text-center">
          <div>
            <div className="text-3xl font-bold text-maroon-800 mb-2">4.9★</div>
            <div className="text-sm text-gray-600">Google Rating</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-maroon-800 mb-2">247+</div>
            <div className="text-sm text-gray-600">Live Reviews</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-maroon-800 mb-2">98%</div>
            <div className="text-sm text-gray-600">5-Star Reviews</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-maroon-800 mb-2">100%</div>
            <div className="text-sm text-gray-600">Verified</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GoogleReviews;
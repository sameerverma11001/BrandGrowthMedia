import React, { useState, useEffect } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

const Testimonials = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      name: 'Rajesh Kumar',
      position: 'Client',
      content: 'The work is very best! I am fully satisfied with the services. The website development exceeded my expectations and the results speak for themselves.',
      rating: 5,
      result: 'Excellent Service'
    },
    {
      name: 'Priya Sharma',
      position: 'Client',
      content: 'Video editing is good! The quality and creativity in their work is outstanding. My content now looks professional and engaging.',
      rating: 5,
      result: 'Amazing Quality'
    },
    {
      name: 'Amit Patel',
      position: 'Client',
      content: 'My website SEO is good and shown in first page results! The optimization work they did has significantly improved my online visibility.',
      rating: 5,
      result: 'Top Rankings'
    },
    {
      name: 'Sneha Gupta',
      position: 'Client',
      content: 'Ad content is engaging and brings real results! The campaigns they created have significantly increased my customer base and sales.',
      rating: 5,
      result: 'Great Results'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-20 bg-dark-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className={`text-center mb-16 transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="flex items-center justify-center space-x-2 text-white mb-4">
            <div className="w-8 h-0.5 bg-white"></div>
            <span className="font-semibold text-sm uppercase tracking-wide">Testimonials</span>
            <div className="w-8 h-0.5 bg-white"></div>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
            What Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300">Clients Say</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our satisfied clients from across Chhattisgarh have to say about working with us.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden rounded-2xl">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0">
                  <div className="bg-gradient-to-br from-dark-900 to-dark-800 p-8 md:p-12 rounded-2xl border-2 border-primary-500 relative overflow-hidden animate-border-glow">
                    {/* Background Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary-600/10 to-secondary-600/10"></div>
                    
                    <div className="relative z-10">
                      <div className="flex items-center justify-center mb-6">
                        <div className="w-16 h-16 bg-gradient-to-br from-primary-600 to-secondary-600 rounded-full flex items-center justify-center animate-pulse-glow">
                          <Quote className="w-8 h-8 text-white animate-glow" />
                        </div>
                      </div>
                      
                      <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-8 text-center">
                        "{testimonial.content}"
                      </p>
                      
                      <div className="flex items-center justify-center space-x-4 mb-6">
                        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary-600 to-secondary-600 border-4 border-dark-800 shadow-2xl flex items-center justify-center animate-pulse-glow">
                          <div className="w-8 h-8 rounded-full bg-dark-800 opacity-50"></div>
                        </div>
                        <div className="text-center">
                          <h4 className="font-bold text-white text-lg">{testimonial.name}</h4>
                          <p className="text-gray-300">{testimonial.position}</p>
                          <div className="flex items-center justify-center space-x-1 mt-2">
                            {[...Array(testimonial.rating)].map((_, i) => (
                              <Star key={i} className="w-4 h-4 text-yellow-400 fill-current animate-pulse" />
                            ))}
                          </div>
                        </div>
                      </div>
                      
                      <div className="text-center">
                        <span className="bg-gradient-to-r from-primary-500 to-secondary-500 text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg animate-glow">
                          {testimonial.result}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-dark-800 hover:bg-dark-700 text-gray-300 hover:text-white rounded-full flex items-center justify-center transition-colors duration-200 shadow-lg border border-gray-600"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-dark-800 hover:bg-dark-700 text-gray-300 hover:text-white rounded-full flex items-center justify-center transition-colors duration-200 shadow-lg border border-gray-600"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <div className="flex justify-center space-x-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                  index === currentSlide ? 'bg-white' : 'bg-gray-600'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
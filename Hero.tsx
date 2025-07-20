import React from 'react';
import { ArrowRight, Play, Star, TrendingUp, Users, Award } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

const Hero = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-white/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-white/5 rounded-full blur-3xl animate-pulse-slow"></div>
      </div>
      
      <div ref={ref} className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className={`space-y-8 transition-all duration-1000 ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="flex items-center space-x-2 text-primary-600">
              <TrendingUp className="w-5 h-5" />
              <span className="font-semibold text-sm uppercase tracking-wide text-white">Digital Growth Experts</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight">
              Transform Your Business with
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary-400 via-secondary-400 to-primary-600 animate-gradient bg-300%">
                Digital Excellence
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 leading-relaxed max-w-2xl">
              We help startups, small businesses, and online creators in <span className="font-semibold text-white">RJN, Chhattisgarh</span> grow their digital presence through cutting-edge web development, strategic social media marketing, and powerful automation solutions.
            </p>
            
            <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-6">
              <button
                onClick={() => scrollToSection('contact')}
                className="group bg-white text-dark-900 px-8 py-4 rounded-full font-bold text-lg hover:shadow-xl hover:shadow-white/25 transition-all duration-300 flex items-center space-x-2"
              >
                <span>Start Your Growth Journey</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
              </button>
              
              <button
                onClick={() => scrollToSection('portfolio')}
                className="group flex items-center space-x-3 text-gray-300 hover:text-white transition-colors duration-200"
              >
                <div className="w-12 h-12 bg-dark-800 border-2 border-gray-600 rounded-full flex items-center justify-center group-hover:border-white group-hover:bg-dark-700 transition-all duration-200">
                  <Play className="w-5 h-5 ml-1" />
                </div>
                <span className="font-semibold">View Our Work</span>
              </button>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              {[
                { icon: Users, number: 'Happy', label: 'Clients' },
                { icon: Award, number: '98%', label: 'Success Rate' },
                { icon: TrendingUp, number: '300%', label: 'Avg ROI' }
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary-600 to-secondary-600 border-2 border-primary-500 rounded-lg flex items-center justify-center mx-auto mb-2 animate-pulse-glow">
                    <stat.icon className="w-6 h-6 text-white animate-glow" />
                  </div>
                  <div className="text-2xl font-black text-white font-bold">{stat.number}</div>
                  <div className="text-sm text-gray-300 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Hero Image/Illustration */}
          <div className={`relative transition-all duration-1000 ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="relative">
              <div className="w-full h-96 lg:h-[500px] bg-gradient-to-br from-dark-800 via-dark-700 to-dark-800 rounded-3xl flex items-center justify-center relative overflow-hidden border-2 border-primary-500 animate-border-glow">
                <img 
                  src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop" 
                  alt="Digital Marketing Team" 
                  className="w-full h-full object-cover rounded-3xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-900/60 via-transparent to-transparent rounded-3xl"></div>
              </div>
              
              <div className="absolute -bottom-4 -left-4 bg-dark-800 p-4 rounded-2xl shadow-xl border border-gray-600 animate-float" style={{ animationDelay: '1s' }}>
                <div className="flex items-center space-x-2">
                  <div className="flex">
                    {[1,2,3,4,5].map((i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <span className="text-sm font-semibold text-white">5.0 Rating</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
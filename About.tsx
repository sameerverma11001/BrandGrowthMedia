import React from 'react';
import { Users, Award, Target, TrendingUp, MapPin, Clock } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

const About = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const stats = [
    { icon: Users, label: 'Happy Clients', color: 'text-primary-600' },
    { icon: Award, number: '98%', label: 'Success Rate', color: 'text-secondary-600' },
    { icon: Target, number: '300%', label: 'Average ROI', color: 'text-accent-600' },
    { icon: Clock, number: '24/7', label: 'Support', color: 'text-primary-600' }
  ];

  const values = [
    {
      title: 'Innovation First',
      description: 'We stay ahead of digital trends to deliver cutting-edge solutions that give your business a competitive advantage.',
      icon: '🚀'
    },
    {
      title: 'Results Driven',
      description: 'Every strategy we implement is designed to deliver measurable results and drive real business growth.',
      icon: '📈'
    },
    {
      title: 'Client Partnership',
      description: 'We believe in building long-term partnerships, working closely with you to understand and achieve your goals.',
      icon: '🤝'
    }
  ];

  return (
    <section id="about" className="py-20 bg-dark-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className={`space-y-8 transition-all duration-1000 ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div>
              <div className="flex items-center space-x-2 text-white mb-4">
                <div className="w-8 h-0.5 bg-white"></div>
                <span className="font-semibold text-sm uppercase tracking-wide">About Us</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
                Your Trusted <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300">Digital Partner</span>
              </h2>
              <p className="text-xl text-gray-300 leading-relaxed mb-6">
                Based in <span className="font-semibold text-white">RJN, Chhattisgarh</span>, BrandGrowth Media is a full-service digital marketing agency dedicated to helping businesses transform their online presence and achieve sustainable growth.
              </p>
              <p className="text-gray-300 leading-relaxed">
                We combine creativity with data-driven strategies to deliver exceptional results. Our team of experts specializes in web development, social media marketing, video production, and business automation, ensuring your brand stands out in the digital landscape.
              </p>
            </div>

            <div className="flex items-center space-x-4 text-gray-300">
              <MapPin className="w-5 h-5 text-white" />
              <span className="font-medium">Serving RJN, Chhattisgarh & Beyond</span>
            </div>

            {/* Values */}
            <div className="space-y-6">
              {values.map((value, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="text-2xl">{value.icon}</div>
                  <div>
                    <h4 className="font-bold text-white mb-2">{value.title}</h4>
                    <p className="text-gray-300 text-sm leading-relaxed">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Stats & Image */}
          <div className={`space-y-8 transition-all duration-1000 ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            {/* Image */}
            <div className="relative">
              <div className="w-full h-80 bg-gradient-to-br from-dark-800 via-dark-700 to-dark-800 rounded-3xl overflow-hidden border border-gray-600">
                <img 
                  src="https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop" 
                  alt="Our Team" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-900/60 via-transparent to-transparent"></div>
              </div>
              
              {/* Floating Stats Card */}
              <div className="absolute -bottom-6 -left-6 bg-gradient-to-br from-primary-900 to-secondary-900 p-6 rounded-2xl shadow-xl border-2 border-primary-500 animate-pulse-glow">
                <div className="text-center">
                  <div className="text-3xl font-black text-white">3+</div>
                  <div className="text-sm text-gray-300 font-medium">Years Experience</div>
                </div>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="bg-gradient-to-br from-dark-800 to-dark-900 p-6 rounded-2xl text-center border-2 border-primary-500 hover:border-secondary-500 transition-colors duration-300 animate-pulse-glow">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary-600 to-secondary-600 rounded-xl flex items-center justify-center mx-auto mb-4 animate-glow">
                    <stat.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-2xl font-black text-white mb-1">{stat.number}</div>
                  <div className="text-sm text-gray-300 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
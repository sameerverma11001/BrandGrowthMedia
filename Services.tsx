import React from 'react';
import { Globe, Video, Share2, Target, Settings, Smartphone, ArrowRight } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

const Services = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const services = [
    {
      icon: Globe,
      title: 'Website & App Development',
      description: 'Custom websites and mobile apps that convert visitors into customers with modern design and seamless functionality.',
      features: ['Responsive Design', 'E-commerce Integration', 'SEO Optimized', 'Fast Loading'],
      color: 'from-primary-500 to-primary-600'
    },
    {
      icon: Video,
      title: 'Video Editing',
      description: 'Professional video editing services that tell your brand story and engage your audience across all platforms.',
      features: ['Social Media Videos', 'Promotional Content', 'Animation', 'Color Grading'],
      color: 'from-secondary-500 to-secondary-600'
    },
    {
      icon: Share2,
      title: 'Social Media Content',
      description: 'Strategic content creation that builds brand awareness and drives engagement across all social platforms.',
      features: ['Content Strategy', 'Graphic Design', 'Copywriting', 'Scheduling'],
      color: 'from-accent-500 to-accent-600'
    },
    {
      icon: Target,
      title: 'Facebook & Instagram Ads',
      description: 'Data-driven advertising campaigns that maximize your ROI and reach your ideal customers.',
      features: ['Audience Targeting', 'A/B Testing', 'Campaign Optimization', 'ROI Tracking'],
      color: 'from-primary-600 to-secondary-500'
    },
    {
      icon: Settings,
      title: 'Business Automation',
      description: 'Streamline your operations with custom automation solutions that save time and increase efficiency.',
      features: ['Workflow Automation', 'CRM Integration', 'Lead Nurturing', 'Analytics Dashboard'],
      color: 'from-secondary-600 to-accent-500'
    },
    {
      icon: Smartphone,
      title: 'Digital Strategy',
      description: 'Comprehensive digital marketing strategies tailored to your business goals and target audience.',
      features: ['Market Analysis', 'Competitor Research', 'Growth Planning', 'Performance Tracking'],
      color: 'from-accent-600 to-primary-500'
    }
  ];

  return (
    <section id="services" className="py-20 bg-dark-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className={`text-center mb-16 transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="flex items-center justify-center space-x-2 text-white mb-4">
            <div className="w-8 h-0.5 bg-white"></div>
            <span className="font-semibold text-sm uppercase tracking-wide">Our Services</span>
            <div className="w-8 h-0.5 bg-white"></div>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
            Comprehensive <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300">Digital Solutions</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            From stunning websites to powerful marketing campaigns, we provide everything your business needs to thrive in the digital world.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`group bg-dark-900 p-8 rounded-2xl hover:shadow-2xl transition-all duration-500 border border-gray-700 hover:border-white relative overflow-hidden ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
              
              <div className="relative z-10">
                <div className="flex items-center mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-gray-300 transition-colors duration-300">
                  {service.title}
                </h3>
                
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                <ul className="space-y-3 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                      <div className="w-2 h-2 bg-white rounded-full mr-3 group-hover:bg-gray-300 transition-colors duration-300"></div>
                      {feature}
                    </li>
                  ))}
                </ul>

                <button className="flex items-center text-white font-semibold group-hover:text-gray-300 transition-colors duration-300">
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-white text-dark-900 px-8 py-4 rounded-full font-bold text-lg hover:shadow-xl hover:shadow-white/25 transition-all duration-300 inline-flex items-center space-x-2"
          >
            <span>Get Custom Solution</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;
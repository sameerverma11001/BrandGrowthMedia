import React from 'react';
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin, Twitter, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark-900 text-white relative border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <img 
                src="/logo.png" 
                alt="BrandGrowth Media" 
                className="w-12 h-12 object-contain"
              />
              <div className="flex flex-col">
                <span className="text-xl font-bold">BrandGrowth</span>
                <span className="text-sm text-gray-300 font-medium -mt-1">Media</span>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed">
              We help businesses in RJN, Chhattisgarh grow their digital presence through innovative web development, strategic marketing, and powerful automation solutions.
            </p>
            <div className="flex space-x-4">
              {[
                { icon: Facebook, href: '#', color: 'hover:text-blue-400' },
                { icon: Instagram, href: '#', color: 'hover:text-pink-400' },
                { icon: Linkedin, href: '#', color: 'hover:text-blue-500' },
                { icon: Twitter, href: '#', color: 'hover:text-blue-300' }
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className={`w-10 h-10 bg-dark-800 rounded-lg flex items-center justify-center text-gray-400 ${social.color} transition-all duration-200 hover:bg-dark-700 border border-gray-700`}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { name: 'Home', id: 'home' },
                { name: 'Services', id: 'services' },
                { name: 'About', id: 'about' },
                { name: 'Testimonials', id: 'testimonials' },
                { name: 'Contact', id: 'contact' }
              ].map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Our Services</h3>
            <ul className="space-y-3">
              {[
                'Website Development',
                'App Development',
                'Video Editing',
                'Social Media Marketing',
                'Facebook & Instagram Ads',
                'Business Automation',
                'Digital Strategy',
                'SEO Optimization'
              ].map((service, index) => (
                <li key={index}>
                  <span className="text-gray-300">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-white mt-1" />
                <div>
                  <p className="text-gray-300">Email</p>
                  <a href="mailto:hello@brandgrowthmedia.com" className="text-white hover:text-gray-300 transition-colors duration-200">
                    hello@brandgrowthmedia.com
                  </a>
                </div>
              </li>
              
              <li className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-white mt-1" />
                <div>
                  <p className="text-gray-300">Phone</p>
                  <a href="tel:+919876543210" className="text-white hover:text-gray-300 transition-colors duration-200">
                    +91 98765 43210
                  </a>
                </div>
              </li>
              
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-white mt-1" />
                <div>
                  <p className="text-gray-300">Address</p>
                  <p className="text-white">RJN, Chhattisgarh, India</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-center md:text-left">
              © {currentYear} BrandGrowth Media. All rights reserved.
            </p>
            <div className="flex items-center space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="absolute bottom-8 right-8 w-12 h-12 bg-white text-dark-900 rounded-full flex items-center justify-center hover:shadow-lg hover:shadow-white/25 transition-all duration-200"
      >
        <ArrowUp className="w-5 h-5" />
      </button>
    </footer>
  );
};

export default Footer;
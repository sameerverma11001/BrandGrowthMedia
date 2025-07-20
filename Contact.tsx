import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle, Clock, Users, Award } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

const Contact = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    budget: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    setIsSubmitting(false);
    
    setTimeout(() => setIsSubmitted(false), 5000);
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      service: '',
      budget: '',
      message: ''
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const benefits = [
    {
      icon: CheckCircle,
      title: 'Free Consultation',
      description: 'Get a comprehensive strategy session at no cost'
    },
    {
      icon: Users,
      title: 'Dedicated Team',
      description: 'Your own project manager and expert team'
    },
    {
      icon: Clock,
      title: '24/7 Support',
      description: 'Round-the-clock support for all your needs'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-dark-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className={`text-center mb-16 transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="flex items-center justify-center space-x-2 text-white mb-4">
            <div className="w-8 h-0.5 bg-white"></div>
            <span className="font-semibold text-sm uppercase tracking-wide">Contact Us</span>
            <div className="w-8 h-0.5 bg-white"></div>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
            Ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300">Grow</span>?
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Let's discuss your project and create a custom solution that drives real results for your business in RJN, Chhattisgarh.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className={`space-y-8 transition-all duration-1000 ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Get in Touch</h3>
              <p className="text-gray-300 leading-relaxed mb-8">
                Ready to take your business to the next level? Our team of digital experts in RJN, Chhattisgarh is here to help you achieve your goals. Let's start the conversation today.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-white font-semibold">Email Us</p>
                  <a href="mailto:hello@brandgrowthmedia.com" className="text-gray-300 hover:text-white transition-colors duration-200">
                    hello@brandgrowthmedia.com
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-white font-semibold">Call Us</p>
                  <a href="tel:+919876543210" className="text-gray-300 hover:text-white transition-colors duration-200">
                    +91 98765 43210
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-white font-semibold">Visit Us</p>
                  <p className="text-gray-300">RJN, Chhattisgarh, India</p>
                </div>
              </div>
            </div>

            {/* Benefits */}
            <div className="bg-dark-800 p-6 rounded-2xl border border-gray-700">
              <h4 className="text-white font-bold mb-6">Why Choose BrandGrowth Media?</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <benefit.icon className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-white text-sm">{benefit.title}</p>
                      <p className="text-gray-300 text-xs">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className={`transition-all duration-1000 ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="bg-dark-800 p-8 rounded-2xl border border-gray-700">
              <h3 className="text-2xl font-bold text-white mb-6">Start Your Project</h3>
              
              {isSubmitted ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-white mb-2">Thank You!</h4>
                  <p className="text-gray-300">We'll get back to you within 24 hours with a custom proposal.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-white font-semibold mb-2">Name *</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-dark-900 border border-gray-600 rounded-xl text-white focus:border-white focus:outline-none focus:ring-2 focus:ring-white/20 transition-all duration-200"
                        placeholder="Your Name"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-white font-semibold mb-2">Email *</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-dark-900 border border-gray-600 rounded-xl text-white focus:border-white focus:outline-none focus:ring-2 focus:ring-white/20 transition-all duration-200"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-white font-semibold mb-2">Phone</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-dark-900 border border-gray-600 rounded-xl text-white focus:border-white focus:outline-none focus:ring-2 focus:ring-white/20 transition-all duration-200"
                        placeholder="+91 98765 43210"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-white font-semibold mb-2">Company</label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-dark-900 border border-gray-600 rounded-xl text-white focus:border-white focus:outline-none focus:ring-2 focus:ring-white/20 transition-all duration-200"
                        placeholder="Your Company"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-white font-semibold mb-2">Service Needed</label>
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-dark-900 border border-gray-600 rounded-xl text-white focus:border-white focus:outline-none focus:ring-2 focus:ring-white/20 transition-all duration-200"
                      >
                        <option value="">Select a service</option>
                        <option value="website">Website Development</option>
                        <option value="app">App Development</option>
                        <option value="video">Video Editing</option>
                        <option value="social">Social Media Marketing</option>
                        <option value="ads">Facebook/Instagram Ads</option>
                        <option value="automation">Business Automation</option>
                        <option value="complete">Complete Package</option>
                      </select>
                    </div>
                    
                    <div>
                      <label className="block text-white font-semibold mb-2">Budget Range</label>
                      <select
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-dark-900 border border-gray-600 rounded-xl text-white focus:border-white focus:outline-none focus:ring-2 focus:ring-white/20 transition-all duration-200"
                      >
                        <option value="">Select budget</option>
                        <option value="10-25k">₹10,000 - ₹25,000</option>
                        <option value="25-50k">₹25,000 - ₹50,000</option>
                        <option value="50-100k">₹50,000 - ₹1,00,000</option>
                        <option value="100k+">₹1,00,000+</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-white font-semibold mb-2">Project Details</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className="w-full px-4 py-3 bg-dark-900 border border-gray-600 rounded-xl text-white focus:border-white focus:outline-none focus:ring-2 focus:ring-white/20 transition-all duration-200 resize-none"
                      placeholder="Tell us about your project goals and requirements..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-white text-dark-900 py-4 px-6 rounded-xl font-bold text-lg hover:shadow-xl hover:shadow-white/25 transition-all duration-200 flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-dark-900 border-t-transparent rounded-full animate-spin"></div>
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
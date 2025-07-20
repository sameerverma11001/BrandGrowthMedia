import React from 'react';
import { ExternalLink, TrendingUp, Users, DollarSign } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

const CaseStudies = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const caseStudies = [
    {
      title: 'E-commerce Growth',
      client: 'FashionForward Store',
      image: 'https://images.pexels.com/photos/3962285/pexels-photo-3962285.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      description: 'Complete e-commerce website with inventory management and social media marketing campaign.',
      metrics: [
        { icon: TrendingUp, value: '340%', label: 'Sales Increase' },
        { icon: Users, value: '25K', label: 'New Customers' },
        { icon: DollarSign, value: '₹50L', label: 'Revenue Generated' }
      ],
      tags: ['Web Development', 'Social Media', 'Ads Management']
    },
    {
      title: 'Startup Launch',
      client: 'TechNova Solutions',
      image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      description: 'Brand identity, website development, and comprehensive digital marketing strategy for tech startup.',
      metrics: [
        { icon: Users, value: '100K', label: 'App Downloads' },
        { icon: TrendingUp, value: '500%', label: 'User Growth' },
        { icon: DollarSign, value: '₹2Cr', label: 'Funding Raised' }
      ],
      tags: ['Branding', 'App Development', 'Digital Strategy']
    },
    {
      title: 'Restaurant Chain',
      client: 'Spice Garden',
      image: 'https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      description: 'Multi-location restaurant website with online ordering and social media content creation.',
      metrics: [
        { icon: DollarSign, value: '200%', label: 'Online Orders' },
        { icon: Users, value: '15K', label: 'Social Followers' },
        { icon: TrendingUp, value: '150%', label: 'Foot Traffic' }
      ],
      tags: ['Web Development', 'Content Creation', 'Local SEO']
    }
  ];

  return (
    <section id="work" className="py-20 bg-navy-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className={`text-center mb-16 transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-5xl font-black text-lightgrey-100 mb-6">
            Success <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-400 to-mint-400">Stories</span>
          </h2>
          <p className="text-xl text-lightgrey-100 max-w-3xl mx-auto">
            Real results from real businesses. See how we've helped our clients achieve remarkable growth.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <div
              key={index}
              className={`group bg-navy-900/50 rounded-xl overflow-hidden hover:shadow-2xl hover:shadow-neon-400/10 transition-all duration-500 border border-neon-400/20 hover:border-neon-400/50 backdrop-blur-sm ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={study.image}
                  alt={study.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-900 via-transparent to-transparent opacity-60"></div>
                <div className="absolute top-4 right-4">
                  <div className="w-10 h-10 bg-neon-400/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:bg-neon-400/30 transition-colors duration-300 border border-neon-400/30">
                    <ExternalLink className="w-5 h-5 text-neon-400" />
                  </div>
                </div>
              </div>

              <div className="p-6">
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-lightgrey-100 mb-2 group-hover:text-neon-400 transition-colors duration-300">
                    {study.title}
                  </h3>
                  <p className="text-mint-400 font-semibold text-sm">{study.client}</p>
                </div>

                <p className="text-lightgrey-100 mb-6 leading-relaxed">
                  {study.description}
                </p>

                <div className="grid grid-cols-3 gap-4 mb-6">
                  {study.metrics.map((metric, metricIndex) => (
                    <div key={metricIndex} className="text-center">
                      <div className="w-8 h-8 bg-neon-400/10 border border-neon-400/30 rounded-lg flex items-center justify-center mx-auto mb-2">
                        <metric.icon className="w-4 h-4 text-neon-400" />
                      </div>
                      <div className="text-lg font-bold text-lightgrey-100">{metric.value}</div>
                      <div className="text-xs text-lightgrey-200">{metric.label}</div>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2">
                  {study.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-neon-400/10 text-neon-400 rounded-full text-xs font-medium border border-neon-400/30"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-gradient-to-r from-neon-400 to-mint-400 text-navy-900 px-8 py-4 rounded-lg font-bold text-lg hover:shadow-lg hover:shadow-neon-400/25 transition-all duration-200"
          >
            Start Your Success Story
          </button>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
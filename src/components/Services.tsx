import React from 'react';
import { Globe, Megaphone, Code, Search, Smartphone, BarChart } from 'lucide-react';

const services = [
  {
    title: 'Web Design',
    description: 'Custom, responsive websites that engage your audience and drive results.',
    icon: Globe
  },
  {
    title: 'Digital Marketing',
    description: 'Strategic marketing campaigns to boost your online presence.',
    icon: Megaphone
  },
  {
    title: 'Web Development',
    description: 'Full-stack development solutions for complex web applications.',
    icon: Code
  },
  {
    title: 'SEO Optimization',
    description: 'Improve your search rankings and drive organic traffic.',
    icon: Search
  },
  {
    title: 'Mobile Solutions',
    description: 'Mobile-first design and development for modern businesses.',
    icon: Smartphone
  },
  {
    title: 'Analytics & Reporting',
    description: 'Data-driven insights to optimize your digital strategy.',
    icon: BarChart
  }
];

const Services = () => {
  return (
    <div id="services" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Our Services
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Comprehensive digital solutions to help your business thrive online
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="relative group bg-white p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div>
                <span className="rounded-lg inline-flex p-3 bg-indigo-50 text-indigo-600 ring-4 ring-white">
                  <service.icon className="h-6 w-6" aria-hidden="true" />
                </span>
              </div>
              <div className="mt-8">
                <h3 className="text-lg font-medium">
                  <span className="absolute inset-0" aria-hidden="true" />
                  {service.title}
                </h3>
                <p className="mt-2 text-sm text-gray-500">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
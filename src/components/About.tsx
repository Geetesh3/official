import React from 'react';
import { Users, Target, Award } from 'lucide-react';

const About = () => {
  return (
    <div id="about" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            About Geetesh Enterprises
          </h2>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Your trusted partner in digital transformation since 2020
          </p>
        </div>

        <div className="mt-20">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
            <div className="text-center">
              <div className="flex justify-center">
                <Users className="h-12 w-12 text-indigo-600" />
              </div>
              <h3 className="mt-6 text-xl font-bold text-gray-900">Expert Team</h3>
              <p className="mt-2 text-base text-gray-500">
                Our team of experienced professionals brings diverse expertise to every project.
              </p>
            </div>

            <div className="text-center">
              <div className="flex justify-center">
                <Target className="h-12 w-12 text-indigo-600" />
              </div>
              <h3 className="mt-6 text-xl font-bold text-gray-900">Client Focus</h3>
              <p className="mt-2 text-base text-gray-500">
                We prioritize understanding your unique needs to deliver tailored solutions.
              </p>
            </div>

            <div className="text-center">
              <div className="flex justify-center">
                <Award className="h-12 w-12 text-indigo-600" />
              </div>
              <h3 className="mt-6 text-xl font-bold text-gray-900">Quality First</h3>
              <p className="mt-2 text-base text-gray-500">
                We maintain the highest standards in every aspect of our work.
              </p>
            </div>
          </div>

          <div className="mt-16 bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="px-6 py-12 sm:px-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                At Geetesh Enterprises, we're committed to helping businesses thrive in the digital age. 
                Through innovative web solutions and strategic digital marketing, we empower our clients 
                to reach their full potential online. Our approach combines creativity with technical 
                expertise to deliver results that exceed expectations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
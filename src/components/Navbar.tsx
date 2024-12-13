import React from 'react';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <span className="text-2xl font-bold text-indigo-600">Geetesh Enterprises</span>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-700 hover:text-indigo-600 transition">Home</a>
            <a href="#services" className="text-gray-700 hover:text-indigo-600 transition">Services</a>
            <a href="#blog" className="text-gray-700 hover:text-indigo-600 transition">Blog</a>
            <a href="#about" className="text-gray-700 hover:text-indigo-600 transition">About</a>
            <a href="#contact" className="text-gray-700 hover:text-indigo-600 transition">Contact</a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a href="#home" className="block px-3 py-2 text-gray-700 hover:text-indigo-600">Home</a>
              <a href="#services" className="block px-3 py-2 text-gray-700 hover:text-indigo-600">Services</a>
              <a href="#blog" className="block px-3 py-2 text-gray-700 hover:text-indigo-600">Blog</a>
              <a href="#about" className="block px-3 py-2 text-gray-700 hover:text-indigo-600">About</a>
              <a href="#contact" className="block px-3 py-2 text-gray-700 hover:text-indigo-600">Contact</a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
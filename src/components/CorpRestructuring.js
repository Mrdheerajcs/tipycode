import React from 'react';
import { Link } from 'react-router-dom';
import RestructuringImage from '../assets/corporate-restructuring.svg';

const CorporateRestructuring = () => {
  return (
    <section className="py-24 bg-gray-200">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="md:w-1/2">
            <h2 className="text-2xl md:text-3xl uppercase font-bold text-gray-800 leading-tight mb-6">
              Why Corporate Restructuring<br />
              Is More Relevant Than Ever In
            </h2>
            <h3 className="text-4xl md:text-5xl text-blue-900 font-bold mb-8">
              family businesses
            </h3>
            <Link to="/corporate-restructuring" className="inline-block bg-[#f57272] text-white px-6 py-3 rounded hover:bg-red-600 transition duration-300">
              Read Article
            </Link>
          </div>
          <div className="md:w-1/2">
            <img 
              src={RestructuringImage} 
              alt="Corporate Restructuring Illustration" 
              className="w-full max-w-lg mx-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CorporateRestructuring;
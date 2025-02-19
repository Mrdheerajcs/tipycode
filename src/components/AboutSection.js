import React from 'react';
import { Link } from 'react-router-dom';

const AboutSection = () => {
  return (
    <section className="py-12 bg-gray-800 text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <p className="text-sm mb-8 leading-relaxed">
            We are a consultancy firm comprising of <em>financial advisors, tax consultants and chartered accountants</em>, specializing in various aspects such as corporate tax planning,
            financial accounting, company incorporation, corporate finance, transfer pricing, debt syndication and audit practices.
          </p>
          
          <div className="mb-8">
            <p className="text-[#f57272] text-xl leading-relaxed mb-6">
              Coinmen was founded in 2010 by three visionary men who currently
              serve as our Founding Partners. They come from different portfolios of
              tax and financial advisory but the three of them shared a common goal
              while starting this company, and was to establish a firm which puts the
              client's interest first and helps the client's business grow.
            </p>
          </div>
          
          <div className="text-center">
            <Link to="/about-us" className="inline-block text-white hover:text-[#f57272] transition duration-300">
              Know More →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
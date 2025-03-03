import React from "react";
import { Link } from "react-router-dom";

const AboutSection = () => {
  return (
    <section className="py-14 bg-gray-800 text-white border-y-2 border-red-700 w-full">
      <div className="container mx-auto lg:mx-4 px-6 w-full">
        <div className="md:max-w-4xl mx-auto lg:mx-4 xl:max-w-full ">
          
          <p className="text-base mb-8 leading-relaxed w-full">
            We are a consultancy firm comprising of{" "}
            <em className="text-gray-300">financial advisors, tax consultants and chartered accountants</em>,
            specializing in various aspects such as corporate tax planning, financial accounting, 
            company incorporation, corporate finance, transfer pricing, debt syndication and audit practices.
          </p>

          <div className="mb-8 w-full">
            <p className="text-2xl font-semibold text-[#f57272] leading-relaxed">
              Coinmen was founded in 2010 by three visionary men who currently serve as our Founding Partners. 
              They come from different portfolios of tax and financial advisory but the three of them shared a 
              common goal while starting this company, and was to establish a firm which puts the client’s interest 
              first and helps the client’s business grow.
            </p>
          </div>

          <div className="text-center">
            <Link
              to="/about-us"
              className="inline-block text-white hover:text-[#f57272] transition duration-300 font-medium"
            >
              Know More →
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;

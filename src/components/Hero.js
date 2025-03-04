import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="pt-24 pb-16 bg-[#f57272] text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Grow where<br />
            the Sun rises
          </h1>
          <p className="text-lg mb-3">
            Yes, this is where you should be. <em>Because in a post-boom, post-depression, reenergized and currently WFH world, you need to go where the opportunities are.</em>
          </p>
          <p className="mb-4">
            But the promised land isn't just there for the taking. There is red tape to be navigated, policies to be 
            understood and bureaucratic shenanigans to be circumvented.
          </p>
          <p className="mb-8">
            And that's why you're here. Because you need a set of big brains to navigate the big challenges that'll make you as big as you want to be.
            And those are the brains we have.
          </p>
          
          <div className="flex flex-wrap items-center gap-4">
            <Link to="#-us" className="bg-transparent border border-white text-white px-5 py-2.5 rounded hover:bg-white hover:text-[#f57272] transition duration-300">
              Know More →
            </Link>
            <a href="/budgets/2023" className="bg-gray-800 text-white px-5 py-2.5 rounded hover:bg-gray-700 transition duration-300 flex items-center gap-2">
              <span>Download Budget 2023</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
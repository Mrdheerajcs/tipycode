import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import RestructuringImage from "../assets/corporate-restructuring.svg";

const sliderData = [
  {
    title: "Why Corporate Restructuring Is More Relevant Than Ever In",
    highlight: "family businesses",
    link: "/corporate-restructuring",
    image: RestructuringImage,
  },
  {
    title: "The Importance of Strategy in Business Growth",
    highlight: "corporate world",
    link: "/business-strategy",
    image: RestructuringImage,
  },
  {
    title: "Navigating Economic Downturns With Smart Restructuring",
    highlight: "financial sector",
    link: "/economic-downturns",
    image: RestructuringImage,
  },
  {
    title: "Understanding the Impact of Mergers and Acquisitions",
    highlight: "global economy",
    link: "/mergers-acquisitions",
    image: RestructuringImage,
  },
  {
    title: "Restructuring for a Sustainable Future",
    highlight: "eco-friendly businesses",
    link: "/sustainable-future",
    image: RestructuringImage,
  },
];

const CorporateRestructuring = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1, // Adjust if needed
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <section className="py-24 bg-gray-200">
      <div className="container mx-auto px-4 md:px-6">
        <Slider {...settings}>
          {sliderData.map((slide, index) => (<>
            <div key={index} className="flex flex-col lg:flex-row w-full gap-10 items-center">
              
              {/* Text Section */}
              <div className="w-full lg:w-1/2 text-center lg:text-left">
                <h2 className="text-2xl md:text-3xl uppercase font-bold text-gray-800 leading-tight mb-6">
                  {slide.title}
                </h2>
                <h3 className="text-4xl md:text-5xl text-blue-900 font-bold mb-8">
                  {slide.highlight}
                </h3>
                <Link
                  to={slide.link}
                  className="inline-block bg-[#f57272] text-white px-6 py-3 rounded hover:bg-red-600 transition duration-300"
                >
                  Read Article
                </Link>
              </div>

              {/* Image for Large Screens */}
              <div className="hidden lg:block w-1/2">
                <img 
                  src={slide.image} 
                  alt="Corporate Restructuring Illustration" 
                  className="w-2/3 max-w-lg mx-auto"
                />
              </div>

              {/* Image for Small Screens */}
              <div className="block lg:hidden w-full flex justify-center">
                <img 
                  src={slide.image} 
                  alt="Corporate Restructuring Illustration" 
                  className="w-3/4 max-w-xs"
                />
              </div>
            </div>
            <div></div>
            </>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default CorporateRestructuring;

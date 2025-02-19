import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// Import client logos
import Client1 from '../assets/clients/client1.png';
import Client2 from '../assets/clients/client2.png';
import Client3 from '../assets/clients/client3.png';
import Client4 from '../assets/clients/client4.png';
import Client5 from '../assets/clients/client5.png';
import Client6 from '../assets/clients/client6.png';

const ClientSection = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
        }
      }
    ]
  };

  const clients = [Client1, Client2, Client3, Client4, Client5, Client6];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-10">Our Clients</h2>
        
        <Slider {...settings}>
          {clients.map((client, index) => (
            <div key={index} className="px-4">
              <img 
                src={client} 
                alt={`Client ${index + 1}`} 
                className="h-16 object-contain mx-auto grayscale hover:grayscale-0 transition duration-300"
              />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default ClientSection;
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/logo.svg';
import AllianceLogo from '../assets/alliance-logo.svg';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [submenuOpen, setSubmenuOpen] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const mainMenuItems = [
    { name: 'COINMEN', path: '/coinmen' },
    { name: 'STARTUPS', path: '/startups' },
    { 
      name: 'BUSINESS IN INDIA', 
      path: '#',
      submenu: [
        { name: 'Setting up business in India', path: '/setting-up-business-in-india' },
        { name: 'Policies & Compliances', path: '/policies-and-compliances' },
        { name: 'Tax Structure in India', path: '/tax-structure-in-india' },
        { name: 'Financial assistance for businesses', path: '/financial-assistance' },
      ]
    },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-2' : 'bg-[#f57272] py-4'}`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <Link to="/" className="flex items-center">
              <div className="grid grid-cols-3 w-8 h-8 gap-0.5">
                {[...Array(9)].map((_, i) => (
                  <div key={i} className="bg-black w-2 h-2"></div>
                ))}
              </div>
              <img src={AllianceLogo} alt="Alliance Member" className="h-10 ml-4" />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {mainMenuItems.map((item, index) => (
              <div key={index} className="relative group">
                {item.submenu ? (
                  <button
                    className={`font-medium text-sm ${scrolled ? 'text-gray-800' : 'text-white'} hover:text-red-500 flex items-center`}
                    onClick={() => setSubmenuOpen(submenuOpen === index ? null : index)}
                  >
                    {item.name}
                    <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                    </svg>
                  </button>
                ) : (
                  <Link to={item.path} className={`font-medium text-sm ${scrolled ? 'text-gray-800' : 'text-white'} hover:text-red-500`}>
                    {item.name}
                  </Link>
                )}
                
                {item.submenu && (
                  <div className="absolute left-0 mt-2 w-64 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                    <div className="py-2">
                      {item.submenu.map((subItem, subIndex) => (
                        <Link
                          key={subIndex}
                          to={subItem.path}
                          className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100"
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className={`${scrolled ? 'text-gray-800' : 'text-white'} focus:outline-none`}
            >
              {isOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white shadow-lg mt-2 py-4 absolute w-full">
          {mainMenuItems.map((item, index) => (
            <div key={index} className="px-4">
              {item.submenu ? (
                <div>
                  <button
                    onClick={() => setSubmenuOpen(submenuOpen === index ? null : index)}
                    className="flex justify-between items-center w-full py-2 text-gray-800 hover:text-red-500"
                  >
                    {item.name}
                    <svg className={`w-4 h-4 transform ${submenuOpen === index ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                    </svg>
                  </button>
                  
                  {submenuOpen === index && (
                    <div className="pl-4 mt-1 border-l border-gray-200">
                      {item.submenu.map((subItem, subIndex) => (
                        <Link
                          key={subIndex}
                          to={subItem.path}
                          className="block py-2 text-sm text-gray-600 hover:text-red-500"
                          onClick={() => setIsOpen(false)}
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  to={item.path}
                  className="block py-2 text-gray-800 hover:text-red-500"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              )}
            </div>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
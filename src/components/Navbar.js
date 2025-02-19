import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setActiveSubmenu(null);
  }, [location]);

  const menuItems = [
    {
      title: 'BUSINESS IN INDIA',
      submenu: [
        { title: 'Setting up business in India', path: '/setting-up-business' },
        { title: 'Company Incorporation', path: '/company-incorporation' },
        { title: 'Investment Routes', path: '/investment-routes' },
        { title: 'Starting Business in India', path: '/starting-business' },
        { title: 'Policies & Compliances', path: '/policies-compliances' },
        { title: 'Tax Structure', path: '/tax-structure' },
        { title: 'Financial Assistance', path: '/financial-assistance' },
      ]
    },
    {
      title: 'STARTUPS',
      submenu: [
        { title: 'Start-up India', path: '/startup-india' },
        { title: 'Funding & Investments', path: '/funding-investments' },
        { title: 'ESOP', path: '/esop' },
        { title: 'Compliances', path: '/startup-compliances' },
        { title: 'Startup Resources', path: '/startup-resources' },
      ]
    },
    {
      title: 'SERVICES',
      submenu: [
        { title: 'Tax Advisory', path: '/tax-advisory' },
        { title: 'CFO Advisory', path: '/cfo-advisory' },
        { title: 'Corporate Tax', path: '/corporate-tax' },
        { title: 'International Tax', path: '/international-tax' },
        { title: 'Regulatory Compliance', path: '/regulatory-compliance' },
        { title: 'Global Mobility', path: '/global-mobility' },
        { title: 'Transfer Pricing', path: '/transfer-pricing' },
        { title: 'Due Diligence', path: '/due-diligence' },
        { title: 'Risk Advisory', path: '/risk-advisory' },
      ]
    },
    {
      title: 'RESOURCES',
      submenu: [
        { title: 'Insights', path: '/insights' },
        { title: 'India Budget 2024', path: '/budget-2024' },
        { title: 'Publications', path: '/publications' },
        { title: 'Newsletters', path: '/newsletters' },
        { title: 'Case Studies', path: '/case-studies' },
      ]
    },
    {
      title: 'ABOUT',
      submenu: [
        { title: 'About Coinmen', path: '/about' },
        { title: 'Team', path: '/team' },
        { title: 'Careers', path: '/careers' },
        { title: 'Contact Us', path: '/contact' },
      ]
    },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-lg' : 'bg-[#f57272]'}`}>
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo Section */}
          <div className="flex items-center space-x-6">
            <Link to="/" className="flex items-center space-x-4">
              {/* Coinmen Logo Grid */}
              <div className="grid grid-cols-3 gap-0.5 w-8 h-8">
                {[...Array(9)].map((_, i) => (
                  <div key={i} className="bg-black w-2 h-2"></div>
                ))}
              </div>
              {/* Alliott Global Alliance Logo */}
              <img 
                src="/alliott-logo.svg" 
                alt="Alliott Global Alliance Member" 
                className="h-12"
              />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            {menuItems.map((item, index) => (
              <div 
                key={index}
                className="relative group"
                onMouseEnter={() => setActiveSubmenu(index)}
                onMouseLeave={() => setActiveSubmenu(null)}
              >
                <button
                  className={`flex items-center space-x-1 py-2 font-medium text-sm ${
                    scrolled ? 'text-gray-800' : 'text-white'
                  } hover:text-red-500 transition-colors duration-200`}
                >
                  <span>{item.title}</span>
                  <ChevronDown className="w-4 h-4" />
                </button>
                
                {activeSubmenu === index && (
                  <div className="absolute top-full left-0 w-64 bg-white shadow-xl rounded-b-lg py-2 animate-fadeIn">
                    {item.submenu.map((subItem, subIndex) => (
                      <Link
                        key={subIndex}
                        to={subItem.path}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-red-500 transition-colors duration-200"
                      >
                        {subItem.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 focus:outline-none"
            aria-label="Toggle menu"
          >
            <div className={`w-6 h-5 relative transform ${isOpen ? 'rotate-180' : ''} transition-transform duration-300`}>
              <span className={`absolute w-full h-0.5 ${scrolled ? 'bg-gray-800' : 'bg-white'} transform transition-transform duration-300 ${isOpen ? 'rotate-45 top-2' : 'top-0'}`}></span>
              <span className={`absolute w-full h-0.5 ${scrolled ? 'bg-gray-800' : 'bg-white'} top-2 transition-opacity duration-300 ${isOpen ? 'opacity-0' : 'opacity-100'}`}></span>
              <span className={`absolute w-full h-0.5 ${scrolled ? 'bg-gray-800' : 'bg-white'} transform transition-transform duration-300 ${isOpen ? '-rotate-45 top-2' : 'top-4'}`}></span>
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-screen' : 'max-h-0'}`}>
          <div className="bg-white px-4 py-6 shadow-lg">
            {menuItems.map((item, index) => (
              <div key={index} className="border-b border-gray-100 last:border-none">
                <button
                  onClick={() => setActiveSubmenu(activeSubmenu === index ? null : index)}
                  className="flex items-center justify-between w-full py-3 text-gray-800 font-medium"
                >
                  <span>{item.title}</span>
                  <ChevronDown 
                    className={`w-4 h-4 transform transition-transform duration-200 ${
                      activeSubmenu === index ? 'rotate-180' : ''
                    }`} 
                  />
                </button>
                
                <div className={`overflow-hidden transition-all duration-300 ${
                  activeSubmenu === index ? 'max-h-screen py-2' : 'max-h-0'
                }`}>
                  {item.submenu.map((subItem, subIndex) => (
                    <Link
                      key={subIndex}
                      to={subItem.path}
                      className="block px-4 py-2 text-sm text-gray-600 hover:text-red-500 transition-colors duration-200"
                    >
                      {subItem.title}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
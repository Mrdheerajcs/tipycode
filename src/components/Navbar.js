import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/logo.svg';
import AllianceLogo from '../assets/alliance-logo.svg';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeMenus, setActiveMenus] = useState({
    desktop: null,
    desktopSub: null,
    mobile: []
  });

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

  // Toggle mobile submenu
  const toggleMobileMenu = (index, level) => {
    setActiveMenus(prev => {
      const newActiveMenus = [...prev.mobile];

      // If this level already has an active menu, reset all deeper levels
      if (newActiveMenus.length > level) {
        newActiveMenus.splice(level);
      }

      // Toggle this level's menu
      if (newActiveMenus[level] === index) {
        newActiveMenus.splice(level);
      } else {
        newActiveMenus[level] = index;
      }

      return { ...prev, mobile: newActiveMenus };
    });
  };

  const mainMenuItems = [
    {
      name: 'COINMEN',
      path: '#',
      submenu: [
        { name: 'About Us', path: '/about' },
        {
          name: 'Services', path: '#',
          submenu: [
            {
              name: 'Tax and Regulatory', path: '#',
              submenu: [
                { name: 'Corporate Tax', path: '#' },
                { name: 'International Tax', path: '#', },
                { name: 'Regulatory Compliance', path: '#' },
                { name: 'Global Mobility Services', path: '#' },
                { name: 'Lower Withholding Tax Certificate', path: '#' },
              ]
            },
            { name: 'Transfer Pricing', path: '#' },
            { name: 'CFO Advisory', path: '#', },
            { name: 'Corporate Law', path: '#' },
            { name: 'Corporate Finance', path: '#' },
            { name: 'Financial Accounting', path: '#' },
            { name: 'Transaction Advisory', path: '#' },
            { name: 'Risk Advisory', path: '#' },
          ]
        },
        { name: 'Careers', path: '/careers' },
        { name: 'Blogs', path: '#' },
      ]
    },
    { name: 'STARTUPS', path: '/startups' },
    {
      name: 'BUSINESS IN INDIA',
      path: '#',
      submenu: [
        { name: 'Doing Business in India', path: '/doing-business-in-india' },
        { name: 'Desks', path: '/desk' },
      ]
    },
  ];

  // Render a mobile menu item with potential submenus
  const renderMobileMenuItem = (item, index, level = 0) => {
    const isActive = activeMenus.mobile[level] === index;
    const hasSubmenu = item.submenu && item.submenu.length > 0;

    return (
      <div key={index} className="px-4">
        {hasSubmenu ? (
          <div>
            <button
              onClick={() => toggleMobileMenu(index, level)}
              className="flex justify-between items-center w-full py-2 text-gray-800 hover:text-red-500"
            >
              {item.name}
              <svg className={`w-4 h-4 transform ${isActive ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </button>

            {isActive && (
              <div className={`pl-4 mt-1 border-l border-gray-200 ${level > 0 ? 'ml-2' : ''}`}>
                {item.submenu.map((subItem, subIndex) => (
                  renderMobileMenuItem(subItem, subIndex, level + 1)
                ))}
              </div>
            )}
          </div>
        ) : (
          <Link
            to={item.path}
            className={`block py-2 text-gray-800 hover:text-red-500 ${level > 0 ? 'text-sm' : ''}`}
            onClick={() => setIsOpen(false)}
          >
            {item.name}
          </Link>
        )}
      </div>
    );
  };

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
                    onMouseEnter={() => setActiveMenus({ ...activeMenus, desktop: index })}
                    onClick={() => setActiveMenus({ ...activeMenus, desktop: activeMenus.desktop === index ? null : index })}
                  >
                    {item.name}
                    <svg
                      className={`ml-1 w-4 h-4 transform transition-transform duration-200 ${activeMenus.desktop === index ? 'rotate-180' : 'rotate-0'
                        }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                    </svg>
                  </button>
                ) : (
                  <Link to={item.path} className={`font-medium text-sm ${scrolled ? 'text-gray-800' : 'text-white'} hover:text-red-500`}>
                    {item.name}
                  </Link>
                )}

                {/* First-level submenu */}
                {item.submenu && (
                  <div
                    className="absolute left-0 mt-2 w-52 bg-white rounded-md shadow-lg z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 border border-gray-400"
                    onMouseLeave={() => setActiveMenus({ ...activeMenus, desktop: null, desktopSub: null })}
                  >
                    <div className="py-2">
                      {item.submenu.map((subItem, subIndex) => (
                        <div key={subIndex} className="relative group">
                          {subItem.submenu ? (
                            <div
                              className="relative"
                              onMouseEnter={() => setActiveMenus(prev => ({ ...prev, desktopSub: subIndex }))}
                              onMouseLeave={() => setActiveMenus(prev => ({ ...prev, desktopSub: null }))}
                            >
                              <div className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100 flex justify-between items-center cursor-pointer">
                                <span>{subItem.name}</span>
                                <svg
                                  className={`w-4 h-4 transform transition-transform duration-200 ${activeMenus.desktopSub === subIndex ? 'rotate-180' : 'rotate-0'
                                    }`}
                                  fill="none"
                                  stroke="currentColor"
                                  viewBox="0 0 24 24"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                                </svg>
                              </div>

                              {/* Second-level submenu (opens to right) */}
                              {activeMenus.desktopSub === subIndex && (
                                <div className="absolute left-full top-0 w-52 bg-white rounded-md shadow-lg z-50 border border-gray-400">
                                  <div className="py-2">
                                    {subItem.submenu.map((thirdItem, thirdIndex) => (
                                      <div key={thirdIndex} className="relative group">
                                        {thirdItem.submenu ? (
                                          <div
                                            className="relative"
                                            onMouseEnter={() => setActiveMenus(prev => ({ ...prev, desktopThird: thirdIndex }))}
                                            onMouseLeave={() => setActiveMenus(prev => ({ ...prev, desktopThird: null }))}
                                          >
                                            <div className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100 flex justify-between items-center cursor-pointer">
                                              <span>{thirdItem.name}</span>
                                              <svg
                                                className={`w-4 h-4 transform transition-transform duration-200 ${activeMenus.desktopThird === thirdIndex ? 'rotate-180' : 'rotate-0'
                                                  }`}
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                                xmlns="http://www.w3.org/2000/svg"
                                              >
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                                              </svg>
                                            </div>

                                            {/* Third-level submenu (opens to left) */}
                                            {activeMenus.desktopThird === thirdIndex && (
                                              <div className="absolute right-full top-0 w-64 bg-white rounded-md shadow-lg z-50 border border-gray-400">
                                                <div className="py-2">
                                                  {thirdItem.submenu.map((fourthItem, fourthIndex) => (
                                                    <Link
                                                      key={fourthIndex}
                                                      to={fourthItem.path}
                                                      className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100 hover:text-red-500"
                                                    >
                                                      {fourthItem.name}
                                                    </Link>
                                                  ))}
                                                </div>
                                              </div>
                                            )}
                                          </div>
                                        ) : (
                                          <Link
                                            to={thirdItem.path}
                                            className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100 hover:text-red-500"
                                          >
                                            {thirdItem.name}
                                          </Link>
                                        )}
                                      </div>
                                    ))}
                                  </div>
                                </div>
                              )}
                            </div>
                          ) : (
                            <Link
                              to={subItem.path}
                              className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100 hover:text-red-500"
                            >
                              {subItem.name}
                            </Link>
                          )}
                        </div>
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
            renderMobileMenuItem(item, index)
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
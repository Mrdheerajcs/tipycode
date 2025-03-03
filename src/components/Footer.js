import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import { FaTwitter, FaArrowRight, FaLinkedinIn, FaFacebookF, FaInstagram, FaYoutube, FaSkype } from 'react-icons/fa';
const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [isVisible, setIsVisible] = useState(false);

  // Toggle visibility of the "Back to top" button
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  // Smooth scroll to top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const quickLinks = [
    { name: 'About', path: '/about' },
    { name: 'Careers', path: '/careers' },
    { name: 'Blog', path: '/blog' },
    { name: 'Start-ups', path: '/start-ups' },
    { name: 'Services', path: '/services' },
    { name: 'Doing Business In India', path: '/doing-business-in-india' },
    { name: 'Company Incorporation', path: '/company-incorporation' },
    { name: 'Investing Business In India', path: '/investing-business-in-india' },
    { name: 'Direct Tax', path: '/direct-tax' },
    { name: 'Transfer Pricing Regulations', path: '/transfer-pricing-regulations' },
    { name: 'GST', path: '/gst' },
    { name: 'Expatriate Tax', path: '/expatriate-tax' },
  ];

  const consultingServices = [
    { name: 'Tax And Regulatory', path: '/tax-advisory' },
    { name: 'CFO Advisory', path: '/cfo-advisory' },
    { name: 'Corporate Tax Services', path: '/corporate-tax' },
    { name: 'International Tax', path: '/international-tax' },
    { name: 'Regulatory Compliance Services', path: '/regulatory-compliance' },
    { name: 'Global Mobility Services', path: '/global-mobility' },
    { name: 'Fema Withholding Tax Certificate', path: '/fema-withholding' },
    { name: 'Transfer Pricing', path: '/transfer-pricing' },
    { name: 'Corporate Law Services', path: '/corporate-law' },
    { name: 'Corporate Finance Services', path: '/corporate-finance' },
    { name: 'Financial Accounting', path: '/financial-accounting' },
    { name: 'Transaction Advisory', path: '/transaction-advisory' },
    { name: 'Risk Advisory', path: '/risk-advisory' },
  ];

  const socialLinks = [
    { icon: <FaTwitter />, path: 'https://twitter.com/tipycode' },
    { icon: <FaLinkedinIn />, path: 'https://www.linkedin.com/company/tipycode' },
    { icon: <FaFacebookF />, path: 'https://www.facebook.com/tipycode' },
    { icon: <FaInstagram />, path: 'https://www.instagram.com/tipycode' },
    { icon: <FaYoutube />, path: 'https://www.youtube.com/tipycode' },
    { icon: <FaSkype />, path: 'skype:tipycode?call' },
  ];

  return (
    <footer className="bg-gray-800 text-white pt-16 pb-6">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Link</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link to={link.path} className="text-sm text-gray-300 hover:text-[#f57272] transition duration-200">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Business Consulting Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Business Consulting Services</h3>
            <ul className="space-y-3">
              {consultingServices.map((service, index) => (
                <li key={index}>
                  <Link to={service.path} className="text-sm text-gray-300 hover:text-[#f57272] transition duration-200">
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* About Coinmen */}
          <div>
            <h3 className="text-lg font-semibold mb-6">About Coinmen</h3>
            <p className="text-sm text-gray-300 leading-relaxed mb-4">
              Founded in 2010, Coinmen is an independent group of companies consisting of Business Advisors and Chartered Accountants, offering an array of consultancy and advisory services to support companies' accounting, tax and finance needs.
            </p>
            <p className="text-sm text-gray-300 leading-relaxed">
              Backed by its group companies – Coinmen Consultants LLP and Coinmen Capital Advisors LLP – Coinmen has established its presence globally having helped over 100 businesses through projects in varying capacities.
            </p>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-semibold mb-6">New Delhi Head Office:</h3>
            <address className="not-italic text-sm text-gray-300 leading-relaxed mb-6">
              A-22, 2nd Floor, Green Park Main<br />
              Aurobindo Marg, New Delhi 110016<br />
              +91-11-4016-0160<br />
              Email: <a href="mailto:info@coinmen.com" className="hover:text-[#f57272]">info@coinmen.com</a>
            </address>


          </div>
        </div>
        <div className="flex w-full">
          <div className="w-[95%]">
            <hr />
            {/* Bottom Footer */}
            <div className="pt-6 border-t border-gray-700">
              <div className="flex flex-col md:flex-row justify-between items-center">
                <div>
                  <Link to="/contact-us">
                    <h1 className="text-xl mb-[3%] hover:text-[#f57272]">Contact Us</h1>
                  </Link>
                  <p className="text-sm text-gray-300">
                    Content Protection by{" "}
                    <strong className="text-white">
                      <Link to="/dmc-policy">DMCA</Link> | <Link to="/cookie-policy">Cookie Policy</Link> |{" "}
                      <Link to="/privacy-policy">Privacy Policy</Link>
                    </strong>
                  </p>
                  <p className="text-sm text-gray-300 mb-4 md:mb-0">
                    Copyright © {currentYear} by{" "}
                    <strong className="text-white">
                      <Link to="/">Coinmen.</Link>
                    </strong>{" "}
                    All Rights Reserved
                  </p>
                </div>


                {/* Social Links */}
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.path}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-[#f57272] transition duration-200"
                      aria-label={`Visit our ${social.name} page`}
                    >
                      {social.icon}
                    </a>
                  ))}

                </div>
              </div>
            </div>
          </div>
          <div className="flex-1">
            <button
              onClick={scrollToTop}
              className="flex flex-col items-center text-gray-400 hover:text-[#f57272] transition duration-200"
            >
              <span className="flex text-sm -rotate-90 whitespace-nowrap">Back to Top<FaArrowRight className="mt-1 ml-1"/></span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
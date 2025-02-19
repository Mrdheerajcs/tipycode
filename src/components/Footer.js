import React from 'react';
import { Link } from 'react-router-dom';
import { FaTwitter, FaLinkedinIn, FaFacebookF, FaInstagram, FaYoutube, FaSkype } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
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
    { icon: <FaTwitter />, path: 'https://twitter.com/coinmen' },
    { icon: <FaLinkedinIn />, path: 'https://www.linkedin.com/company/coinmen' },
    { icon: <FaFacebookF />, path: 'https://www.facebook.com/coinmen' },
    { icon: <FaInstagram />, path: 'https://www.instagram.com/coinmen' },
    { icon: <FaYoutube />, path: 'https://www.youtube.com/coinmen' },
    { icon: <FaSkype />, path: 'skype:coinmen?call' },
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
        
        {/* Bottom Footer */}
        <div className="pt-6 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-400 mb-4 md:mb-0">
              Copyright © {currentYear} by Coinmen - All Rights Reserved
            </p>
            
            <div className="flex flex-wrap justify-center md:justify-end gap-x-6 gap-y-2">
              <Link to="/contact-us" className="text-xs text-gray-400 hover:text-[#f57272]">CONTACT US</Link>
              <Link to="/cookie-policy" className="text-xs text-gray-400 hover:text-[#f57272]">Cookie Policy</Link>
              <Link to="/privacy-policy" className="text-xs text-gray-400 hover:text-[#f57272]">Privacy Policy</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
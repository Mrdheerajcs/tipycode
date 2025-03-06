import React, { useState } from 'react';

const CoinmenDesks = () => {
  const [activeTab, setActiveTab] = useState('all');

  const desks = [
    {
      id: 1,
      title: "Advisory Desk",
      description: "Our Advisory Desk provides strategic guidance to businesses seeking to optimize their operations, manage risks, and drive growth.",
      category: "advisory",
      icon: "📊",
      services: [
        "Strategic Business Advisory",
        "Risk Management",
        "Growth Strategies",
        "Business Process Optimization"
      ]
    },
    {
      id: 2,
      title: "Assurance Desk",
      description: "The Assurance Desk offers comprehensive audit and assurance services to help businesses maintain compliance and build stakeholder trust.",
      category: "assurance",
      icon: "✓",
      services: [
        "Financial Statement Audits",
        "Compliance Audits",
        "Internal Audit Services",
        "Fraud Investigation"
      ]
    },
    {
      id: 3,
      title: "Financial Desk",
      description: "Our Financial Desk experts deliver tailored financial solutions to enhance business performance and achieve financial objectives.",
      category: "financial",
      icon: "💰",
      services: [
        "Financial Planning & Analysis",
        "Treasury Management",
        "Capital Structure Optimization",
        "Financial Reporting"
      ]
    },
    {
      id: 4,
      title: "Global Business Desk",
      description: "The Global Business Desk supports companies expanding internationally with cross-border expertise and local market insights.",
      category: "global",
      icon: "🌐",
      services: [
        "International Market Entry",
        "Cross-border Transactions",
        "Global Compliance",
        "International Tax Planning"
      ]
    },
    {
      id: 5,
      title: "Tax Desk",
      description: "Our Tax Desk provides strategic tax planning and compliance services to optimize tax positions and minimize liabilities.",
      category: "tax",
      icon: "📝",
      services: [
        "Corporate Tax Planning",
        "Tax Compliance",
        "International Tax",
        "Transfer Pricing"
      ]
    },
    {
      id: 6,
      title: "Technology Desk",
      description: "The Technology Desk helps businesses leverage digital technologies to transform operations and gain competitive advantage.",
      category: "technology",
      icon: "💻",
      services: [
        "Digital Transformation",
        "IT Strategy & Consulting",
        "Technology Implementation",
        "Cybersecurity Solutions"
      ]
    }
  ];

  const tabs = [
    { id: 'all', label: 'All Desks' },
    { id: 'advisory', label: 'Advisory' },
    { id: 'assurance', label: 'Assurance' },
    { id: 'financial', label: 'Financial' },
    { id: 'global', label: 'Global' },
    { id: 'tax', label: 'Tax' },
    { id: 'technology', label: 'Technology' }
  ];

  const filteredDesks = activeTab === 'all' 
    ? desks 
    : desks.filter(desk => desk.category === activeTab);

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 py-12">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Our Specialized Desks</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Expert teams organized by specialty to provide comprehensive solutions for your business needs.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="mb-10 overflow-x-auto">
          <div className="flex flex-nowrap md:flex-wrap md:justify-center space-x-2 md:space-x-4 pb-2">
            {tabs.map(tab => (
              <button
                key={tab.id}
                className={`px-4 py-2 rounded-full whitespace-nowrap text-sm font-medium transition-colors ${
                  activeTab === tab.id 
                    ? 'bg-blue-600 text-white shadow-md' 
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Desks Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredDesks.map(desk => (
            <div key={desk.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="p-6">
                <div className="text-4xl mb-4">{desk.icon}</div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{desk.title}</h3>
                <p className="text-gray-600 mb-6">{desk.description}</p>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Key Services:</h4>
                  <ul className="space-y-1">
                    {desk.services.map((service, index) => (
                      <li key={index} className="text-gray-600 flex items-start">
                        <span className="text-blue-500 mr-2">•</span>
                        <span>{service}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="px-6 py-4 bg-gray-50 border-t border-gray-100">
                <a href="#" className="text-blue-600 font-medium hover:text-blue-800 transition-colors">
                  Learn more →
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-blue-600 rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">Need Specialized Business Solutions?</h3>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Our expert team is ready to help you navigate complex business challenges with tailored solutions.
          </p>
          <button className="bg-white text-blue-600 font-medium px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors">
            Contact Our Experts
          </button>
        </div>
      </div>
    </div>
  );
};

export default CoinmenDesks;
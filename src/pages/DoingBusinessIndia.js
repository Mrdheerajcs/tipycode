import React, { useState } from 'react';

const DoingBusinessInIndia = () => {
    const [activeTab, setActiveTab] = useState('overview');

    const tabContent = {
        overview: {
            title: "Doing Business in India",
            content: [
                "India is one of the most attractive investment destinations in the world with its large and rapidly growing consumer market, abundant natural resources, and skilled workforce.",
                "For businesses looking to enter or expand in the Indian market, understanding the regulatory environment, business structures, tax implications, and cultural aspects is essential for success.",
                "Our comprehensive guide provides insights into the key aspects of doing business in India, from company formation and tax regulations to compliance requirements and market entry strategies."
            ],
            stats: [
                { number: "5th", label: "Largest Economy in the World" },
                { number: "1.4B+", label: "Consumer Market" },
                { number: "7.2%", label: "GDP Growth Rate (2023-24)" },
                { number: "3rd", label: "Largest Startup Ecosystem" }
            ]
        },
        formation: {
            title: "Business Formation",
            content: [
                "Setting up a business entity in India requires careful consideration of the business structure, regulatory requirements, and compliance obligations.",
                "Common business structures include Private Limited Company, Limited Liability Partnership (LLP), Public Limited Company, Branch Office, Liaison Office, and Project Office.",
                "Each structure has different registration processes, compliance requirements, and tax implications that need to be considered based on your business objectives."
            ],
            steps: [
                { title: "Business Structure Selection", description: "Choose the right business structure based on your objectives, liability concerns, and tax considerations." },
                { title: "Name Approval", description: "Get your proposed company name approved through the MCA portal." },
                { title: "Documentation", description: "Prepare required documents including ID proofs, address proofs, and business-related documentation." },
                { title: "Registration", description: "File for incorporation with the Registrar of Companies (ROC) through MCA portal." },
                { title: "Post-Registration Compliance", description: "Obtain necessary business licenses, tax registrations, and complete other statutory requirements." }
            ]
        },
        taxation: {
            title: "Taxation in India",
            content: [
                "India has a comprehensive tax system with direct taxes (Income Tax, Corporate Tax) and indirect taxes (Goods and Services Tax, Customs Duty).",
                "Understanding the tax structure, rates, exemptions, and compliance requirements is crucial for effective business planning and operation in India.",
                "Recent reforms and digitalization of tax processes have simplified compliance, but navigating the tax landscape still requires expert guidance."
            ],
            taxTypes: [
                {
                    name: "Corporate Tax",
                    details: "The standard corporate tax rate is 30% for domestic companies, which can be reduced to 25% for companies with annual turnover up to ₹400 crores. A new optional regime allows for a 22% rate (15% for new manufacturing companies) with certain conditions."
                },
                {
                    name: "Goods and Services Tax (GST)",
                    details: "A comprehensive indirect tax levied on the supply of goods and services with four main slabs: 5%, 12%, 18%, and 28%. Businesses with turnover exceeding prescribed limits must register for GST."
                },
                {
                    name: "Tax Deducted at Source (TDS)",
                    details: "Businesses are required to deduct tax at source on specified payments like salaries, interest, rent, and professional fees at prescribed rates."
                },
                {
                    name: "International Taxation",
                    details: "Non-resident entities may be subject to withholding taxes on income sourced from India. India has Double Taxation Avoidance Agreements (DTAAs) with over 85 countries."
                }
            ]
        },
        compliance: {
            title: "Regulatory Compliance",
            content: [
                "Compliance with Indian regulations is essential for businesses to operate smoothly and avoid penalties or legal issues.",
                "Key regulatory bodies include the Ministry of Corporate Affairs (MCA), Reserve Bank of India (RBI), Securities and Exchange Board of India (SEBI), and various sector-specific regulators.",
                "Regular filings, permissions, and adherence to industry-specific regulations form an important part of doing business in India."
            ],
            keyCompliance: [
                { area: "Corporate Law", requirements: "Annual filings with ROC, board meetings, shareholder meetings, maintaining statutory registers" },
                { area: "Labor Laws", requirements: "Compliance with various labor laws including Provident Fund, ESI, Gratuity, Bonus, and state-specific labor regulations" },
                { area: "Foreign Exchange", requirements: "FEMA compliance for foreign investments, external commercial borrowings, and overseas remittances" },
                { area: "Industry-Specific", requirements: "Sector-specific licenses and permits based on the nature of business activities" }
            ]
        },
        advisory: {
            title: "Coinmen Advisory Services",
            content: [
                "Navigating the complexities of doing business in India requires expert guidance and support across various domains.",
                "Our team of experienced professionals provides comprehensive advisory services to help businesses establish and grow their presence in India.",
                "From initial market entry strategy to ongoing compliance management, we offer end-to-end solutions tailored to your specific business needs."
            ],
            services: [
                {
                    name: "Market Entry Strategy",
                    description: "Customized strategies for entering the Indian market based on industry analysis, regulatory landscape, and competitive positioning."
                },
                {
                    name: "Business Setup",
                    description: "End-to-end assistance in business formation, registration, and obtaining necessary licenses and permits."
                },
                {
                    name: "Tax Advisory",
                    description: "Comprehensive tax planning, compliance management, and representation before tax authorities."
                },
                {
                    name: "Financial Advisory",
                    description: "Accounting, financial reporting, and advisory services to optimize financial performance."
                },
                {
                    name: "Regulatory Compliance",
                    description: "Ongoing compliance management across corporate, tax, labor, and industry-specific regulations."
                }
            ]
        }
    };

    const renderTabContent = () => {
        const data = tabContent[activeTab];

        switch (activeTab) {
            case 'overview':
                return (
                    <div>
                        <h2 className="text-3xl font-bold mb-6 text-gray-800">{data.title}</h2>
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
                            <div className="lg:col-span-2">
                                {data.content.map((paragraph, index) => (
                                    <p key={index} className="mb-4 text-gray-700">{paragraph}</p>
                                ))}
                            </div>
                            <div className="bg-blue-50 p-6 rounded-lg">
                                <h3 className="text-xl font-semibold mb-4 text-gray-800">India at a Glance</h3>
                                <div className="grid grid-cols-2 gap-4">
                                    {data.stats.map((stat, index) => (
                                        <div key={index} className="text-center p-4 bg-white rounded-lg shadow-sm">
                                            <div className="text-2xl font-bold text-blue-600">{stat.number}</div>
                                            <div className="text-sm text-gray-600">{stat.label}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="bg-gray-50 p-6 rounded-lg">
                            <h3 className="text-xl font-semibold mb-4 text-gray-800">Why India?</h3>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                <div className="bg-white p-4 rounded-lg shadow-sm">
                                    <div className="text-3xl text-blue-500 mb-2">🚀</div>
                                    <h4 className="font-semibold mb-2">Growing Economy</h4>
                                    <p className="text-sm text-gray-600">One of the fastest growing major economies with a resilient domestic market.</p>
                                </div>
                                <div className="bg-white p-4 rounded-lg shadow-sm">
                                    <div className="text-3xl text-blue-500 mb-2">👥</div>
                                    <h4 className="font-semibold mb-2">Demographic Dividend</h4>
                                    <p className="text-sm text-gray-600">Large young population with increasing purchasing power and consumption.</p>
                                </div>
                                <div className="bg-white p-4 rounded-lg shadow-sm">
                                    <div className="text-3xl text-blue-500 mb-2">⚙️</div>
                                    <h4 className="font-semibold mb-2">Reform Momentum</h4>
                                    <p className="text-sm text-gray-600">Ongoing reforms to improve ease of doing business and attract investments.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                );

            case 'formation':
                return (
                    <div>
                        <h2 className="text-3xl font-bold mb-6 text-gray-800">{data.title}</h2>
                        {data.content.map((paragraph, index) => (
                            <p key={index} className="mb-4 text-gray-700">{paragraph}</p>
                        ))}
                        <div className="mt-8">
                            <h3 className="text-xl font-semibold mb-4 text-gray-800">Business Formation Process</h3>
                            <div className="space-y-4">
                                {data.steps.map((step, index) => (
                                    <div key={index} className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-blue-500">
                                        <div className="flex items-start">
                                            <div className="bg-blue-100 text-blue-800 rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3">
                                                {index + 1}
                                            </div>
                                            <div>
                                                <h4 className="font-semibold text-gray-800">{step.title}</h4>
                                                <p className="text-gray-600 mt-1">{step.description}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="mt-8 bg-gray-50 p-6 rounded-lg">
                            <h3 className="text-xl font-semibold mb-4 text-gray-800">Common Business Structures</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="bg-white p-4 rounded-lg shadow-sm">
                                    <h4 className="font-semibold text-gray-800 mb-2">Private Limited Company</h4>
                                    <p className="text-sm text-gray-600">Most popular structure for foreign investors, offering limited liability protection and flexibility.</p>
                                </div>
                                <div className="bg-white p-4 rounded-lg shadow-sm">
                                    <h4 className="font-semibold text-gray-800 mb-2">Limited Liability Partnership (LLP)</h4>
                                    <p className="text-sm text-gray-600">Combines benefits of partnership and company, with lower compliance requirements.</p>
                                </div>
                                <div className="bg-white p-4 rounded-lg shadow-sm">
                                    <h4 className="font-semibold text-gray-800 mb-2">Branch Office</h4>
                                    <p className="text-sm text-gray-600">Foreign companies can establish branch offices to represent parent company and undertake permitted activities.</p>
                                </div>
                                <div className="bg-white p-4 rounded-lg shadow-sm">
                                    <h4 className="font-semibold text-gray-800 mb-2">Liaison Office</h4>
                                    <p className="text-sm text-gray-600">Representative office for foreign companies to explore business opportunities in India.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                );

            case 'taxation':
                return (
                    <div>
                        <h2 className="text-3xl font-bold mb-6 text-gray-800">{data.title}</h2>
                        {data.content.map((paragraph, index) => (
                            <p key={index} className="mb-4 text-gray-700">{paragraph}</p>
                        ))}
                        <div className="mt-8">
                            <h3 className="text-xl font-semibold mb-4 text-gray-800">Key Tax Considerations</h3>
                            <div className="space-y-4">
                                {data.taxTypes.map((tax, index) => (
                                    <div key={index} className="bg-white p-5 rounded-lg shadow-sm">
                                        <h4 className="font-semibold text-gray-800 text-lg mb-2">{tax.name}</h4>
                                        <p className="text-gray-600">{tax.details}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="mt-8 bg-gray-50 p-6 rounded-lg">
                            <h3 className="text-xl font-semibold mb-4 text-gray-800">Tax Compliance Calendar</h3>
                            <div className="overflow-x-auto">
                                <table className="min-w-full bg-white">
                                    <thead>
                                        <tr className="bg-gray-100">
                                            <th className="py-3 px-4 text-left">Compliance</th>
                                            <th className="py-3 px-4 text-left">Frequency</th>
                                            <th className="py-3 px-4 text-left">Due Date</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="border-b">
                                            <td className="py-3 px-4">TDS Return Filing</td>
                                            <td className="py-3 px-4">Quarterly</td>
                                            <td className="py-3 px-4">Within 30 days from end of quarter</td>
                                        </tr>
                                        <tr className="border-b">
                                            <td className="py-3 px-4">GST Return Filing</td>
                                            <td className="py-3 px-4">Monthly/Quarterly</td>
                                            <td className="py-3 px-4">20th of the following month</td>
                                        </tr>
                                        <tr className="border-b">
                                            <td className="py-3 px-4">Advance Tax Payment</td>
                                            <td className="py-3 px-4">Quarterly</td>
                                            <td className="py-3 px-4">15th Jun, 15th Sep, 15th Dec, 15th Mar</td>
                                        </tr>
                                        <tr>
                                            <td className="py-3 px-4">Income Tax Return</td>
                                            <td className="py-3 px-4">Annual</td>
                                            <td className="py-3 px-4">31st October / 30th November</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                );

            case 'compliance':
                return (
                    <div>
                        <h2 className="text-3xl font-bold mb-6 text-gray-800">{data.title}</h2>
                        {data.content.map((paragraph, index) => (
                            <p key={index} className="mb-4 text-gray-700">{paragraph}</p>
                        ))}
                        <div className="mt-8">
                            <h3 className="text-xl font-semibold mb-4 text-gray-800">Key Compliance Areas</h3>
                            <div className="space-y-4">
                                {data.keyCompliance.map((compliance, index) => (
                                    <div key={index} className="bg-white p-5 rounded-lg shadow-sm">
                                        <h4 className="font-semibold text-gray-800 text-lg mb-2">{compliance.area}</h4>
                                        <p className="text-gray-600">{compliance.requirements}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="mt-8 bg-blue-50 p-6 rounded-lg">
                            <div className="flex flex-col md:flex-row items-center">
                                <div className="md:w-1/4 text-center mb-4 md:mb-0">
                                    <div className="text-5xl text-blue-500">⚠️</div>
                                </div>
                                <div className="md:w-3/4">
                                    <h3 className="text-xl font-semibold mb-2 text-gray-800">Compliance Advisory</h3>
                                    <p className="text-gray-700">
                                        Non-compliance with Indian regulations can result in penalties, litigation, and reputational damage.
                                        Engaging with experienced advisors can help navigate the complex regulatory landscape effectively.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                );

            case 'advisory':
                return (
                    <div>
                        <h2 className="text-3xl font-bold mb-6 text-gray-800">{data.title}</h2>
                        {data.content.map((paragraph, index) => (
                            <p key={index} className="mb-4 text-gray-700">{paragraph}</p>
                        ))}
                        <div className="mt-8">
                            <h3 className="text-xl font-semibold mb-4 text-gray-800">Our Services</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {data.services.map((service, index) => (
                                    <div key={index} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                                        <h4 className="font-semibold text-gray-800 text-lg mb-3">{service.name}</h4>
                                        <p className="text-gray-600">{service.description}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="mt-12 bg-blue-600 text-white p-8 rounded-lg">
                            <div className="flex flex-col md:flex-row items-center">
                                <div className="md:w-2/3 mb-6 md:mb-0 md:pr-6">
                                    <h3 className="text-2xl font-bold mb-4">Ready to Expand Your Business to India?</h3>
                                    <p className="mb-4">
                                        Our team of experts can guide you through every step of establishing and growing your business in India.
                                    </p>
                                    <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                                        Contact Our Experts
                                    </button>
                                </div>
                                <div className="md:w-1/3 flex justify-center">
                                    <div className="w-32 h-32 bg-blue-500 rounded-full flex items-center justify-center">
                                        <span className="text-5xl">🌏</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                );

            default:
                return null;
        }
    };

    return (<>
        <section className="pt-24 pb-16 bg-[#f57272] text-white">
            <div className="container mx-auto px-4 md:px-6">
                <div className="max-w-3xl">
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                        Doing<br />
                        Business in India
                    </h1>
                    <h3 className="text-xl font-bold mb-4">How to Sow, When to Reap</h3>
                    <p className="mb-4">
                        We’ve spoken for years about how India is where you should be. Where government reforms, local enterprise and simple moxie get you far beyond what seemed possible. So now that we know the why, let’s talk about the how. When looking to get a foothold and turn that into a footprint, we’ve identified 6 key aspects that need to be discussed.                    </p>
                    <div className="flex flex-wrap items-center gap-4">
                        <a href="/budgets/2023" className="bg-gray-800 text-white px-5 py-2.5 rounded hover:bg-gray-700 transition duration-300 flex items-center gap-2">
                            <span>Download Complete Guide to do Business In India (Free Ebook PDF) 2025-26</span>
                        </a>
                    </div>
                </div>
            </div>
        </section>
        <div className="bg-gray-50 min-h-screen font-sans">
            <div className="container mx-auto px-4 py-8">
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                    <div className="border-b overflow-x-auto">
                        <div className="flex whitespace-nowrap">
                            <button
                                className={`px-6 py-4 font-medium text-sm transition-colors ${activeTab === 'overview' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-600 hover:text-gray-900'}`}
                                onClick={() => setActiveTab('overview')}
                            >
                                Overview
                            </button>
                            <button
                                className={`px-6 py-4 font-medium text-sm transition-colors ${activeTab === 'formation' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-600 hover:text-gray-900'}`}
                                onClick={() => setActiveTab('formation')}
                            >
                                Business Formation
                            </button>
                            <button
                                className={`px-6 py-4 font-medium text-sm transition-colors ${activeTab === 'taxation' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-600 hover:text-gray-900'}`}
                                onClick={() => setActiveTab('taxation')}
                            >
                                Taxation
                            </button>
                            <button
                                className={`px-6 py-4 font-medium text-sm transition-colors ${activeTab === 'compliance' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-600 hover:text-gray-900'}`}
                                onClick={() => setActiveTab('compliance')}
                            >
                                Compliance
                            </button>
                            <button
                                className={`px-6 py-4 font-medium text-sm transition-colors ${activeTab === 'advisory' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-600 hover:text-gray-900'}`}
                                onClick={() => setActiveTab('advisory')}
                            >
                                Our Advisory Services
                            </button>
                        </div>
                    </div>

                    <div className="p-6 md:p-8">
                        {renderTabContent()}
                    </div>
                </div>

                <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-white p-6 rounded-lg shadow-sm">
                        <div className="text-3xl text-blue-500 mb-3">📚</div>
                        <h3 className="text-xl font-semibold mb-2 text-gray-800">Resources</h3>
                        <p className="text-gray-600 mb-4">Access guides, whitepapers, and case studies on doing business in India.</p>
                        <a href="#" className="text-blue-600 font-medium hover:text-blue-800">Explore Resources →</a>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-sm">
                        <div className="text-3xl text-blue-500 mb-3">🔍</div>
                        <h3 className="text-xl font-semibold mb-2 text-gray-800">FAQ</h3>
                        <p className="text-gray-600 mb-4">Find answers to frequently asked questions about Indian business regulations.</p>
                        <a href="#" className="text-blue-600 font-medium hover:text-blue-800">View FAQs →</a>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-sm">
                        <div className="text-3xl text-blue-500 mb-3">📅</div>
                        <h3 className="text-xl font-semibold mb-2 text-gray-800">Webinars</h3>
                        <p className="text-gray-600 mb-4">Register for upcoming webinars on various aspects of Indian business landscape.</p>
                        <a href="#" className="text-blue-600 font-medium hover:text-blue-800">Register Now →</a>
                    </div>
                </div>
            </div>

            <div className="bg-gray-100 py-12 mt-12">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-8">
                        <h2 className="text-2xl font-bold text-gray-800 mb-2">Expertise Across Sectors</h2>
                        <p className="text-gray-600">We provide specialized advisory services across various sectors</p>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                        <div className="bg-white p-4 rounded-lg text-center">
                            <div className="text-2xl mb-2">💻</div>
                            <div className="text-sm font-medium">IT & Technology</div>
                        </div>
                        <div className="bg-white p-4 rounded-lg text-center">
                            <div className="text-2xl mb-2">🏭</div>
                            <div className="text-sm font-medium">Manufacturing</div>
                        </div>
                        <div className="bg-white p-4 rounded-lg text-center">
                            <div className="text-2xl mb-2">🏗️</div>
                            <div className="text-sm font-medium">Infrastructure</div>
                        </div>
                        <div className="bg-white p-4 rounded-lg text-center">
                            <div className="text-2xl mb-2">💊</div>
                            <div className="text-sm font-medium">Pharmaceuticals</div>
                        </div>
                        <div className="bg-white p-4 rounded-lg text-center">
                            <div className="text-2xl mb-2">🛒</div>
                            <div className="text-sm font-medium">Retail</div>
                        </div>
                        <div className="bg-white p-4 rounded-lg text-center">
                            <div className="text-2xl mb-2">📱</div>
                            <div className="text-sm font-medium">E-commerce</div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-4 py-12">
                <div className="bg-blue-50 p-8 rounded-lg">
                    <div className="flex flex-col md:flex-row items-center">
                        <div className="md:w-2/3 mb-6 md:mb-0">
                            <h2 className="text-2xl font-bold text-gray-800 mb-4">Get Expert Guidance</h2>
                            <p className="text-gray-700 mb-6">
                                Contact our team of experts to discuss your business needs and how we can assist you in navigating the Indian business landscape.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                                <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors">
                                    Request Consultation
                                </button>
                            </div>
                        </div>
                        <div className="md:w-1/3 md:pl-8">
                            <div className="flex items-center mb-4">
                                <div className="text-blue-500 mr-3">
                                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                <span className="text-gray-700">Expert Advisory Team</span>
                            </div>
                            <div className="flex items-center mb-4">
                                <div className="text-blue-500 mr-3">
                                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                <span className="text-gray-700">Customized Solutions</span>
                            </div>
                            <div className="flex items-center">
                                <div className="text-blue-500 mr-3">
                                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                <span className="text-gray-700">End-to-End Support</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
    );
};

export default DoingBusinessInIndia;
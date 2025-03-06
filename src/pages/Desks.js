import React from 'react';

const Desks = () => {
    const countries = [
        {
            id: 1,
            name: "Spain",
            flag: "/api/placeholder/64/48",
            description: "India's 7th largest bilateral partner and 12th largest investor, there are over 230 Spanish companies with their presence in India. With one of the world's youngest populations and international business friendly policies, it's little wonder you're looking, and you like what you see.",
            director: {
                name: "Berta Castells Pujol",
                title: "Director, Spain Business Desk",
                image: "/api/placeholder/70/70"
            },
            bio: "Based out of India since 2013, Berta decided to become an engineer and studied at an Indian education company before coming onboard with Coinmen.",
            expertise: "Having worked with both Spanish and Indian companies, she's positioned to provide insights that will come into light once you make the right moves.",
            cta: "For details on how us at Coinmen can help Spanish businesses, click here."
        },
        {
            id: 2,
            name: "Korea",
            flag: "/api/placeholder/64/48",
            description: "Over 400 companies with interests in electronics, construction, automobiles and white goods, and upcoming dedicated industrial zones in Rajasthan and a strong bi-lateral relationship. Little wonder you want a presence in India. Little wonder you're reading this.",
            director: {
                name: "Daniel Lee",
                title: "Director, Korea Business Desk",
                image: "/api/placeholder/70/70"
            },
            bio: "Daniel is a wizard at identifying the potential synergies between Indian and Korean business on Indian soil. And with over 20 years in sectors ranging from electronics to automobiles, really, why wouldn't he be.",
            expertise: "With a fine-tuned understanding of both cultures and to-dos in appropriate and novel ways.",
            cta: "For details on how us at Coinmen can help Korean businesses, click here."
        },
        {
            id: 3,
            name: "France",
            flag: "/api/placeholder/64/48",
            description: "With ties that go back to the birth of the Indian nation, France helped build modern India. As for now, bilateral trade between the two countries is at an all-time high with 400 entities in FY-21 and a thousand French businesses operating in India in sectors ranging from aerospace to automobiles. So, where will you open?",
            director: {
                name: "Gunjan Dubal",
                title: "Director, France Business Desk",
                image: "/api/placeholder/70/70"
            },
            bio: "With over 18 years of working for multinational advisory firms for French companies in India, Gunjan has converted many a 'no' into a 'yes'. Her fluency with the language is matched only by her understanding of culture.",
            expertise: "To this end, she considers herself a cross-breeding medium of businesses from France, and she will help.",
            cta: "For details on how us at Coinmen can help French businesses, click here."
        }
    ];

    const footerLinks = {
        quickLinks: [
            "About", "Career", "Blog", "Contact", "Sitemap", "Doing Business in India",
            "Company Formation in India", "Start-up", "Direct Tax", "International Tax Regulations",
            "GST", "Expatriates Tax"
        ],
        businessServices: [
            "Tax and Regulatory", "GST and Customs", "Corporate Tax Services",
            "International Tax", "Transfer Pricing Services", "Mergers & Acquisition",
            "Global Mobility Services", "Legal and Drafting Tax Certificates",
            "Cross Border Transactions", "Corporate Law Services",
            "Audit & Financial Reporting", "Transaction Advisory"
        ],
        aboutCoinmen: [
            "Founded in 2010, Coinmen is an independent group of business advisors and Chartered Accountants, offering an array of compliance and business advisory services to companies of all sizes across the globe.",
            "Backed by its group companies – Coinmen Consultants LLP and Coinmen Capital Advisors LLP – Coinmen has established its presence globally and has helped over 500 businesses through projects in 38+ countries."
        ]
    };

    const officeDetails = {
        address: "A-24, 2nd Floor, Sector Park View, Ardee City, Gurugram, Haryana 122003 India",
        contact: "+91 124 4267759",
        email: "consult@coinmen.com"
    };

    return (<>

        <section className="pt-24 pb-16 bg-[#f57272] text-white">
            <div className="container mx-auto px-4 md:px-6">
                <div className="max-w-3xl">
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                        Going Glocal
                    </h1>
                    <p className="text-xl font-bold mb-3">
                        Many a foreigner has heard the siren call of Indian shores over the millennia. For some since the trade routes opened up through Central Asia that brought spices you, our friendly faces, textiles and, in turn, your wisdom and ambition. So, read and allow you the roadmaps to a long and successful run in India.
                    </p>
                    <p className="mb-4">
                        Learn business, grow above, follow the way it meant to.
                    </p>
                </div>
            </div>
        </section>


        <div className="w-full font-sans">
            {/* Network Diagram */}
            <div className="bg-gray-100 px-6 py-16 flex justify-center">
                <div className="relative w-64 h-64">
                    {/* Simple network diagram */}
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2">
                        <div className="w-12 h-12 bg-gray-100 rounded-full border-2 border-gray-700 flex items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                            </svg>
                        </div>
                    </div>
                    <div className="absolute bottom-0 left-0">
                        <div className="w-12 h-12 bg-gray-100 rounded-full border-2 border-gray-700 flex items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                            </svg>
                        </div>
                    </div>
                    <div className="absolute bottom-0 right-0">
                        <div className="w-12 h-12 bg-gray-100 rounded-full border-2 border-gray-700 flex items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                            </svg>
                        </div>
                    </div>
                    {/* Connection Lines */}
                    <div className="absolute inset-0 flex items-center justify-center">
                        <svg height="100%" width="100%" viewBox="0 0 100 100" className="stroke-gray-700">
                            <line x1="50" y1="0" x2="0" y2="100" strokeWidth="1" />
                            <line x1="50" y1="0" x2="100" y2="100" strokeWidth="1" />
                        </svg>
                    </div>
                </div>
            </div>

            {/* Country Sections */}
            <div className="bg-gray-100">
                {countries.map((country) => (
                    <div key={country.id} className="border-t border-gray-300 px-6 py-12">
                        <div className="max-w-4xl mx-auto">
                            <h2 className="text-2xl font-bold mb-4 text-gray-800">{country.name}</h2>
                            <p className="text-gray-700 mb-8">{country.description}</p>

                            <div className="flex flex-col md:flex-row gap-6">
                                <div className="w-16 h-12 flex-shrink-0">
                                    <img src={country.flag} alt={`${country.name} flag`} className="w-full h-full object-cover" />
                                </div>

                                <div className="flex flex-col md:flex-row gap-6 flex-grow">
                                    <div className="w-20 h-20 rounded-full overflow-hidden flex-shrink-0">
                                        <img src={country.director.image} alt={country.director.name} className="w-full h-full object-cover" />
                                    </div>

                                    <div className="flex-grow">
                                        <h3 className="text-xl font-semibold text-gray-800">{country.director.name}</h3>
                                        <p className="text-sm text-gray-600 mb-4">{country.director.title}</p>
                                        <p className="text-gray-700 mb-3">{country.bio}</p>
                                        <p className="text-gray-700 mb-4">{country.expertise}</p>
                                        <p className="text-gray-700 italic">{country.cta}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Footer */}
            <footer className="bg-gray-800 text-white px-6 py-12">
                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            {footerLinks.quickLinks.map((link, index) => (
                                <li key={index}><a href="#" className="text-gray-300 hover:text-white text-sm">{link}</a></li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold mb-4">Business Consulting Services</h3>
                        <ul className="space-y-2">
                            {footerLinks.businessServices.map((service, index) => (
                                <li key={index}><a href="#" className="text-gray-300 hover:text-white text-sm">{service}</a></li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold mb-4">About Coinmen</h3>
                        {footerLinks.aboutCoinmen.map((paragraph, index) => (
                            <p key={index} className="text-gray-300 text-sm mb-4">{paragraph}</p>
                        ))}
                    </div>
                </div>

                <div className="max-w-6xl mx-auto mt-12 pt-6 border-t border-gray-700">
                    <h3 className="text-lg font-semibold mb-4">New Delhi Head Office:</h3>
                    <address className="text-gray-300 text-sm not-italic mb-6">
                        {officeDetails.address}<br />
                        {officeDetails.contact}<br />
                        {officeDetails.email}
                    </address>

                    <div className="flex space-x-4 mt-6">
                        <a href="#" className="text-gray-400 hover:text-white">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24h21.35C23.407 24 24 23.407 24 22.675V1.325C24 .593 23.407 0 22.675 0zm-3.838 8.412h-2.254v1.666c0 .61.649.61.974.61h1.28v2.032h-1.792c-2.102 0-2.925-1.088-2.925-2.846V8.412H12.37V6.366h1.75V3.757h2.718v2.609h2.254v2.046z" /></svg>
                        </a>
                        <a href="#" className="text-gray-400 hover:text-white">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg>
                        </a>
                        <a href="#" className="text-gray-400 hover:text-white">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
                        </a>
                    </div>
                </div>
            </footer>
        </div>

    </>
    );
};

export default Desks;
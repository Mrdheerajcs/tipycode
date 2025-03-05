import React, { useState } from 'react';
import blogs1 from "../assets/blogs/blogs1.jpg"



const StartupPage = () => {
    const servicesData = [
        {
            id: 1,
            title: "Business Setup",
            description: "Setting up your business in a new jurisdiction can be complex. We help you navigate through incorporation, registration, and compliance procedures.",
            icon: "🏢"
        },
        {
            id: 2,
            title: "Accounting & Tax",
            description: "Get expert accounting and tax services tailored for startups. We ensure compliance while optimizing your financial structure.",
            icon: "📊"
        },
        {
            id: 3,
            title: "Legal & Compliance",
            description: "Navigate the regulatory landscape with our comprehensive legal and compliance services designed for new businesses.",
            icon: "⚖️"
        },
        {
            id: 4,
            title: "Funding & Investment",
            description: "Access to funding is critical for startups. We connect you with potential investors and help prepare compelling investment proposals.",
            icon: "💰"
        }
    ];

    const testimonials = [
        {
            id: 1,
            text: "Coinmen was instrumental in helping us set up our business. Their expertise saved us time and resources.",
            author: "Founder, Tech Startup",
            rating: 5
        },
        {
            id: 2,
            text: "The accounting team at Coinmen understands the unique needs of startups. They've been a valuable partner in our growth journey.",
            author: "CEO, E-commerce Venture",
            rating: 5
        }
    ];

    const faqs = [
        {
            id: 1,
            question: "What services do you offer for startups?",
            answer: "We offer a comprehensive range of services including business setup, accounting, tax planning, legal compliance, funding assistance, and strategic advisory tailored specifically for startups."
        },
        {
            id: 2,
            question: "How long does it take to set up a business?",
            answer: "The timeline varies depending on the jurisdiction and type of business. On average, it can take anywhere from 1-4 weeks. We work efficiently to minimize delays while ensuring all regulatory requirements are met."
        },
        {
            id: 3,
            question: "Do you help with funding?",
            answer: "Yes, we connect startups with potential investors, help prepare pitch decks, and provide guidance on valuation and deal structuring to improve your chances of securing funding."
        }
    ];

    const [openFaq, setOpenFaq] = useState(null);

    const toggleFaq = (id) => {
        setOpenFaq(openFaq === id ? null : id);
    };

    return (<>
        <section className="pt-24 pb-16 bg-[#f57272] text-white">
            <div className="container mx-auto px-4 md:px-6">
                <div className="max-w-3xl">
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                        Startups<br />
                        are starting
                    </h1>
                    <p className="text-xl font-bold mb-3">
                        There has never been a better time to go after a dream. To take the craziness of an idea and make it work. You know. That’s why you’re here. Because the numbers work, the initiative work, the funding seems possible, and working hard might just pay off. Whether it’s hope, frustrations, generational imperative or a combination thereof, India is neck deep in dreams trying to be ventures.

                    </p>
                    <p className="mb-4">
                        Having said that, the difference between a corporate office and a shut shop is staring at the finishing line and not the hurdles in between. Hurdles that can be a challenge to clear. That’s why you’re here, also. So that we can get you to the finishing line.
                    </p>
                    <div className="flex flex-wrap items-center gap-4">
                        <a href="/budgets/2023" className="bg-gray-800 text-white px-5 py-2.5 rounded hover:bg-gray-700 transition duration-300 flex items-center gap-2">
                            <span>Download Tipy For Startup (PDF)</span>
                        </a>
                    </div>
                </div>
            </div>
        </section>
        <div className="bg-white text-gray-800">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

                <section className="mb-16">
                    <div className="text-center mb-8">
                        <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Startup Services</h2>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            We provide comprehensive support for startups at every stage of their journey, from incorporation to growth and expansion.
                        </p>
                    </div>

                    <div className="bg-blue-50 p-6 md:p-8 rounded-lg">
                        <div className="flex flex-col md:flex-row items-center">
                            <div className="md:w-1/2 mb-6 md:mb-0 md:pr-8">
                                <h3 className="text-2xl font-semibold text-blue-800 mb-4">Why Choose Us for Your Startup Journey?</h3>
                                <p className="mb-4">
                                    Starting a business involves navigating complex regulations, securing funding, and establishing operations. Our experienced team provides end-to-end support to help you focus on what matters most - building your product and growing your customer base.
                                </p>
                                <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-md transition duration-300">
                                    Book a Consultation
                                </button>
                            </div>
                            <div className="md:w-1/2">
                                <img
                                    src={blogs1}
                                    alt="Startup Growth"
                                    className="rounded-lg shadow-md w-full h-64 md:h-auto object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </section>

                <section className="mb-16">
                    <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">Our Services for Startups</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {servicesData.map(service => (
                            <div key={service.id} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 border border-gray-100">
                                <div className="text-4xl mb-4">{service.icon}</div>
                                <h3 className="text-xl font-semibold text-blue-800 mb-3">{service.title}</h3>
                                <p className="text-gray-600">{service.description}</p>
                                <a href="#" className="inline-block mt-4 text-blue-600 hover:text-blue-800 font-medium">
                                    Learn more →
                                </a>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="mb-16 bg-gray-50 p-8 rounded-lg">
                    <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">Our Approach</h2>

                    <div className="flex flex-col md:flex-row justify-between items-start">
                        <div className="md:w-1/4 mb-8 md:mb-0 flex flex-col items-center text-center">
                            <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mb-4">1</div>
                            <h3 className="text-xl font-semibold mb-2">Initial Consultation</h3>
                            <p className="text-gray-600">Understanding your vision, goals, and requirements</p>
                        </div>

                        <div className="hidden md:block w-px h-40 bg-blue-200 self-center mx-2"></div>

                        <div className="md:w-1/4 mb-8 md:mb-0 flex flex-col items-center text-center">
                            <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mb-4">2</div>
                            <h3 className="text-xl font-semibold mb-2">Strategic Planning</h3>
                            <p className="text-gray-600">Developing a customized roadmap for your business</p>
                        </div>

                        <div className="hidden md:block w-px h-40 bg-blue-200 self-center mx-2"></div>

                        <div className="md:w-1/4 mb-8 md:mb-0 flex flex-col items-center text-center">
                            <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mb-4">3</div>
                            <h3 className="text-xl font-semibold mb-2">Implementation</h3>
                            <p className="text-gray-600">Executing the plan with precision and efficiency</p>
                        </div>

                        <div className="hidden md:block w-px h-40 bg-blue-200 self-center mx-2"></div>

                        <div className="md:w-1/4 flex flex-col items-center text-center">
                            <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mb-4">4</div>
                            <h3 className="text-xl font-semibold mb-2">Ongoing Support</h3>
                            <p className="text-gray-600">Continuous guidance as your business grows</p>
                        </div>
                    </div>
                </section>

                <section className="mb-16">
                    <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">What Our Clients Say</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {testimonials.map(testimonial => (
                            <div key={testimonial.id} className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
                                <div className="flex mb-4">
                                    {[...Array(testimonial.rating)].map((_, i) => (
                                        <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                    ))}
                                </div>
                                <p className="text-gray-600 italic mb-4">"{testimonial.text}"</p>
                                <p className="font-semibold text-blue-800">{testimonial.author}</p>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="mb-16">
                    <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">Frequently Asked Questions</h2>

                    <div className="space-y-4">
                        {faqs.map(faq => (
                            <div key={faq.id} className="border border-gray-200 rounded-lg overflow-hidden">
                                <button
                                    className="w-full px-6 py-4 text-left font-semibold flex justify-between items-center bg-white hover:bg-gray-50"
                                    onClick={() => toggleFaq(faq.id)}
                                >
                                    <span>{faq.question}</span>
                                    <span className="ml-6">
                                        {openFaq === faq.id ?
                                            <svg className="w-5 h-5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                                                <path d="M5 15l7-7 7 7"></path>
                                            </svg>
                                            :
                                            <svg className="w-5 h-5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                                                <path d="M19 9l-7 7-7-7"></path>
                                            </svg>
                                        }
                                    </span>
                                </button>
                                {openFaq === faq.id && (
                                    <div className="px-6 py-4 bg-gray-50">
                                        <p className="text-gray-600">{faq.answer}</p>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </section>

                <section className="bg-blue-700 text-white p-8 md:p-12 rounded-lg text-center">
                    <h2 className="text-3xl font-bold mb-4">Ready to Start Your Business Journey?</h2>
                    <p className="text-lg mb-8 max-w-2xl mx-auto">
                        Let our experts guide you through every step of the process. Schedule a free consultation today.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <button className="bg-white text-blue-700 hover:bg-gray-100 font-semibold py-3 px-8 rounded-md transition duration-300">
                            Book a Consultation
                        </button>
                        <button className="bg-transparent hover:bg-blue-600 border-2 border-white font-semibold py-3 px-8 rounded-md transition duration-300">
                            Download Brochure
                        </button>
                    </div>
                </section>
            </div>
        </div>
    </>
    );
};

export default StartupPage;
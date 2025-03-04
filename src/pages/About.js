import React from 'react';
import { Link } from 'react-router-dom';
import aboutPerson from '../assets/AUP.jpg';

const About = () => {
    const teamMembers = [
        {
            id: 1,
            name: "Mohit Aggarwal",
            photo: "/api/placeholder/150/150",
            headline: "From corporate star to private buccaneer. It takes a lot to get there. And even more to stay at the top.",
            bio: "From corporate star to private buccaneer. It takes a lot to get there. And even more to stay at the top. That's what Mohit, a banker by trade and a risk taker by instinct brings to the table. Tasked with guiding the corporate finance and capital advisory practice, Mohit's ability to perceive both risk and reward have seen him bring many an international business to Indian shores."
        },
        {
            id: 2,
            name: "Ernst Young",
            // subTitle: "A name that shines on any resume",
            headline: "It takes a lot to get there, From Manager in Tax and nsaad fgdsgf arfads Regulatory.",
            photo: "/api/placeholder/150/150",
            bio: "So why walk away to make it on your own. Hunger, belief, hope. Take your pick. This navigator of the world of taxation has helped set up the firm's corporate tax planning, market entry strategy development, international tax, and transfer pricing practises. All the quest to make the impossible, possible."
        },
        {
            id: 3,
            name: "Vikrant Suri",
            photo: "/api/placeholder/150/150",
            headline: "Vikrant has yet to come across a problem he couldn't tackle. From Manager in Tax and Regulatory services at Ernst & Young to setting up the direct tax practise at the firm, there's almost nothing he can't do.",
            bio: "Along this journey, he's paved the way for our expertise in corporate tax planning, financial accounting and tax litigation strategy."
        },
        {
            id: 4,
            name: "tipy code",
            photo: "/api/placeholder/150/150",
            headline: "From Manager in Tax and Regulatory services at Ernst & Young to setting up the direct tax practise at the firm, there's almost nothing he can't do.",
            bio: "So why walk away to make it on your own. Hunger, belief, hope. Take your pick. This navigator of the world of taxation has helped set up the firm's corporate tax planning, market entry strategy development."
        }
    ];

    return (
        <>
            <section className="pt-24 pb-16 bg-[#f57272] text-white">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="max-w-3xl">
                        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                            How<br />
                            it began
                        </h1>
                        <p className="text-lg mb-3">
                            In 2010, three friends charging up the pyramid in Corporate India decided that
                            it was time to dance to a different tune. Emboldened by a brave new vision, they
                            left their corporate futures behind to start something of their own.
                        </p>
                        <p className="mb-4">
                            The company they started in those heady days over a decade ago is today a byword for excellence, operates globally and is a thorn in the sides of the international big boys of financial accounting and auditing. That company is Coinmen Consultants LLP.
                        </p>

                        <div className="flex flex-wrap items-center gap-4">
                            <Link to="#-us" className="bg-transparent border border-white text-white px-5 py-2.5 rounded hover:bg-white hover:text-[#f57272] transition duration-300">
                                Know More →
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-yellow-400 w-full border-t border-dashed border-gray-800">
                <div className="px-10 py-8">
                    <h1 className="text-4xl font-bold leading-tight">
                        The Buck<br />
                        stoppers
                    </h1>
                </div>

                {teamMembers.map((member, index) => (
                    <div key={member.id} className="w-full p-6">
                        <div className="border-t border-dashed border-gray-800"></div>

                        <div className="flex flex-col md:flex-row">
                            <div className="md:w-64 flex justify-center items-center p-6 md:border-r border-dashed border-gray-800">
                                <div className="w-36 h-36 rounded-full overflow-hidden border-4 border-white">
                                    <img src={aboutPerson} alt={member.name} className="w-full h-full object-cover" />
                                </div>
                            </div>

                            <div className="md:w-64 p-6 md:border-r border-dashed border-gray-800">
                                <h2 className="text-2xl font-bold">
                                    {member.name.includes(" ") ? (
                                        <>
                                            {member.name.split(" ")[0]}<br />{member.name.split(" ").slice(1).join(" ")}
                                        </>
                                    ) : (
                                        member.name
                                    )}
                                </h2>
                                {member.subTitle && (
                                    <h3 className="text-lg font-medium mt-2">{member.subTitle}</h3>
                                )}
                            </div>
                            <div className="flex flex-col p-3 md:flex-row flex-grow border-dashed border-gray-800">


                                <div className="p-6 flex-grow">
                                    {member.headline && (
                                        <h3 className="text-lg font-medium mb-4">{member.headline}</h3>
                                    )}
                                    <p className="mb-6">{member.bio}</p>

                                    <div className="mt-6">
                                        <div className="w-10 h-10 bg-pink-500 rounded-full flex justify-center items-center">
                                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M16 8C17.5913 8 19.1174 8.63214 20.2426 9.75736C21.3679 10.8826 22 12.4087 22 14V21H18V14C18 13.4696 17.7893 12.9609 17.4142 12.5858C17.0391 12.2107 16.5304 12 16 12C15.4696 12 14.9609 12.2107 14.5858 12.5858C14.2107 12.9609 14 13.4696 14 14V21H10V14C10 12.4087 10.6321 10.8826 11.7574 9.75736C12.8826 8.63214 14.4087 8 16 8Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                <path d="M6 9H2V21H6V9Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                <path d="M4 6C5.10457 6 6 5.10457 6 4C6 2.89543 5.10457 2 4 2C2.89543 2 2 2.89543 2 4C2 5.10457 2.89543 6 4 6Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="border-t border-dashed border-gray-800"></div>

                    </div>
                ))}
            </section>
        </>
    );
};

export default About;
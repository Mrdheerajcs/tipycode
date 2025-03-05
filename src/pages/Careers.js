import React from 'react'
import { Link } from 'react-router-dom';
import aboutPerson from '../assets/AUP.jpg';
import carrersfoter from '../assets/carrires.jpg';



const Careers = () => {


    const careersCollection = [
        {
            id: 1,
            name: "CA Intern",
            photo: "/api/placeholder/150/150",
            bio: "From corporate star to private buccaneer. It takes a lot to get there. And even more to stay at the top. That's what Mohit, a banker by trade and a risk taker by instinct brings to the table. Tasked with guiding the corporate finance and capital advisory practice, Mohit's ability to perceive both risk and reward have seen him bring many an international business to Indian shores."
        },
        {
            id: 2,
            name: "Ernst Young",
            photo: "/api/placeholder/150/150",
            bio: "So why walk away to make it on your own. Hunger, belief, hope. Take your pick. This navigator of the world of taxation has helped set up the firm's corporate tax planning, market entry strategy development, international tax, and transfer pricing practises. All the quest to make the impossible, possible."
        },
        {
            id: 3,
            name: "Vikrant Suri",
            photo: "/api/placeholder/150/150",
            bio: "Along this journey, he's paved the way for our expertise in corporate tax planning, financial accounting and tax litigation strategy."
        },
        {
            id: 4,
            name: "tipy code",
            photo: "/api/placeholder/150/150",
            bio: "So why walk away to make it on your own. Hunger, belief, hope. Take your pick. This navigator of the world of taxation has helped set up the firm's corporate tax planning, market entry strategy development."
        }
    ];
    return (
        <>
            <section className="pt-24 pb-16 bg-[#f57272] text-white">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="max-w-3xl">
                        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                            We want<br />
                            your mind
                        </h1>
                        <p className="text-xl font-bold mb-3">
                            Yes, we’re speaking to you. Because yours isn’t an ordinary mind. It looks beyond the
                            obvious. It looks for the hidden story. And when you join us, that mind will be honed and
                            nurtured in the Coinmen way to make your strengths into pillars and turn your initiative into
                            ownership.
                        </p>
                        <p className="mb-4">
                            If that sounds good, get in touch.
                        </p>
                    </div>
                </div>
            </section>

            <section className="bg-gray-300 w-full border-t border-dashed border-gray-800">
                <div className="px-6 md:px-10 py-6 md:py-8">
                    <h1 className="text-3xl md:text-4xl font-bold leading-tight">
                        Today’s opportunities
                    </h1>
                </div>

                {careersCollection.map((member) => (
                    <div key={member.id} className="w-full p-4 md:p-6">
                        <div className="border-t border-dashed border-gray-800"></div>

                        <div className="flex flex-col md:flex-row gap-6">
                            {/* Image Container */}
                            <div className="w-full md:w-64 flex justify-center items-center p-4 md:p-6">
                                <div className="w-28 h-28 md:w-36 md:h-36 rounded-full overflow-hidden border-4 border-white">
                                    <img
                                        src={aboutPerson}
                                        alt={member.name}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>

                            {/* Text Container */}
                            <div className="flex flex-col flex-grow p-4 md:p-6">
                                <h2 className="text-xl md:text-2xl font-bold">{member.name}</h2>
                                <p className="mt-4 text-sm md:text-base">{member.bio}</p>
                            </div>
                        </div>

                        <div className="border-t border-dashed border-gray-800 mt-6"></div>
                    </div>
                ))}

                <div className=''>
                    <h2 className='p-4 text-xl md:text-2xl font-thin text-gray-700'>                <strong><em>Email resume at </em>info@tipycode.com</strong>
                    </h2>

                    <h1 className="p-4 text-4xl text-gray-700 ">
                        <img src={carrersfoter} alt="/////////////" />
                    </h1>

                </div>



            </section>

        </>
    )
}

export default Careers
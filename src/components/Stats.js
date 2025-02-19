import React from 'react';

const Stats = () => {
  const statsData = [
    { value: '10+', label: 'Years of Exceptional Services' },
    { value: '80+', label: 'Experienced Team Members' },
    { value: '80+', label: 'Client Across Sectors' },
  ];

  return (
    <section className="py-16 bg-gray-800 text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {statsData.map((stat, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="border border-gray-400 rounded-full h-28 w-28 flex items-center justify-center mb-5">
                <span className="text-[#f57272] text-3xl font-semibold">{stat.value}</span>
              </div>
              <p className="text-sm whitespace-pre-line">
                {stat.label.split(' ').join('\n')}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
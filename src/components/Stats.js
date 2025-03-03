import React from "react";
import CountUp from "react-countup";

const Stats = () => {
  const statsData = [
    { value: 10, suffix: "+", label: "Years of Exceptional Services" },
    { value: 80, suffix: "+", label: "Experienced Team Members" },
    { value: 80, suffix: "+", label: "Client Across Sectors" },
  ];

  return (
    <section className="py-16 bg-gray-800 text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {statsData.map((stat, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="border border-gray-400 rounded-full h-28 w-28 flex items-center justify-center mb-5">
                <span className="text-[#f57272] text-3xl font-semibold">
                  <CountUp start={0} end={stat.value} duration={8.5} />{stat.suffix}
                </span>
              </div>
              <p className="text-sm whitespace-pre-line">
                {stat.label.split(" ").join("\n")}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;

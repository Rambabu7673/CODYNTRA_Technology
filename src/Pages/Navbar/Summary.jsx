import React from "react";
import { FaLaptopCode, FaMobileAlt, FaRobot } from "react-icons/fa";
import { MdSecurity } from "react-icons/md";

const Summary = () => {
  return (
    <div className="w-full bg-[#080503] py-20 lg:px-0 p-2 relative overflow-hidden pt-50">
      {/* Background Glow */}
      <div className="absolute top-20 left-10 h-60 w-60 bg-orange-500/20 blur-3xl rounded-full"></div>

      <div className="absolute bottom-10 right-10 h-72 w-72 bg-orange-400/10 blur-3xl rounded-full"></div>

      {/* Heading */}
      <div className="text-center mb-14 relative z-10">
        <h1 className="lg:text-5xl text-3xl font-extrabold text-white mt-4">
          What Does
          <span className="text-orange-500"> CODYNTRA Technologies</span> Do?
        </h1>
      </div>

      {/* Main Box */}
      <div className="flex justify-center relative z-10">
        <div
          className="
            
            w-full
            bg-[#080503]
            backdrop-blur-md
            border-b
            border-orange-500/20
            
            p-8
            lg:p-12
            shadow-[0_0_30px_rgba(255,115,0,0.15)]
            grid
            lg:grid-cols-2
            gap-10
            items-center
          "
        >
          {/* Left Content */}
          <div>
            <p className="text-white/80 leading-9 lg:text-lg text-base">
              CODYNTRA Technologies Pvt. Ltd. delivers modern digital solutions
              including web development, mobile applications, AI/ML solutions,
              cloud services, ERP systems, cybersecurity, and digital marketing.
              <br />
              <br />
              We create scalable, secure, and innovative products that help
              businesses grow faster in the digital world.
            </p>
          </div>

          {/* Right Graphics */}
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-white/5 border border-orange-500/20 rounded-2xl p-6 flex flex-col items-center justify-center hover:scale-105 transition-all duration-300">
              <FaLaptopCode className="text-5xl text-orange-500 mb-4" />
              <h1 className="text-white font-semibold">Web Development</h1>
            </div>

            <div className="bg-white/5 border border-orange-500/20 rounded-2xl p-6 flex flex-col items-center justify-center hover:scale-105 transition-all duration-300">
              <FaMobileAlt className="text-5xl text-orange-500 mb-4" />
              <h1 className="text-white font-semibold">Mobile Apps</h1>
            </div>

            <div className="bg-white/5 border border-orange-500/20 rounded-2xl p-6 flex flex-col items-center justify-center hover:scale-105 transition-all duration-300">
              <FaRobot className="text-5xl text-orange-500 mb-4" />
              <h1 className="text-white font-semibold">AI Solutions</h1>
            </div>

            <div className="bg-white/5 border border-orange-500/20 rounded-2xl p-6 flex flex-col items-center justify-center hover:scale-105 transition-all duration-300">
              <MdSecurity className="text-5xl text-orange-500 mb-4" />
              <h1 className="text-white font-semibold">Cyber Security</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Summary;

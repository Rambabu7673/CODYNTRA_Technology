import React from "react";
import Marquee from "react-fast-marquee";

import {
  FaCheckCircle,
  FaSmileBeam,
  FaHandshake,
  FaCertificate,
  FaAward,
  FaUserShield,
  FaRocket,
  FaHeadset,
  FaGlobe,
  FaStar,
} from "react-icons/fa";

const Marque = () => {
  const companyHighlights = [
    {
      icon: <FaCheckCircle />,
      text: "Verified Company",
    },

    {
      icon: <FaSmileBeam />,
      text: "Happy Clients",
    },

    {
      icon: <FaHandshake />,
      text: "Trusted By Clients",
    },

    {
      icon: <FaCertificate />,
      text: "Certified Services",
    },

    {
      icon: <FaAward />,
      text: "Quality Solutions",
    },

    {
      icon: <FaUserShield />,
      text: "Secure Systems",
    },

    {
      icon: <FaRocket />,
      text: "Business Growth",
    },

    {
      icon: <FaHeadset />,
      text: "24/7 Support",
    },

    {
      icon: <FaGlobe />,
      text: "Global Vision",
    },

    {
      icon: <FaStar />,
      text: "Professional Team",
    },
  ];

  return (
    <div className="w-full bg-[#040708] py-12 overflow-hidden">
      <Marquee speed={80} gradient={false} pauseOnHover={true}>
        {companyHighlights.map((item, index) => (
          <div
            key={index}
            className="
              flex
              items-center
              gap-4
              px-8
              py-4
              relative
            "
          >
            {/* Icon */}
            <div
              className="
                h-14
                w-14
                rounded-full
                border
                border-orange-500
                flex
                justify-center
                items-center
                text-2xl
                text-orange-500
                shadow-[0_0_20px_rgba(255,115,0,0.4)]
                animate-pulse
                bg-white/5
                backdrop-blur-md
              "
            >
              {item.icon}
            </div>

            {/* Text */}
            <h1 className="text-white lg:text-xl text-base font-semibold whitespace-nowrap">
              {item.text}
            </h1>

            {/* Right Border */}
            <div className="h-10 w-[1px] bg-orange-500/40 ml-6"></div>
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default Marque;

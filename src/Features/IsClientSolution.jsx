import React, { useState, useEffect } from "react";
import {
  FaUsers,
  FaSearch,
  FaLightbulb,
  FaCode,
  FaBug,
  FaRocket,
  FaArrowRight,
  FaChartLine,
  FaHandshake,
  FaTimes,
} from "react-icons/fa";

import SolutionForm from "./SolutionForm";

const IsClientSolution = () => {
  const [popup, setPopup] = useState(false);

  // Stop Scroll
  useEffect(() => {
    if (popup) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [popup]);

  const process = [
    {
      id: "01",
      title: "Client Discussion",
      description:
        "We communicate with clients to understand project requirements.",
      icon: <FaUsers />,
    },

    {
      id: "02",
      title: "Requirement Analysis",
      description:
        "We analyze business workflow and technologies before development.",
      icon: <FaSearch />,
    },

    {
      id: "03",
      title: "Research & Strategy",
      description: "We research market trends and create smart strategies.",
      icon: <FaChartLine />,
    },

    {
      id: "04",
      title: "UI/UX Design",
      description: "We design modern and responsive interfaces.",
      icon: <FaLightbulb />,
    },

    {
      id: "05",
      title: "Development Process",
      description: "We build secure and scalable web applications.",
      icon: <FaCode />,
    },

    {
      id: "06",
      title: "Testing & Debugging",
      description: "We test and improve application performance.",
      icon: <FaBug />,
    },

    {
      id: "07",
      title: "Client Feedback",
      description: "We improve projects according to client feedback.",
      icon: <FaHandshake />,
    },

    {
      id: "08",
      title: "Project Delivery",
      description: "We deliver projects with support and maintenance.",
      icon: <FaRocket />,
    },
  ];

  return (
    <div className="relative overflow-hidden bg-black py-20 text-white">
      {/* Background */}
      <div className="absolute top-0 left-0 w-[30rem] h-[30rem] bg-[#ff3b00] opacity-20 blur-[150px] rounded-full"></div>

      <div className="absolute bottom-0 right-0 w-[30rem] h-[30rem] bg-blue-500 opacity-20 blur-[150px] rounded-full"></div>

      {/* Main */}
      <div className="max-w-7xl mx-auto px-5 relative z-10">
        {/* Heading */}
        <div className="text-center">
          <p className="text-[#ff3b00] uppercase tracking-[6px] font-semibold">
            Smart Solutions
          </p>

          <h1 className="text-4xl lg:text-6xl font-bold mt-5 leading-tight">
            From Idea To <br />
            Digital Product
          </h1>

          <p className="text-gray-400 mt-6 max-w-3xl mx-auto leading-8">
            We create modern digital products with smart strategies and modern
            technologies.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mt-20">
          {process.map((item) => (
            <div
              key={item.id}
              className="
                group
                relative
                bg-white/5
                border
                border-white/10
                rounded
                p-6
                backdrop-blur-lg
                hover:-translate-y-3
                hover:border-[#ff3b00]
                duration-500
                overflow-hidden
              "
            >
              {/* Glow */}
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#ff3b00] opacity-10 blur-3xl rounded-full"></div>

              {/* Top */}
              <div className="flex items-center justify-between">
                <h1 className="text-2xl font-bold text-white/10">{item.id}</h1>

                <div className="w-12 h-12 rounded-full bg-[#ff3b00] flex items-center justify-center text-xl">
                  {item.icon}
                </div>
              </div>

              {/* Content */}
              <h1 className="text-2xl font-bold mt-6">{item.title}</h1>

              <p className="text-gray-400 mt-4 leading-7 text-sm">
                {item.description}
              </p>

              {/* Button */}
              <div className="flex items-center justify-between mt-8">
                <button
                  onClick={() => setPopup(true)}
                  className="
                    bg-[#ff3b00]
                    hover:bg-[#ff5722]
                    px-6
                    py-3
                    rounded-xl
                    text-sm
                    font-medium
                    duration-300
                    hover:scale-105
                    cursor-pointer
                  "
                >
                  Explore
                </button>

                <FaArrowRight className="text-xl text-[#ff3b00] group-hover:translate-x-2 duration-300" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Popup */}
      {popup && (
        <div
          className="
            fixed
            inset-0
            z-[999]
            flex
            items-center
            justify-center
            bg-black/80
            backdrop-blur-sm
            px-4
            animate-fadeIn
          "
        >
          {/* Popup Box */}
          <div
            className="
              relative
              w-full
              max-w-2xl
              max-h-[90vh]
              overflow-y-auto
              bg-[#0f0f0f]
              border
              border-white/10
              rounded
              shadow-2xl
              animate-popup
              scrollbar-hide
            "
          >
            {/* Glow */}
            <div className="absolute top-0 left-0 w-60 h-60 bg-[#ff3b00] opacity-20 blur-[100px] rounded-full"></div>

            {/* Close */}
            <button
              onClick={() => setPopup(false)}
              className="
                absolute
                top-4
                right-4
                w-10
                h-10
                rounded-full
                bg-white/10
                hover:bg-red-500
                flex
                items-center
                justify-center
                duration-300
                z-50
              "
            >
              <FaTimes />
            </button>

            {/* Content */}
            <div className="relative z-10 p-6 md:p-8">
              <div className="text-center mb-6">
               
              </div>

              {/* Form */}
              <SolutionForm />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default IsClientSolution;

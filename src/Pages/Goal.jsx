import React from "react";
import {
  FaRegCompass,
  FaPalette,
  FaCode,
  FaLightbulb,
  FaCogs,
  FaShieldAlt,
} from "react-icons/fa";

const Goal = () => {
  const processData = [
    {
      number: "01.",
      title: "DISCOVER",
      desc: "We understand your business goals and project requirements clearly.",
      icon: <FaRegCompass />,
      align: "left",
    },

    {
      number: "02.",
      title: "DESIGN",
      desc: "Creating modern UI/UX designs and creative digital experiences.",
      icon: <FaPalette />,
      align: "right",
    },

    {
      number: "03.",
      title: "DEVELOP",
      desc: "Building scalable websites, apps, and powerful software systems.",
      icon: <FaCode />,
      align: "left",
    },

    {
      number: "04.",
      title: "INNOVATE",
      desc: "Using AI, automation, and modern technologies for future-ready solutions.",
      icon: <FaLightbulb />,
      align: "right",
    },

    {
      number: "05.",
      title: "AUTOMATE",
      desc: "Smart automation systems to improve productivity and workflow.",
      icon: <FaCogs />,
      align: "left",
    },

    {
      number: "06.",
      title: "SECURE",
      desc: "Advanced security and cloud protection for safe business systems.",
      icon: <FaShieldAlt />,
      align: "right",
    },
  ];

  return (
    <div className="w-full bg-black py-16 px-4 overflow-hidden">
      {/* Heading */}
      <div className="text-center mb-16">
        <p className="text-orange-500 tracking-[5px] uppercase text-sm animate-pulse">
          OUR PROCESS
        </p>

        <h1 className="lg:text-6xl text-4xl font-extrabold text-white mt-5 leading-tight">
          How We Work At
          <span className="text-orange-500"> CODYNTRA</span>
        </h1>
      </div>

      {/* Timeline */}
      <div className="relative max-w-6xl mx-auto">
        {/* Center Line */}
        <div
          className="
            absolute
            left-1/2
            top-0
            -translate-x-1/2
            h-full
            w-[2px]
            bg-orange-500/20
            hidden
            lg:block
          "
        ></div>

        {/* Items */}
        <div className="space-y-16">
          {processData.map((item, index) => (
            <div
              key={index}
              className={`
                flex
                flex-col
                lg:flex-row
                items-center
                ${item.align === "right" ? "lg:flex-row-reverse" : ""}
              `}
            >
              {/* Content */}
              <div
                className={`
                  w-full
                  lg:w-1/2
                  px-5
                  text-center
                  ${item.align === "right" ? "lg:text-left" : "lg:text-right"}
                `}
              >
                <h1 className="text-orange-500 lg:text-4xl text-2xl font-extrabold">
                  {item.number} {item.title}
                </h1>

                <p className="text-white/80 leading-8 mt-4 lg:text-lg text-base">
                  {item.desc}
                </p>
              </div>

              {/* Icon */}
              <div
                className="
                  relative
                  z-10
                  h-16
                  w-16
                  min-w-[4rem]
                  rounded-full
                  border
                  border-orange-500
                  flex
                  justify-center
                  items-center
                  text-2xl
                  text-orange-500
                  bg-black
                  shadow-[0_0_25px_rgba(255,115,0,0.4)]
                  my-8
                  lg:my-0
                "
              >
                {/* Glow */}
                <div
                  className="
                    absolute
                    inset-0
                    rounded-full
                    bg-orange-500/10
                    blur-xl
                  "
                ></div>

                <span className="relative z-10">{item.icon}</span>
              </div>

              {/* Empty Space */}
              <div className="hidden lg:block w-1/2"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Goal;

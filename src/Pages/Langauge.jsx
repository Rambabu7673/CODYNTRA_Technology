import React from "react";

import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaJava,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaGithub,
} from "react-icons/fa";

import {
  SiMongodb,
  SiExpress,
  SiTailwindcss,
  SiMysql,
  SiFirebase,
  SiNextdotjs,
} from "react-icons/si";

const Langauge = () => {
  const techData = [
    { icon: <FaReact /> },
    { icon: <FaNodeJs />  },
    { icon: <SiExpress /> },
    { icon: <SiMongodb /> },
    { icon: <FaPython />},
    { icon: <FaJava /> },
    { icon: <FaHtml5 /> },
    { icon: <FaCss3Alt /> },
    { icon: <FaJs /> },
    { icon: <SiTailwindcss /> },
    { icon: <SiMysql /> },
    { icon: <SiFirebase /> },
    { icon: <SiNextdotjs /> },
    { icon: <FaGithub /> },
  ];

  return (
    <div className="w-full lg:h-[25rem]  bg-black relative overflow-hidden py-20 px-4">
      {/* Animated Background */}
      <div className="absolute top-70 left-10 h-72 w-72 bg-orange-500/20 blur-3xl rounded-full animate-pulse"></div>

      <div className="absolute bottom-10 right-10 h-80 w-80 bg-orange-400/10 blur-3xl rounded-full animate-pulse"></div>

      <div className="absolute top-1/2 left-1/2 h-96 w-96 bg-orange-500/10 blur-3xl rounded-full animate-ping"></div>

      {/* Heading */}
      <div className="text-center relative z-10 mb-20">
        <p className="text-orange-500 tracking-[5px] uppercase text-sm animate-pulse">
          TECHNOLOGIES
        </p>

        <h1 className="lg:text-6xl text-4xl font-extrabold text-white mt-5 leading-tight">
          Technologies We
          <span className="text-orange-500"> Work On</span>
        </h1>
      </div>

      {/* Technologies */}
      <div
        className="
          relative
          z-10
          flex
          flex-wrap
          justify-center
          items-center
          gap-10
          max-w-7xl
          mx-auto
        "
      >
        {techData.map((item, index) => (
          <div
            key={index}
            className="
              flex
              flex-col
              items-center
              justify-center
              hover:scale-110
              transition-all
              duration-500
              group
            "
          >
            {/* Icon */}
            <div
              className="
                text-5xl
                text-orange-500
                group-hover:text-white
                hover:rotate-45 
                hover:scale-110
                transition-all
               
                duration-500
                drop-shadow-[0_0_20px_rgba(255,115,0,0.8)]
                animate-pulse
                cursor-pointer 
              "
            >
              {item.icon}
            </div>

            {/* Text */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Langauge;

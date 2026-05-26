import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

const Features = () => {
  const [open, setOpen] = useState(0);

  const data = [
    {
      title: "What is CODYNTRA?",
      desc: "CODYNTRA Technologies is a modern IT company that provides web development, mobile applications, AI solutions, cloud services, and digital marketing for businesses and startups.",
    },

    {
      title: "What Services Does CODYNTRA Provide?",
      desc: "We provide website development, Android/iOS apps, admin panels, ERP systems, AI tools, UI/UX design, SEO, branding, cloud solutions, and cybersecurity services.",
    },

    {
      title: "How Does CODYNTRA Help Businesses?",
      desc: "CODYNTRA helps businesses grow digitally by creating fast, secure, and scalable platforms that improve customer engagement and business productivity.",
    },

    {
      title: "Why Choose CODYNTRA?",
      desc: "We focus on innovation, modern technology, affordable pricing, timely delivery, and high-quality support to provide the best experience for our clients.",
    },

    {
      title: "Customer Benefits",
      desc: "Customers get responsive websites, secure systems, SEO optimization, digital marketing support, better online visibility, and long-term technical assistance.",
    },

    {
      title: "Our Advantage",
      desc: "CODYNTRA combines creative design, powerful development, AI integration, and business strategies to deliver complete digital transformation solutions.",
    },
    {
      title: "Custom Algorithms Development",
      desc: "CODYNTRA creates powerful custom algorithms for automation, AI systems, smart recommendations, business analytics, security optimization, and high-performance digital platforms.",
    },
    {
      title: "AI & Smart Automation",
      desc: "We build intelligent AI models and automation systems that reduce manual work, improve accuracy, and increase business efficiency using advanced technologies and algorithms.",
    },
    {
      title: "Data Processing & Optimization",
      desc: "Our advanced algorithms help businesses process large amounts of data faster, optimize system performance, and deliver better user experiences.",
    },
  ];

  return (
    <div className="w-full min-h-screen bg-[#080503] py-20 px-4">
      {/* Heading */}
      <div className="text-center">
        <p className="text-orange-500 tracking-[5px] uppercase text-sm animate-pulse">
       ALGORITHIM CODYNTRA Technology
        </p>

        <h1 className="lg:text-6xl text-4xl font-extrabold text-white mt-5 leading-tight">
          Why Businesses Trust
          <span className="text-orange-500"> CODYNTRA Technologies</span>
        </h1>

        <p className="text-white/70 max-w-3xl mx-auto mt-6 leading-8 text-lg">
          We deliver smart digital solutions that help businesses grow, improve
          performance, and build a strong online presence.
        </p>
      </div>

      {/* Accordion */}
      <div className="max-w-7xl mx-auto mt-16 space-y-6">
        {data.map((item, index) => (
          <div
            key={index}
            className="
              bg-white/5
              border
              border-orange-500/20
              backdrop-blur-md
              rounded-xl
              overflow-hidden
              hover:shadow-[0_0_25px_rgba(255,115,0,0.25)]
              transition-all
              duration-300
            "
          >
            {/* Top */}
            <div
              onClick={() => setOpen(open === index ? null : index)}
              className="
                flex
                justify-between
                items-center
                p-6
                cursor-pointer
              "
            >
              <h1 className="text-white lg:text-2xl text-lg font-semibold">
                {item.title}
              </h1>

              <div className="text-orange-500 text-xl">
                {open === index ? <FaMinus /> : <FaPlus />}
              </div>
            </div>

            {/* Content */}
            <div
              className={`
                overflow-hidden
                transition-all
                duration-500
                ${
                  open === index
                    ? "max-h-60 opacity-100 px-6 pb-6"
                    : "max-h-0 opacity-0"
                }
              `}
            >
              <p className="text-white/70 leading-8">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;

import React from "react";
import { AiOutlineSafetyCertificate } from "react-icons/ai";

const Choice = () => {
  return (
    <div className="w-full min-h-screen bg-[#080503] relative overflow-hidden ">
      {/* Background Glow */}
      <div className="absolute top-20 left-10 h-72 w-72 bg-orange-500/10 blur-3xl rounded-full"></div>

      <div className="absolute bottom-10 right-10 h-80 w-80 bg-orange-400/10 blur-3xl rounded-full"></div>

      {/* Header */}
      <div className="text-center pt-20 px-4 relative z-10">
        {/* Small Heading */}
        <p
          className="
        text-orange-500
        tracking-[5px]
        uppercase
        text-sm
        animate-pulse
        lg:w-[35rem]
        w-full
        px-4
        py-3
        rounded-full
        bg-white/10
        shadow-[0_0_20px_rgba(255,115,0,0.2)]
        text-center
        mx-auto
        flex
        justify-center
        items-center
        gap-3
        backdrop-blur-md
        border
        border-orange-500/20
      "
        >
          <AiOutlineSafetyCertificate className="text-orange-500 text-2xl" />
          THE CODYNTRA TECHNOLOGY ADVANTAGE
        </p>

        {/* Main Heading */}
        <h1 className="lg:text-6xl text-4xl font-extrabold text-white mt-6 leading-tight">
          We Deliver
          <span className="text-orange-500"> Smart Digital Solutions</span>
        </h1>

        {/* Description */}
        <p className="text-white/70 max-w-3xl mx-auto mt-6 leading-8 lg:text-lg text-base">
          We help businesses grow with innovative technology, creative design,
          and powerful development solutions that deliver real results.
        </p>
      </div>

      {/* Features */}
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 mt-20 px-6 lg:px-20 relative z-10 p-4">
        {/* Card */}
        {[
          {
            title: "Expertise",
            desc: "Our company has proven technical skills and deep industry knowledge to build high-quality digital products.",
          },
          {
            title: "Reliability",
            desc: "We ensure timely delivery, consistent quality, and dependable solutions for every client project.",
          },
          {
            title: "Innovation",
            desc: "We use modern technologies, creative ideas, and advanced tools to create future-ready solutions.",
          },
          {
            title: "Customer Support",
            desc: "Our responsive support team is always ready to help clients with guidance and technical assistance.",
          },
          {
            title: "Marketing Support",
            desc: "We help businesses grow with digital marketing strategies, SEO, branding, and online advertising solutions.",
          },
          {
            title: "Cost Efficiency",
            desc: "We provide affordable pricing with premium quality services that deliver excellent value for money.",
          },
        ].map((item, index) => (
          <div
            key={index}
            className="
          group
          relative
          bg-white/5
          backdrop-blur-md
          border
          border-orange-500/20
          rounded-lg
          p-8
          overflow-hidden
          hover:scale-105
          transition-all
          duration-500
          hover:shadow-[0_0_35px_rgba(255,115,0,0.35)]
        "
          >
            {/* Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>

            {/* Top Line */}
            <div className="h-1 w-20 bg-orange-500 rounded-full mb-6 shadow-[0_0_15px_rgba(255,115,0,0.8)]"></div>

            {/* Title */}
            <h1 className="text-2xl font-bold text-orange-500 mb-4 relative z-10">
              {item.title}
            </h1>

            {/* Description */}
            <p className="text-white/70 leading-8 relative z-10">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Choice;

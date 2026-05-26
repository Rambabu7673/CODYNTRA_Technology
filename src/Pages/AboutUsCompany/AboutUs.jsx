import React from "react";
import {
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";

const AboutUs = () => {
  const team = [
    {
      id: 1,
      name: "Vikram Kumar",
      role: "Marketing Head",
      experience: "1+ Years Experience",
      description:
        "Specialized in digital marketing, branding, client communication, and business growth strategies.",
    },

    {
      id: 2,
      name: "Dr Raju Kumar",
      role: "CTO",
      experience: "1+ Years Experience",
      description:
        "Experienced in software architecture, backend systems, modern technologies, and scalable development.",
    },

    {
      id: 3,
      name: "Sanjna Singh",
      role: "HR Manager",
      experience: "1+ Years Experience",
      description:
        "Managing recruitment, team coordination, employee engagement, and company workflow operations.",
    },

    {
      id: 4,
      name: "Gautam Kumar Singh",
      role: "Graphic Designer",
      experience: "1+ Years Experience",
      description:
        "Creative designer focused on branding, UI graphics, social media design, and visual identity.",
    },
  ];

  return (
    <div className="relative overflow-hidden bg-black py-28 text-white">
      {/* Animated Background */}
      <div className="absolute top-0 left-0 w-[40rem] h-[40rem] bg-[#ff3b00] opacity-20 blur-[150px] rounded-full animate-pulse"></div>

      <div className="absolute bottom-0 right-0 w-[40rem] h-[40rem] bg-blue-500 opacity-20 blur-[150px] rounded-full animate-pulse"></div>

      <div className="absolute top-1/2 left-1/2 w-[25rem] h-[25rem] bg-purple-500 opacity-10 blur-[120px] rounded-full animate-bounce"></div>

      <div className="max-w-[95rem] mx-auto px-8 relative z-10">
        {/* Hero */}
        <div className="text-center">
          <p className="text-[#ff3b00] uppercase tracking-[8px] font-semibold">
            About Company
          </p>

          <h1 className="text-5xl lg:text-7xl font-bold mt-6 leading-tight">
            About CodYntra
          </h1>

          <p className="text-gray-400 mt-8 max-w-4xl mx-auto leading-9 text-lg">
            CodYntra is a modern technology company focused on web development,
            software solutions, UI/UX design, branding, and digital innovation.
          </p>
        </div>

        {/* Founder Section */}
        <div
          className="
          mt-24
          bg-white/5
          border
          border-white/10
          backdrop-blur-lg
          rounded
          p-14
          overflow-hidden
          relative
        "
        >
          {/* Glow */}
          <div
            className="
            absolute
            top-0
            right-0
            w-[25rem]
            h-[25rem]
            bg-[#ff3b00]
            opacity-10
            blur-[120px]
            rounded
          "
          ></div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div>
              <p className="text-[#ff3b00] uppercase tracking-[7px] font-semibold">
                Founder & CEO
              </p>

              <h1 className="text-5xl lg:text-6xl font-bold mt-6">
                Rambabu Kumar
              </h1>

              <p className="text-gray-400 mt-8 leading-9 text-lg">
                CodYntra was developed in 2026 with the vision of building
                modern digital solutions for startups, businesses, and students.
                The company works on web development, software solutions,
                branding, UI/UX design, and scalable applications.
              </p>

              <p className="text-gray-400 mt-6 leading-9 text-lg">
                Our goal is to help businesses grow digitally through smart
                strategies, innovation, modern technologies, and
                high-performance development.
              </p>

              {/* Objective */}
              <div
                className="
                mt-10
                bg-white/5
               
                border-white/10
                rounded
                p-8
              "
              >
                <h1 className="text-3xl font-bold">Company Objective</h1>

                <p className="text-gray-400 mt-5 leading-8 text-lg">
                  To build secure, scalable, modern, and user-friendly digital
                  products that solve real-world business challenges.
                </p>
              </div>

              {/* Social Icons */}
              <div className="flex items-center gap-5 mt-10 flex-wrap">
                {/* Instagram */}
                <div
                  className="
                  flex
                  items-center
                  gap-3
                  bg-white/10
                  hover:bg-[#ff3b00]
                  px-5
                  py-3
                  rounded-2xl
                  duration-300
                  cursor-pointer
                "
                >
                  <FaInstagram className="text-2xl" />

                  <span className="text-sm lg:text-base">@codyntra</span>
                </div>

                {/* LinkedIn */}
                <div
                  className="
                  w-14
                  h-14
                  rounded-2xl
                  bg-white/10
                  hover:bg-[#ff3b00]
                  flex
                  items-center
                  justify-center
                  text-2xl
                  duration-300
                  cursor-pointer
                "
                >
                  <FaLinkedinIn />
                </div>

                {/* Twitter */}
                <div
                  className="
                  w-14
                  h-14
                  rounded-2xl
                  bg-white/10
                  hover:bg-[#ff3b00]
                  flex
                  items-center
                  justify-center
                  text-2xl
                  duration-300
                  cursor-pointer
                "
                >
                  <FaTwitter />
                </div>

                {/* Whatsapp */}
                <div
                  className="
                  w-14
                  h-14
                  rounded-2xl
                  bg-white/10
                  hover:bg-[#ff3b00]
                  flex
                  items-center
                  justify-center
                  text-2xl
                  duration-300
                  cursor-pointer
                "
                >
                  <FaWhatsapp />
                </div>
              </div>
            </div>

            {/* Right Box */}
            <div className="relative">
              <div
                className="
               bg-white/10
                rounded
                h-[42rem]
                flex
                items-center
                justify-center
                text-center
                p-10
                relative
                overflow-hidden
              "
              >
                {/* Glow */}
                <div
                  className="
                  absolute
                  w-[20rem]
                  h-[20rem]
                  bg-white/20
                  blur-[100px]
                  rounded-full
                "
                ></div>

                <div className="relative z-10">
                  <h1 className="text-7xl font-bold">RK</h1>

                  <p className="mt-6 text-3xl font-semibold">Rambabu Kumar</p>

                  <p className="mt-4 text-xl text-white/80">Founder & CEO</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="mt-32">
          <div className="text-center">
            <p className="text-[#ff3b00] uppercase tracking-[8px] font-semibold">
              Team Members
            </p>

            <h1 className="text-5xl lg:text-6xl font-bold mt-5">
              Our Leadership Team
            </h1>

            <p className="text-gray-400 mt-7 max-w-4xl mx-auto leading-9 text-lg">
              Meet the talented team behind CodYntra who work together to create
              innovative and modern digital solutions.
            </p>
          </div>

          {/* Team Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 mt-20">
            {team.map((item) => (
              <div
                key={item.id}
                className="
        relative
        overflow-hidden
        h-[26rem]
        w-full
        bg-gradient-to-b
        from-white/10
        to-white/5
        
        border-white/10
        backdrop-blur-xl
        rounded
        p-7
        hover:-translate-y-4
        hover:border-[#ff3b00]
        duration-500
        group
      "
              >
                {/* Glow */}
                <div
                  className="
        absolute
        -top-16
        -right-16
        w-36
        h-36
        bg-[#ff3b00]/10
        blur-[70px]
        rounded-full
      "
                ></div>

                {/* Top */}
                <div className="flex items-center justify-between relative z-10">
                  {/* Avatar */}
                  <div
                    className="
            w-16
            h-16
            rounded-2xl
            bg-gradient-to-br
            from-[#ff3b00]
            to-orange-600
            flex
            items-center
            justify-center
            text-2xl
            font-bold
          "
                  >
                    {item.name.charAt(0)}
                  </div>

                  {/* Experience */}
                  <div
                    className="
            bg-black/30
            border
            border-white/10
            rounded-xl
            px-3
            py-2
            text-center
          "
                  >
                    <h2 className="text-sm font-semibold">{item.experience}</h2>
                  </div>
                </div>

                {/* Name */}
                <h1 className="text-2xl font-bold mt-6 relative z-10">
                  {item.name}
                </h1>

                {/* Role */}
                <p className="text-[#ff3b00] text-base mt-2 relative z-10">
                  {item.role}
                </p>

                {/* Description */}
                <p
                  className="
        text-gray-400
        mt-5
        leading-7
        text-sm
        relative
        z-10
      "
                >
                  {item.description}
                </p>

                {/* Icons */}
                <div
                  className="
        flex
        items-center
        gap-3
        absolute
        bottom-7
      "
                >
                  <div
                    className="
            w-10
            h-10
            rounded-xl
            bg-white/10
            hover:bg-[#ff3b00]
            flex
            items-center
            justify-center
            text-lg
            cursor-pointer
            duration-300
          "
                  >
                    <FaInstagram />
                  </div>

                  <div
                    className="
            w-10
            h-10
            rounded-xl
            bg-white/10
            hover:bg-[#ff3b00]
            flex
            items-center
            justify-center
            text-lg
            cursor-pointer
            duration-300
          "
                  >
                    <FaLinkedinIn />
                  </div>

                  <div
                    className="
            w-10
            h-10
            rounded-xl
            bg-white/10
            hover:bg-[#ff3b00]
            flex
            items-center
            justify-center
            text-lg
            cursor-pointer
            duration-300
          "
                  >
                    <FaTwitter />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;

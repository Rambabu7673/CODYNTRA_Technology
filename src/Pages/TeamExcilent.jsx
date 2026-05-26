import React, { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";

const TeamExcilent = () => {
  const employees = [
    {
      name: "Rahul Sharma",
      role: "Frontend Developer",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
    },

    {
      name: "Ananya Roy",
      role: "UI/UX Designer",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    },

    {
      name: "Aman Verma",
      role: "AI Engineer",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d",
    },

    {
      name: "Priya Singh",
      role: "Backend Developer",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
    },

    {
      name: "Rohit Kumar",
      role: "Cloud Engineer",
      image: "https://images.unsplash.com/photo-1504593811423-6dd665756598",
    },

    {
      name: "Neha Kapoor",
      role: "Mobile App Developer",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2",
    },
  ];

  const [current, setCurrent] = useState(0);

  // Auto Slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === employees.length - 3 ? 0 : prev + 1));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full min-h-screen bg-black py-20 px-4 overflow-hidden relative">
      {/* Background */}
      <div className="absolute top-0 left-0 h-72 w-72 bg-orange-500/20 blur-3xl rounded-full animate-pulse"></div>

      <div className="absolute bottom-0 right-0 h-72 w-72 bg-orange-400/10 blur-3xl rounded-full animate-pulse"></div>

      {/* Heading */}
      <div className="text-center relative z-10 ">
        <p className="text-orange-500 tracking-[5px] uppercase text-sm animate-pulse">
          OUR TEAM
        </p>

        <h1 className="lg:text-6xl text-4xl font-extrabold text-white mt-5">
          Meet Our
          <span className="text-orange-500"> Digital Stars</span>
        </h1>
      </div>

      {/* Slider */}
      <div className="max-w-[85rem] mx-auto mt-16 overflow-hidden relative z-10 p-10 ">
        <div
          className="
            flex
            transition-transform
            duration-700
            ease-in-out
          "
          style={{
            transform: `translateX(-${(current * 100) / 3}%)`,
          }}
        >
          {employees.map((item, index) => (
            <div
              key={index}
              className="
                w-full
                md:w-1/2
                lg:w-1/3
                flex-shrink-0
                p-3
              "
            >
              {/* Card */}
              <div
                className="
                  relative
                  min-h-[250px]
                  bg-white/5
                 rounded
                 cursor-pointer
                  backdrop-blur-xl
                 
                  flex
                  items-center
                  gap-5
                  p-6
                  hover:scale-[1.02]
                  transition-all
                  duration-500
                "
              >
                {/* Glow */}
                <div className="absolute top-0 right-0 h-40 w-40 bg-orange-500/10 blur-3xl rounded-full animate-pulse"></div>

                {/* Image */}
                <div
                  className="
                    h-[50px]
                    w-[50px]
                    min-w-[50px]
                    rounded-full
                    overflow-hidden
                    border-2
                    border-orange-500
                    shadow-[0_0_20px_rgba(255,115,0,0.5)]
                    relative
                    z-10
                  "
                >
                  <img
                    src={item.image}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Content */}
                <div className="relative z-10 flex-1">
                  {/* Stars */}
                  <div className="flex gap-1 text-orange-500 text-sm">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                  </div>

                  <h1 className="text-white text-2xl font-bold mt-3">
                    {item.name}
                  </h1>

                  <h2 className="text-orange-500 text-lg mt-1">{item.role}</h2>

                  <p className="text-white/60 leading-7 mt-3 text-sm">
                    Passionate professional creating modern digital products and
                    innovative experiences.
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-3 mt-10">
          {Array.from({
            length: employees.length - 2,
          }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`
                transition-all
                duration-500
                rounded-full
                ${
                  current === index
                    ? "w-10 h-3 bg-orange-500 shadow-[0_0_20px_rgba(255,115,0,0.7)]"
                    : "w-3 h-3 bg-white/40"
                }
              `}
            ></button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamExcilent;

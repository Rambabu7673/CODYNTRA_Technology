import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import JobForm from "../Pages/JobForm";
import { RxCrossCircled } from "react-icons/rx";


const Career = () => {
  const [popup, setPopup] = useState(false);

  // Scroll Stop
  useEffect(() => {
    if (popup) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [popup]);

  const careers = [
    {
      id: 1,
      role: "Frontend Developer Intern",
      type: "Internship",
      location: "Remote",
    },

    {
      id: 2,
      role: "MERN Stack Developer",
      type: "Full Time",
      location: "Patna",
    },

    {
      id: 3,
      role: "UI/UX Designer",
      type: "Part Time",
      location: "Remote",
    },
  ];

  const tech = [
    {
      id: 1,
      title: "React JS",
    },

    {
      id: 2,
      title: "Node JS",
    },

    {
      id: 3,
      title: "MongoDB",
    },

    {
      id: 4,
      title: "Express JS",
    },

    {
      id: 5,
      title: "Tailwind CSS",
    },

    {
      id: 6,
      title: "Firebase",
    },
  ];

  return (
    <div className="relative overflow-hidden bg-black py-24 text-white">
      {/* Animated Background */}
      <div className="absolute top-0 left-0 w-[30rem] h-[30rem] bg-[#ff3b00] opacity-20 blur-[120px] rounded-full animate-pulse"></div>

      <div className="absolute bottom-0 right-0 w-[30rem] h-[30rem] bg-[#ff3b00] opacity-20 blur-[120px] rounded-full animate-pulse"></div>

      <div className="absolute top-1/2 left-1/2 w-[20rem] h-[20rem] bg-[#ff3b00] opacity-10 blur-[100px] rounded-full animate-bounce"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Hero */}
        <div className="text-center">
          <p className="text-[#ff3b00] uppercase tracking-[7px] font-semibold">
            Career
          </p>

          <h1 className="text-4xl lg:text-7xl font-bold mt-6 leading-tight">
            Start Your Tech Journey <br />
            With CodYntra
          </h1>

          <p className="text-gray-400 mt-7 max-w-3xl mx-auto leading-8 text-lg">
            Learn modern technologies, work on real-world projects, and grow
            your development skills with internships and industry-level
            training.
          </p>

          <div className="flex items-center justify-center gap-5 mt-10 flex-wrap">
            <button
              onClick={() => setPopup(true)}
              className="
              bg-[#ff3b00]
              hover:bg-[#e63600]
              px-7
              py-3
              rounded-2xl
              font-medium
              duration-300
              cursor-pointer
            "
            >
              Apply Now
            </button>

            <button className="border border-white/20 hover:bg-white/10 px-7 py-3 rounded-2xl font-medium duration-300 cursor-pointer">
              Explore Careers
            </button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20">
          <div className="bg-white/5 border border-white/10 rounded-3xl p-8 text-center backdrop-blur-lg">
            <h1 className="text-4xl font-bold text-[#ff3b00]">50+</h1>

            <p className="text-gray-400 mt-3">Students Trained</p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-3xl p-8 text-center backdrop-blur-lg">
            <h1 className="text-4xl font-bold text-[#ff3b00]">20+</h1>

            <p className="text-gray-400 mt-3">Live Projects</p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-3xl p-8 text-center backdrop-blur-lg">
            <h1 className="text-4xl font-bold text-[#ff3b00]">10+</h1>

            <p className="text-gray-400 mt-3">Technologies</p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-3xl p-8 text-center backdrop-blur-lg">
            <h1 className="text-4xl font-bold text-[#ff3b00]">100%</h1>

            <p className="text-gray-400 mt-3">Practical Learning</p>
          </div>
        </div>

        {/* Technologies */}
        <div className="mt-28">
          <div className="text-center">
            <p className="text-[#ff3b00] uppercase tracking-[7px] font-semibold">
              Technologies
            </p>

            <h1 className="text-4xl lg:text-5xl font-bold mt-5">
              Technologies You Will Learn
            </h1>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mt-16">
            {tech.map((item) => (
              <motion.div
                key={item.id}
                whileHover={{ y: -10 }}
                className="
                bg-white/5
                border
                border-white/10
                rounded-3xl
                p-8
                flex
                flex-col
                items-center
                justify-center
                text-center
                duration-300
                cursor-pointer
                backdrop-blur-lg
              "
              >
                <h1 className="text-xl font-semibold">{item.title}</h1>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Career Roles */}
        <div className="mt-28">
          <div className="text-center">
            <p className="text-[#ff3b00] uppercase tracking-[7px] font-semibold">
              Opportunities
            </p>

            <h1 className="text-4xl lg:text-5xl font-bold mt-5">
              Open Career Roles
            </h1>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
            {careers.map((item) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                whileHover={{ y: -10 }}
                viewport={{ once: true }}
                className="
                bg-white/5
                backdrop-blur-lg
                border
                border-white/10
                rounded-3xl
                p-8
                hover:border-orange-500/40
                duration-300
                relative
                overflow-hidden
              "
              >
                <div
                  className="
                  absolute
                  w-32
                  h-32
                  bg-orange-500/10
                  blur-3xl
                  rounded-full
                  top-[-40px]
                  right-[-40px]
                "
                ></div>

                <h1 className="text-2xl font-bold text-white relative z-10">
                  {item.role}
                </h1>

                <div className="flex items-center gap-3 mt-5 relative z-10">
                  <span className="bg-[#ff3b00] px-4 py-1 rounded-full text-sm text-white">
                    {item.type}
                  </span>

                  <span className="text-gray-400 text-sm">{item.location}</span>
                </div>

                <p className="text-gray-400 mt-6 leading-7 relative z-10">
                  Join CodYntra and gain hands-on experience with modern
                  technologies and industry-level projects.
                </p>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setPopup(true)}
                  className="
                  mt-8
                  bg-gradient-to-r
                  from-orange-500
                  to-red-500
                  hover:from-orange-600
                  hover:to-red-600
                  px-6
                  py-3
                  rounded-2xl
                  font-medium
                  duration-300
                  cursor-pointer
                  text-white
                  shadow-lg
                  relative
                  z-10
                "
                >
                  Apply Now
                </motion.button>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Popup */}
      {popup && (
        <div
          className="
          fixed
          inset-0
         
          backdrop-blur-sm
          flex
          items-center
          justify-center
          z-50
          px-4
          overflow-y-auto
        "
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="relative w-full max-w-3xl"
          >
            {/* Close */}
            <button
              onClick={() => setPopup(false)}
              className="
              absolute
              top-5
              right-0
              text-white
              text-5xl
              z-50
              cursor-pointer
              font-bold
              hover:text-orange-500
              
              duration-300
            "
            >
              <RxCrossCircled />
            </button>

            {/* Job Form */}
            <JobForm />
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default Career;

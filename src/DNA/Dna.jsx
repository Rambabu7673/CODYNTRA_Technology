import React from "react";

const Dna = () => {
  return (
    <div className="w-full min-h-screen bg-black relative overflow-hidden py-24 px-4">
      {/* Animated Background */}
      <div className="absolute top-10 left-10 h-72 w-72 bg-orange-500/20 blur-3xl rounded-full animate-pulse"></div>

      <div className="absolute bottom-10 right-10 h-80 w-80 bg-orange-400/10 blur-3xl rounded-full animate-pulse"></div>

      <div className="absolute top-1/2 left-1/2 h-96 w-96 bg-orange-500/10 blur-3xl rounded-full animate-ping"></div>

      {/* Heading */}
      <div className="text-center relative z-10">
        <p className="text-orange-500 tracking-[5px] uppercase text-sm animate-pulse">
          CODYNTRA DNA
        </p>

        <h1 className="lg:text-6xl text-4xl font-extrabold text-white mt-5 leading-tight">
          More Than A Company,
          <span className="text-orange-500"> A Digital Revolution</span>
        </h1>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto mt-24 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <h1 className="text-white lg:text-5xl text-3xl font-bold leading-tight">
              We Don't Just Build Products,
              <span className="text-orange-500"> We Build The Future</span>
            </h1>

            <p className="text-white/70 leading-9 mt-8 lg:text-lg text-base">
              CODYNTRA Technologies focuses on creating smart digital ecosystems
              powered by innovation, AI, automation, cloud systems, and scalable
              technologies.
            </p>

            <p className="text-white/50 leading-8 mt-6">
              Our mission is to transform startup ideas into world-class digital
              products and help businesses grow faster with modern technology
              solutions.
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-4 mt-10">
              <span className="px-6 py-3 rounded-full bg-white/5 border border-orange-500/20 text-white backdrop-blur-md">
                AI Solutions
              </span>

              <span className="px-6 py-3 rounded-full bg-white/5 border border-orange-500/20 text-white backdrop-blur-md">
                Web Development
              </span>

              <span className="px-6 py-3 rounded-full bg-white/5 border border-orange-500/20 text-white backdrop-blur-md">
                Mobile Apps
              </span>

              <span className="px-6 py-3 rounded-full bg-white/5 border border-orange-500/20 text-white backdrop-blur-md">
                Automation
              </span>
            </div>
          </div>

          {/* Right Animation */}
          <div className="relative flex justify-center items-center">
            {/* Outer Circle */}
            <div
              className="
                relative
                h-[22rem]
                w-[22rem]
                lg:h-[28rem]
                lg:w-[28rem]
                rounded-full
                border
                border-orange-500/20
                animate-spin
                [animation-duration:20s]
                flex
                justify-center
                items-center
              "
            >
              {/* Orbit Text */}
              <div className="absolute -top-5 text-orange-500 font-bold tracking-[3px]">
                AI
              </div>

              <div className="absolute top-1/2 -left-10 text-orange-500 font-bold tracking-[3px]">
                WEB
              </div>

              <div className="absolute top-1/2 -right-10 text-orange-500 font-bold tracking-[3px]">
                APPS
              </div>

              <div className="absolute -bottom-5 text-orange-500 font-bold tracking-[3px]">
                CLOUD
              </div>

              {/* Middle Circle */}
              <div
                className="
                  h-44
                  w-44
                  lg:h-56
                  lg:w-56
                  rounded-full
                  bg-orange-500
                  flex
                  justify-center
                  items-center
                  text-black
                  font-extrabold
                  lg:text-4xl
                  text-2xl
                  shadow-[0_0_50px_rgba(255,115,0,0.9)]
                  animate-pulse
                "
              >
                CODYNTRA
              </div>
            </div>
          </div>
        </div>

        {/* Why CODYNTRA & Vision */}
        <div className="grid lg:grid-cols-2 gap-10 mt-16">
          {/* Left */}
          <div
            className="
              bg-white/5
              border
              border-orange-500/20
              rounded-3xl
              p-8
              backdrop-blur-md
              hover:scale-105
              transition-all
              duration-500
            "
          >
            <h1 className="text-orange-500 text-3xl font-bold">
              Why CODYNTRA?
            </h1>

            <p className="text-white/70 leading-8 mt-5">
              We combine creativity, innovation, and modern technology to
              deliver fast, secure, and scalable digital solutions for startups,
              businesses, and enterprises.
            </p>

            <p className="text-white/50 leading-8 mt-5">
              Our team focuses on real-world problem solving, performance
              optimization, and future-ready systems.
            </p>
          </div>

          {/* Right */}
          <div
            className="
              bg-white/5
              border
              border-orange-500/20
              rounded-3xl
              p-8
              backdrop-blur-md
              hover:scale-105
              transition-all
              duration-500
            "
          >
            <h1 className="text-orange-500 text-3xl font-bold">
              Future Vision
            </h1>

            <p className="text-white/70 leading-8 mt-5">
              CODYNTRA aims to become a global technology brand by building
              intelligent digital platforms, AI-powered systems, and
              next-generation business solutions.
            </p>

            <p className="text-white/50 leading-8 mt-5">
              We believe technology should empower businesses, simplify
              operations, and create limitless opportunities.
            </p>
          </div>
        </div>

        {/* Future Goals */}
        <div className="mt-16">
          <h1 className="text-orange-500 text-4xl font-bold text-center">
            Future Goals
          </h1>

          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 mt-12">
            {/* Goal 1 */}
            <div
              className="
                bg-white/5
                border
                border-orange-500/20
                rounded-3xl
                p-8
                backdrop-blur-md
                hover:scale-105
                transition-all
                duration-500
              "
            >
              <h1 className="text-white text-2xl font-bold">AI Innovation</h1>

              <p className="text-white/70 leading-8 mt-5">
                Building advanced AI systems and automation platforms for
                future-ready businesses.
              </p>
            </div>

            {/* Goal 2 */}
            <div
              className="
                bg-white/5
                border
                border-orange-500/20
                rounded-3xl
                p-8
                backdrop-blur-md
                hover:scale-105
                transition-all
                duration-500
              "
            >
              <h1 className="text-white text-2xl font-bold">
                Global Expansion
              </h1>

              <p className="text-white/70 leading-8 mt-5">
                Expanding CODYNTRA worldwide with innovative digital products
                and modern technology services.
              </p>
            </div>

            {/* Goal 3 */}
            <div
              className="
                bg-white/5
                border
                border-orange-500/20
                rounded-3xl
                p-8
                backdrop-blur-md
                hover:scale-105
                transition-all
                duration-500
              "
            >
              <h1 className="text-white text-2xl font-bold">Smart Ecosystem</h1>

              <p className="text-white/70 leading-8 mt-5">
                Creating smart digital ecosystems powered by cloud, AI,
                security, and scalable technologies.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Highlight */}
        <div
          className="
            mt-16
            border
            border-orange-500/20
            bg-white/5
            rounded-3xl
            p-10
            backdrop-blur-md
            text-center
          "
        >
          <h1 className="lg:text-4xl text-2xl font-extrabold text-white leading-tight">
            “Transforming Ideas Into
            <span className="text-orange-500">
              {" "}
              Powerful Digital Experiences
            </span>
            ”
          </h1>

          <p className="text-white/60 mt-6 leading-8 max-w-4xl mx-auto">
            From AI automation to modern web and mobile applications, CODYNTRA
            delivers innovative solutions designed for growth, scalability,
            security, and long-term success.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Dna;

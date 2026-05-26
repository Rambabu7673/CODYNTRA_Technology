import React from 'react'
import { GiUnstableProjectile } from "react-icons/gi";

const HappyClient = () => {
  return (
    <div className="w-full min-h-screen lg:h-[55rem] bg-[#080503] p-4">
      <div>
        <div className="text-center p-10 px-4 pt-30">
          {/* Small Heading */}
          <p
            className="
      text-orange-500
      tracking-[5px]
      uppercase
      text-sm
      mb-4
      animate-pulse
    "
          >
            Trusted By Clients
          </p>

          {/* Main Heading */}
          <h1
            className="
      lg:text-6xl
      text-4xl
      font-extrabold
      text-white
      leading-tight
    "
          >
            We Build Powerful Digital
            <br />
            <span
              className="
        text-orange-500
        drop-shadow-[0_0_20px_rgba(255,115,0,0.9)]
      "
            >
              Experiences For Businesses
            </span>
          </h1>

          {/* Description */}
          <p
            className="
      text-white/70
      max-w-3xl
      mx-auto
      mt-6
      lg:text-lg
      text-sm
      leading-8
    "
          >
            We have successfully completed 150+ projects with innovative web
            solutions, modern applications, and creative digital experiences
            that help businesses grow faster.
          </p>
        </div>

        {/* Images */}
        <div className="flex flex-wrap justify-center items-center gap-10 mt-14 text-white px-4">
          {/* Projects */}
          <div className="text-center  group shadow-[0_0_20px_rgba(255,115,0,0.9)] p-20 rounded">
            <h1
              className="
        lg:text-6xl
        text-4xl
        font-extrabold
        text-orange-500
        animate-pulse
        drop-shadow-[0_0_20px_rgba(255,115,0,0.9)]
      "
            >
              150+
            </h1>

            <p className="tracking-[4px] text-sm mt-3 text-white/80">
              PROJECTS COMPLETED
            </p>
          </div>

          {/* Divider */}
          <div className="hidden lg:block h-20 w-[1px] bg-gradient-to-b from-transparent via-orange-500 to-transparent animate-pulse"></div>

          {/* Happy Clients */}
          <div className="text-center  group shadow-[0_0_20px_rgba(255,115,0,0.9)] p-20 rounded ">
            <h1
              className="
        lg:text-6xl
        text-4xl
        font-extrabold
        text-orange-500
        animate-bounce
        drop-shadow-[0_0_20px_rgba(255,115,0,0.9)]
      "
            >
              100%
            </h1>

            <p className="tracking-[4px] text-sm mt-3 text-white/80">
              HAPPY CLIENTS FEEDBACK
            </p>
          </div>

          {/* Divider */}
          <div className="hidden lg:block h-20 w-[1px] bg-gradient-to-b from-transparent via-orange-500 to-transparent animate-pulse"></div>

          {/* Support */}
          <div className="text-center group shadow-[0_0_20px_rgba(255,115,0,0.9)] p-20 rounded">
            <h1
              className="
        lg:text-6xl
        text-4xl
        font-extrabold
        text-orange-500
        animate-pulse
        drop-shadow-[0_0_20px_rgba(255,115,0,0.9)]
      "
            >
              24/7
            </h1>

            <p className="tracking-[4px] text-sm mt-3 text-white/80">
              SUPPORT AVAILABLE
            </p>
          </div>
        </div>
        
      </div>
    </div>
  );
}

export default HappyClient

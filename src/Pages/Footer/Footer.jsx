import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaGithub,
  FaArrowRight,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";

import logo from "../../assets/logo.png";

const Footer = () => {
  return (
    <footer className="w-full bg-black relative overflow-hidden pt-20 pb-8 px-4">
      {/* Background Glow */}
      <div className="absolute top-0 left-0 h-72 w-72 bg-orange-500/20 blur-3xl rounded-full animate-pulse"></div>

      <div className="absolute bottom-0 right-0 h-72 w-72 bg-orange-400/10 blur-3xl rounded-full animate-pulse"></div>

      {/* Main Footer */}
      <div
        className="
          max-w-7xl
          mx-auto
          relative
          z-10
          grid
          lg:grid-cols-4
          md:grid-cols-2
          grid-cols-1
          gap-12
          border-b
          border-orange-500/20
          pb-14
        "
      >
        {/* Logo Section */}
        <div>
          {/* Logo */}
          <div className="flex items-center gap-4">
            <img
              src={logo}
              alt="logo"
              className="
                h-14
                w-14
                object-cover
                rounded-2xl
                hover:rotate-60
                 hover:scale-110
                    transition-all
                    duration-500
                border
                border-orange-500/30
                shadow-[0_0_20px_rgba(255,115,0,0.5)]
              "
            />

            <h1 className="text-4xl font-extrabold text-white">
              CODY
              <span className="text-orange-500">NTRA</span>
            </h1>
          </div>

          <p className="text-white/60 leading-8 mt-6">
            CODYNTRA Technologies creates modern websites, AI systems, mobile
            apps, and smart digital solutions.
          </p>

          {/* Social Icons */}
          <div className="flex gap-4 mt-8">
            {[FaFacebookF, FaInstagram, FaLinkedinIn, FaGithub].map(
              (Icon, index) => (
                <div
                  key={index}
                  className="
                    h-12
                    w-12
                    rounded-full
                    bg-white/5
                    border
                    border-orange-500/20
                    flex
                    justify-center
                    items-center
                    text-white
                    hover:rotate-45
                    hover:scale-105
                    hover:bg-orange-500
                    hover:scale-110
                    transition-all
                    duration-500
                    cursor-pointer
                  "
                >
                  <Icon />
                </div>
              ),
            )}
          </div>
        </div>

        {/* Services */}
        <div>
          <h1 className="text-2xl font-bold text-white">Services</h1>

          <div className="mt-8 space-y-5">
            {[
              "Web Development",
              "Mobile Apps",
              "AI Solutions",
              "UI/UX Design",
              "Cloud Services",
            ].map((item, index) => (
              <div
                key={index}
                className="
                  flex
                  items-center
                  gap-3
                  text-white/60
                  hover:text-orange-500
                  transition-all
                  duration-500
                  cursor-pointer
                  hover:translate-x-2
                "
              >
                <FaArrowRight className="text-orange-500 text-sm" />

                <p>{item}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Company */}
        <div>
          <h1 className="text-2xl font-bold text-white">Company</h1>

          <div className="mt-8 space-y-5">
            {[
              "About Us",
              "Careers",
              "Internships",
              "Projects",
              "Contact Us",
            ].map((item, index) => (
              <div
                key={index}
                className="
                  flex
                  items-center
                  gap-3
                  text-white/60
                  hover:text-orange-500
                  transition-all
                  duration-500
                  cursor-pointer
                  hover:translate-x-2
                "
              >
                <FaArrowRight className="text-orange-500 text-sm" />

                <p>{item}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Newsletter */}
        <div>
          <h1 className="text-2xl font-bold text-white">Newsletter</h1>

          <p className="text-white/60 leading-7 mt-6">
            Subscribe for latest updates.
          </p>

          {/* Input */}
          <div className="mt-8">
            <input
              type="email"
              placeholder="Enter Your Email"
              className="
                w-full
                bg-white/5
                border
                border-orange-500/20
                rounded
                px-5
                py-4
                text-white
                outline-none
                focus:border-orange-500
                transition-all
                duration-500
              "
            />

            <button
              className="
                w-full
                py-4
                mt-4
                rounded
                bg-orange-500
                text-white
                font-semibold
                hover:bg-orange-600
                transition-all
                duration-500
                shadow-[0_0_20px_rgba(255,115,0,0.4)]
                cursor-pointer
              "
            >
              Subscribe Now
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Contact Row */}
      <div
        className="
          max-w-7xl
          mx-auto
          mt-12
          pt-8
          border-t
          border-orange-500/20
          flex
          flex-col
          md:flex-row
          justify-center
          items-center
          gap-8
          text-white/70
          relative
          z-10
        "
      >
        {/* Location */}
        <div
          className="
            flex
            items-center
            gap-4
            hover:text-orange-500
            transition-all
            duration-500
            cursor-pointer
          "
        >
          <div
            className="
              h-11
              w-11
              rounded-full
              bg-orange-500/10
              border
              border-orange-500/20
              flex
              justify-center
              items-center
              text-orange-500
            "
          >
            <FaMapMarkerAlt />
          </div>

          <p>India</p>
        </div>

        {/* Phone */}
        <div
          className="
            flex
            items-center
            gap-4
            hover:text-orange-500
            transition-all
            duration-500
            cursor-pointer
          "
        >
          <div
            className="
              h-11
              w-11
              rounded-full
              bg-orange-500/10
              border
              border-orange-500/20
              flex
              justify-center
              items-center
              text-orange-500
            "
          >
            <FaPhoneAlt />
          </div>

          <p>+91 9876543210</p>
        </div>

        {/* Email */}
        <div
          className="
            flex
            items-center
            gap-4
            hover:text-orange-500
            transition-all
            duration-500
            cursor-pointer
          "
        >
          <div
            className="
              h-11
              w-11
              rounded-full
              bg-orange-500/10
              border
              border-orange-500/20
              flex
              justify-center
              items-center
              text-orange-500
            "
          >
            <FaEnvelope />
          </div>

          <p>info@codyntra.com</p>
        </div>
      </div>

      {/* Bottom Footer */}
      <div
        className="
          max-w-7xl
          mx-auto
          pt-8
          flex
          flex-col
          lg:flex-row
          justify-between
          items-center
          gap-5
          relative
          z-10
        "
      >
        <p className="text-white/50 text-center">
          © 2026 CODYNTRA Technologies. All Rights Reserved.
        </p>

        <div className="flex gap-8 text-white/50">
          <p className="hover:text-orange-500 transition-all duration-500 cursor-pointer">
            Privacy Policy
          </p>

          <p className="hover:text-orange-500 transition-all duration-500 cursor-pointer">
            Terms & Conditions
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

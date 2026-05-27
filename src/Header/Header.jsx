import React, { useState, useEffect } from "react";
import image from "../assets/image.png";
import logo from "../assets/logo.png";
import { FaRobot } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { CgProfile } from "react-icons/cg";

import Signup from "../Register/Signup";
import UserLogin from "../Register/UserLogin";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  const [showAuth, setShowAuth] = useState(false);

  const [isLogin, setIsLogin] = useState(false);

  const navigate = useNavigate();

  // Get User
  const user = JSON.parse(localStorage.getItem("user"));

  // Protected Route
  const handleProtectedRoute = (path) => {
    if (user) {
      navigate(path);
    } else {
      setShowAuth(true);
    }
  };

  // Stop Scroll
  useEffect(() => {
    if (showAuth) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [showAuth]);

  // Logout
  const handleLogout = () => {
    localStorage.removeItem("user", null);

    window.location.reload();
  };

  return (
    <div
      className="w-full min-h-screen lg:h-screen bg-gray-600 relative"
      onClick={() => setShowMenu(false)}
    >
      {/* Navbar */}
      <div className="w-full flex justify-center absolute top-0 z-50 lg:px-4">
        <nav
          onClick={(e) => e.stopPropagation()}
          className="
            w-full
            max-w-[75rem]
            h-20
            lg:mt-4
            bg-white/10
            backdrop-blur-lg
            shadow-lg
            text-white
            lg:rounded-xl
            flex
            justify-between
            items-center
            px-6
            fixed
          "
        >
          {/* Logo */}
          <div className="cursor-pointer" onClick={() => navigate("/")}>
            <img
              src={logo}
              alt=""
              className="h-20 w-20 object-contain hover:rotate-45 transition-all duration-500"
            />
          </div>

          {/* Desktop Menu */}
          <ul
            className="
              hidden
              lg:flex
              gap-10
              items-center
              text-md
              font-semibold
              tracking-wider
              
              
            "
          >
            <li
              className="cursor-pointer
              hover:rotate-45 hover:text-[#ff3b00] transition-all duration-500"
              onClick={() => handleProtectedRoute("/")}
            >
              Home
            </li>

            <li
              className="cursor-pointer
              hover:rotate-45
              hover:text-[#ff3b00] transition-all duration-500"
              onClick={() => handleProtectedRoute("/CarrerGrow")}
            >
              Career
            </li>

            <li
              className="cursor-pointer
              hover:rotate-45
              hover:text-[#ff3b00] transition-all duration-500"
              onClick={() => handleProtectedRoute("/isClientSolution")}
            >
              Solution
            </li>

            <li
              className="cursor-pointer
              hover:rotate-45
              hover:text-[#ff3b00] transition-all duration-500"
              onClick={() => handleProtectedRoute("/princing")}
            >
              Pricing
            </li>

            <li
              className="cursor-pointer
              hover:rotate-45
              hover:text-[#ff3b00] transition-all duration-500"
              onClick={() => handleProtectedRoute("/aboutUs")}
            >
              About Us
            </li>

            <li
              className="cursor-pointer
              hover:rotate-45
              hover:text-[#ff3b00] transition-all duration-500"
              onClick={() => handleProtectedRoute("/contact")}
            >
              Contact
            </li>
          </ul>

          {/* Desktop Right */}
          <div className="hidden lg:block">
            {user ? (
              <div className="relative group border-4 border-yellow-300 rounded-full">
                <img
                  src={`https://codeyntra-backend-01.onrender.com/${user.profileImage}`}
                  alt=""
                  onClick={handleLogout}
                  className="
      w-12
      h-12
      rounded-full
      object-cover
      cursor-pointer
    "
                />

                <div
                  className="
      absolute
      top-14
      left-1/2
      -translate-x-1/2
      bg-black
      text-white
      text-sm
      px-3
      py-1
      rounded-lg
      hidden
      group-hover:block
    "
                >
                  Logout
                </div>
              </div>
            ) : (
              <button
                onClick={() => setShowAuth(true)}
                className="
                    bg-white
                    text-black
                    font-semibold
                    hover:bg-[#ff3b00]
                    hover:rotate-25
                    hover:text-white
                    cursor-pointer
                    px-5
                    py-2
                    rounded-lg
                    hover:scale-105
                    transition-all
                    duration-500
                  "
              >
                Register
              </button>
            )}
          </div>

          {/* Mobile Menu */}
          <div
            className="lg:hidden text-3xl cursor-pointer"
            onClick={() => setShowMenu(!showMenu)}
          >
            ☰
          </div>
        </nav>
      </div>

      {/* Mobile Dropdown */}
      {showMenu && (
        <div
          className="
              lg:hidden
              absolute
              top-20
              left-0
              w-full
              z-50
              bg-white/10
             
              text-white
             
            "
        >
          <div
            className="
                fixed
                w-full
                backdrop-blur-lg
                text-white
                p-5
               bg-black/50
          
              "
          >
            <ul className="flex flex-col gap-5 text-lg">
              <li>
                <a href="/">Home</a>
              </li>

              <li>
                <a href="/CarrerGrow">Career</a>
              </li>

              <li>
                <a href="/isClientSolution">Solution</a>
              </li>

              <li>
                <a href="/princing">Pricing</a>
              </li>

              <li>
                <a href="/aboutUs">About Us</a>
              </li>

              <li>
                <a href="/contact">Contact</a>
              </li>
            </ul>

            {/* Mobile Auth */}
            <div className="mt-6">
              {user ? (
                <div className="flex items-center gap-3 justify-around">
                  <img
                    src={`https://codeyntra-backend-01.onrender.com/${user.profileImage}`}
                    alt=""
                    className="
                          w-12
                          h-12
                          rounded-full
                          object-cover
                          border
                        "
                  />

                  <div >
                    <h1 className="font-semibold">{user.name}</h1>

                    <button
                      onClick={handleLogout}
                      className="
                            mt-2
                            bg-red-500
                            px-4
                            py-1
                            rounded-lg
                          "
                    >
                      Logout
                    </button>
                  </div>
                </div>
              ) : (
                <button
                  onClick={() => setShowAuth(true)}
                  className="
                        px-10
                        bg-white
                        text-black
                        py-2
                        rounded
                        font-semibold
                      "
                >
                  Register
                </button>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Auth Modal */}
      {showAuth && (
        <div
          className="
              fixed
              inset-0
              bg-black/60
              flex
              justify-center
              items-center
              z-[999]
              p-4
            "
        >
          <div
            className="
                relative
                w-full
                max-w-lg
              "
          >
            {/* Close */}
            <button
              onClick={() => setShowAuth(false)}
              className="
                  absolute
                
                  top-10
                  -right-2
                  bg-red-500
                  text-white
                  w-10
                  h-10
                  rounded-full
                  text-xl
                  z-50
                "
            >
              ×
            </button>

            {/* Toggle Auth */}
            {isLogin ? (
              <UserLogin setIsLogin={setIsLogin} />
            ) : (
              <Signup setIsLogin={setIsLogin} />
            )}
          </div>
        </div>
      )}

      {/* Hero Section */}
      <div className="relative w-full h-screen lg:h-[46rem] overflow-hidden">
        {/* Background */}
        <img
          src={image}
          alt=""
          className="w-full h-screen lg:h-[46rem] object-cover"
        />
        {/* Hero Content */}
        {/* Top Badge */}
        <p
          className="
    text-[#ff3b00]
    absolute
    top-50
    left-1/2
    -translate-x-1/2
    shadow-lg
    bg-white/10
    backdrop-blur-md
    border
    border-white/20
    rounded-full
    lg:px-5
    lg:py-3
    px-4
    py-2
    text-sm
    tracking-widest
    flex
    justify-center
    items-center
    gap-3
    whitespace-nowrap
    z-20
  "
        >
          <span
            className="
      h-3
      w-3
      rounded-full
      bg-orange-500
      animate-pulse
    "
          ></span>
          TOP WEB AGENCY IN BIHAR
        </p>
        <div className="absolute top-70 left-1/2 -translate-x-1/2 text-center w-full px-4 z-20">
          <h1 className="tracking-widest leading-widest">
            <span className="text-white lg:text-7xl text-4xl font-bold">
              ANYTHING THAT
            </span>

            <br />

            <span className="text-white lg:text-7xl text-4xl font-bold">
              CAN BE BUILT
            </span>

            <br />

            <span className="text-orange-500 lg:text-7xl text-4xl font-bold">
              BY HUMANS.
            </span>
          </h1>

          {/* Services */}
          <div className="mt-8 flex justify-center">
            <ul className="flex flex-wrap justify-center gap-4 text-white tracking-widest lg:text-xl text-sm list-disc list-inside font-bold">
              <li>Web</li>

              <li>Android App</li>

              <li>Admin Panel</li>

              <li>AI Solution</li>
            </ul>
          </div>

          {/* Buttons */}
          <div className="flex flex-col lg:flex-row gap-5 justify-center items-center mt-8 px-4">
            <button
              className="
        px-10
        py-3
        rounded-lg
        text-white
        font-medium
        bg-orange-500
        hover:bg-orange-600
        hover:scale-105
        transition-all
        cursor-pointer
      "
            >
              <a href="/princing">Get Demo Our Project</a>
            </button>

            <button
              className="
        px-10
        py-3
        rounded-lg
        text-white
        font-medium
        bg-white/10
        backdrop-blur-md
        border
        border-white/20
        hover:bg-orange-600
        hover:border-orange-600
        hover:scale-105
        transition-all
        cursor-pointer
      "
            >
              <a href="/contact">Build Your new Project</a>
            </button>
          </div>
        </div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* AI Button */}
        <div
          className="
            fixed
            bottom-6
            right-6
            lg:bottom-8
            lg:right-8
            z-50
            group
          "
        >
          <div
            className="
              absolute
              inset-0
              scale-125
              rounded-full
              bg-black/40
              backdrop-blur-2xl
              border
              border-orange-500/20
            "
          ></div>

          <div
            className="
              absolute
              inset-0
              rounded-full
              bg-orange-500/40
              blur-2xl
              animate-pulse
            "
          ></div>

          <button
            className="
              relative
              h-14
              w-14
              lg:h-16
              lg:w-16
              rounded-full
              bg-gradient-to-br
              from-orange-400
              to-orange-600
              flex
              justify-center
              items-center
              text-white
              text-2xl
              lg:text-3xl
              
            "
          >
            <a
              href="https://wa.me/7673865989"
              target="_blank"
              rel="noopener noreferrer"
              className=" shadow-lg z-50"
            >
              <FaRobot />
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;

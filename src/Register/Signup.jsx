import React, { useState } from "react";
import response from "../../api/axios";

const Signup = ({ setIsLogin = () => {} }) => {
  console.log(setIsLogin);
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    phoneNumber: "",
    role: "",
    profileImage: null,
  });

  // Handle Change
  const handleChange = (e) => {
    if (e.target.name === "profileImage") {
      setForm({
        ...form,
        profileImage: e.target.files[0],
      });
    } else {
      setForm({
        ...form,
        [e.target.name]: e.target.value,
      });
    }
  };

  // Handle Submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();

      formData.append("name", form.name);
      formData.append("email", form.email);
      formData.append("password", form.password);
      formData.append("phoneNumber", form.phoneNumber);
      formData.append("role", form.role);
      formData.append("profileImage", form.profileImage);

      const api = await response.post("/api/register", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      localStorage.setItem("user", JSON.stringify(api.data.user));

      console.log(api.data);

      alert("Signup Success ✅");

      // Login Form Show
      setIsLogin(true);
    } catch (error) {
      console.log(error);

      console.log(error.response?.data);

      alert(error.response?.data?.message || "Signup Failed");
    }
  };

  return (
    <div
      className="
      mt-30
      flex
      items-center
      justify-center
      bg-[#080503]
      relative
      overflow-hidden
      px-4
      py-6
     lg:h-[35rem]
    "
    >
      {/* Background Circle */}
      <div
        className="
        absolute
        w-72
        h-72
        bg-orange-500/10
        rounded-full
        blur-3xl
        animate-pulse
        top-[-50px]
        left-[-50px]
      "
      ></div>

      <div
        className="
        absolute
        w-72
        h-72
        bg-orange-500/20
        rounded-full
        blur-3xl
        animate-bounce
        bottom-[-50px]
        right-[-50px]
      "
      ></div>

      {/* Form */}
      <form
        onSubmit={handleSubmit}
        className="
        relative
        z-10
        w-full
        max-w-[680px]
        bg-white/10
        backdrop-blur-xl
        shadow-2xl
        rounded
        p-5
      "
      >
        {/* Heading */}
        <div className="text-center mb-4">
          <h1 className="text-2xl font-bold text-white">Create Account</h1>
        </div>

        {/* Name */}
        <div className="mb-3">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            onChange={handleChange}
            className="
            w-full
            bg-white/10
            border
            border-white/10
            text-white
            placeholder-gray-400
            p-3
            rounded
            outline-none
            text-sm
            focus:border-orange-500
          "
          />
        </div>

        {/* Email */}
        <div className="mb-3">
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            onChange={handleChange}
            className="
            w-full
            bg-white/10
            border
            border-white/10
            text-white
            placeholder-gray-400
            p-3
            rounded
            outline-none
            text-sm
            focus:border-orange-500
          "
          />
        </div>

        {/* Password */}
        <div className="mb-3">
          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
            className="
            w-full
            bg-white/10
            border
            border-white/10
            text-white
            placeholder-gray-400
            p-3
            rounded
            outline-none
            text-sm
            focus:border-orange-500
          "
          />
        </div>

        {/* Phone */}
        <div className="mb-3">
          <input
            type="text"
            name="phoneNumber"
            placeholder="Phone Number"
            onChange={handleChange}
            className="
            w-full
            bg-white/10
            border
            border-white/10
            text-white
            placeholder-gray-400
            p-3
            rounded
            outline-none
            text-sm
            focus:border-orange-500
          "
          />
        </div>

        {/* Role */}
        <div className="mb-3">
          <select
            name="role"
            onChange={handleChange}
            className="
            w-full
            bg-white/10
            border
            border-white/10
            text-white
            p-3
            rounded
            outline-none
            text-sm
            focus:border-orange-500
          "
          >
            <option className="text-black" value="">
              Select Role
            </option>

            <option className="text-black" value="student">
              Student
            </option>

            <option className="text-black" value="client">
              Client
            </option>
          </select>
        </div>

        {/* Image */}
        <div className="mb-4">
          <input
            type="file"
            name="profileImage"
            onChange={handleChange}
            className="
            w-full
            bg-white/10
            border
            border-dashed
            border-white/10
            text-gray-300
            p-2
            rounded-xl
            text-sm
            cursor-pointer
          "
          />
        </div>

        {/* Button */}
        <button
          type="submit"
          className="
          w-full
          bg-gradient-to-r
          from-orange-500
          to-red-500
          text-white
          font-semibold
          py-3
          rounded-xl
          hover:scale-[1.02]
          transition-all
        "
        >
          Sign Up
        </button>

        {/* Login Toggle */}
        <p className="text-center mt-4 text-white text-lg">
          Already have an account?
          <span
            className="
              text-orange-500
              ml-2
              cursor-pointer
            "
            onClick={() => setIsLogin(true)}
          >
            Login
          </span>
        </p>
      </form>
    </div>
  );
};

export default Signup;

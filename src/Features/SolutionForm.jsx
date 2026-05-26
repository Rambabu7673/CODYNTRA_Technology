import React, { useState } from "react";
import api from "../../api/problemApi";

const SolutionForm = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    problem: "",
  });

  // Handle Input
  const changeHandle = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Submit Form
  const onSubmittedHandler = async (e) => {
    e.preventDefault();

    try {
      const user = JSON.parse(localStorage.getItem("user"));

      const data = {
        name: form.name,
        email: form.email,
        phoneNumber: form.phoneNumber,
        problem: form.problem,
        userId: user?.id,
      };

      const res = await api.post("/api/problem", data);

      console.log(res.data);

      alert("Form Submitted Successfully");

      setForm({
        name: "",
        email: "",
        phoneNumber: "",
        problem: "",
      });
    } catch (error) {
      console.log(error.response?.data || error.message);
    }
  };

  return (
    <div className="w-full">
      {/* Form Card */}
      <div
        className="
          relative
          bg-[#111]
          border
          border-white/10
          rounded
          p-4
          shadow-xl
          overflow-hidden
        "
      >
        {/* Glow */}
        <div className="absolute top-0 left-0 w-40 h-40 bg-orange-500/20 blur-3xl rounded-full"></div>

        {/* Heading */}
        <div className="relative z-10 text-center mb-4">
          <h1 className="text-2xl font-bold text-white">Submit Problem</h1>

          <p className="text-gray-400 text-xs mt-1">Enter your details</p>
        </div>

        {/* Form */}
        <form onSubmit={onSubmittedHandler} className="relative z-10 space-y-3">
          {/* Name */}
          <div>
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={form.name}
              onChange={changeHandle}
              className="
                w-full
                px-3
                py-2.5
                rounded-lg
                bg-white/5
                border
                border-white/10
                text-sm
                text-white
                placeholder-gray-500
                outline-none
                focus:border-orange-500
                transition
              "
            />
          </div>

          {/* Email */}
          <div>
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={form.email}
              onChange={changeHandle}
              className="
                w-full
                px-3
                py-2.5
                rounded-lg
                bg-white/5
                border
                border-white/10
                text-sm
                text-white
                placeholder-gray-500
                outline-none
                focus:border-orange-500
                transition
              "
            />
          </div>

          {/* Phone */}
          <div>
            <input
              type="text"
              name="phoneNumber"
              placeholder="Phone Number"
              value={form.phoneNumber}
              onChange={changeHandle}
              className="
                w-full
                px-3
                py-2.5
                rounded-lg
                bg-white/5
                border
                border-white/10
                text-sm
                text-white
                placeholder-gray-500
                outline-none
                focus:border-orange-500
                transition
              "
            />
          </div>

          {/* Problem */}
          <div>
            <textarea
              rows="2"
              name="problem"
              placeholder="Your Problem"
              value={form.problem}
              onChange={changeHandle}
              className="
                w-full
                px-3
                py-2.5
                rounded-lg
                bg-white/5
                border
                border-white/10
                text-sm
                text-white
                placeholder-gray-500
                outline-none
                resize-none
                focus:border-orange-500
                transition
              "
            ></textarea>
          </div>

          {/* Button */}
          <button
            type="submit"
            className="
              w-full
              py-2.5
              rounded-lg
              bg-gradient-to-r
              from-orange-500
              to-red-500
              text-white
              text-sm
              font-semibold
              hover:scale-[1.02]
              duration-300
            "
          >
            Submit Problem 🚀
          </button>
        </form>
      </div>
    </div>
  );
};

export default SolutionForm;

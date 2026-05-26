import React, { useState } from "react";
import { motion } from "framer-motion";
import api from "../../api/job";

const JobForm = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    location: "",
    message: "",
    resume: null,
  });

  // Handle Change
  const handleChange = (e) => {
    if (e.target.name === "resume") {
      setForm({
        ...form,
        resume: e.target.files[0],
      });
    } else {
      setForm({
        ...form,
        [e.target.name]: e.target.value,
      });
    }
  };

  // Submit Form
  const submitForm = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();

      const user = JSON.parse(localStorage.getItem("user"));

      formData.append("name", form.name);
      formData.append("email", form.email);
      formData.append("phoneNumber", form.phoneNumber);
      formData.append("location", form.location);
      formData.append("message", form.message);
      formData.append("resume", form.resume);
      formData.append("userId", user?.id);
      console.log("This is user =", user);
      console.log("This is form =", user?.id);

      const res = await api.post("/form/job", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      console.log(res.data);

      alert("Form Submitted Successfully");

      // Reset Form
      setForm({
        name: "",
        email: "",
        phoneNumber: "",
        location: "",
        message: "",
        resume: null,
      });

    } catch (error) {
      console.log(error.response?.data || error.message);
    }
  };

return (
  <div
    className="
    mt-10
    flex
    items-center
    justify-center
    bg-black/40
    relative
    overflow-hidden
    px-4
    py-10
   lg:h-[40rem]
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
    <motion.form
      initial={{ opacity: 0, y: 80 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      onSubmit={submitForm}
      className="
      relative
      z-10
      w-full
      max-w-[680px]
      bg-white/10
      backdrop-blur-xl
      shadow-2xl
      rounded
      p-6
      flex
      flex-col
      gap-4
    "
    >
      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="text-3xl font-bold text-center text-white tracking-wider"
      >
        Apply For here job
      </motion.h1>

      {/* Name */}
      <motion.input
        whileFocus={{ scale: 1.02 }}
        type="text"
        name="name"
        placeholder="Full Name"
        value={form.name}
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
        focus:border-orange-500
      "
      />

      {/* Email */}
      <motion.input
        whileFocus={{ scale: 1.02 }}
        type="email"
        name="email"
        placeholder="Email Address"
        value={form.email}
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
        focus:border-orange-500
      "
      />

      {/* Phone */}
      <motion.input
        whileFocus={{ scale: 1.02 }}
        type="text"
        name="phoneNumber"
        placeholder="Phone Number"
        value={form.phoneNumber}
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
        focus:border-orange-500
      "
      />

      {/* Location */}
      <motion.input
        whileFocus={{ scale: 1.02 }}
        type="text"
        name="location"
        placeholder="Location"
        value={form.location}
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
        focus:border-orange-500
      "
      />

      {/* Message */}
      <motion.textarea
        whileFocus={{ scale: 1.02 }}
        name="message"
        placeholder="Write your cover letter here. Tell the company why you are interested in this job, why you are the right candidate, and describe your experience and skills related to this role. "
        value={form.message}
        onChange={handleChange}
        className="
        w-full
        h-32
        resize-none
        bg-white/10
        border
        border-white/10
        text-white
        placeholder-gray-400
        p-3
        rounded
        outline-none
        focus:border-orange-500
      "
      />

      {/* Resume */}
      <div
        className="
        w-full
        bg-white/10
        border
        border-dashed
        border-white/10
        text-gray-300
        p-3
        rounded-xl
      "
      >
        <input
          type="file"
          name="resume"
          onChange={handleChange}
         
          className="w-full cursor-pointer"
        />
      </div>

      {/* Button */}
      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.95 }}
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
        transition-all
      "
      >
        Submit Application
      </motion.button>
    </motion.form>
  </div>
);
};

export default JobForm;
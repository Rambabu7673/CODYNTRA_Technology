import React, { useState } from "react";
import response from "../../api/userPlan";

const ProductDisplay = ({ selectedPlan, setShowPopup }) => {
  const user = JSON.parse(localStorage.getItem("user"));

  const [form, setform] = useState({
    name: "",

    phoneNumber: "",

    email: "",

    message: "",
  });

  // Input
  const handleInput = (e) => {
    setform({
      ...form,

      [e.target.name]: e.target.value,
    });
  };

  // Submit
  const planHandleSubmited = async (e) => {
    e.preventDefault();

    try {
      const api = await response.post("/user/plan", {
        ...form,

        userId: user?.id,

        planName: selectedPlan.type,

        planPrice: selectedPlan.price,
      });

    

      console.log(api.data);

      alert("Plan Activated Successfully ✅");

document.body.style.overflow = "hidden";
      setShowPopup(false);
    } catch (error) {
      console.log(error);

      alert("Plan not submitted");
    }
  };

  return (
    <div
      className="
        relative
        z-50
        w-full
        max-w-xl
        bg-black
        backdrop-blur-xl
        border
        border-orange-500/20
        rounded-3xl
        p-5
        shadow-[0_0_40px_rgba(255,115,0,0.2)]
      "
    >
      {/* Close */}
      <button
        onClick={() => setShowPopup(false)}
        className="
          absolute
          top-3
          right-3
          h-8
          w-8
          rounded-full
          bg-red-500
          text-white
          text-lg
        "
      >
        ×
      </button>

      {/* Emoji */}
      <div className="flex justify-center">
        <div
          className="
            h-16
            w-16
            rounded-full
            bg-orange-500
            flex
            justify-center
            items-center
            text-3xl
            animate-bounce
          "
        >
          😊
        </div>
      </div>

      {/* Heading */}
      <h1
        className="
          text-center
          text-white
          text-3xl
          font-bold
          mt-3
        "
      >
        {selectedPlan.title}
      </h1>

      <h2
        className="
          text-center
          text-orange-500
          text-2xl
          font-bold
          mt-2
        "
      >
        {selectedPlan.type} Plan
      </h2>

      x

      <p
        className="
          text-center
          text-white/60
          mt-2
          text-sm
        "
      >
        Our Team Will Contact You Soon 🚀
      </p>

      {/* Form */}
      <form
        onSubmit={planHandleSubmited}
        className="
          mt-5
          space-y-3
        "
      >
        {/* Name */}
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleInput}
          placeholder="Your Name"
          className="
            w-full
            bg-white/10
            border
            border-orange-500/20
            rounded-xl
            px-4
            py-2.5
            text-white
            outline-none
          "
        />

        {/* Phone */}
        <input
          type="text"
          name="phoneNumber"
          value={form.phoneNumber}
          onChange={handleInput}
          placeholder="Phone Number"
          className="
            w-full
            bg-white/10
            border
            border-orange-500/20
            rounded-xl
            px-4
            py-2.5
            text-white
            outline-none
          "
        />

        {/* Email */}
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleInput}
          placeholder="Email Address"
          className="
            w-full
            bg-white/10
            border
            border-orange-500/20
            rounded-xl
            px-4
            py-2.5
            text-white
            outline-none
          "
        />

        {/* Message */}
        <textarea
          rows="3"
          name="message"
          value={form.message}
          onChange={handleInput}
          placeholder="Write your project details..."
          className="
            w-full
            bg-white/10
            border
            border-orange-500/20
            rounded-xl
            px-4
            py-2.5
            text-white
            outline-none
            resize-none
          "
        ></textarea>

        {/* Button */}
        <button
          type="submit"
          className="
            w-full
            py-3
            rounded-2xl
            bg-orange-500
            text-white
            text-base
            font-bold
            hover:bg-orange-600
            transition-all
          "
        >
          Activate Plan 🚀
        </button>
      </form>
    </div>
  );
};

export default ProductDisplay;

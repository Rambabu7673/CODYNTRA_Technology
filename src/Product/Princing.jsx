import React, { useState } from "react";
import ProductDisplay from "../ProductDisplay/ProductDisplay";

const plans = [
  {
    title: "Web Development",
    type: "Low",
    price: "14K",

    features: ["5 Pages", "Responsive Design", "Contact Form"],
  },

  {
    title: "Web Development",
    type: "Medium",
    price: "39K",

    features: ["10 Pages", "Admin Panel", "SEO Optimization"],
  },

  {
    title: "Web Development",
    type: "Standard",
    price: "79K",

    features: ["Premium UI", "Custom Features", "Payment Gateway"],
  },

  {
    title: "Mobile App",
    type: "Low",
    price: "49K",

    features: ["Android App", "Login System", "Modern UI"],
  },

  {
    title: "Mobile App",
    type: "Medium",
    price: "99K",

    features: ["Android + iOS", "Realtime API", "Notifications"],
  },

  {
    title: "Mobile App",
    type: "Standard",
    price: "199K",

    features: ["Premium UI", "Payment System", "Cloud Database"],
  },

  {
    title: "Software",
    type: "Low",
    price: "39K",

    features: ["Basic Software", "Login System", "Database"],
  },

  {
    title: "Software",
    type: "Medium",
    price: "79K",

    features: ["Dashboard", "Reports", "Admin Control"],
  },

  {
    title: "Software",
    type: "Standard",
    price: "149K",

    features: ["Automation", "Cloud System", "Advanced Security"],
  },

  {
    title: "AI Solutions",
    type: "Low",
    price: "79K",

    features: ["AI Chatbot", "Automation", "Basic AI"],
  },

  {
    title: "AI Solutions",
    type: "Medium",
    price: "149K",

    features: ["Advanced AI", "Realtime System", "Smart Dashboard"],
  },

  {
    title: "AI Solutions",
    type: "Standard",
    price: "399K",

    features: ["Enterprise AI", "Cloud AI", "Premium Support"],
  },
];

const Princing = () => {
  const [showPopup, setShowPopup] = useState(false);

  const [selectedPlan, setSelectedPlan] = useState({
    title: "",
    type: "",
    price: "",
  });

  return (
    <div
      className="
        w-full
        bg-black
        py-16
        px-4
        relative
        overflow-hidden
      "
    >
      {/* Glow */}
      <div
        className="
          absolute
          top-0
          left-0
          h-72
          w-72
          bg-orange-500/20
          blur-3xl
          rounded-full
        "
      ></div>

      <div
        className="
          absolute
          bottom-0
          right-0
          h-72
          w-72
          bg-orange-400/10
          blur-3xl
          rounded-full
        "
      ></div>

      {/* Heading */}
      <div
        className="
          text-center
          relative
          z-10
        "
      >
        <p
          className="
            text-orange-500
            tracking-[4px]
            uppercase
            text-sm
          "
        >
          OUR PRICING
        </p>

        <h1
          className="
            lg:text-5xl
            text-3xl
            font-extrabold
            text-white
            mt-4
          "
        >
          Pricing
          <span className="text-orange-500"> Plans</span>
        </h1>
      </div>

      {/* Cards */}
      <div
        className="
          max-w-7xl
          mx-auto
          mt-12
          grid
          lg:grid-cols-4
          md:grid-cols-2
          grid-cols-1
          gap-5
          relative
          z-10
        "
      >
        {plans.map((plan, index) => (
          <div
            key={index}
            className="
              bg-white/5
              rounded
              p-6
              backdrop-blur-xl
              border
              
              hover:border-orange-500
              hover:-translate-y-2
              transition-all
              duration-500
              relative
              overflow-hidden
            "
          >
            {/* Glow */}
            <div
              className="
                absolute
                top-0
                right-0
                h-24
                w-24
                bg-orange-500/10
                blur-2xl
                rounded-full
              "
            ></div>

            {/* Service */}
            <p
              className="
                text-orange-500
                text-sm
                font-semibold
                relative
                z-10
              "
            >
              {plan.title}
            </p>

            {/* Plan */}
            <h1
              className="
                text-white
                text-2xl
                font-bold
                mt-2
                relative
                z-10
              "
            >
              {plan.type}
            </h1>

            {/* Price */}
            <h2
              className="
                text-orange-500
                text-3xl
                font-extrabold
                mt-4
                relative
                z-10
              "
            >
              ₹{plan.price}
            </h2>

            {/* Features */}
            <div
              className="
                mt-5
                space-y-3
                relative
                z-10
              "
            >
              {plan.features.map((feature, i) => (
                <div
                  key={i}
                  className="
                      flex
                      items-center
                      gap-3
                      text-white/70
                      text-sm
                    "
                >
                  <div
                    className="
                        h-2
                        w-2
                        rounded-full
                        bg-orange-500
                      "
                  ></div>

                  <p>{feature}</p>
                </div>
              ))}
            </div>

            {/* Support */}
            <p
              className="
                text-white/40
                text-xs
                mt-5
                relative
                z-10
              "
            >
              1 Year Domain • 6 Month Support
            </p>

            {/* Button */}
            <button
              onClick={() => {
                setSelectedPlan({
                  title: plan.title,

                  type: plan.type,

                  price: plan.price,
                });

                setShowPopup(true);
              }}
              className="
                w-full
                py-2
                mt-5
                rounded
                bg-orange-500
                text-white
                font-medium
                hover:bg-orange-600
                transition-all
                duration-500
                relative
                z-10
                cursor-pointer
              "
            >
              Choose Plan
            </button>
          </div>
        ))}
      </div>

      {/* Popup */}
      {showPopup && (
        <div
          className="
              fixed
              inset-0
              bg-black/70
              flex
              justify-center
              items-center
              z-50
              px-4
            "
        >
          <ProductDisplay
            selectedPlan={selectedPlan}
            setShowPopup={setShowPopup}
          />
        </div>
      )}
    </div>
  );
};

export default Princing;

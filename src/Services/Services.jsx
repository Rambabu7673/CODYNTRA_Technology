import React, { useEffect, useState } from "react";
  import {
    FaLaptopCode,
    FaMobileAlt,
    FaApple,
    FaUserShield,
    FaCode,
    FaDatabase,
    FaRobot,
    FaShoppingCart,
    FaUserTie,
    FaPaintBrush,
    FaPalette,
    FaSearch,
    FaBullhorn,
    FaInstagram,
    FaAd,
    FaCloud,
    FaShieldAlt,
    FaPlug,
    FaCreditCard,
    FaComments,
    FaServer,
    FaGlobe,
    FaTools,
    FaChartLine,
    FaMicrochip,
    FaCube,
    FaGraduationCap,
    FaSchool,
    FaHospital,
    FaUtensils,
    FaFileInvoiceDollar,
    FaBoxes,
    FaCogs,
    FaBusinessTime,
    FaUserAstronaut,
    FaFileAlt,
    FaRocket,
    FaBriefcase,
    FaWhatsapp,
    FaEnvelope,
    FaVideo,
    FaLayerGroup,
  } from "react-icons/fa";
const Services = () => {


  const services = [
    {
      image: <FaLaptopCode />,
      title: "Website Development",
      desc: "Modern and responsive websites for businesses.",
    },

    {
      image: <FaMobileAlt />,
      title: "Android App Development",
      desc: "Powerful Android apps with smooth performance.",
    },

    {
      image: <FaApple />,
      title: "iOS App Development",
      desc: "Secure and fast apps for Apple devices.",
    },

    {
      image: <FaUserShield />,
      title: "Admin Panel Development",
      desc: "Easy-to-manage admin dashboards and systems.",
    },

    {
      image: <FaCode />,
      title: "Custom Software Development",
      desc: "Custom software solutions for businesses.",
    },

    {
      image: <FaDatabase />,
      title: "ERP & CRM Systems",
      desc: "Business management and customer systems.",
    },

    {
      image: <FaRobot />,
      title: "AI Tools & Automation",
      desc: "Smart AI systems and automation solutions.",
    },

    {
      image: <FaShoppingCart />,
      title: "E-Commerce Development",
      desc: "Online shopping websites with payment systems.",
    },

    {
      image: <FaUserTie />,
      title: "Portfolio Websites",
      desc: "Professional portfolio and personal websites.",
    },

    {
      image: <FaPaintBrush />,
      title: "Landing Page Design",
      desc: "Creative landing pages for promotions.",
    },

    {
      image: <FaPalette />,
      title: "UI/UX Design",
      desc: "Beautiful and user-friendly designs.",
    },

    {
      image: <FaPaintBrush />,
      title: "Logo & Branding",
      desc: "Professional logo and branding services.",
    },

    {
      image: <FaSearch />,
      title: "SEO Optimization",
      desc: "Improve website ranking on Google.",
    },

    {
      image: <FaBullhorn />,
      title: "Digital Marketing",
      desc: "Online marketing to grow businesses.",
    },

    {
      image: <FaInstagram />,
      title: "Social Media Management",
      desc: "Manage and grow social media accounts.",
    },

    {
      image: <FaAd />,
      title: "Product Advertisement",
      desc: "Creative ads for products and brands.",
    },

    {
      image: <FaCloud />,
      title: "Cloud Services",
      desc: "Secure cloud hosting and server solutions.",
    },

    {
      image: <FaShieldAlt />,
      title: "Cyber Security",
      desc: "Protect systems and business data securely.",
    },

    {
      image: <FaPlug />,
      title: "API Development",
      desc: "Custom APIs and integrations for apps.",
    },

    {
      image: <FaCreditCard />,
      title: "Payment Gateway Integration",
      desc: "Online payment system integration services.",
    },

    {
      image: <FaComments />,
      title: "Chatbot Development",
      desc: "Smart AI chatbots for customer support.",
    },

    {
      image: <FaServer />,
      title: "SaaS Platforms",
      desc: "Cloud-based software platform solutions.",
    },

    {
      image: <FaGlobe />,
      title: "Hosting & Domain Services",
      desc: "Website hosting and domain management.",
    },

    {
      image: <FaTools />,
      title: "Maintenance & Support",
      desc: "24/7 website and software support services.",
    },

    {
      image: <FaChartLine />,
      title: "Data Analytics Dashboard",
      desc: "Business reports and analytics dashboards.",
    },

    {
      image: <FaMicrochip />,
      title: "IoT Solutions",
      desc: "Smart device and IoT system solutions.",
    },

    {
      image: <FaCube />,
      title: "Web3 & Blockchain",
      desc: "Modern blockchain and Web3 services.",
    },

    {
      image: <FaGraduationCap />,
      title: "Online Course Platforms",
      desc: "E-learning and online course systems.",
    },

    {
      image: <FaSchool />,
      title: "School Management Systems",
      desc: "Software for schools and institutes.",
    },

    {
      image: <FaHospital />,
      title: "Hospital Management Software",
      desc: "Healthcare and hospital management systems.",
    },

    {
      image: <FaUtensils />,
      title: "Restaurant Management Systems",
      desc: "Restaurant billing and order systems.",
    },

    {
      image: <FaFileInvoiceDollar />,
      title: "Billing Software",
      desc: "Easy billing and invoice software.",
    },

    {
      image: <FaBoxes />,
      title: "Inventory Management",
      desc: "Manage products and stock easily.",
    },

    {
      image: <FaCogs />,
      title: "Custom Algorithms",
      desc: "Smart algorithms for advanced systems.",
    },

    {
      image: <FaBusinessTime />,
      title: "Business Automation",
      desc: "Automation tools for faster business work.",
    },

    {
      image: <FaUserAstronaut />,
      title: "AI Chatbots",
      desc: "Automated AI assistants for businesses.",
    },

    {
      image: <FaFileAlt />,
      title: "Resume & Portfolio Services",
      desc: "Professional resumes and portfolios.",
    },

    {
      image: <FaRocket />,
      title: "Startup Growth Solutions",
      desc: "Technology solutions for startup growth.",
    },

    {
      image: <FaBriefcase />,
      title: "Business Consulting",
      desc: "Digital business planning and guidance.",
    },

    {
      image: <FaWhatsapp />,
      title: "WhatsApp Automation",
      desc: "Automated WhatsApp messaging systems.",
    },

    {
      image: <FaEnvelope />,
      title: "Email Marketing Systems",
      desc: "Bulk email marketing and campaigns.",
    },

    {
      image: <FaVideo />,
      title: "Video Editing & Motion Graphics",
      desc: "Professional video editing services.",
    },

    {
      image: <FaLayerGroup />,
      title: "Content Management Systems",
      desc: "Easy website content management platforms.",
    },
  ];

  const [current, setCurrent] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(3);

  // Responsive Cards
  useEffect(() => {
    const updateCards = () => {
      if (window.innerWidth < 768) {
        setCardsPerView(1);
      } else if (window.innerWidth < 1024) {
        setCardsPerView(2);
      } else {
        setCardsPerView(3);
      }
    };

    updateCards();

    window.addEventListener("resize", updateCards);

    return () => window.removeEventListener("resize", updateCards);
  }, []);

  // Auto Slide
  useEffect(() => {
    const slider = setInterval(() => {
      nextSlide();
    }, 3000);

    return () => clearInterval(slider);
  }, [current, cardsPerView]);

  // Next
  const nextSlide = () => {
    if (current >= services.length - cardsPerView) {
      setCurrent(0);
    } else {
      setCurrent(current + 1);
    }
  };

  // Prev
  const prevSlide = () => {
    if (current === 0) {
      setCurrent(services.length - cardsPerView);
    } else {
      setCurrent(current - 1);
    }
  };

  return (
    <div className="w-full min-h-screen bg-[#080503] py-20 px-4 overflow-hidden">
      {/* Heading */}
      <div className="text-center">
        <p className="text-orange-500 tracking-[5px] uppercase text-sm animate-pulse">
          OUR SERVICES
        </p>

        <h1 className="lg:text-6xl md:text-5xl text-3xl font-extrabold text-white mt-5">
          Smart Solutions By
          <span className="text-orange-500"> CODYNTRA</span>
        </h1>
      </div>

      {/* Slider */}
      <div className="relative max-w-7xl mx-auto mt-20 overflow-hidden">
        {/* Wrapper */}
        <div
          className="flex gap-6 transition-transform duration-700 ease-in-out"
          style={{
            transform: `translateX(-${current * (100 / cardsPerView)}%)`,
          }}
        >
          {services.map((item, index) => (
            <div
              key={index}
              className="
                min-w-full
                md:min-w-[calc(50%-12px)]
                lg:min-w-[calc(33.333%-16px)]
                bg-white/5
                backdrop-blur-md
                border
                border-orange-500/20
                rounded-3xl
                p-8
                text-center
                
                hover:shadow-[0_0_40px_rgba(255,115,0,0.3)]
                hover:scale-105
                transition-all
                duration-500
                flex-shrink-0
              "
            >
              {/* Icon */}
              <div
                className="
                  h-24
                  w-24
                  rounded-full
                  border
                  border-orange-500
                  flex
                  justify-center
                  items-center
                  mx-auto
                  text-4xl
                  text-orange-500
                  shadow-[0_0_20px_rgba(255,115,0,0.5)]
                  animate-pulse
                "
              >
                {item.image}
              </div>

              {/* Title */}
              <h1 className="text-white text-2xl font-bold mt-6">
                {item.title}
              </h1>

              {/* Description */}
              <p className="text-white/70 mt-4 leading-7">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex justify-center gap-5 mt-12">
          <button
            onClick={prevSlide}
            className="
              px-6
              py-3
              rounded-full
              bg-white/10
              border
              border-orange-500/20
              text-white
              hover:bg-orange-500
              transition-all
              duration-300
            "
          >
            Prev
          </button>

          <button
            onClick={nextSlide}
            className="
              px-6
              py-3
              rounded-full
              bg-orange-500
              text-white
              hover:bg-orange-600
              transition-all
              duration-300
            "
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Services;

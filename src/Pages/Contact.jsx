import React from "react";
import { useState } from "react";
import response from "../../api/contact";
import { Form } from "react-router-dom";

const Contact = () => {


  const [form, setForm] = useState({
    name: "",
    phoneNumber: "",
    email: "",
    subject: "",
    message: "",

  });

  const handleInput = (e) => {
    setForm({...form,[e.target.name]:e.target.value})
  }

  const sumbmitedHandle = async (e) => {
    e.preventDefault();

    try {
      const user = JSON.parse(localStorage.getItem("user"));

      const api = await response.post("/api/contact", {
        ...form,
        userId: user?.id,
      });

      console.log(api.data);

      alert(
        `${form.name}, your message sent successfully. My team will contact you soon ✅.`,
      );
    } catch (error) {
      console.log(error.response?.data);

      alert(error.response?.data?.message);
    }
  };
  return (
    <div className="w-full min-h-screen bg-black relative overflow-hidden py-24 px-4">
      {/* Animated Background */}
      <div className="absolute top-0 left-0 h-96 w-96 bg-orange-500/20 blur-3xl rounded-full animate-pulse"></div>

      <div className="absolute bottom-0 right-0 h-96 w-96 bg-orange-400/10 blur-3xl rounded-full animate-pulse"></div>

      <div className="absolute top-1/2 left-1/2 h-[30rem] w-[30rem] bg-orange-500/10 blur-3xl rounded-full animate-ping"></div>

      {/* Heading */}
      <div className="text-center relative z-10">
        <p className="text-orange-500 tracking-[6px] uppercase text-sm animate-pulse">
          GET IN TOUCH
        </p>

        <h1 className="lg:text-7xl text-4xl font-extrabold text-white mt-6 leading-tight">
          Let’s Build
          <span className="text-orange-500"> Your Future Together</span>
        </h1>

        <p className="text-white/60 max-w-3xl mx-auto mt-8 leading-8 lg:text-lg">
          Contact CODYNTRA for projects, internships, business inquiries, and
          digital solutions.
        </p>
      </div>

      {/* Main Section */}
      <div className="max-w-[85rem] mx-auto mt-20 grid lg:grid-cols-2 gap-5 relative z-10">
        {/* LEFT - FORM */}
        <div
          className="
          h-[40rem]
            relative
            overflow-hidden
            rounded
           
           
            bg-white/5
            backdrop-blur-xl
            p-4
            shadow-[0_0_40px_rgba(255,115,0,0.12)]
          "
        >
          {/* Glow */}
          <div className="absolute -top-20 -left-20 h-72 w-72 bg-orange-500/20 blur-3xl rounded-full animate-pulse"></div>

          <div className="absolute -bottom-20 -right-20 h-72 w-72 bg-orange-400/10 blur-3xl rounded-full animate-pulse"></div>

          <div className="relative z-10">
            {/* FORM */}
            <form className="mt-10 space-y-4" onSubmit={sumbmitedHandle}>
              {/* Name */}
              <input
                type="name"
                name="name"
                value={form.name}
                onChange={handleInput}
                placeholder="ANKIT KUMAR"
                className="
                  w-full
                 tracking-widest
                  border-l-none
                  border-r-none
                  border-t-none
                  border-b 
                  border-orange-500/20
                 
                  px-6
                  py-5
                  text-white
                  outline-none
                  
                  focus:border-orange-500
                  foucus:border-l-orange-500
                  transition-all
                  duration-500
                 
                "
              />

              {/* Email */}
              <input
                type=" email"
                name="email"
                value={form.email}
                onChange={handleInput}
                placeholder="ANKITKUMAR12@GMAIL.COM"
                className="
                  w-full
                  tracking-widest
                border-l-none
                  border-r-none
                  border-t-none
                  border-b 
                  border-orange-500/20
                  
                  px-6
                  py-5
                  text-white
                  outline-none
                  focus:border-orange-500
                  transition-all
                  duration-500
                  
                "
              />

              {/* Phone */}
              <input
                type="phoneNumber"
                name="phoneNumber"
                value={form.phoneNumber}
                onChange={handleInput}
                placeholder="91-8257102989"
                className="
                  w-full
                  tracking-widest
                 border-l-none
                  border-r-none
                  border-t-none
                  border-b 
                  border-orange-500/20
                  
                  px-6
                  py-5
                  text-white
                  outline-none
                  focus:border-orange-500
                  transition-all
                  duration-500
                  
                "
              />

              {/* Subject */}
              <input
                type="subject"
                value={form.subject}
                name="subject"
                onChange={handleInput}
                placeholder="PLEASE WRITE YOUR SUBJECT HERE "
                className="
                  w-full
                  tracking-widest
                 border-l-none
                  border-r-none
                  border-t-none
                  border-b 
                  border-orange-500/20
                  
                  px-6
                  py-5
                  text-white
                  outline-none
                  focus:border-b-orange-500
                  transition-all
                  duration-500
                  
                "
              />

              {/* Message */}
              <textarea
                rows="6"
                name="message"
              
                value={form.message}
                onChange={handleInput}
                placeholder=" PLEASE WRITE YOUR MESSAGE HERE ANYTHING YOU WANT TO SAY TO US "
                className="
                  w-full
                 tracking-widest
                   border-l-none
                  border-r-none
                  border-t-none
                  border-b 
                  border-orange-500/20
                 
                  px-6
                  py-1
                  text-white
                  outline-none
                  resize-none
                  focus:border-orange-500
                  transition-all
                  duration-500
                  
                "
              ></textarea>

              {/* Button */}
              <button
                type="submit"
                className="
                  relative
                  overflow-hidden
                  w-full
                  py-3
                  rounded-2xl
                  bg-orange-500
                  text-white
                  font-bold
                  text-lg
                  hover:scale-[1.02]
                  transition-all
                  duration-500
                  shadow-[0_0_35px_rgba(255,115,0,0.45)]
                "
              >
                <span className="relative z-10">Send Message</span>

                {/* Shine Effect */}
                <div
                  className="
                    absolute
                    inset-0
                    bg-white/20
                    -translate-x-full
                    hover:translate-x-full
                    transition-all
                    duration-1000
                  "
                ></div>
              </button>
            </form>
          </div>
        </div>

        {/* RIGHT - MAP */}
        <div
          className="
           h-[40rem]
            relative
            overflow-hidden
            rounded
            
            border-orange-500/20
            bg-white/5
            backdrop-blur-xl
           
            hover:scale-[1.01]
            transition-all
            duration-500
          "
        >
          {/* Map Glow */}
          <div className="absolute -top-20 right-0 h-72 w-72 bg-orange-500/10 blur-3xl rounded-full animate-pulse"></div>

          {/* Heading */}

          {/* Map */}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3420.2994476545596!2d85.17140647517724!3d25.59353507745803!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed58a49ca6ad3d%3A0xd573a72d3e040997!2sBhootnath%20Rd%2C%20Patna%2C%20Bihar%20800026!5e1!3m2!1sen!2sin!4v1779220165118!5m2!1sen!2sin"
            className="w-full h-[40rem] loding-lazy border"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;


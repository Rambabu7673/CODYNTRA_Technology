import React, { useState } from "react";
import response from "../../api/axios";
import { useNavigate } from "react-router-dom";

const userLogin = ({ setIsLogin = () => { } }) => {
  console.log(setIsLogin)
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

 const handleSubmit = async (e) => {
   e.preventDefault();

   try {
     const api = await response.post("/api/login", form);

     console.log(api.data);

     if (api.data.user) {
       localStorage.setItem("user", JSON.stringify(api.data.user));

       localStorage.setItem("isLogin", true);

       alert("Login Success");

       window.location.reload();
     }
   } catch (error) {
     console.log(error.response?.data);

     alert(error.response?.data?.message || "Login Failed");
   }
 };

  return (
    <div
      className="
      lg:w-[400px]
      w-full
      bg-white/10
      backdrop-blur-xl
      p-6
      rounded-2xl
      shadow-2xl
      flex 
      flex-col
    "
    >
      <h1 className="text-3xl font-bold text-white text-center mb-6">Login</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
          className="
          w-full
          p-3
          mb-4
          rounded-lg
          bg-white/10
          border
          border-white/20
          text-white
          outline-none
        "
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
          className="
          w-full
          p-3
          mb-5
          rounded-lg
          bg-white/10
          border
          border-white/20
          text-white
          outline-none
        "
        />

        <button
          type="submit"
          className="
          w-full
          bg-orange-500
          text-white
          py-3
          rounded-lg
        "
        >
          Login
        </button>
      </form>

      <p className="text-center text-white mt-5">
        Don't have account?
        <span
          onClick={() => setIsLogin(false)}
          className="text-orange-500 ml-2 cursor-pointer"
        >
          Signup
        </span>
      </p>
    </div>
  );
};

export default userLogin;

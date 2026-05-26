import React, { useState } from "react";
import Signup from "../Register/Signup";
import Login from "../Register/UserLogin";

const Auth = () => {
  const [isLogin, setIsLogin] = useState(false);

  return (
    <div>
      {isLogin ? (
        <Login setIsLogin={setIsLogin} />
      ) : (
        <Signup setIsLogin={setIsLogin} />
      )}
    </div>
  );
};

export default Auth;

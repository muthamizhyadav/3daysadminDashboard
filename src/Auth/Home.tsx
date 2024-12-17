import React, { useState } from "react";
import Icon from "../assets/Appicon.png";
import { useNavigate } from "react-router-dom";
const Home: React.FC = () => {
  const navigate = useNavigate();


  return (
    <div className="h-screen grid grid-cols-2">
      <div className="bg-[#6b21a8] flex items-center justify-center">
        <img src={Icon} alt="" />
      </div>

      <div className="flex flex-col gap-5 items-center justify-center">
        <h1 className="font-serif text-purple-700 text-[24px] font-semibold">
          Admin Login
        </h1>
        <input
          className="w-[50%] h-[40px] border border-slate-400 rouunded-[4px] outline-none pl-4"
          placeholder="Enter Valid E-mail"
        />
        <input
          className="w-[50%] h-[40px] border border-slate-400 rouunded-[4px] outline-none pl-4"
          type="password"
          placeholder="Enter Valid Password"
        />
        <button
            onClick={() => navigate("/dashboard")}
          type="button"
          className="w-[50%] bg-purple-700 text-white h-[40px] rounded-lg font-semibold text-[20px]"
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default Home;

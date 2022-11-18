import React from "react";
import { heroH1, herop } from "../constants/constants";
import img from "../assets/img/hero-img.png";

const Hero = () => {
  return (
    <div className="w-full py-[70px] px-10 max-w-[1440px] flex justify-center items-center">
      <div className="w-full flex flex-col md:flex-row justify-around items-center">
        <div className="w-[50%]">
          <h1 className="text-3xl md:text-4xl p-1 font-[500] text-[#012970]">
            {heroH1}
          </h1>
          <p className="mt-2 text-1xl md:text-2xl text-[#444444]">{herop}</p>
          <button className="bg-[#4154f1] text-white px-10 py-3 rounded-md mt-6 shadow-xl">
            Get Started
          </button>
        </div>

        <div className=" w-[50%] flex justify-center sm:mt-10">
          <img className="w-[70%] md:w-[100%]" src={img} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Hero;

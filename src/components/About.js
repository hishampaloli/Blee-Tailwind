import React from "react";
import { aboutH3, aboutP1, aboutP2 } from "../constants/constants";
import img from '../assets/img/about.jpg'

const About = () => {
  return (
    <div className="w-full  max-w-[1440px] p-10 bg-[white]">
      <div className="flex flex-col lg:flex-row">
        <div className="w-full p-7  bg-[#f6f9ff] flex flex-col justify-center items-start">
          <p className="text-[#4154f1] font-bold">{aboutP1}</p>
          <h3 className="text-[#012970] font-medium text-2xl">{aboutH3}</h3>
          <p className="text-[#444444] mt-4">{aboutP2}</p>
          <button className="bg-[#4154f1] text-white px-10 py-3 rounded-md mt-6 shadow-xl mt-4">Read More </button>
        </div>

        <div className="w-full">
            <img className="w-full" src={img} alt="" />
        </div>

        <div></div>
      </div>
    </div>
  );
};

export default About;

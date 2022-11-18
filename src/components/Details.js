import React from "react";
import { detailsH1, detailsP } from "../constants/constants";
import img from '../assets/img/features-2.png'

const Details = () => {
  return (
    <div className="w-full flex flex-col md:flex-row justify-between items-center  max-w-[1440px] p-3 bg-[white]">
      <div className="w-full px-10">
        <h1 className="text-[#012970]  text-[34px] font-medium">{detailsH1}</h1>
        <p>{detailsP}</p>
      </div>

      <div className="flex justify-end w-[100%] py-5">
        <img className="" src={img} alt="" />
      </div>
    </div>
  );
};

export default Details;

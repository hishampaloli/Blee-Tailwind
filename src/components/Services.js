import React from "react";
import { serviceCard, service, serviceH1 } from "../constants/constants";

import { serciveBox } from "../constants/constants";
import Fade from 'react-reveal/Fade';

const Services = () => {
  return (
    <div className="w-full  max-w-[1440px] p-10  flex flex-col items-center mb-10">
      <div className="w-full flex flex-col items-center">
        <p className="font-bold text-[#4154f1]">{service}</p>
        <h1 className="font-bold mt-3 text-3xl md:text-4xl text-[#012970]">
          {serviceH1}
        </h1>

        <ul className="flex flex-col py-4 md:flex-row mt-[50px]">
          {serviceCard.map((el, idx) => {
            return (
                <Fade bottom>
              <div className="flex flex-col items-center p-4 mx-3 rounded-md shadow-lg hover:scale-105 ease-in-out duration-500">
                <img src={el.img} alt="" />
                <h3 className="text-[#012970] text-[24px] font-medium">
                  {el.title}
                </h3>
                <p className="mt-3 text-center">{el.desc}</p>
              </div>
              </Fade>
            );
          })}
        </ul>
      </div>

        <div className="w-full flex flex-wrap mt-[100px] justify-center md:justify-between items-center py-4">
          {serciveBox.map((el, idx) => {
            return (
                <Fade>
              <div className="p-5 mt-4  w-[250px] h-[130px] flex  justify-around items-center mx-3 bg-slate-50 shadow-md rounded-md hover:shadow-lg duration-300">
                <h1 className={`text-4xl`} style={{ color: el.color }}>
                  {el.icon}
                </h1>
                <div>
                  <h2 className="font-medium text-4xl text-[#0b198f]">
                    {el.num}
                  </h2>
                  <p className="text-[#444444] text-[14px]">{el.title}</p>
                </div>
              </div>
              </Fade>
            );
          })}
      </div>
    </div>
  );
};

export default Services;

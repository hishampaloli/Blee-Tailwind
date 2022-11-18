import React from "react";
import { contactCards } from "../constants/constants";
const Contact = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center p-10">
      <p className="text-[#4154f1] font-medium text-[14px]">Contact</p>
      <h1 className="text-[#012970] text-4xl font-medium">Contact Us</h1>

      <div className="w-full bg-slate-100 flex mt-10 justify-between">
        <div className="flex flex-wrap justify-around w-[50%] bg-slate-500">
          {contactCards.map((el, idx) => {
            return (
              <div className="p-5 rounded-md bg-white m-3">
                <h1>{el.title}</h1>
                <div>
                  <p>{el.desc1}</p>
                  <p>{el.desc2}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div>
          <h1>sdfd</h1>
        </div>
      </div>
    </div>
  );
};

export default Contact;

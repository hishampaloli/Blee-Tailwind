import React from "react";
import { contactCards } from "../constants/constants";
const Contact = () => {
  return (
    <div className="w-full max-w-[1440px] flex flex-col justify-between py-10 items-center ">
      <p className="text-[#4154f1] font-medium text-[14px]">Contact</p>
      <h1 className="text-[#012970] text-4xl font-medium">Contact Us</h1>

      <div className="w-full flex flex-col md:flex-row mt-10 justify-between">
        <div className="flex flex-wrap justify-around w-[100%] md:w-[50%]">
          {contactCards.map((el, idx) => {
            return (
              <div className="p-[30px] w-[200px] bg-[#fafbff] m-3 hover:scale-110 duration-200 rounded-xl">
                <h1 className="text-5xl text-[#4154f1]">{el.icon}</h1>
                <h1 className="text-[#012970] text-[20px]">{el.title}</h1>
                <div className="text-[#aaaaaa] text-[14px] mt-3">
                  <p>{el.desc1}</p>
                  <p>{el.desc2}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="w-[100%] h-[400px] md:w-[50%] flex flex-col justify-between p-5 bg-[#fafbff] m-3 rounded-md">
          <div className="w-full flex justify-between">
            <input
              className="w-[49%] p-2 border-2 rounded-md"
              type="text"
              name=""
              id=""
            />
            <input
              type="text"
              className="w-[49%] p-2 border-2  rounded-md"
              name=""
              id=""
            />
          </div>

          <input
            type="text"
            className="p-2 mt-3 border-2  rounded-md"
            name=""
            id=""
          />
          <textarea
            name=""
            id=""
            className="border-2 mt-4 h-[170px]  rounded-md"
            cols="10"
            rows="10"
          ></textarea>
          <button className="bg-[#4154f1] text-white px-10 py-3 rounded-md mt-6 shadow-xl">
            Send Message
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;

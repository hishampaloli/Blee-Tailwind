import React, { useState } from "react";
import { navUls } from "../constants/constants";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import logo from '../assets/img/logo.png'

const Navbar = () => {

    const [nav, setNav] = useState(true); 

    const handleNav = () => {
        setNav(!nav)
    }

  return (
    <div className="w-full sticky flex bg-slate-50 justify-between items-center h-24 max-w-[1440px] mx-auto px-4">
      <h1 className=" flex items-center p-3 text-4xl font-bold text-[#012970]"> <img className="w-6 h-6 " src={logo} alt="" /> <span className="m-3">Blee.</span></h1>
      <ul className="hidden md:flex ">
        {navUls.map((el) => {
          return (
            <li  key={el}>
              <button className="p-4 w-30 text-center  font-[600] cursor-pointer rounded-md mx-3 text-[#013289] focus:text-[#4154f1]">{el}</button>                
              </li>
          );
        })}
        <button className="w-[140px] h-[45px] bg-[#4154f1] text-white rounded-md">Get Started</button>
      </ul>

      <div className="cursor-pointer block md:hidden ml-auto scale-100">
      {!nav ?  <AiOutlineClose onClick={handleNav} size={20} /> :  <AiOutlineMenu onClick={handleNav} size={20} />}
       
      </div>

       <div className={!nav ? 'fixed left-0 top-20 h-full bg-slate-50 border-r-gray-900 bg-[#00300] ease-in-out duration-1000 md:hidden' : 'fixed h-full top-20 left-[-100%]  ease-in-out duration-700'}>
        {/* <h1 className="w-full text-3xl font-bold text-[#00df9a] m-4">REACT.</h1> */}

        <ul className="p-4 uppercase flex-col">
          {navUls.map((el) => {
            return (
              <li key={el}>
              <button className="p-4 w-40 text-left cursor-pointer rounded-md border-gray-50 focus:text-[#4154f1]">{el}</button>
                
              </li>
            );
          })}
        </ul>
      </div>

      
    </div>
  );
};

export default Navbar;

"use client";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import LogoIcon from "../../public/LogoIcon.png";

const SectiveFive = () => {
    useEffect(() => {
      AOS.init({
        duration: 1000, 
        once: false,
      });
    }, []);
  return (
    <div className="bg-[#4e4d59]  rounded-xl text-white p-4 md:p-8 h-40 md:h-60 my-2 flex flex-col justify-between" data-aos="fade-up">

      <div className="flex justify-between items-start mb-4">
        {/* Headline */}
        <h1 className="text-xl md:text-3xl xl:text-4xl font-light tracking-wide max-w-2xl">
          LET&apos;S SWAY TOGETHER
        </h1>
        
        {/* <div className="text-[#FF6464] text-5xl md:text-6xl font-light opacity-80">
          Y
        </div> */}
        <div className="relative mt-1 md:mt-0 w-6 md:w-12 h-6 md:h-12">
          <Image src={LogoIcon} alt="Y" fill className="object-contain" />
        </div>
      </div>

      {/* Bottom Row: Subscription Form */}
      <div className="flex flex-col w-full md:max-w-1/2">
        {/* Labels */}
        <div className="flex justify-between w-full text-xs md:text-sm font-normal tracking-widest">
          <label htmlFor="email-input" className="text-[#FF6464] opacity-90">
            EMAIL
          </label>
          <button className="text-[#FF6464] opacity-90 hover:opacity-100 transition-opacity duration-200">
            JOIN MAILING LIST
          </button>
        </div>
        
        {/* Input Field (Bottom Border) */}
        <div className="border-b border-white pb-1">
          <input
            id="email-input"
            type="email"
            placeholder=""
            className="bg-transparent text-white w-full focus:outline-none placeholder-gray-400 text-base md:text-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default SectiveFive;
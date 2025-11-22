// components/SectionNine.jsx
import React from "react";
import PricingCart from "./PricingCart";
import { pricingData } from "../data/pricingData";

const SectionNine = () => {
  return (
    <div className="bg-[#FAEFB8] px-0 md:px-8 my-16 ">
      <h2 className="w-fit mx-auto text-2xl font-light tracking-wide bg-[#FAEFB8] px-8 py-4 -translate-y-4">
        WAYS TO SWAY
      </h2>
      <h4 className="text-xs font-bold mb-1 text-gray-600 text-center">
        Start your journey your way - with a single service, a bulk training
        package, or an all-inclusive membership.
      </h4>
      {/* cart section  */}
      <div className="mt-8">
        <h3 className="text-sm md:text-md  text-center mb-2 md:mb-5">
          THREE MEMBERSHIPS. ONE TEAM. YOUR JOURNEY, YOUR CHOICE.{" "}
        </h3>
        <div className=" py-2   flex flex-col md:flex-row justify-between">
          {pricingData.map((item, i) => (
            <PricingCart key={i} {...item} />
          ))}
        </div>
      </div>
      {/* below section  */}
      <div className="flex flex-col justify-center  gap-4 mt-8 pb-4 md:pb-12">
        <h3 className="text-sm md:text-md  text-center">
          THREE MEMBERSHIPS. ONE TEAM. YOUR JOURNEY, YOUR CHOICE.{" "}
        </h3>
        <div className="flex justify-between flex-wrap md:flex-nowrap gap-2 my-4">
          {/* Annual Price Box */}
          <div
            className={`m-2 md:m-0 p-4 w-full md:w-1/4 min-h-30 md:min-h-40 flex flex-col items-start md:items-center text-left text-gray-800 border-2 border-gray-400 group hover:bg-red-400 hover:border-red-400 hover:text-white duration-300`}
          >
            <div className="flex gap-2  ">
              <div className="flex items-center space-x-1 mb-1 self-start ">
                {/* Custom radio button appearance: */}
                <div className="w-4 h-4 rounded-full border-3 border-white bg-white group-hover:bg-red-400 flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full"></div>
                </div>
              </div>
              <div className="grow">
                <p className="text-md font-bold self-start text-gray-700 group-hover:text-white">
                  £150
                </p>
                <p className="mt-3 text-xs text-gray-500 self-start group-hover:text-white">
                  Trial any two sessions - new customers only
                </p>
              </div>
            </div>
          </div>
          {/* Annual Price Box 2*/}
          <div
            className={`m-2 md:m-0 p-4 w-full md:w-1/4 min-h-30 md:min-h-40 flex flex-col items-start  text-left text-gray-800 border-2 border-gray-400 group hover:bg-red-400 hover:border-red-400 hover:text-white duration-300`}
          >
            <div className="flex gap-2 h-full ">
              <div className="flex items-center space-x-1 mb-1 self-start ">
                {/* Custom radio button appearance: */}
                <div className="w-4 h-4 rounded-full border-3 border-white bg-white group-hover:bg-red-400 flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full"></div>
                </div>
              </div>
              <div className="grow flex flex-col justify-between h-full">
                <div className="">
                <p className="text-xs md:text-md font-bold self-start text-gray-700 group-hover:text-white">
                  £85/session
                </p>
                <p className="mt-1 text-xs text-gray-500 self-start group-hover:text-white">
                  10 session pack
                </p>
                </div>
                <div className="">
                <p className="mt-3 text-xs font-bold text-gray-500 self-start group-hover:text-white">
                  SAVE £50 

                </p>
                <p className="mt-1 text-xs text-gray-500 self-start group-hover:text-white">
                  v'ssingle session price.
                </p>
                <p className=" text-xs text-gray-500 self-start group-hover:text-white">
                  Valid for 3 months
                </p>
                </div>
              </div>
            </div>
          </div>
          {/* Annual Price Box 3*/}
          <div
            className={`m-2 md:m-0 p-4 w-full md:w-1/4 min-h-30 md:min-h-40 flex flex-col items-start  text-left text-gray-800 border-2 border-gray-400 group hover:bg-red-400 hover:border-red-400 hover:text-white duration-300`}
          >
            <div className="flex gap-2 h-full ">
              <div className="flex items-center space-x-1 mb-1 self-start ">
                {/* Custom radio button appearance: */}
                <div className="w-4 h-4 rounded-full border-3 border-white bg-white group-hover:bg-red-400 flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full"></div>
                </div>
              </div>
              <div className="grow flex flex-col justify-between h-full">
                <div className="">
                <p className="text-xs md:text-md font-bold self-start text-gray-700 group-hover:text-white">
                  £80/session
                </p>
                <p className="mt-1 text-xs text-gray-500 self-start group-hover:text-white">
                  20 session pack
                </p>
                </div>
                <div className="">
                <p className="mt-3 text-xs font-bold text-gray-500 self-start group-hover:text-white">
                  SAVE £200 

                </p>
                <p className="mt-1 text-xs text-gray-500 self-start group-hover:text-white">
                  v'ssingle session price.
                </p>
                <p className=" text-xs text-gray-500 self-start group-hover:text-white">
                  Valid for 6 months
                </p>
                </div>
              </div>
            </div>
          </div>
          {/* Annual Price Box 4*/}
          <div
            className={`m-2 md:m-0 p-4 w-full md:w-1/4 min-h-30 md:min-h-40 flex flex-col items-start  text-left text-gray-800 border-2 border-gray-400 group hover:bg-red-400 hover:border-red-400 hover:text-white duration-300`}
          >
            <div className="flex gap-2 h-full ">
              <div className="flex items-center space-x-1 mb-1 self-start ">
                {/* Custom radio button appearance: */}
                <div className="w-4 h-4 rounded-full border-3 border-white bg-white group-hover:bg-red-400 flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full"></div>
                </div>
              </div>
              <div className="grow flex flex-col justify-between h-full">
                <div className="">
                <p className="text-xs md:text-md font-bold self-start text-gray-700 group-hover:text-white">
                  £75/session
                </p>
                <p className="mt-1 text-xs text-gray-500 self-start group-hover:text-white">
                  40 session pack
                </p>
                </div>
                <div className="">
                <p className="mt-3 text-xs font-bold text-gray-500 self-start group-hover:text-white">
                  SAVE £600 

                </p>
                <p className="mt-1 text-xs text-gray-500 self-start group-hover:text-white">
                  v'ssingle session price.
                </p>
                <p className=" text-xs text-gray-500 self-start group-hover:text-white">
                  Valid for 6 months
                </p>
                </div>
              </div>
            </div>
          </div>
          
        </div>
        <h4 className="text-xs font-bold mb-1 text-gray-600 text-center">
          Start your journey your way - with a single service, a bulk training
          package, or an all-inclusive membership.
        </h4>
      </div>
    </div>
  );
};

export default SectionNine;

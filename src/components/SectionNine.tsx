// components/SectionNine.jsx
import React from "react";
import PricingCart from "./PricingCart";
import { pricingData } from "../data/pricingData";

const pricingBoxes = [
  {
    price: "£150",
    description: "Trial any two sessions - new customers only",
    save: null,
    validity: null,
  },
  {
    price: "£85 / session",
    description: "10 session pack",
    save: "SAVE £50",
    validity: "Valid for 3 months",
  },
  {
    price: "£80 / session",
    description: "20 session pack",
    save: "SAVE £200",
    validity: "Valid for 6 months",
  },
  {
    price: "£75 / session",
    description: "40 session pack",
    save: "SAVE £600",
    validity: "Valid for 6 months",
  },
];

const SectionNine = () => {
  return (
    <div className="bg-[#FAEFB8] px-2 md:px-8 my-0 md:mb-0 md:mt-16">
      <h2
        className="w-fit mx-auto text-2xl font-light tracking-wide bg-[#FAEFB8] text-black px-8 py-4 -translate-y-4"
        data-aos="fade-down"
        data-aos-delay="300"
      >
        WAYS TO SWAY
      </h2>
      <h4 className="text-xs md:text-sm font-bold mb-1 text-gray-900 text-center">
        Start your journey your way - with a single service, a bulk training
        package, or an all-inclusive membership.
      </h4>

      {/* cart section */}
      <div className="mt-8">
        <h3 className="text-sm md:text-[16px] text-black text-center mb-2 md:mb-5">
          THREE MEMBERSHIPS. ONE TEAM. YOUR JOURNEY, YOUR CHOICE.{" "}
        </h3>
        <div className="py-4 md:py-16 flex flex-col md:flex-row justify-between">
          {pricingData.map((item, i) => (
            <PricingCart key={i} {...item} />
          ))}
        </div>
      </div>

      {/* below section */}
      <div className="flex flex-col justify-center gap-4 mt-8 pb-4 md:pb-12">
        <h3 className="text-sm md:text-[16px] text-center text-black">
          FOUR PACKAGES. ONE TEAM. YOUR FLEXIBILITY, YOUR PACE.{" "}
        </h3>
        <div className="flex justify-between flex-wrap md:flex-nowrap gap-2 my-4">
          {pricingBoxes.map((box, i) => (
            <div
              key={i}
              className={`m-2 md:m-0 p-4 w-full md:w-1/4 min-h-30 md:min-h-40 flex flex-col items-start text-left text-gray-800 border-2 border-gray-600 group hover:bg-red-400 hover:border-red-400 hover:text-white duration-300`}
            >
              <div className="flex gap-2 h-full ">
                <div className="flex items-center space-x-1 mb-1 self-start ">
                  {/* Custom radio button appearance: */}
                  <div className="w-5 h-5 rounded-full border-2 border-gray-600  group-hover:border-gray-100 flex items-center justify-center">
                    <div className="w-3 h-3 rounded-full group-hover:bg-gray-100 "></div>
                  </div>
                </div>
                <div className="grow flex flex-col justify-between h-full">
                  <div>
                    <p className="text-xs md:text-[16px] font-bold self-start text-gray-600 group-hover:text-white">
                      {box.price}
                    </p>
                    <p className="mt-1 text-xs  text-gray-500 self-start group-hover:text-white">
                      {box.description}
                    </p>
                  </div>
                  {box.save && (
                    <div>
                      <p className="mt-3 text-xs md:text-[16px] font-bold text-gray-600 self-start group-hover:text-white">
                        {box.save}
                      </p>
                      <p className="mt-1 text-xs text-gray-500 self-start group-hover:text-white">
                        v'single session price.
                      </p>
                    </div>
                  )}
                  {box.validity && (
                    <div>
                      <p className="text-xs text-gray-500 self-start group-hover:text-white">
                        {box.validity}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <h4 className="text-xs md:text-sm font-bold mb-1 text-gray-900 text-center">
          Book your <a href="" className="underline"> free consultation</a> with any membership or package to get today.
        </h4>
      </div>
        <div className="w-68 mx-auto text-2xl font-light tracking-wide bg-[#FAEFB8] px-8 py-4 translate-y-4"></div>
    </div>
  );
};

export default SectionNine;

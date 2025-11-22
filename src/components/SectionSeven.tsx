"use client";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const SectionSeven = () => {
  useEffect(() => {
      AOS.init({
        duration: 1000, 
        once: false,
      });
    }, []);
  return (
    <>
    
    <div className="grid grid-cols-3 w-full relative my-4 md:my-20">
      {/* Box 1 */}
      <div className="aspect-square overflow-hidden " data-aos="fade-left" data-aos-delay="300">
        <img
          src="https://images.pexels.com/photos/34804814/pexels-photo-34804814.jpeg"
          className="w-full h-full object-cover"
          alt="Random Pexels"
        />
      </div>

      {/* Box 2 */}
      <div className="aspect-square overflow-hidden scale-110 z-10"  data-aos="zoom-in">
        <img
          src="https://images.pexels.com/photos/34551069/pexels-photo-34551069.jpeg"
          className="w-full h-full object-cover"
          alt="Random Pexels"
        />
      </div>

      {/* Box 3 */}
      <div className="aspect-square overflow-hidden " data-aos="fade-right" data-aos-delay="300">
        <img
          src="https://images.pexels.com/photos/221210/pexels-photo-221210.jpeg"
          className="w-full h-full object-cover"
          alt="Random Pexels"
        />
      </div>
    </div>

    {/* text part hello */}
    <div className="bg-white py-2 md:py-8 px-4 md:px-12 xl:px-24">
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 max-w-7xl mx-auto">
        
        <div className="flex flex-col items-center space-y-2 md:space-y-4">
          
          {/* Main Headline */}
          <h2 className="text-lg md:text-xl font-light text-gray-800 tracking-wide text-nowrap">
            RE-BUILD - BODY TRANSFORMATION
          </h2>
          
          {/* Sub-Headline / Motto */}
          <p className="text-xs md:text-sm font-light text-gray-700 text-center">
            Recalibrate your body. Reveal your strength.
          </p>
          
          {/* Detailed Description */}
          <p className="text-xs md:text-sm font-light text-gray-700 text-center">
            This is more than training - it's a transformation. Over **12 weeks and 36 expertly coached sessions**, RE-BUILD delivers visible change through strength, movement precision, and performance quality. With **three dedicated hours of nutrition from a registered dietitian, ongoing tracking, and weekly refinements**.
          </p>

          {/* Call to Action (Repeated on the left for emphasis) */}
          <p className="text-xs md:text-sm font-light text-gray-700 text-center">
            Commit to change and contact us to start your Re-Build plan today.
          </p>
        </div>
        
        {/* === RIGHT COLUMN: Key Features and Form === */}
        <div className="flex flex-col space-y-2 md:space-y-4 items-center">
          
          {/* Program Motto / Structure */}
          <div className="text-xs md:text-sm font-light text-gray-700 text-center">
            <p>This is structure with purpose. Support with substance.</p>
            <p>Change that lasts.</p>
          </div>
          
          {/* Key Features */}
          <p className="text-xs md:text-sm font-bold text-gray-700 text-center ">
            36 sessions | 1-to-1 coaching + expert dietitian support
          </p>

          {/* Call to Action (Right Side) */}
          <p className="text-xs md:text-sm font-light text-gray-700 text-center">
            Commit to change and contact us to start your Re-Build plan today.
          </p>
          
          {/* Subscription Form */}
          <div className="w-full max-w-md ml-auto pt-4">
            {/* Labels and Input */}
            <div className="flex justify-between items-center w-full text-sm font-normal tracking-widest mb-1">
              <label htmlFor="rebuild-email-input" className="text-[#FF6464] opacity-90">
                EMAIL
              </label>
              <button className="text-[#FF6464] opacity-90 hover:opacity-100 transition-opacity duration-200">
                SUBMIT
              </button>
            </div>
            
            {/* Input Field (Bottom Border) */}
            <div className="border-b border-gray-400 pb-1 w-full">
              <input
                id="rebuild-email-input"
                type="email"
                placeholder=""
                className="bg-transparent text-gray-800 w-full focus:outline-none placeholder-gray-400 text-base"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default SectionSeven;

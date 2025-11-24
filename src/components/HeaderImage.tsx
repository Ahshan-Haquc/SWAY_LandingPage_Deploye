"use client";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const HeaderImage = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, 
      once: false,
    });
  }, []);
  return (
    <div className="grid grid-cols-3 w-full relative">
      <div data-aos="zoom-in" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-xs md:text-2xl xl:text-3xl font-normal text-white text-nowrap z-40" data-aos-delay="400">
        PERSONALISED WELLNESS. REDEFINED FOR EVERY BODY.
      </div>
      {/* Box 1 */}
      <div className="aspect-square overflow-hidden " data-aos="fade-left" data-aos-delay="300">
        <img
          src="https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg"
          className="w-full h-full object-cover"
          alt="Random Pexels"
        />
      </div>

      {/* Box 2 */}
      <div className="aspect-square overflow-hidden scale-110 z-20" data-aos="zoom-in">
        <img
          src="https://images.pexels.com/photos/34950/pexels-photo.jpg"
          className="w-full h-full object-cover"
          alt="Random Pexels"
        />
      </div>

      {/* Box 3 */}
      <div className="aspect-square overflow-hidden " data-aos="fade-right" data-aos-delay="300">
        <img
          src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg"
          className="w-full h-full object-cover"
          alt="Random Pexels"
        />
      </div>
    </div>
  );
};

export default HeaderImage;

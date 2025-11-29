"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import headerImage from "../../public/Sway Header Banner_MAIN_ALT.jpg"
import headerLogo from "../../public/SwayWhiteLogo.png"
import Image from "next/image";

const HeaderImage = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);
  return (
    <div className="w-full h-[250px] md:h-[500px] xl:h-[650px]  relative">
      <div data-aos="zoom-in" className="absolute top-20 md:top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-xs md:text-3xl xl:text-4xl font-normal text-white text-nowrap z-40" data-aos-delay="400">
        PERSONALISED WELLNESS. REDEFINED FOR EVERY BODY.
      </div>
      {/* Box 1 */}
      <div className="aspect-square overflow-hidden mt-12 md:mt-0" data-aos="zoom-in" data-aos-delay="300">
        <Image
          src={headerImage}
          className="w-full object-contain"
          alt="Random Pexels"
        />
      </div>

      {/* Box 2
      <div className="aspect-square overflow-hidden scale-110 z-20" data-aos="zoom-in">
        <img
          src="https://images.pexels.com/photos/34950/pexels-photo.jpg"
          className="w-full h-full object-cover"
          alt="Random Pexels"
        />
      </div>

      Box 3 
      <div className="aspect-square overflow-hidden " data-aos="fade-right" data-aos-delay="300">
        <img
          src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg"
          className="w-full h-full object-cover"
          alt="Random Pexels"
        />
      </div> */}
      <div data-aos="zoom-in" className="absolute bottom-15 left-1/2 -translate-x-1/2 z-50 w-40 h-20 sm:w-56 sm:h-28">
        <Image
          src={headerLogo}
          alt="SWAY"
          width={224}
          height={112}
          className="object-contain "
        />

        {/* Rating Section */}
        <div className="flex flex-col items-center mt-3 text-white ">
          <div className="flex gap-2 md:gap-5 bg-black/10 px-2 rounded-full">
            {Array.from({ length: 5 }).map((_, i) => (
              <span key={i} className="text-yellow-400 text-base sm:text-lg">★</span>
            ))}
          </div>
          <p className="text-xs sm:text-sm mt-1 md:mt-4 opacity-90">
            4.9 · 9.7k Reviews
          </p>
        </div>
      </div>

    </div>
  );
};
export default HeaderImage;

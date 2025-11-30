"use client";
import { useEffect } from "react";
import headerImage from "../../../public/ResourceHeader.jpg"
import h1 from "../../../public/hr1.jpg"
import h2 from "../../../public/hr2.jpg"
import h3 from "../../../public/hr3.jpg"
import headerLogo from "../../../public/SwayWhiteLogo.png"
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import HeadingImg from "../headingImage/HeadingImg";
const ResourceHeader = () => {
useEffect(() => {
    AOS.init({
      duration: 1000, 
      once: false,
    });
  }, []);
  return (
    <div className="w-full h-[250px] md:h-[500px] xl:h-[650px]  relative mt-12 md:mt-0">
      <div data-aos="zoom-in" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-xs md:text-2xl xl:text-3xl font-normal text-white text-nowrap z-40" data-aos-delay="400">
        PERSONALISED WELLNESS. REDEFINED FOR EVERY BODY.
      </div>
      <HeadingImg h1={h1} h2={h2} h3={h3} phoneImg={headerImage} />
      <div data-aos="zoom-in" className="absolute bottom-3 md:bottom-15 left-1/2 -translate-x-1/2 z-50 w-40 h-20 sm:w-56 sm:h-28">
        <Image
          src={headerLogo}
          alt="SWAY"
          width={224}
          height={112}
          className="object-contain"
        />
      </div>
    </div>
  );
};
export default ResourceHeader;

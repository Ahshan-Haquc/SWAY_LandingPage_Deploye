import Image from 'next/image';
import React from 'react';
import headerLogo from '../../../public/SwayWhiteLogo.png';

const HeadingImg = ({ h1, h2, h3, phoneImg, isText1Show=false, isText2Show=false }: { h1: any, h2: any, h3: any, phoneImg: any, isText1Show?: boolean, isText2Show?: boolean,}) => {
  return (
    <div>
      {/* for phone */}
      <div className="w-full h-[250px] md:h-[500px] xl:h-[650px]  relative block md:hidden">
        <div className="aspect-square overflow-hidden " data-aos="zoom-in" data-aos-delay="100">
          <Image
            src={phoneImg}
            className="w-full object-contain"
            alt="Random Pexels"
          />
        </div>
      </div>
      {/* for desktop  */}
      <div className="w-full relative mt-10 md:mt-25 xl:mt-30 hidden md:block">

        {/* ======= CENTER TEXT ======= */}
        {isText1Show && (
        <div
          data-aos="zoom-in"
          className="absolute top-24 md:top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
        text-center text-sm md:text-3xl xl:text-4xl font-semibold text-white z-40 text-nowrap px-2"
        >
          PERSONALISED WELLNESS. REDEFINED FOR EVERY BODY.
        </div>
        )}

        {/* ======= 3-IMAGE GRID ======= */}
        <div className="grid grid-cols-3 items-center justify-center">

          {/** -- LEFT SMALL IMAGE -- */}
          <div
            className="relative aspect-square rounded-3xl overflow-hidden "
            data-aos="fade-left"
            data-aos-delay="300"
          >
            <Image src={h1} alt="Left Image" fill className="object-cover" />
          </div>

          {/** -- BIG MIDDLE IMAGE (Center from all sides) -- */}
          <div
            className="relative rounded-3xl overflow-hidden 
          h-40 md:h-92 xl:h-[550px]  md:scale-110 z-20"
            data-aos="zoom-in"
          >
            <Image src={h2} alt="Middle Big Image" fill className="object-cover" />
          </div>

          {/** -- RIGHT SMALL IMAGE -- */}
          <div
            className="relative aspect-square rounded-3xl overflow-hidden "
            data-aos="fade-right"
            data-aos-delay="300"
          >
            <Image src={h3} alt="Right Image" fill className="object-cover" />
          </div>

        </div>

        {/* ======= Logo + Rating ======= */}
        {isText2Show && (
        <div
          data-aos="zoom-in"
          className="absolute bottom-5 md:bottom-3 xl:bottom-10 left-1/2 -translate-x-1/2 z-50 flex flex-col items-center"
        >
          <div className="w-40 sm:w-56">
            <Image src={headerLogo} alt="SWAY" className="object-contain w-full h-auto" />
          </div>

          <div className="flex flex-col items-center mt-3 text-white">
            <div className="flex gap-3 bg-black/20 px-3 py-1 rounded-full ">
              {Array.from({ length: 5 }).map((_, i) => (
                <span key={i} className="text-yellow-400 text-lg">★</span>
              ))}
            </div>
            <p className="text-xs sm:text-sm mt-2 opacity-90">4.9 · 9.7k Reviews</p>
          </div>
        </div>
        )}
      </div>
    </div>
  );
};

export default HeadingImg;
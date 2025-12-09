// "use client";

// import { useEffect } from "react";
// import AOS from "aos";
// import "aos/dist/aos.css";
// import headerImage from "../../public/Sway Header Banner_MAIN_ALT.jpg"
// import headerLogo from "../../public/SwayWhiteLogo.png"
// import Image from "next/image";

// const HeaderImage = () => {
//   useEffect(() => {
//     AOS.init({
//       duration: 1000,
//       once: false,
//     });
//   }, []);
//   return (
//     <div className="w-full h-[250px] md:h-[500px] xl:h-[650px]  relative">
//       <div data-aos="zoom-in" className="absolute top-20 md:top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-xs md:text-3xl xl:text-4xl font-normal text-white text-nowrap z-40" data-aos-delay="400">
//         PERSONALISED WELLNESS. REDEFINED FOR EVERY BODY.
//       </div>
//       {/* Box 1 */}
//       <div className="aspect-square overflow-hidden mt-12 md:mt-0" data-aos="zoom-in" data-aos-delay="300">
//         <Image
//           src={headerImage}
//           className="w-full object-contain"
//           alt="Random Pexels"
//         />
//       </div>

//       {/* Box 2
//       <div className="aspect-square overflow-hidden scale-110 z-20" data-aos="zoom-in">
//         <img
//           src="https://images.pexels.com/photos/34950/pexels-photo.jpg"
//           className="w-full h-full object-cover"
//           alt="Random Pexels"
//         />
//       </div>

//       Box 3 
//       <div className="aspect-square overflow-hidden " data-aos="fade-right" data-aos-delay="300">
//         <img
//           src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg"
//           className="w-full h-full object-cover"
//           alt="Random Pexels"
//         />
//       </div> */}
//       <div data-aos="zoom-in" className="absolute bottom-15 left-1/2 -translate-x-1/2 z-50 w-40 h-20 sm:w-56 sm:h-28">
//         <Image
//           src={headerLogo}
//           alt="SWAY"
//           width={224}
//           height={112}
//           className="object-contain "
//         />

//         {/* Rating Section */}
//         <div className="flex flex-col items-center mt-3 text-white ">
//           <div className="flex gap-2 md:gap-5 bg-black/10 px-2 rounded-full">
//             {Array.from({ length: 5 }).map((_, i) => (
//               <span key={i} className="text-yellow-400 text-base sm:text-lg">★</span>
//             ))}
//           </div>
//           <p className="text-xs sm:text-sm mt-1 md:mt-4 opacity-90">
//             4.9 · 9.7k Reviews
//           </p>
//         </div>
//       </div>

//     </div>
//   );
// };
// export default HeaderImage;

"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import h1 from "../../public/hOne.jpg";
import h2 from "../../public/hhtwo.jpg";
import h3 from "../../public/hThree.jpg";
import headerLogo from "../../public/SwayWhiteLogo.png";
import Image from "next/image";

const HeaderImage = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);

  return (
    <>
    {/* for desktop  */}
      <div className="w-full relative mt-10 md:mt-25 xl:mt-30 hidden md:block">

        {/*   CENTER TEXT   */}
        <div
          data-aos="zoom-in"
          className="absolute top-24 md:top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
        text-center text-sm md:text-3xl xl:text-4xl font-semibold text-white z-40 text-nowrap px-2"
        >
          PERSONALISED WELLNESS. REDEFINED FOR EVERY BODY.
        </div>

        {/*   3-IMAGE GRID   */}
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

        {/*   Logo + Rating   */}
        <div
          data-aos="zoom-in"
          className="absolute bottom-5 md:bottom-3 xl:bottom-10 left-1/2 -translate-x-1/2 z-50 flex flex-col items-center"
        >
          <div className="w-50 sm:w-60 xl:w-78">
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
      </div>

              {/* for phone  */}
      <div className="w-full relative mt-18 px-4 sm:px-6 block md:hidden">

        <div className="flex flex-col gap-3">

          {/* -- TOP SMALL IMAGE -- */}
          <div
            className="relative w-2/3 mx-auto aspect-[4/3] rounded-2xl overflow-hidden shadow-xl" // Narrower to prevent being too wide
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <Image src={h1} alt="Top Image" fill className="object-cover" />
          </div>

          {/* -- BIG MIDDLE IMAGE (The main focus) -- */}
          <div
            className="relative w-full h-[400px] rounded-3xl overflow-hidden shadow-2xl z-20" // Full width and taller
            data-aos="zoom-in"
            data-aos-delay="200"
          >
            <div
              data-aos="zoom-in"
              className="absolute top-10 left-1/2 -translate-x-1/2  
        text-center text-3xl font-semibold text-white z-40  px-2"
            >
              PERSONALISED WELLNESS. REDEFINED FOR EVERY BODY.
            </div>
            <Image src={h2} alt="Middle Big Image" fill className="object-cover" />
            <div
              data-aos="zoom-in"
              className="absolute bottom-10 left-1/2 -translate-x-1/2  
        text-center text-3xl font-semibold text-white z-40  px-2" // Simple flow below the stacked images
            >
              <div className="w-32">
                <Image src={headerLogo} alt="SWAY" className="object-contain w-full h-auto" />
              </div>

              <div className="flex flex-col items-center mt-3 text-white">
                <div className="flex gap-2 bg-black/30  px-3 py-1 rounded-full">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span key={i} className="text-yellow-400 text-base">★</span>
                  ))}
                </div>
                <p className="text-sm mt-2 opacity-90">4.9 · 9.7k Reviews</p>
              </div>
            </div>
          </div>

          {/* -- BOTTOM SMALL IMAGE -- */}
          <div
            className="relative w-2/3 mx-auto aspect-[4/3] rounded-2xl overflow-hidden shadow-xl" // Narrower to prevent being too wide
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <Image src={h3} alt="Bottom Image" fill className="object-cover" />
          </div>

        </div>

      </div>
    </>
  );
};

export default HeaderImage;



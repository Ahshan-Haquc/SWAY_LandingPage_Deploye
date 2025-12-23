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
  const googleReviewLink =
    "https://www.google.com/maps/place/Sway+Fitness+Studio/@51.4575066,-0.1098339,17z/data=!4m8!3m7!1s0xad249cd39d40b62d:0xf1b8e57683cd4a65!8m2!3d51.4575066!4d-0.1098339!9m1!1b1!16s%2Fg%2F11ww765hv0?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoASAFQAw%3D%3D";

  useEffect(() => {
    AOS.init({ duration: 1000, once: false });
  }, []);

  // Gradient overlay classes
  const gradientOverlay = "absolute inset-0 bg-black/10 pointer-events-none";
  const orangeGradient = "absolute inset-0 bg-gradient-to-tr from-orange-200/35 via-orange-400/20 to-orange-300/10 pointer-events-none";

  return (
    <>
      {/* ================= DESKTOP & TABLET ================= */}
      <div className="w-full relative mt-10 md:mt-25 xl:mt-30 hidden md:block">
        {/* Center Text */}
        <div
          data-aos="zoom-in"
          className="absolute top-24 md:top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center text-sm md:text-3xl xl:text-4xl font-semibold text-white z-40 text-nowrap px-2"
        >
          PERSONALISED WELLNESS. REDEFINED FOR EVERY BODY.
        </div>

        {/* Image Row */}
        <div className="grid grid-cols-3 items-center">
          {/* Left */}
          <div
            className="relative aspect-square rounded-3xl overflow-hidden shadow-xl shadow-[#79fcf8]/15"
            data-aos="fade-left"
            data-aos-delay="300"
          >
            <Image src={h1} alt="Left Image" fill className="object-cover" />
            <div className={gradientOverlay} />
            <div className={orangeGradient} />
          </div>

          {/* Middle */}
          <div
            className="relative rounded-3xl overflow-hidden h-40 md:h-92 xl:h-[550px] md:scale-110 z-20 shadow-xl shadow-[#79fcf8]/15"
            data-aos="zoom-in"
          >
            <Image src={h2} alt="Middle Image" fill className="object-cover" />
            <div className={gradientOverlay} />
            <div className={orangeGradient} />
          </div>

          {/* Right */}
          <div
            className="relative aspect-square rounded-3xl md:rounded-3xl overflow-hidden shadow-xl shadow-[#79fcf8]/15 "
            data-aos="fade-right"
            data-aos-delay="300"
          >
            <Image src={h3} alt="Right Image" fill className="object-cover" />
            <div className={gradientOverlay} />
            <div className={orangeGradient} />
          </div>
        </div>

        {/* Logo & Rating */}
        <div
          data-aos="zoom-in"
          className="absolute bottom-5 md:bottom-3 xl:bottom-10 left-1/2 -translate-x-1/2 z-50 flex flex-col items-center"
        >
          <div className="w-50 sm:w-60 xl:w-78">
            <Image src={headerLogo} alt="SWAY" className="object-contain w-full h-auto" />
          </div>

          <a
            href={googleReviewLink}
            target="_blank"
            className="flex flex-col items-center mt-3 text-white"
          >
            <div className="flex gap-3 bg-black/20 px-3 py-1 rounded-full">
              {Array.from({ length: 5 }).map((_, i) => (
                <span key={i} className="text-yellow-400 text-lg">★</span>
              ))}
            </div>
            <p className="text-xs sm:text-sm mt-2 opacity-90">4.9 · 9.7k Reviews</p>
          </a>
        </div>
      </div>

      {/* ================= MOBILE (HORIZONTAL + CROPPED SIDES) ================= */}
      <div className="w-full relative mt-18 overflow-hidden block md:hidden mx-4 ">
        <div className="relative flex items-center justify-center h-[420px]">
          {/* Left image */}
          <div
            className="absolute left-[-20%] w-[65%] h-[300px] rounded-3xl overflow-hidden shadow-xl opacity-80 "
            data-aos="fade-right"
          >
            <Image src={h1} alt="Left Mobile" fill className="object-cover " />
            <div className={gradientOverlay} />
            <div className={orangeGradient} />
          </div>

          {/* Center main image */}
          <div
            className="relative w-[75%] h-[340px] rounded-3xl overflow-hidden shadow-2xl z-20"
            data-aos="zoom-in"
          >
            <Image src={h2} alt="Center Mobile" fill className="object-cover" />
            <div className={gradientOverlay} />
            <div className={orangeGradient} />

            {/* Text */}
            <div className="absolute top-8 left-1/2 -translate-x-1/2 text-center text-2xl font-semibold text-white z-40 px-3">
              PERSONALISED WELLNESS. REDEFINED FOR EVERY BODY.
            </div>

            {/* Logo & rating */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center text-white z-40">
              <div className="w-28">
                <Image src={headerLogo} alt="SWAY" className="object-contain w-full h-auto" />
              </div>

              <div className="flex flex-col items-center mt-3">
                <div className="flex gap-2 bg-black/30 px-3 py-1 rounded-full">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span key={i} className="text-yellow-400 text-base">★</span>
                  ))}
                </div>
                <p className="text-sm mt-2 opacity-90">4.9 · 9.7k Reviews</p>
              </div>
            </div>
          </div>

          {/* Right image */}
          <div
            className="absolute right-[-20%] w-[65%] h-[300px] rounded-3xl overflow-hidden shadow-xl opacity-80"
            data-aos="fade-left"
          >
            <Image src={h3} alt="Right Mobile" fill className="object-cover" />
            <div className={gradientOverlay} />
            <div className={orangeGradient} />
          </div>
        </div>
      </div>
    </>
  );
};

export default HeaderImage;

// "use client";

// import { useEffect } from "react";
// import AOS from "aos";
// import "aos/dist/aos.css";
// import h1 from "../../public/hOne.jpg";
// import h2 from "../../public/hhtwo.jpg";
// import h3 from "../../public/hThree.jpg";
// import headerLogo from "../../public/SwayWhiteLogo.png";
// import Image from "next/image";

// const HeaderImage = () => {
//   const googleReviewLink =
//     "https://www.google.com/maps/place/Sway+Fitness+Studio/@51.4575066,-0.1098339,17z/data=!4m8!3m7!1s0xad249cd39d40b62d:0xf1b8e57683cd4a65!8m2!3d51.4575066!4d-0.1098339!9m1!1b1!16s%2Fg%2F11ww765hv0?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoASAFQAw%3D%3D";

//   useEffect(() => {
//     AOS.init({ duration: 1000, once: false });
//   }, []);

//   return (
//     <>
//       {/* ================= DESKTOP & TABLET ================= */}
//       <div className="w-full relative mt-10 md:mt-25 xl:mt-30 hidden md:block">
//         {/* Center Text */}
//         <div
//           data-aos="zoom-in"
//           className="absolute top-24 md:top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center text-sm md:text-3xl xl:text-4xl font-semibold text-white z-40 text-nowrap px-2"
//         >
//           PERSONALISED WELLNESS. REDEFINED FOR EVERY BODY.
//         </div>

//         {/* Image Row */}
//         <div className="grid grid-cols-3 items-center">
//           {/* Left */}
//           <div
//             className="relative aspect-square rounded-3xl overflow-hidden shadow-xl shadow-[#79fcf8]/15"
//             data-aos="fade-left"
//             data-aos-delay="300"
//           >
//             <Image src={h1} alt="Left Image" fill className="object-cover" />
//           </div>

//           {/* Middle (Focused) */}
//           <div
//             className="relative rounded-3xl overflow-hidden h-40 md:h-92 xl:h-[550px] md:scale-110 z-20 shadow-xl shadow-[#79fcf8]/15"
//             data-aos="zoom-in"
//           >
//             <Image src={h2} alt="Middle Image" fill className="object-cover" />
//           </div>

//           {/* Right */}
//           <div
//             className="relative aspect-square rounded-3xl overflow-hidden shadow-xl shadow-[#79fcf8]/15"
//             data-aos="fade-right"
//             data-aos-delay="300"
//           >
//             <Image src={h3} alt="Right Image" fill className="object-cover" />
//           </div>
//         </div>

//         {/* Logo & Rating */}
//         <div
//           data-aos="zoom-in"
//           className="absolute bottom-5 md:bottom-3 xl:bottom-10 left-1/2 -translate-x-1/2 z-50 flex flex-col items-center"
//         >
//           <div className="w-50 sm:w-60 xl:w-78">
//             <Image src={headerLogo} alt="SWAY" className="object-contain w-full h-auto" />
//           </div>

//           <a
//             href={googleReviewLink}
//             target="_blank"
//             className="flex flex-col items-center mt-3 text-white"
//           >
//             <div className="flex gap-3 bg-black/20 px-3 py-1 rounded-full">
//               {Array.from({ length: 5 }).map((_, i) => (
//                 <span key={i} className="text-yellow-400 text-lg">★</span>
//               ))}
//             </div>
//             <p className="text-xs sm:text-sm mt-2 opacity-90">4.9 · 9.7k Reviews</p>
//           </a>
//         </div>
//       </div>

//       {/* ================= MOBILE (HORIZONTAL + CROPPED SIDES) ================= */}
//       <div className="w-full relative mt-18 overflow-hidden block md:hidden">
//         {/* Horizontal strip */}
//         <div className="relative flex items-center justify-center h-[420px]">
//           {/* Left image (cropped) */}
//           <div
//             className="absolute left-[-20%] w-[65%] h-[300px] rounded-3xl overflow-hidden shadow-xl opacity-80"
//             data-aos="fade-right"
//           >
//             <Image src={h1} alt="Left Mobile" fill className="object-cover" />
//           </div>

//           {/* Center main image */}
//           <div
//             className="relative w-[75%] h-[340px] rounded-3xl overflow-hidden shadow-2xl z-20"
//             data-aos="zoom-in"
//           >
//             <Image src={h2} alt="Center Mobile" fill className="object-cover" />

//             {/* Text */}
//             <div className="absolute top-8 left-1/2 -translate-x-1/2 text-center text-2xl font-semibold text-white z-40 px-3">
//               PERSONALISED WELLNESS. REDEFINED FOR EVERY BODY.
//             </div>

//             {/* Logo & rating */}
//             <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center text-white z-40">
//               <div className="w-28">
//                 <Image src={headerLogo} alt="SWAY" className="object-contain w-full h-auto" />
//               </div>

//               <div className="flex flex-col items-center mt-3">
//                 <div className="flex gap-2 bg-black/30 px-3 py-1 rounded-full">
//                   {Array.from({ length: 5 }).map((_, i) => (
//                     <span key={i} className="text-yellow-400 text-base">★</span>
//                   ))}
//                 </div>
//                 <p className="text-sm mt-2 opacity-90">4.9 · 9.7k Reviews</p>
//               </div>
//             </div>
//           </div>

//           {/* Right image (cropped) */}
//           <div
//             className="absolute right-[-20%] w-[65%] h-[300px] rounded-3xl overflow-hidden shadow-xl opacity-80"
//             data-aos="fade-left"
//           >
//             <Image src={h3} alt="Right Mobile" fill className="object-cover" />
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default HeaderImage;




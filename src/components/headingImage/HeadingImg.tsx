import Image from "next/image";
import headerLogo from "../../../public/SwayWhiteLogo.png";

const HeadingImg = ({
  h1,
  h2,
  h3,
  isText1Show = false,
  isText2Show = false,
}: {
  h1: any;
  h2: any;
  h3: any;
  phoneImg: any;
  isText1Show?: boolean;
  isText2Show?: boolean;
}) => {
  // EXACT same overlays as the first component
  const thinOverlay = "absolute inset-0 bg-black/10 pointer-events-none";
  const orangeGradient =
    "absolute inset-0 bg-gradient-to-tr from-orange-200/35 via-orange-400/20 to-orange-300/10 pointer-events-none";

  return (
    <div className="mx-4">
      {/* ================= MOBILE ================= */}
      <div className="w-full h-[280px] relative block md:hidden overflow-hidden px-22 mx-4">
        <div className="relative flex items-center justify-center h-full">
          {/* Left */}
          <div
            className="absolute left-[-30%] w-[60%] h-[200px] rounded-3xl overflow-hidden shadow-lg opacity-80"
            data-aos="fade-right"
            data-aos-delay="100"
          >
            <Image src={h1} alt="Left Mobile" fill className="object-cover" />
            <div className={thinOverlay} />
            <div className={orangeGradient} />
          </div>

          {/* Middle */}
          <div
            className="relative w-[75%] h-[250px] rounded-3xl overflow-hidden shadow-xl z-20"
            data-aos="zoom-in"
          >
            <Image src={h2} alt="Middle Mobile" fill className="object-cover" />
            <div className={thinOverlay} />
            <div className={orangeGradient} />
          </div>

          {/* Right */}
          <div
            className="absolute right-[-30%] w-[60%] h-[200px] rounded-3xl overflow-hidden shadow-lg opacity-80"
            data-aos="fade-left"
            data-aos-delay="100"
          >
            <Image src={h3} alt="Right Mobile" fill className="object-cover" />
            <div className={thinOverlay} />
            <div className={orangeGradient} />
          </div>
        </div>
      </div>

      {/* ================= DESKTOP ================= */}
      <div className="w-full relative mt-10 md:mt-25 xl:mt-30 hidden md:block">
        {/* CENTER TEXT */}
        {isText1Show && (
          <div
            data-aos="zoom-in"
            className="absolute top-24 md:top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
            text-center text-sm md:text-3xl xl:text-4xl font-semibold text-white z-40 text-nowrap px-2"
          >
            PERSONALISED WELLNESS. REDEFINED FOR EVERY BODY.
          </div>
        )}

        {/* IMAGE GRID */}
        <div className="grid grid-cols-3 items-center justify-center">
          {/* LEFT */}
          <div
            className="relative aspect-square rounded-3xl overflow-hidden shadow-xl shadow-[#79fcf8]/15"
            data-aos="fade-left"
            data-aos-delay="300"
          >
            <Image src={h1} alt="Left Image" fill className="object-cover" />
            <div className={thinOverlay} />
            <div className={orangeGradient} />
          </div>

          {/* CENTER */}
          <div
            className="relative rounded-3xl overflow-hidden
            h-40 md:h-92 xl:h-[550px] md:scale-110 z-20 shadow-xl shadow-[#79fcf8]/15"
            data-aos="zoom-in"
          >
            <Image src={h2} alt="Middle Big Image" fill className="object-cover" />
            <div className={thinOverlay} />
            <div className={orangeGradient} />
          </div>

          {/* RIGHT */}
          <div
            className="relative aspect-square rounded-3xl overflow-hidden shadow-xl shadow-[#79fcf8]/15"
            data-aos="fade-right"
            data-aos-delay="300"
          >
            <Image src={h3} alt="Right Image" fill className="object-cover" />
            <div className={thinOverlay} />
            <div className={orangeGradient} />
          </div>
        </div>

        {/* LOGO + RATING */}
        {isText2Show && (
          <div
            data-aos="zoom-in"
            className="absolute bottom-5 md:bottom-3 xl:bottom-10 left-1/2 -translate-x-1/2 z-50 flex flex-col items-center"
          >
            <div className="w-40 sm:w-56">
              <Image
                src={headerLogo}
                alt="SWAY"
                className="object-contain w-full h-auto"
              />
            </div>

            <div className="flex flex-col items-center mt-3 text-white">
              <div className="flex gap-3 bg-black/20 px-3 py-1 rounded-full">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span key={i} className="text-yellow-400 text-lg">★</span>
                ))}
              </div>
              <p className="text-xs sm:text-sm mt-2 opacity-90">
                4.9 · 9.7k Reviews
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default HeadingImg;




// import Image from 'next/image';
// import React from 'react';
// import headerLogo from '../../../public/SwayWhiteLogo.png';

// const HeadingImg = ({
//   h1,
//   h2,
//   h3,
//   phoneImg,
//   isText1Show = false,
//   isText2Show = false,
// }: {
//   h1: any;
//   h2: any;
//   h3: any;
//   phoneImg: any;
//   isText1Show?: boolean;
//   isText2Show?: boolean;
// }) => {
//   return (
//     <div>
//       {/* ================= MOBILE ================= */}
//       <div className="w-full h-[280px] relative block md:hidden overflow-hidden">
//         <div className="relative flex items-center justify-center h-full">
//           {/* Left image */}
//           <div
//             className="absolute left-[-30%] w-[60%] h-[200px] rounded-3xl overflow-hidden shadow-lg opacity-80"
//             data-aos="fade-right"
//             data-aos-delay="100"
//           >
//             <Image src={h1} alt="Left Mobile" fill className="object-cover" />
//             {/* Stronger orange diagonal gradient */}
//             <div className="absolute inset-0 bg-gradient-to-tr from-orange-200/25 to-orange-100/10 pointer-events-none" />
//           </div>

//           {/* Middle image */}
//           <div
//             className="relative w-[75%] h-[250px] rounded-3xl overflow-hidden shadow-xl z-20"
//             data-aos="zoom-in"
//           >
//             <Image src={h2} alt="Middle Mobile" fill className="object-cover" />
//             <div className="absolute inset-0 bg-gradient-to-tr from-orange-200/25 to-orange-100/10 pointer-events-none" />
//           </div>

//           {/* Right image */}
//           <div
//             className="absolute right-[-30%] w-[60%] h-[200px] rounded-3xl overflow-hidden shadow-lg opacity-80"
//             data-aos="fade-left"
//             data-aos-delay="100"
//           >
//             <Image src={h3} alt="Right Mobile" fill className="object-cover" />
//             <div className="absolute inset-0 bg-gradient-to-tr from-orange-200/25 to-orange-100/10 pointer-events-none" />
//           </div>
//         </div>
//       </div>

//       {/* ================= DESKTOP ================= */}
//       <div className="w-full relative mt-10 md:mt-25 xl:mt-30 hidden md:block">
//         {/* CENTER TEXT */}
//         {isText1Show && (
//           <div
//             data-aos="zoom-in"
//             className="absolute top-24 md:top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
//             text-center text-sm md:text-3xl xl:text-4xl font-semibold text-white z-40 text-nowrap px-2"
//           >
//             PERSONALISED WELLNESS. REDEFINED FOR EVERY BODY.
//           </div>
//         )}

//         {/* 3 IMAGE GRID */}
//         <div className="grid grid-cols-3 items-center justify-center">
//           {/* LEFT */}
//           <div
//             className="relative aspect-square rounded-3xl overflow-hidden shadow-xl shadow-[#79fcf8]/15"
//             data-aos="fade-left"
//             data-aos-delay="300"
//           >
//             <Image src={h1} alt="Left Image" fill className="object-cover" />
//             <div className="absolute inset-0 bg-gradient-to-tr from-orange-200/25 to-orange-100/10 pointer-events-none" />
//           </div>

//           {/* CENTER */}
//           <div
//             className="relative rounded-3xl overflow-hidden
//             h-40 md:h-92 xl:h-[550px] md:scale-110 z-20 shadow-xl shadow-[#79fcf8]/15"
//             data-aos="zoom-in"
//           >
//             <Image src={h2} alt="Middle Big Image" fill className="object-cover" />
//             <div className="absolute inset-0 bg-gradient-to-tr from-orange-200/25 to-orange-100/10 pointer-events-none" />
//           </div>

//           {/* RIGHT */}
//           <div
//             className="relative aspect-square rounded-3xl overflow-hidden shadow-xl shadow-[#79fcf8]/15"
//             data-aos="fade-right"
//             data-aos-delay="300"
//           >
//             <Image src={h3} alt="Right Image" fill className="object-cover" />
//             <div className="absolute inset-0 bg-gradient-to-tr from-orange-200/25 to-orange-100/10 pointer-events-none" />
//           </div>
//         </div>

//         {/* LOGO + RATING */}
//         {isText2Show && (
//           <div
//             data-aos="zoom-in"
//             className="absolute bottom-5 md:bottom-3 xl:bottom-10 left-1/2 -translate-x-1/2 z-50 flex flex-col items-center"
//           >
//             <div className="w-40 sm:w-56">
//               <Image
//                 src={headerLogo}
//                 alt="SWAY"
//                 className="object-contain w-full h-auto"
//               />
//             </div>

//             <div className="flex flex-col items-center mt-3 text-white">
//               <div className="flex gap-3 bg-black/20 px-3 py-1 rounded-full">
//                 {Array.from({ length: 5 }).map((_, i) => (
//                   <span key={i} className="text-yellow-400 text-lg">★</span>
//                 ))}
//               </div>
//               <p className="text-xs sm:text-sm mt-2 opacity-90">
//                 4.9 · 9.7k Reviews
//               </p>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default HeadingImg;

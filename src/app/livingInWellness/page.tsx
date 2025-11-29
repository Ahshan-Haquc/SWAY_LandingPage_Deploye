// import Footer from '@/components/Footer';
// import React from 'react';
// import Image from "next/image";
// import imgOne from '../../../public/curated.jpg'
// import imgTwo from '../../../public/yankruv.jpg'
// import LogoIcon from "../../../public/LogoIcon.png";
// import imgNew from "../../../public/Untitled design.png";

// const page = () => {
//     return (
//         <div className='min-h-screen '>
//             <div className="relative max-w-[1440px] h-fit mx-auto p-6 pt-22 md:pt-0 my-0 mt-0 md:mt-22 overflow-hidden bg-[#4E4D59] rounded-xl">

//                 <div className="max-w-7xl mx-auto p-12 ">
//                     {/* Box 1: Image Left, Text Right */}
//                     <div className="grid grid-cols-1 md:grid-cols-2 gap-6 z-20 items-center pt-12 mb-12">
//                         <div className="w-full h-44 md:h-98 relative" data-aos="fade-right" data-aos-delay="300">
                            
//                             <Image
//                                 src={imgNew}
//                                 fill 
//                                 alt="Image"
//                                 className="object-cover rounded-xl "
//                                 sizes="(max-width: 768px) 100vw, 50vw"
//                             />
//                         </div>
//                         <div className="flex flex-col items-center justify-center md:items-start space-y-2 md:space-y-4 z-20 text-gray-200" data-aos="zoom-in" data-aos-delay="200">
//                             <h2 className="text-lg md:text-xl xl:text-4xl font-light text-[#FAEFB8] tracking-wide">
//                                 CORPORATE TRAINING
//                             </h2>
//                             <p className="text-xs md:text-sm xl:text-lg font-light text-center md:text-left">
//                                 Sharper teams start here. Work well. Work wisely.
//                             </p>
//                             <p className="text-xs md:text-sm xl:text-lg font-light text-center md:text-left">
//                                 Elevate workplace performance with tailored fitness, movement, and
//                                 wellbeing training. From Pilates and strength to recovery and
//                                 posture workshops, each session is customised for your team's
//                                 needs - on-site or online. Add 1:1 coaching and wellbeing seminars
//                                 for resilience, focus, and reduced strain.
//                             </p>
//                             <p className="text-xs md:text-sm xl:text-lg font-light text-center md:text-left">
//                                 When your team moves better, they work better.
//                             </p>
//                             <p className="text-xs md:text-sm xl:text-lg font-light text-center md:text-left">
//                                 <a href="#" className="underline font-medium">Contact us</a> for a bespoke corporate wellbeing package.
//                             </p>
//                         </div>
//                     </div>

//                     {/* Box 2: Text Left, Image Right */}
//                     <div className="grid grid-cols-1 md:grid-cols-2 gap-6 z-20 items-center ">
//                         <div className="flex flex-col items-center justify-center text-center md:items-start space-y-2 md:space-y-4 z-20 p-8 text-gray-200 order-2 md:order-1" data-aos="zoom-in" data-aos-delay="200">
//                             <h2 className="text-lg md:text-xl xl:text-4xl  font-light text-[#FAEFB8] tracking-wide text-center md:text-left">
//                                 RESIDENTIAL - TRAINING & GYM MANAGEMENT
//                             </h2>
//                             <p className="text-xs md:text-sm xl:text-lg font-light text-center md:text-left">
//                                 Elevate living. Curate your fitness experience.
//                             </p>
//                             <p className="text-xs md:text-sm xl:text-lg font-light text-center md:text-left">
//                                 Create a fitness ecosystem that blends community, quality, and
//                                 convenience. From tailored group classes in Mobility, Strength,
//                                 Pilates, Yoga, or bespoke sessions, to on-site coaching and
//                                 wellness workshops, Sway delivers seamless, resident-first
//                                 programming. Think flawless operations, smooth onboarding,
//                                 effortless scheduling, and a space that reflects your buildings
//                                 identity.
//                             </p>
//                             <p className="text-xs md:text-sm xl:text-lg font-light text-center md:text-left">
//                                 Transform your buildings wellbeing.
//                             </p>
//                             <p className="text-xs md:text-sm xl:text-lg font-light text-center md:text-left">
//                                 <a href="#" className="underline font-medium">Contact us</a> for premium residential fitness solutions
//                             </p>
//                         </div>
//                         <div className="w-full h-44 md:h-98 relative order-1 md:order-2" data-aos="fade-left" data-aos-delay="300">
//                             <Image
//                                 src={imgTwo}
//                                 fill
//                                 alt="Image"
//                                 className="object-cover rounded-xl"
//                                 sizes="(max-width: 768px) 100vw, 50vw"
//                             />
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             {/* email box  */}
//             <div className="bg-[#80b1fb] max-w-[1440px] mx-auto rounded-xl text-white p-4 md:p-8 h-40 md:h-60 my-2 md:my-10 flex flex-col justify-between" data-aos="fade-up">

//                 <div className="flex justify-between items-start mb-4">
//                     {/* Headline */}
//                     <h1 className="text-xl md:text-3xl xl:text-4xl font-light tracking-wide max-w-2xl">
//                         LET'S SWAY TOGETHER
//                     </h1>

//                     {/* <div className="text-[#FF6464] text-5xl md:text-6xl font-light opacity-80">
//           Y
//         </div> */}
//                     <div className="relative w-12 h-8 md:w-32 md:h-12">
//                         <Image src={LogoIcon} alt="Y" fill className="object-contain" />
//                     </div>
//                 </div>

//                 {/* Bottom Row: Subscription Form */}
//                 <div className="flex flex-col w-full md:max-w-1/2">
//                     {/* Labels */}
//                     <div className="flex justify-between w-full text-xs md:text-sm font-normal tracking-widest mb-2">
//                         <label htmlFor="email-input" className="text-[#FF6464] opacity-90">
//                             EMAIL
//                         </label>
//                         <button className="text-[#FF6464] opacity-90 hover:opacity-100 transition-opacity duration-200">
//                             JOIN MAILING LIST
//                         </button>
//                     </div>

//                     {/* Input Field (Bottom Border) */}
//                     <div className="border-b border-white pb-1">
//                         <input
//                             id="email-input"
//                             type="email"
//                             placeholder=""
//                             className="bg-transparent text-white w-full focus:outline-none placeholder-gray-400 text-base md:text-lg"
//                         />
//                     </div>
//                 </div>
//             </div>
//             <div className="max-w-[1440px] mx-auto">
//             <Footer />
//             </div>
//         </div>
//     );
// };

// export default page;


import Footer from '@/components/Footer';
import React from 'react';
import Image from "next/image";
import imgOne from '../../../public/curated.jpg';
import imgTwo from '../../../public/yankruv.jpg';
import LogoIcon from "../../../public/LogoIcon.png";
import imgNew from "../../../public/Untitled design.png";

const page = () => {
    return (
        <div className='min-h-screen text-center'>
            <div className="relative max-w-[1440px] h-fit mx-auto p-6 pt-22 md:pt-0 my-0 mt-0 md:mt-22 overflow-hidden bg-[#4E4D59] rounded-xl text-center">

                <div className="max-w-7xl mx-auto p-12 ">
                    {/* Box 1: Image Left, Text Right */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-15 z-20 items-center pt-12 mb-12 text-center">
                        <div className="w-full h-44 md:h-98 relative" data-aos="fade-right" data-aos-delay="300">
                            <Image
                                src={imgNew}
                                fill 
                                alt="Image"
                                className="object-cover rounded-xl "
                                sizes="(max-width: 768px) 100vw, 50vw"
                            />
                        </div>
                        <div className="flex  flex-col items-center justify-center space-y-2 md:space-y-4 z-20 text-gray-200" data-aos="zoom-in" data-aos-delay="200">
                            <h2 className="text-lg md:text-xl xl:text-4xl font-light text-[#FAEFB8] tracking-wide">
                                CORPORATE TRAINING
                            </h2>
                            <p className="text-xs md:text-sm xl:text-lg font-light">
                                Sharper teams start here. Work well. Work wisely.
                            </p>
                            <p className="text-xs md:text-sm xl:text-lg font-light">
                                Elevate workplace performance with tailored fitness, movement, and
                                wellbeing training. From Pilates and strength to recovery and
                                posture workshops, each session is customised for your team's
                                needs - on-site or online. Add 1:1 coaching and wellbeing seminars
                                for resilience, focus, and reduced strain.
                            </p>
                            <p className="text-xs md:text-sm xl:text-lg font-light">
                                When your team moves better, they work better.
                            </p>
                            <p className="text-xs md:text-sm xl:text-lg font-light">
                                <a href="#" className="underline font-medium">Contact us</a> for a bespoke corporate wellbeing package.
                            </p>
                        </div>
                    </div>

                    {/* Box 2: Text Left, Image Right */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-15 z-20 items-center text-center">
                        <div className="flex flex-col items-center justify-center space-y-2 md:space-y-4 z-20 p-8 text-gray-200 order-2 md:order-1" data-aos="zoom-in" data-aos-delay="200">
                            <h2 className="text-lg md:text-xl xl:text-4xl font-light text-[#FAEFB8] tracking-wide">
                                RESIDENTIAL - TRAINING & GYM MANAGEMENT
                            </h2>
                            <p className="text-xs md:text-sm xl:text-lg font-light">
                                Elevate living. Curate your fitness experience.
                            </p>
                            <p className="text-xs md:text-sm xl:text-lg font-light">
                                Create a fitness ecosystem that blends community, quality, and
                                convenience. From tailored group classes in Mobility, Strength,
                                Pilates, Yoga, or bespoke sessions, to on-site coaching and
                                wellness workshops, Sway delivers seamless, resident-first
                                programming. Think flawless operations, smooth onboarding,
                                effortless scheduling, and a space that reflects your buildings
                                identity.
                            </p>
                            <p className="text-xs md:text-sm xl:text-lg font-light">
                                Transform your buildings wellbeing.
                            </p>
                            <p className="text-xs md:text-sm xl:text-lg font-light">
                                <a href="#" className="underline font-medium">Contact us</a> for premium residential fitness solutions
                            </p>
                        </div>
                        <div className="w-full h-44 md:h-98 relative order-1 md:order-2" data-aos="fade-left" data-aos-delay="300">
                            <Image
                                src={imgTwo}
                                fill
                                alt="Image"
                                className="object-cover rounded-xl"
                                sizes="(max-width: 768px) 100vw, 50vw"
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* email box  */}
            <div className="bg-[#80b1fb] max-w-[1440px] mx-auto rounded-xl text-white p-4 md:p-8 h-40 md:h-60 my-2 md:my-10 flex flex-col justify-between text-center" data-aos="fade-up">

                <div className="flex justify-between items-start mb-4">
                    <h1 className="text-xl md:text-3xl xl:text-4xl font-light tracking-wide max-w-2xl">
                        LET'S SWAY TOGETHER
                    </h1>

                    <div className="relative w-12 h-8 md:w-32 md:h-12">
                        <Image src={LogoIcon} alt="Y" fill className="object-contain" />
                    </div>
                </div>

                <div className="flex flex-col w-full md:max-w-1/2 text-center">
                    <div className="flex justify-between w-full text-xs md:text-sm font-normal tracking-widest mb-2">
                        <label htmlFor="email-input" className="text-[#FF6464] opacity-90">
                            EMAIL
                        </label>
                        <button className="text-[#FF6464] opacity-90 hover:opacity-100 transition-opacity duration-200">
                            JOIN MAILING LIST
                        </button>
                    </div>

                    <div className="border-b border-white pb-1">
                        <input
                            id="email-input"
                            type="email"
                            placeholder=""
                            className="bg-transparent text-white w-full focus:outline-none placeholder-gray-400 text-base md:text-lg text-center"
                        />
                    </div>
                </div>
            </div>

            <div className="max-w-[1440px] mx-auto text-center">
                <Footer />
            </div>
        </div>
    );
};

export default page;


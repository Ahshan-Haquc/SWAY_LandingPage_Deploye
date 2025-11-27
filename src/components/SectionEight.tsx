import Image from "next/image";
import React from "react";

const SectionEight = () => {
  return (
    <div className="relative py-6 my-0 md:my-12 overflow-hidden">
      {/* <div className="h-full w-screen absolute top-0 left-0 md:left-6 xl:left-12 bg-[#4E4D59] z-0"></div> */}
      <div className="h-full w-screen absolute top-0 left-0  bg-[#4E4D59] z-0"></div>
      <div className="grid grid-cols-1 md:grid-cols-2 z-20">
        {/* box */}
        <div className="p-2 md:p-8 flex flex-col items-center gap-3">
          <div className="w-full h-44 md:h-88 relative"  data-aos="fade-right" data-aos-delay="300">
            <Image
              src="https://images.pexels.com/photos/949126/pexels-photo-949126.jpeg"
              fill
              alt="Image"
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div className="flex flex-col items-center space-y-2 md:space-y-4 z-20 text-gray-200"  data-aos="zoom-in" data-aos-delay="200">
            {/* Main Headline */}
            <h2 className="text-lg md:text-xl font-light text-[#FAEFB8] tracking-wide text-nowrap">
              CORPORATE TRAINING
            </h2>

            {/* Sub-Headline / Motto */}
            <p className="text-xs md:text-sm font-light text-center">
              Sharper teams start here. Work well. Work wisely.
            </p>

            {/* Detailed Description */}
            <p className="text-xs md:text-sm font-light  text-center px-2 md:px-6">
              Elevate workplace performance with tailored fitness, movement, and
              wellbeing training. From Pilates and strength to recovery and
              posture workshops, each session is customised for your team's
              needs - on-site or online. Add 1:1 coaching and wellbeing seminars
              for resilience, focus, and reduced strain.
            </p>

            {/* Call to Action (Repeated on the left for emphasis) */}
            <p className="text-xs md:text-sm font-light  text-center">
              When your team moves better, they work better.
            </p>
            <p className="text-xs md:text-sm font-light  text-center">
              <a href="#" className="underline font-medium">Contact us</a> for a bespoke corporate wellbeing package.
            </p>
          </div>
        </div>
        {/* box */}
        <div className="p-2 md:p-8 flex flex-col items-center gap-3">
          <div className="w-full h-44 md:h-88 relative"  data-aos="fade-left" data-aos-delay="300">
            <Image
              src="https://images.pexels.com/photos/1954524/pexels-photo-1954524.jpeg"
              fill
              alt="Image"
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div className="flex flex-col items-center space-y-2 md:space-y-4 z-20 text-gray-200"  data-aos="zoom-in" data-aos-delay="200">
            {/* Main Headline */}
            <h2 className="text-lg md:text-xl font-light text-[#FAEFB8] tracking-wide text-center text-wrap">
              RESIDENTIAL - TRAINING & GYM MANAGEMENT
            </h2>

            {/* Sub-Headline / Motto */}
            <p className="text-xs md:text-sm font-light text-center">
              Elevate living. Curate your fitness experience.
            </p>

            {/* Detailed Description */}
            <p className="text-xs md:text-sm font-light  text-center  px-2 md:px-6">
              Create a fitness ecosystem that blends community, quality, and
              convenience. From tailored group classes in Mobility, Strength,
              Pilates, Yoga, or bespoke sessions, to on-site coaching and
              wellness workshops, Sway delivers seamless, resident-first
              programming. Think flawless operations, smooth onboarding,
              effortless scheduling, and a space that reflects your buildings
              identity.
            </p>

            <p className="text-xs md:text-sm font-light  text-center">
              Transform your buildings wellbeing.
            </p>
            <p className="text-xs md:text-sm font-light  text-center">
              <a href="#" className="underline font-medium">Contact us</a> for premium residential fitness solutions
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionEight;

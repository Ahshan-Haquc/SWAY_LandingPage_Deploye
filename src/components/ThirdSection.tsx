"use client";
import React from "react";
import dynamic from "next/dynamic";

const Slider = dynamic(() => import("react-slick"), {
  ssr: false,
});

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ThirdSection = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="w-full overflow-hidden"  data-aos="zoom-in" data-aos-delay="100">
      <Slider {...settings} className="w-full">
        
        {/* SLIDE 1 */}
        <div className="!flex !justify-center !items-center w-full">
          <div className="h-fit xl:h-74 w-full bg-[#FF6464] grid grid-cols-1 md:grid-cols-2 gap-1 md:gap-6 p-4 md:p-12 xl:p-22">
            
            {/* LEFT BOX */}
            <div className="flex justify-between gap-2 text-white h-fit">
              <div className=" text-8xl -translate-y-2 md:-translate-y-8">"</div>
              <div className="flex flex-col justify-center items-center gap-3">
                <p className="text-center text-[10px] md:text-sm">
                  The 1-to-1 sessions are what really set it apart. Everything is tailored to me - not just my goals, but how my body moves. Ive seen improvements in posture, strength, and just how I feel overall. Its the first time in a while Ive felt like Im training with my body instead of against it.

                </p>
                <p className="text-xs md:text-md">Inserra Comedy</p>
              </div>
              <div className="text-8xl translate-y-18">"</div>
            </div>

            {/* RIGHT BOX */}
            <div className="flex justify-between gap-2 text-white">
              <div className="text-8xl -translate-y-8">"</div>
              <div className="flex flex-col justify-center items-center gap-3">
                <p className="text-center text-[10px] md:text-sm">
                  Every session is challenging yet rewarding, and they genuinely care about helping you achieve your goals. Whether youre a beginner or an experienced athlete, they tailor workouts perfectly to your needs while pushing you to be your best.

                </p>
                <p className="text-xs md:text-md">Christopher Harrington</p>
              </div>
              <div className="text-8xl translate-y-18">"</div>
            </div>

          </div>
        </div>
        {/* SLIDE 2 */}
        <div className="!flex !justify-center !items-center w-full">
          <div className="h-fit xl:h-74 w-full bg-[#FF6464] grid grid-cols-1 md:grid-cols-2 gap-1 md:gap-6 p-4 md:p-12 xl:p-22">
            
            {/* LEFT BOX */}
            <div className="flex justify-between gap-2 text-white">
              <div className="text-8xl -translate-y-8">"</div>
              <div className="flex flex-col justify-center items-center gap-3">
                <p className="text-center text-[10px] md:text-sm">
I cannot recommend Sway highly enough. Every session is tailored specifically to my requirements. The sessions are challenging but enjoyable. I can see improvements in my strength and flexibility. The sessions are based on an extensive knowledge of how the body works, pilates and nutrition resulting in precise, targeted and effective exercises.

                </p>
                <p className="text-xs md:text-md">Cath Pierce</p>
              </div>
              <div className="text-8xl translate-y-18">"</div>
            </div>

            {/* RIGHT BOX */}
            <div className="flex justify-between gap-2 text-white">
              <div className="text-8xl -translate-y-8">"</div>
              <div className="flex flex-col justify-center items-center gap-3">
                <p className="text-center text-[10px] md:text-sm">
                  I couldn't recommend Sway more highly. From the very first session, they made me feel comfortable and motivated. Their approach is personalised, tailoring each workout to fit my goals and abilities. They push me to challenge myself while keeping things fun. The Sway team go the extra mile to focus on form, and for this alone, it is worth investing in...as I finally feel like I am doing all of my exercises correctly and seeing real results. It is well worth it!
                </p>
                <p className="text-xs md:text-md">Georgie R</p>
              </div>
              <div className="text-8xl translate-y-18">"</div>
            </div>

          </div>
        </div>


      </Slider>
    </div>
  );
};

export default ThirdSection;

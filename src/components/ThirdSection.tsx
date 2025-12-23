"use client";
import dynamic from "next/dynamic";
import Image from "next/image";
import logo from "../../public/LogoIcon.png";

const Slider = dynamic(() => import("react-slick"), {
  ssr: false,
});

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { testimonials } from "@/data/reviewData";



const ThirdSection = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 9000,
    dotsClass: "slick-dots custom-dots",
  };

  return (
    <div
      className="w-full px-2 py-10 rounded-2xl overflow-hidden"
      data-aos="zoom-in"
      data-aos-delay="100"
    >
      <Slider {...settings} className="w-full">
        {testimonials.map((item, index) => (
          <div
            key={index}
            className="flex! justify-center! items-center! w-full rounded-2xl overflow-hidden p-1"
          >
            <div className="relative h-124 xl:h-82 w-full bg-[#FF6464] grid grid-cols-1 md:grid-cols-2 gap-1 md:gap-6 p-4 md:p-12 xl:p-22 items-center rounded-2xl">

              {/* LOGO (TOP RIGHT) */}
              <div className="absolute top-4 right-4 md:top-6 md:right-6 w-10 h-10 md:w-14 md:h-14">
                <div className="h-8 w-8 relative filter brightness-0 invert mx-4">
                  <Image
                    alt="Y"
                    src={logo}
                    fill
                    className="h-full w-full object-contain"
                  />
                </div>
              </div>

              {/* LEFT BOX */}
              <div className="flex justify-between gap-2 text-white h-fit">
                <div className="text-8xl -translate-y-2 md:-translate-y-8">“</div>

                <div className="flex flex-col justify-center items-center gap-3">
                  <p className="text-center text-[10px] md:text-sm">
                    {item.text}
                  </p>
                  <p className="text-xs md:text-md">{item.author}</p>
                </div>

                <div className="text-8xl translate-y-18">”</div>
              </div>

              {/* RIGHT BOX */}
              <div className="flex justify-between gap-2 text-white">
                <div className="text-8xl -translate-y-8">“</div>

                <div className="flex flex-col justify-center items-center gap-3">
                  <p className="text-center text-[10px] md:text-sm ">
                    {item.text}
                  </p>
                  <p className="text-xs md:text-md">{item.author}</p>
                </div>

                <div className="text-8xl translate-y-18">”</div>
              </div>

            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ThirdSection;
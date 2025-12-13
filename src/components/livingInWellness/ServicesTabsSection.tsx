"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";

// IMPORT YOUR IMAGES
import LogoIcon from "../../../public/LogoIcon.png";
import imgNew from "../../../public/Untitled design.png";
import imgTwo from '../../../public/yankruv.jpg';
import imgThree from '../../../public/gym.jpg';
import Link from "next/link";

export default function ServicesTabsSection() {
  const [activeTab, setActiveTab] = useState(0);

  useEffect(() => {
    AOS.init({
      duration: 900,
      once: false,
    });
  }, []);

  return (
    <div className="min-h-screen text-center">
      <div className="relative  h-fit mx-auto py-6 pt-22 md:pt-0 my-0 mt-0 md:mt-22 overflow-hidden  rounded-xl text-center">

        {/* ---------------- TAB NAVIGATION ---------------- */}
        <div className="flex justify-center gap-6 mt-6 text-gray-500">
          {["Corporate Training", "Residential Management", "Gym Management"].map((item, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              className={`
                px-4 py-2 text-xs md:text-md lg:text-xl transition-all
                ${activeTab === index
                  ? "text-black border-b-2 border-[#FAEFB8]"
                  : "opacity-60 hover:opacity-100"}
              `}
            >
              {item}
            </button>
          ))}
        </div>

        {/* ---------------- TAB CONTENT WRAPPER ---------------- */}
        <div className="w-full mx-auto p-2 md:p-12">

          {/* ---------- TAB 1: CORPORATE TRAINING ---------- */}
          {activeTab === 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-15 items-center bg-[#FAEFB8] py-12 px-8 mb-12 text-center rounded-2xl">
              <div className="w-full h-44 md:h-98 relative" data-aos="fade-right" data-aos-delay="300">
                <Image
                  src={imgNew}
                  fill
                  alt="Image"
                  className="object-cover rounded-xl"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>

              <div
                className="flex flex-col items-center justify-center space-y-2 md:space-y-4 text-gray-800"
                data-aos="zoom-in"
                data-aos-delay="200"
              >
                <h2 className="text-lg md:text-xl xl:text-4xl font-light text-gray-900 tracking-wide mb-10">
                  CORPORATE TRAINING
                </h2>
                <p className="text-xs md:text-sm xl:text-lg font-light">
                  Sharper teams start here. Work well. Work wisely.
                </p>
                <p className="text-xs md:text-sm xl:text-lg font-light">
                  Elevate workplace performance with tailored fitness, movement, and wellbeing training.
                  From Pilates and strength to recovery and posture workshops...
                </p>
                <p className="text-xs md:text-sm xl:text-lg font-light">
                  When your team moves better, they work better.
                </p>
                <Link href="/contact" className="px-6 py-3 bg-white text-black">
                Contact us
                </Link>
              </div>
            </div>
          )}

          {/* ---------- TAB 2: RESIDENTIAL MANAGEMENT ---------- */}
          {activeTab === 1 && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-15 items-center text-center">
              <div
                className="flex flex-col items-center justify-center space-y-2 md:space-y-4 text-gray-800 p-8 order-2 md:order-1"
                data-aos="zoom-in"
                data-aos-delay="200"
              >
                <h2 className="text-lg md:text-xl xl:text-4xl font-light text-white tracking-wide mb-10 text-nowrap px-1 bg-[#FF6464]">
                  RESIDENTIAL MANAGEMENT
                </h2>

                <p className="text-xs md:text-sm xl:text-lg font-light">
                  Elevate living. Curate your fitness experience.
                </p>

                <p className="text-xs md:text-sm xl:text-lg font-light">
                  Create a fitness ecosystem that blends community, quality, and convenience...
                </p>

                <p className="text-xs md:text-sm xl:text-lg font-light">
                  Transform your building&apos;s wellbeing.
                </p>

                <Link href="/contact" className="px-6 py-3 bg-[#FF6464] text-white ">
                Contact us
                </Link>
              </div>

              <div
                className="w-full h-44 md:h-98 relative order-1 md:order-2"
                data-aos="fade-left"
                data-aos-delay="300"
              >
                <Image
                  src={imgTwo}
                  fill
                  alt="Image"
                  className="object-cover rounded-xl"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
          )}

          {/* ---------- TAB 3: GYM MANAGEMENT ---------- */}
          {activeTab === 2 && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-15 items-center text-center">
                <div
                className="w-full h-44 md:h-98 relative order-1 md:order-2"
                data-aos="fade-left"
                data-aos-delay="300"
              >
                <Image
                  src={imgThree}
                  fill
                  alt="Image"
                  className="object-cover rounded-xl"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div
                className="flex flex-col items-center justify-center space-y-2 md:space-y-4 text-gray-800 p-8 order-2 md:order-1"
                data-aos="zoom-in"
                data-aos-delay="200"
              >
                <h2 className="text-lg md:text-xl xl:text-4xl font-light text-white tracking-wide mb-10 text-nowrap px-1 bg-[#FF6464]">
                  GYM MANAGEMENT
                </h2>

                <p className="text-xs md:text-sm xl:text-lg font-light">
                  Elevate living. Curate your fitness experience.
                </p>

                <p className="text-xs md:text-sm xl:text-lg font-light">
                  Create a fitness ecosystem that blends community, quality, and convenience...
                </p>

                <p className="text-xs md:text-sm xl:text-lg font-light">
                  Transform your building&apos;s wellbeing.
                </p>

                <Link href="/contact" className="px-6 py-3 bg-[#FF6464] text-white ">
                Contact us
                </Link>
              </div>

              
            </div>
          )}
        </div>
      </div>

      {/* ---------------- EMAIL BOX ---------------- */}
      <div
        className="bg-[#80b1fb] max-w-[1440px] mx-auto rounded-xl text-white p-4 md:p-8 h-40 md:h-60 my-2 md:my-10 flex flex-col justify-between text-center"
        data-aos="fade-up"
      >
        <div className="flex justify-between items-start mb-4">
          <h1 className="text-xl md:text-3xl xl:text-4xl font-light tracking-wide max-w-2xl">
            LET&apos;S SWAY TOGETHER
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
              className="bg-transparent text-white w-full focus:outline-none text-base md:text-lg text-center"
            />
          </div>
        </div>
      </div>

    </div>
  );
}

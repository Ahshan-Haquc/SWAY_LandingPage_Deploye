"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams, useRouter } from "next/navigation";
import AOS from "aos";
import "aos/dist/aos.css";

// IMAGES
import LogoIcon from "../../../public/LogoIcon.png";
import imgNew from "../../../public/Untitled design.png";
import imgTwo from "../../../public/yankruv.jpg";
import imgThree from "../../../public/gym.jpg";

// TAB ↔ INDEX MAP
const TAB_MAP: Record<string, number> = {
  corporate: 0,
  residential: 1,
  gym: 2,
};

export default function ServicesTabsSection() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const tabFromUrl = searchParams.get("tab");

  const [activeTab, setActiveTab] = useState(
    tabFromUrl && TAB_MAP[tabFromUrl] !== undefined ? TAB_MAP[tabFromUrl] : 0
  );

  // 🔹 AOS Init
  useEffect(() => {
    AOS.init({
      duration: 900,
      once: false,
    });
  }, []);

  // 🔹 Handle tab click (update state + URL)
  const handleTabClick = (index: number) => {
    setActiveTab(index);

    const tabKey = Object.keys(TAB_MAP).find(
      (key) => TAB_MAP[key] === index
    );

    router.push(`/livingInWellness?tab=${tabKey}`, {
      scroll: false,
    });
  };

  return (
    <div className="min-h-screen text-center ">
      <div className="relative h-fit mx-auto py-6 pt-22 md:pt-0 overflow-hidden rounded-xl mt-8 md:mt-12">

        {/* ---------------- TAB NAVIGATION ---------------- */}
        <div className="flex justify-center gap-6 mt-6 text-gray-500">
          {["Corporate Training", "Residential Management", "Gym Management"].map(
            (item, index) => (
              <button
                key={index}
                onClick={() => handleTabClick(index)}
                className={`
                  px-4 py-2 text-xs md:text-md lg:text-xl transition-all
                  ${activeTab === index
                    ? "text-black border-b-2 border-[#FAEFB8]"
                    : "opacity-60 hover:opacity-100"
                  }
                `}
              >
                {item}
              </button>
            )
          )}
        </div>

        {/* ---------------- TAB CONTENT ---------------- */}
        <div className="w-full mx-auto p-2 md:p-12">

          {/* ---------- TAB 1: CORPORATE TRAINING ---------- */}
          {activeTab === 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-15 items-center bg-[#FAEFB8] py-12 px-8 mb-12 text-center rounded-2xl">
              <div className="w-full h-44 md:h-98 relative" data-aos="fade-right">
                <Image
                  src={imgNew}
                  fill
                  alt="Corporate Training"
                  className="object-cover rounded-xl"
                />
              </div>

              <div
                className="flex flex-col items-center space-y-4 text-gray-800"
                data-aos="zoom-in"
              >
                <h2 className="text-lg md:text-xl xl:text-4xl font-light mb-10">
                  CORPORATE TRAINING
                </h2>

                <p className="text-xs md:text-sm xl:text-lg">
                  Sharper teams start here. Work well. Work wisely.
                </p>

                <p className="text-xs md:text-sm xl:text-lg">
                  Elevate workplace performance with tailored fitness,
                  movement, and wellbeing training.
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
                className="flex flex-col items-center space-y-4 p-8 order-2 md:order-1"
                data-aos="zoom-in"
              >
                <h2 className="text-lg md:text-xl xl:text-4xl text-nowrap font-light text-white bg-[#FF6464] px-2 mb-10">
                  RESIDENTIAL MANAGEMENT
                </h2>

                <p className="text-xs md:text-sm xl:text-lg">
                  Elevate living. Curate your fitness experience.
                </p>
                <p className="text-xs md:text-sm xl:text-lg">
                  Create a fitness ecosystem that blends community, quality, and convenience...

                </p>
                <p className="text-xs md:text-sm xl:text-lg">

                  Transform your building&apos;s wellbeing.
                </p>

                <Link
                  href="/contact"
                  className="px-6 py-3 bg-[#FF6464] text-white"
                >
                  Contact us
                </Link>
              </div>

              <div
                className="w-full h-44 md:h-98 relative order-1 md:order-2"
                data-aos="fade-left"
              >
                <Image
                  src={imgTwo}
                  fill
                  alt="Residential Management"
                  className="object-cover rounded-xl"
                />
              </div>
            </div>
          )}

          {/* ---------- TAB 3: GYM MANAGEMENT ---------- */}
          {activeTab === 2 && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-15 items-center text-center">
              <div
                className="w-full h-44 md:h-98 relative"
                data-aos="fade-left"
              >
                <Image
                  src={imgThree}
                  fill
                  alt="Gym Management"
                  className="object-cover rounded-xl"
                />
              </div>

              <div
                className="flex flex-col items-center space-y-4 p-8"
                data-aos="zoom-in"
              >
                <h2 className="text-lg md:text-xl xl:text-4xl font-light text-white bg-[#FF6464] px-2 mb-10">
                  GYM MANAGEMENT
                </h2>

                <p className="text-xs md:text-sm xl:text-lg">
                  Elevate living. Curate your fitness experience.

                </p>
                <p className="text-xs md:text-sm xl:text-lg">

                  Create a fitness ecosystem that blends community, quality, and convenience...

                </p>
                <p className="text-xs md:text-sm xl:text-lg">

                  Transform your building&apos;s wellbeing.
                </p>

                <Link
                  href="/contact"
                  className="px-6 py-3 bg-[#FF6464] text-white"
                >
                  Contact us
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* ---------------- EMAIL BOX ---------------- */}
      <div
        className="bg-[#80b1fb] max-w-[1440px] mx-auto rounded-xl text-white p-4 md:p-8 h-40 md:h-60 my-10"
        data-aos="fade-up"
      >
        <div className="flex justify-between mb-4">
          <h1 className="text-xl md:text-3xl xl:text-4xl font-light">
            LET&apos;S SWAY TOGETHER
          </h1>

          <div className="relative w-12 h-8 md:w-32 md:h-12">
            <Image src={LogoIcon} alt="Logo" fill />
          </div>
        </div>

        <input
          type="email"
          placeholder="Your email"
          className="w-full bg-transparent border-b text-center focus:outline-none"
        />
      </div>
    </div>
  );
}

"use client";
import Footer from "@/components/Footer";
import ResourceHeader from "@/components/resourcePage/ResouceHeader";
import { useRef } from "react";

export default function ResourcesPage() {
  const emailSectionRef = useRef<HTMLDivElement | null>(null);

  const scrollToEmailBox = () => {
    emailSectionRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const guides = [
    "Guide 1",
    "Guide 2",
    "Guide 3",
    "Guide 4",
    "Guide 5",
    "Guide 6",
    "Guide 7",
    "Guide 8",
    "Guide 9",
    "Guide 10",
  ];

  return (
    <div className="max-w-[1440px] mx-auto">
    <ResourceHeader/>
    <div className="w-full h-fit">
      {/* -------- TOP SECTION -------- */}
      <div className="text-center max-w-3xl mx-auto mt-4 md:mt-18 pt-10 px-4" data-aos="fade-up" data-aos-delay="200">
        <h2 className="text-xl md:text-2xl xl:text-3xl font-semibold tracking-wide text-black">
          EXPERT ADVICE. FREE TO ACCESS.
        </h2>

        <p className="text-gray-600 mt-4 text-sm md:text-base xl:text-lg leading-relaxed">
          Explore a collection of downloadable guides covering a range of health
          and wellness topics. From practical tips to expert advice, these free
          resources are designed to support your progress, build confidence, and
          help you make informed choices — anytime, anywhere.
        </p>
      </div>

      {/* -------- GUIDE LIST SECTION -------- */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto mt-16 px-4 md:px-0" data-aos="fade-up" data-aos-delay="200">
        
        {/* Column 1 */}
        <div className="flex flex-col items-center">
          <h3 className="font-semibold text-black mb-4 tracking-wide">
            HEADER ONE
          </h3>
          <ul className="space-y-2 text-sm md:text-base text-black">
            {guides.map((g, i) => (
              <li key={i} className="list-disc ml-5">
                <button
                  onClick={scrollToEmailBox}
                  className="hover:text-blue-400 hover:underline"
                >
                  {g}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 2 */}
        <div className="flex flex-col items-center">
          <h3 className="font-bold text-black mb-4 tracking-wide">
            HEADER TWO
          </h3>
          <ul className="space-y-2 text-sm md:text-base text-black">
            {guides.map((g, i) => (
              <li key={i} className="list-disc ml-5">
                <button
                  onClick={scrollToEmailBox}
                  className="hover:text-blue-400 hover:underline"
                >
                  {g}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3 */}
        <div className="flex flex-col items-center">
          <h3 className="font-semibold text-black mb-4 tracking-wide">
            HEADER THREE
          </h3>
          <ul className="space-y-2 text-sm md:text-base text-black">
            {guides.map((g, i) => (
              <li key={i} className="list-disc ml-5">
                <button
                  onClick={scrollToEmailBox}
                  className="hover:text-blue-400 hover:underline"
                >
                  {g}
                </button>
              </li>
            ))}
          </ul>
        </div>

      </div>

      {/* -------- EMAIL INPUT SECTION -------- */}
      <div
        ref={emailSectionRef}
        className="my-15 bg-[#78A6F5] text-white py-16 px-6 rounded-2xl"
        data-aos="fade-up" data-aos-delay="200"
      >
        <div className="max-w-3xl mx-auto text-center">
          
          <h3 className="text-lg md:text-2xl text-[#Faefb8] tracking-widest font-light">
            ENTER EMAIL TO DOWNLOAD GUIDE
          </h3>

          <div className="mt-10">
            <div className="flex justify-between text-xs tracking-widest mb-1">
              <span>EMAIL</span>
              <span>DOWNLOAD</span>
            </div>

            <input
              type="email"
              placeholder=""
              className="w-full bg-transparent border-b border-white/80 outline-none text-sm md:text-base pb-2"
            />
          </div>
        </div>
      </div>

    </div>
    <Footer/>
    </div>
  );
}

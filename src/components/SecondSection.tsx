import Link from "next/link";
import React from "react";

const infoText = [
  "Every body is unique - and your wellness should be too.",
  "Most people see a trainer, dietitian, physio, or therapist in isolation. Each expert does great work, but rarely together.",
  "At Sway, we do things differently.",
  "Your specialists operate as one team, designing a single, seamless plan built entirely around you. Strength. Nutrition. Recovery. Lifestyle. Every session moves you closer to your goals, with experts collaborating behind the scenes to deliver faster, smarter, and longer-lasting results.",
  "Choose an all-inclusive membership for full access to every service in one place. Or begin with a single service and feel the difference.",
];

const SecondSection = () => {
  return (
    <div
      className="flex flex-col justify-center items-center gap-4 lg:gap-5 py-6 md:py-10 xl:py-22 px-3 md:px-4 text-gray-900"
      data-aos="fade-up"
      data-aos-delay="300"
    >
      <h1 className="text-xl md:text-2xl xl:text-3xl font-normal text-center pb-3">
        SWAY WILL MOVE YOU LIKE NO OTHER WELLNESS EXPERIENCE.
      </h1>

      {infoText.map((text, index) => (
        <p
          key={index}
          className="
            text-[16px]
            md:text-sm
            xl:text-lg
            leading-relaxed
            text-center
            md:text-center
            max-w-4xl
          "
        >
          {text}
        </p>
      ))}

      <p
        className="
          text-[13px]
          md:text-sm
          xl:text-lg
          leading-relaxed
          text-justify
          md:text-center
          max-w-4xl
        "
      >
        Begin your journey with a{" "}
        <Link href="/freeConsultation" className="underline">
          free consultation
        </Link>
        . We&apos;ll build your team, your plan, your results.
      </p>
    </div>
  );
};

export default SecondSection;

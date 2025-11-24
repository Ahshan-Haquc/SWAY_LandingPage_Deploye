import React from "react";

const infoText = [
    "Every body is unique - and your wellness should be too.",
    "Most people see a trainer, dietitian, physio, or therapist in isolation. Each expert does great work, but rarely together.",
    "At Sway, we do things differently. ",
    "Your specialists operate as one team, designing a single, seamless plan built entirely around you. Strength. Nutrition. Recovery. Lifestyle. Every session moves you closer to your goals, with experts collaborating behind the  scenes to deliver faster, smarter, and longer-lasting results.",
    "Choose an all-inclusive membership for full access to every service in one place. Or begin with a single service and feel the difference.",
    "Begin your journey with a free consultation. We-ll build your team, your plan, your results.",
]

const SecondSection = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-3 lg:gap-5 py-6 md:py-10 xl:py-12 px-2 md:px-4"  data-aos="fade-up" data-aos-delay="300">
      <h1 className="text-sm md:text-xl xl:text-2xl font-normal text-wrap text-center z-40 pb-3">
        PERSONALISED WELLNESS. REDEFINED FOR EVERY BODY.
      </h1>
      {
        infoText.map((text, index) => (
            <p className="text-[10px] md:text-sm text-center" key={index}>
        {text}
      </p>
        ))
      }
      
    </div>
  );
};

export default SecondSection;

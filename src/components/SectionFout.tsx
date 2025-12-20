"use client";

import img1 from "../../public/img1.jpg";
import img2 from "../../public/img2.jpg";
import img3 from "../../public/img3.jpg";
import img4 from "../../public/img4.jpg";
import img5 from "../../public/img5.jpg";
import img6 from "../../public/img6.jpg";
import img7 from "../../public/Untitled design.png";

import React, { useState } from "react";
import Image, { StaticImageData } from "next/image";
import Slider from "react-slick";
import Link from "next/link";

interface TrainingItem {
  title: string;
  subtitle: string;
  description1: string;
  description2: string;
  linkText?: string;
  linkHref?: string;
  price: string;
  tags: string[];
  image: StaticImageData;
}

const trainingData: TrainingItem[] = [
  {
    title: "PERSONAL TRAINING",
    subtitle: "Elevate your fitness. Empower your form.",
    description1:
      "Our elite personal training coaches bring unparalleled expertise across movement disciplines - strength, Pilates, posture, and mobility. Whether online or in person, your dedicated coach uses the Sway methodology to tailor each session around your body's needs, ensuring safe form and sustainable habit-building. Every rep matters. Every session counts.",
    description2: "Begin your journey with our simple, ",
    linkText: "free consultation.",
    linkHref: "/freeConsultation",
    price: "Prices start at £75 per session. See pricing options below.",
    tags: ["1:1", "2:1", "in-person", "on-line"],
    image: img1,
  },
  {
    title: "NUTRITION",
    subtitle: "Fuel your goals. Thrive with clarity.",
    description1:
      "Say goodbye to restrictive diets. Our nutrition coaching offers practical, specialist-led guidance crafted around your performance, energy, and lifestyle. Whether youre training for peak performance or everyday well-being, your plan is built for real life - clean, clear, and completely you.",
    description2:
      "Start with a 60-minute consultation and get your personalised 12-week plan.",
    linkHref: "/freeConsultation",
    price: "See pricing options below.",
    tags: ["1:1", "in-person", "on-line"],
    image: img2,
  },
  {
    title: "PHYSIOTHERAPY",
    subtitle: "Targeted recovery. Restored movement.",
    description1:
      "Move beyond pain with precision physiotherapy designed to restore function, reduce discomfort, and prevent recurrence. Our movement specialists use evidence-based assessments and hands-on therapy to rebalance, rebuild, and re-energise your body.",
    description2: "Start moving better.",
    linkHref: "/freeConsultation",
    price: "Prices start at £75 per session. See pricing options below.",
    tags: ["1:1", "in-person"],
    image: img3,
  },
  {
    title: "PILATES",
    subtitle: "Controlled movement. Core connection.",
    description1:
      "Refine your alignment, improve posture, and cultivate inner strength with bespoke Pilates sessions that move beyond the reformer.",
    description2: "Begin your Pilates journey with our simple, ",
    linkText: "free consultation.",
    linkHref: "/freeConsultation",
    price: "Prices start at £75 per session. See pricing options below.",
    tags: ["1:1", "2:1", "in-person", "on-line"],
    image: img4,
  },
  {
    title: "PSYCHOTHERAPY",
    subtitle: "Mental clarity. Emotional resilience.",
    description1:
      "Wellness starts in the mind. Our psychology service blends traditional therapy with somatic techniques, breathwork, and nervous system regulation.",
    description2: "Begin your mental wellness journey.",
    price: "Prices start at £75 per session. See pricing options below.",
    tags: ["1:1", "in-person", "on-line"],
    image: img5,
  },
  {
    title: "MASSAGE",
    subtitle: "Release tension. Renew energy.",
    description1:
      "Soften the strain with therapeutic massage tailored to your body's needs.",
    description2: "Book a massage session today - feel renewed.",
    price: "Prices start at £75 per session. See pricing options below.",
    tags: ["1:1", "in-person"],
    image: img6,
  },
  {
    title: "RE-BUILD - BODY TRANSFORMATION",
    subtitle: "Recalibrate your body. Reveal your strength.",
    description1:
      "This is more than training - it's a transformation over 12 weeks and 36 expertly coached sessions.",
    description2:
      "Commit to change and contact us to start your Re-Build plan today.",
    price: "Prices start at £75 per session. See pricing options below.",
    tags: ["1:1", "in-person"],
    image: img7,
  },
];

const PersonalTrainingSection = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 12000,
  };

  const TextContent: React.FC<{ item: TrainingItem; index: number }> = ({
    item,
    index,
  }) => {
    const isExpanded = expandedIndex === index;
    const MAX_CHARS = 140; // ≈ 2 lines

    const shouldTruncate = item.description1.length > MAX_CHARS;
    const text = isExpanded
      ? item.description1
      : item.description1.slice(0, MAX_CHARS) + (shouldTruncate ? "..." : "");

    return (
      <div className="flex flex-col justify-between items-center gap-3 p-6 text-gray-900">
        <h2 className="text-xl md:text-2xl 2xl:text-5xl font-normal text-center">
          {item.title}
        </h2>

        <p className="text-xs md:text-sm xl:text-xl text-center">
          {item.subtitle}
        </p>

        {/* DESCRIPTION 1 WITH SEE MORE */}
        <p className="text-xs md:text-sm xl:text-xl font-medium text-center leading-relaxed">
          {text}
          {shouldTruncate && (
            <button
              onClick={() =>
                setExpandedIndex(isExpanded ? null : index)
              }
              className="ml-1 underline font-medium"
            >
              {isExpanded ? "See less" : "See more"}
            </button>
          )}
        </p>

        <p className="text-xs md:text-sm xl:text-xl text-center leading-relaxed">
          {item.description2}
          {item.linkText && (
            <Link href={item.linkHref!} className="underline font-medium">
              {item.linkText}
            </Link>
          )}
        </p>

        <p className="text-xs md:text-sm xl:text-xl text-center">
          {item.price}
        </p>

        <Link
          href="/freeConsultation"
          className="relative overflow-hidden px-6 py-3 rounded-2xl bg-white text-black font-medium group w-44 sm:w-64 text-center border"
        >
          {/* Orange sliding background */}
          <span
            className="absolute inset-0 bg-[#FF6464] scale-x-0 origin-left transition-transform duration-500 ease-in-out group-hover:scale-x-100"
          />

          {/* Button text */}
          <span className="relative z-10 transition-colors duration-500 group-hover:text-white">
            BOOK
          </span>
        </Link>


        <div className="flex flex-wrap justify-center gap-2 text-xs text-gray-600 pt-2">
          {item.tags.map((tag, i) => (
            <span
              key={i}
              className="border border-gray-300 px-2 py-1 rounded-full bg-gray-50"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="flex justify-center py-8 md:py-16 mx-auto px-2 overflow-hidden">
      <Slider {...settings} className="w-full">
        {trainingData.map((item, index) => (
          <div key={index} className="p-1 md:p-4">
            <div className="w-full h-fit md:h-[550px] xl:h-[750px] p-4 md:p-5 xl:p-10 bg-white border-2 border-gray-500 rounded-xl">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 h-full items-center">
                <TextContent item={item} index={index} />

                <div className="relative w-full aspect-square">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover rounded-lg"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default PersonalTrainingSection;

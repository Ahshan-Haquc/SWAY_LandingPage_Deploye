"use client";
import img1 from '../../public/img1.jpg'
import img2 from '../../public/img2.jpg'
import img3 from '../../public/img3.jpg'
import img4 from '../../public/img4.jpg'
import img5 from '../../public/img5.jpg'
import img6 from '../../public/img6.jpg'

import React from "react";
import Image from "next/image";
import Slider from "react-slick";

const trainingData = [
  {
    title: "PERSONAL TRAINING",
    subtitle: "Elevate your fitness. Empower your form.",
    description1:
      "Our elite personal training coaches bring unparalleled expertise across movement disciplines - strength, Pilates, posture, and mobility. Whether online or in person, your dedicated coach uses the Sway methodology to tailor each session around your body's needs, ensuring safe form and sustainable habit-building. Every rep matters. Every session counts.",
    description2: "Begin your journey with our simple, ",
    linkText: "free consultation.",
    linkHref: "#",
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
    price: "See pricing options below.",
    tags: ["1:1", "in-person", "on-line"],
    image: img2,
  },

  {
    title: "PHYSIOTHERAPY",
    subtitle: "Targeted recovery. Restored movement.",
    description1:
      "Move beyond pain with precision physiotherapy designed to restore function, reduce discomfort, and prevent recurrence. Our movement specialists use evidence-based assessments and hands-on therapy to rebalance, rebuild, and re-energise your body. Recovery isnt just therapy—its your next step toward performance.",
    description2: "Start moving better.",
    price: "Prices start at £75 per session. See pricing options below.",
    tags: ["1:1", "in-person"],
    image: img3,
  },

  {
    title: "PILATES",
    subtitle: "Controlled movement. Core connection.",
    description1:
      "Refine your alignment, improve posture, and cultivate inner strength with bespoke Pilates sessions that move beyond the reformer. Our expert instructors tailor every movement to your body's needs, weaving breath, precision, and mindful control into every workout. Stronger support. Better posture. A more balanced you.",
    description2: "Begin your Pilates journey with our simple, ",
    linkText: "free consultation.",
    linkHref: "#",
    price: "Prices start at £75 per session. See pricing options below.",
    tags: ["1:1", "2:1", "in-person", "on-line"],
    image: img4,
  },

  {
    title: "PSYCHOTHERAPY",
    subtitle: "Mental clarity. Emotional resilience.",
    description1:
      "Wellness starts in the mind. Our psychology service blends traditional therapy with somatic techniques, breathwork, and nervous system regulation to support whole-body healing. Personalised, expert-led support helps you navigate stress, build self-awareness, and cultivate inner strength with empathy and insight.",
    description2: "Begin your mental wellness journey.",
    price: "Prices start at £75 per session. See pricing options below.",
    tags: ["1:1", "in-person", "on-line"],
    image: img5,
  },

  {
    title: "MASSAGE",
    subtitle: "Release tension. Renew energy.",
    description1:
      "Soften the strain with therapeutic massage tailored to your body's needs. Whether you're recovering from training or seeking daily balance, our expert therapists combine precision techniques with restorative touch - helping you recover deeper and move freer.",
    description2: "Book a massage session today - feel renewed.",
    price: "Prices start at £75 per session. See pricing options below.",
    tags: ["1:1", "in-person"],
    image: img6,
  },
];

const PersonalTrainingSection = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="flex justify-center py-8 md:py-16 mx-auto  px-2 md:px-0 overflow-hidden">
      <Slider {...settings} className="w-full">
        {trainingData.map((item, index) => (
          <div className="h-fit w-fit p-1 md:p-4">
            <div
              key={index}
              className="w-full  h-screen md:h-[550px] xl:h-[750px] p-4 md:p-5 xl:p-10 bg-white border-2 border-gray-500  rounded-xl"
            >
              {/* i want these two div will be center aligned vertically and horizontally */}
              <div className="grid grid-cols-1 md:grid-cols-2  gap-2 md:gap-12 h-full">

                {/* LEFT COLUMN */}
                <div className="flex flex-col justify-between items-center gap-3 p-6">
                  <h2 className="text-xl md:text-2xl 2xl:text-5xl font-normal text-gray-900 text-center">
                    {item.title}
                  </h2>

                  <p className="text-xs md:text-sm xl:text-xl text-gray-800">
                    {item.subtitle}
                  </p>

                  <p className="text-xs md:text-sm xl:text-xl font-medium text-gray-800 text-center leading-relaxed">
                    {item.description1}
                  </p>

                  {/* Description with hyperlink */}
                  <p className="text-xs md:text-sm xl:text-xl text-center text-gray-600 leading-relaxed">
                    {item.description2}
                    {item.linkText && (
                      <a
                        href={item.linkHref}
                        className="underline text-black font-medium hover:text-[#80b1fb]"
                      >
                        {item.linkText}
                      </a>
                    )}
                  </p>

                  <p className="text-xs md:text-sm xl:text-xl text-gray-600 text-center">{item.price}</p>

                  <button className="w-44 sm:w-64 mt-4 py-2 md:py-3 px-2 md:px-6 bg-[#FF6464] text-gray-800 text-sm md:text-lg font-semibold rounded-full shadow-lg hover:bg-[#Faefb8] transition duration-300">
                    BOOK
                  </button>

                  <div className="flex space-x-2 text-xs text-gray-600 pt-2">
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

                {/* RIGHT COLUMN - IMAGE */}
                <div className="relative w-full aspect-square my-auto pr-0 xl:pr-4">
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

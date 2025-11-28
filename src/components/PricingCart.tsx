"use client";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { User, Heart, Smartphone, Zap, CheckCircle } from 'lucide-react';
import PricingCartPriceToggle from "./PricingCartPriceToggle";
import p1 from '../../public/p1.svg'
import p2 from '../../public/p2.svg'
import p3 from '../../public/p3.svg'
import p4 from '../../public/p4.svg'
import p5 from '../../public/p5.svg'
import p6 from '../../public/p6.svg'
import p7 from '../../public/p7.svg'
import Image from "next/image";

const PricingCart = ({
  bgColor,
  textColor,
  title,
  subtitle,
  description,
  bestFor,
  sessionLine1,
  sessionLine2,
  features,
  extraFeatures,
  monthlyPrice,
  annualPrice,
  annualSave,
  animationDelay,
  
}: {
  bgColor: string;
  textColor: string;
  title: string;
  subtitle: string;
  description: string;
  bestFor: string;
  sessionLine1: string;
  sessionLine2: string;
  features: string[];
  extraFeatures: string[];
  monthlyPrice: string;
  annualPrice: string;
  annualSave: string;
  animationDelay: number;
}) => {
    useEffect(() => {
      AOS.init({
        duration: 1000, 
        once: false,
      });
    }, []);

  const CORAL_RED = bgColor;
  const LIGHT_YELLOW = '#FFF1B0';
  const LIGHT_PINK = '#FFC0C0';

  const FeatureIcon = ({ IconSVGimage, text }: { IconSVGimage: any, text: string }) => (
    <div className="flex flex-col items-center space-y-2 w-1/4">
      <Image
  src={IconSVGimage}
  alt="icon"
  width={55}
  height={55}
  className="transition-all group-hover:invert group-hover:brightness-0"
/>

      <p className="text-xs font-medium text-center" >
        {text}
      </p>
    </div>
  );
  // const FeatureIcon = ({ Icon, text }: { Icon: React.ElementType, text: string }) => (
  //   <div className="flex flex-col items-center space-y-2 w-1/4">
  //     <Icon size={30} strokeWidth={1.5}  />
  //     <p className="text-xs font-medium text-center" >
  //       {text}
  //     </p>
  //   </div>
  // );

  const FeatureIcon2 = ({ IconSVGimage, text, text2 }: { IconSVGimage: any, text: string, text2: string }) => (
    <div className="flex justify-center items-center space-y-2 w-1/2 group-hover:text-white text-black">
      <Image
  src={IconSVGimage}
  alt="icon"
  width={55}
  height={55}
  className="transition-all group-hover:invert group-hover:brightness-0"
/>

      <div>
        <p className="text-xs font-medium" >{text}</p>
        <p className="text-xs font-medium" >{text2}</p>
      </div>
    </div>
  );
  // const FeatureIcon2 = ({ Icon, text, text2 }: { Icon: React.ElementType, text: string, text2: string }) => (
  //   <div className="flex justify-center items-center space-y-2 w-1/2 group-hover:text-white text-black">
  //     <Icon size={30} strokeWidth={1.5}  />
  //     <div>
  //       <p className="text-xs font-medium" >{text}</p>
  //       <p className="text-xs font-medium" >{text2}</p>
  //     </div>
  //   </div>
  // );

  return (
    <div
      className={`group text-black max-h-fit md:min-h-[600px] md:max-h-fit w-full md:w-1/3 p-2 md:p-4 flex flex-col items-center text-center   hover:-translate-y-5  duration-300 bg-[#b4cffd] hover:bg-[#ff6464] hover:text-white ${title==="MOMENTUM" && "-translate-y-10 hover:-translate-y-15"}`}
      // style={{ backgroundColor: CORAL_RED, color: textColor }}
      data-aso="fade-up" 
    >

      {/* === 1. Header Section === */}
      <h2 className="text-2xl font-light tracking-wide mt-2 mb-2 underline">
        {title}
      </h2>
      <h3 className="text-xs font-bold mb-1">{subtitle}</h3>
      <p className="text-xs mb-4 max-w-xs">{description}</p>

      {/* === 2. Best For Section === */}
      <div className="mb-4">
        <p className="text-sm font-semibold">BEST FOR:</p>
        <p className="text-xs font-light px-4">{bestFor}</p>
      </div>

      {/* === 3. Included Services Icons === */}
      <div className="mb-8">
        {/* <div className="text-5xl mb-2 opacity-80">🏃</div> */}
        {/* <Image src={p1} alt="icon" width={55} height={55} className="mx-auto"/> */}
        <Image
  src={p1}
  alt="icon"
  width={55}
  height={55}
  className="transition-all group-hover:invert group-hover:brightness-0 mx-auto"
/>

        <p className="text-xs font-light"><b className="text-sm">{sessionLine1}</b></p>
        <p className="text-xs font-light"><b className="text-sm">{sessionLine2}</b></p>
      </div>

      {/* === 4. Specialist Services Row === */}
      <div className="flex justify-between flex-wrap w-full max-w-sm mb-3">
        <FeatureIcon IconSVGimage={p2} text={features[0]} />
        <FeatureIcon IconSVGimage={p3} text={features[1]} />
        <FeatureIcon IconSVGimage={p4} text={features[2]} />
        <FeatureIcon IconSVGimage={p5} text={features[3]} />
      </div>

      <div className="flex justify-between flex-wrap w-full max-w-sm mb-4">
        <FeatureIcon2 IconSVGimage={p6} text={extraFeatures[0]} text2={extraFeatures[1]} />
        <FeatureIcon2 IconSVGimage={p7} text={extraFeatures[2]} text2={extraFeatures[3]} />
      </div>

      <PricingCartPriceToggle pricingName={title}/>
        
      </div>
  );
};

export default PricingCart;
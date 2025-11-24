"use client";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { User, Heart, Smartphone, Zap, CheckCircle } from 'lucide-react';
import PricingCartPriceToggle from "./PricingCartPriceToggle";

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
  animationDelay
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

  const FeatureIcon = ({ Icon, text }: { Icon: React.ElementType, text: string }) => (
    <div className="flex flex-col items-center space-y-2 w-1/4">
      <Icon size={30} strokeWidth={1.5} style={{ color: textColor }} />
      <p className="text-xs font-medium text-center" style={{ color: textColor }}>
        {text}
      </p>
    </div>
  );

  const FeatureIcon2 = ({ Icon, text, text2 }: { Icon: React.ElementType, text: string, text2: string }) => (
    <div className="flex justify-center items-center space-y-2 w-1/2">
      <Icon size={30} strokeWidth={1.5} style={{ color: textColor }} />
      <div>
        <p className="text-xs font-medium" style={{ color: textColor }}>{text}</p>
        <p className="text-xs font-medium" style={{ color: textColor }}>{text2}</p>
      </div>
    </div>
  );

  return (
    <div
      className=" max-h-fit md:min-h-[450px] md:max-h-fit w-full md:w-1/3 p-2 md:p-4 flex flex-col items-center text-center  hover:scale-102 hover:-translate-y-5  duration-300 shadow-lg"
      style={{ backgroundColor: CORAL_RED, color: textColor }}
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
        <div className="text-5xl mb-2 opacity-80">🏃</div>
        <p className="text-xs font-light"><b className="text-sm">{sessionLine1}</b></p>
        <p className="text-xs font-light"><b className="text-sm">{sessionLine2}</b></p>
      </div>

      {/* === 4. Specialist Services Row === */}
      <div className="flex justify-between flex-wrap w-full max-w-sm mb-3">
        <FeatureIcon Icon={User} text={features[0]} />
        <FeatureIcon Icon={Heart} text={features[1]} />
        <FeatureIcon Icon={Zap} text={features[2]} />
        <FeatureIcon Icon={CheckCircle} text={features[3]} />
      </div>

      <div className="flex justify-between flex-wrap w-full max-w-sm mb-4">
        <FeatureIcon2 Icon={User} text={extraFeatures[0]} text2={extraFeatures[1]} />
        <FeatureIcon2 Icon={Heart} text={extraFeatures[2]} text2={extraFeatures[3]} />
      </div>

      <PricingCartPriceToggle pricingName={title}/>
        
      </div>
  );
};

export default PricingCart;
"use client";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";

import PricingCartPriceToggle from "./PricingCartPriceToggle";

import p1 from "../../public/p1.svg";
import p2 from "../../public/p2.svg";
import p3 from "../../public/p3.svg";
import p4 from "../../public/p4.svg";
import p5 from "../../public/p5.svg";
import p6 from "../../public/p6.svg";
import p7 from "../../public/p7.svg";

type PricingCartProps = {
  bgColor: string;
  textColor: string;
  title: string;
  subtitle: string;
  description: string;
  bestFor: string;
  sessionLine1?: string;
  sessionLine2?: string;
  features: string[];
  extraFeatures: string[];
  monthlyPrice?: string;
  annualPrice?: string;
  annualSave?: string;
  animationDelay: number;
  cta?: {
    text?: string;
    action?: string;
    className?: string;
  };
};

const ORANGE_BG = "#F87171";

const PricingCart: React.FC<PricingCartProps> = ({
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
  cta,
}) => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: false });
  }, []);

  const FeatureIcon = ({
    IconSVGimage,
    text,
  }: {
    IconSVGimage: any;
    text: string;
  }) => (
    <div className="flex flex-col items-center space-y-2 w-1/4">
      <Image
        src={IconSVGimage}
        alt="icon"
        width={55}
        height={55}
        className="transition-all group-hover:invert group-hover:brightness-0"
      />
      <p className="text-xs font-medium text-center">{text}</p>
    </div>
  );

  const FeatureIcon2 = ({
    IconSVGimage,
    text,
    text2,
  }: {
    IconSVGimage: any;
    text: string;
    text2: string;
  }) => (
    <div className="flex justify-center items-center space-y-2 w-1/2 group-hover:text-white text-black">
      <Image
        src={IconSVGimage}
        alt="icon"
        width={55}
        height={55}
        className="transition-all group-hover:invert group-hover:brightness-0"
      />
      <div>
        <p className="text-xs font-medium">{text}</p>
        <p className="text-xs font-medium">{text2}</p>
      </div>
    </div>
  );

  return (
    <div
      className="group text-black max-h-fit md:min-h-[640px] md:max-h-fit
                 rounded-xl w-full md:w-1/3 p-2 md:p-4
                 flex flex-col items-center text-center
                 hover:-translate-y-5 duration-300"
      style={{
        backgroundColor: bgColor,
        color: textColor,
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLDivElement).style.backgroundColor = ORANGE_BG;
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLDivElement).style.backgroundColor = bgColor;
      }}
    >
      {/* Header */}
      <h2 className="text-2xl font-light tracking-wide mt-2 mb-2 underline">
        {title}
      </h2>

      <h3 className="text-xs font-bold mb-1">{subtitle}</h3>
      <p className="text-xs mb-4 max-w-xs">{description}</p>

      {/* Best For */}
      <div className="mb-4">
        <p className="text-sm font-semibold">BEST FOR:</p>
        <p className="text-xs font-light px-4">{bestFor}</p>
      </div>

      {/* Session */}
      {(sessionLine1 || sessionLine2) && (
        <div className="mb-8">
          <Image
            src={p1}
            alt="icon"
            width={55}
            height={55}
            className="transition-all group-hover:invert group-hover:brightness-0 mx-auto"
          />
          {sessionLine1 && (
            <p className="text-xs font-light">
              <b className="text-sm">{sessionLine1}</b>
            </p>
          )}
          {sessionLine2 && (
            <p className="text-xs font-light">
              <b className="text-sm">{sessionLine2}</b>
            </p>
          )}
        </div>
      )}

      {/* Features */}
      {features.length > 0 && (
        <div className="flex justify-between flex-wrap w-full max-w-sm mb-3">
          {features[0] && <FeatureIcon IconSVGimage={p2} text={features[0]} />}
          {features[1] && <FeatureIcon IconSVGimage={p3} text={features[1]} />}
          {features[2] && <FeatureIcon IconSVGimage={p4} text={features[2]} />}
          {features[3] && <FeatureIcon IconSVGimage={p5} text={features[3]} />}
        </div>
      )}

      {extraFeatures.length > 0 && (
        <div className="flex justify-between flex-wrap w-full max-w-sm mb-4">
          {extraFeatures[0] && (
            <FeatureIcon2
              IconSVGimage={p6}
              text={extraFeatures[0]}
              text2={extraFeatures[1]}
            />
          )}
          {extraFeatures[2] && (
            <FeatureIcon2
              IconSVGimage={p7}
              text={extraFeatures[2]}
              text2={extraFeatures[3]}
            />
          )}
        </div>
      )}

      {(monthlyPrice || annualPrice) && (
        <PricingCartPriceToggle pricingName={title} />
      )}

      {/* FLEX special button */}
      {title === "FLEX" && (
        <div className="mt-4">
          <a
            href="/path-to-brochure.pdf"
            download
            className="px-4 py-2 rounded-lg font-semibold bg-black text-white hover:bg-orange-700 transition-colors"
          >
            Download Brochure
          </a>
        </div>
      )}

    </div>
  );
};

export default PricingCart;

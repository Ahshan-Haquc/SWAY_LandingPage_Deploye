"use client";

import React, { useState } from "react";

const LIGHT_BG = "#D9E7FE";
const ACTIVE_BG = "#FAEFB8";

const PricingCartPriceToggle = ({ pricingName }: { pricingName: string }) => {
  const [selectedPlan, setSelectedPlan] = useState<"monthly" | "annual" | null>(null);

  return (
    <div className="w-full max-w-md mx-auto p-4">

      {/* === Monthly/Annual Toggle === */}
      <div
        className="flex w-full text-sm font-semibold mb-4 rounded-full overflow-hidden shadow-lg p-2"
        style={{ backgroundColor: LIGHT_BG }}
      >
        <div
          className={`w-1/2 py-3 rounded-full text-center cursor-pointer duration-300 hover:bg-[#FF6464] ${selectedPlan === "monthly" ? "bg-[#FAEFB8]" : ""
            }`}
          style={{ color: "black" }}
          onClick={() => setSelectedPlan("monthly")}
        >
          MONTHLY £
        </div>
        <div
          className={`w-1/2 py-3 rounded-full text-center cursor-pointer duration-300 hover:bg-[#FF6464] ${selectedPlan === "annual" ? "bg-[#FAEFB8]" : ""
            }`}
          style={{ color: "black" }}
          onClick={() => setSelectedPlan("annual")}
        >
          ANNUAL £
        </div>
      </div>

      <p className="text-xs font-light mb-4">
        Minimum membership {pricingName === "CORE" ? "4" : "6"} months
      </p>

      {/* === Price Boxes (conditionally rendered) === */}
      {selectedPlan === "monthly" && (
        <div
          className="w-full p-4 rounded-lg transition-all duration-300"
          style={{ backgroundColor: ACTIVE_BG }}
        >
          <span className="text-xs xl:text-sm font-semibold">MONTHLY</span>
          <p className="text-lg xl:text-sm mt-1">£1050</p>
        </div>
      )}

      {selectedPlan === "annual" && (
        <div
          className="w-full p-4 rounded-lg transition-all duration-300"
          style={{ backgroundColor: ACTIVE_BG }}
        >
          <span className="text-xs xl:text-sm font-semibold">ANNUALLY</span>
          <p className="text-lg xl:text-sm mt-1">£11,440</p>
          <p className="text-xs">SAVE £500</p>
          <p className="text-[10px]">v's monthly price</p>
          <p className="text-[10px]">Pay in 2 x instalments</p>
        </div>
      )}

    </div>
  );
};

export default PricingCartPriceToggle;

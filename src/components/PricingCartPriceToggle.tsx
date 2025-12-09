"use client";

import React, { useState } from "react";

const LIGHT_BG = "#D9E7FE";
const ACTIVE_BG = "#FAEFB8";

const PricingCartPriceToggle = ({ pricingName }: { pricingName: string }) => {
  const [selectedPlan, setSelectedPlan] = useState<"monthly" | "annual" | null>(null);

  return (
    <div className="w-full max-w-md mx-auto p-4">

      {/* === 6. Monthly/Annual Toggle === */}
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
      <p className="text-xs font-light mb-4">Minimum membership {pricingName === "CORE" ? "4" : "6"} months</p>
      {selectedPlan && (
        <>

          {/* === 7. Price Boxes === */}
          <div className="flex w-full justify-between space-x-4">

            {/* Monthly Price Box */}
            <div
              className="w-1/2 p-2 flex items-start justify-start gap-1 rounded-lg cursor-pointer transition-all duration-300"
              style={{
                backgroundColor: selectedPlan === "monthly" ? ACTIVE_BG : LIGHT_BG,
                color: "black",
              }}
              onClick={() => setSelectedPlan("monthly")}
            >
              <div className="flex items-center space-x-1 mb-1">
                <div className="w-4 h-4 mt-1 rounded-full border border-black flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full" style={{ backgroundColor: selectedPlan === "monthly" ? "#FF6464" : LIGHT_BG, }}></div>
                </div>
              </div>
              <div className="flex flex-col text-start  ml-1 lg:ml-2">
              <span className="text-xs xl:text-sm ">MONTHLY</span>
              <p className="text-lg xl:text-sm ">£1050</p>
              </div>
            </div>

            {/* Annual Price Box */}
            <div
              className="w-1/2 p-2 flex items-start justify-start gap-1 rounded-lg cursor-pointer transition-all duration-300"
              style={{
                backgroundColor: selectedPlan === "annual" ? ACTIVE_BG : LIGHT_BG,
                color: "black",
              }}
              onClick={() => setSelectedPlan("annual")}
            >
              <div className="flex items-center space-x-1 mb-1 w-fit">
                <div className="w-4 h-4 mt-1 rounded-full border border-black flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full" style={{ backgroundColor: selectedPlan === "annual" ? "#FF6464" : LIGHT_BG, }}></div>
                </div>
              </div>
              <div className="flex flex-col text-start ml-1 lg:ml-2">
                <span className="text-xs xl:text-sm ">ANNUALLY</span>
                <p className="text-lg xl:text-sm">£11,440</p>
                <p className="text-xs">SAVE £500</p>
                <p className="text-[10px]">v's monthly price</p>
                <p className="text-[10px]">Pay in 2 x instalments</p>
              </div>
            </div>

          </div>
        </>
      )}
    </div>
  );
};

export default PricingCartPriceToggle;

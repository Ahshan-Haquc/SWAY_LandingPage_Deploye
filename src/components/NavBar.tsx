"use client";

import React, { useState, useEffect } from "react";

const ChatIcon = () => {
  const [showIcon, setShowIcon] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;

      if (scrollTop > 120) {
        setShowIcon(true);
      } else {
        setShowIcon(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {showIcon && (
        <div className="fixed top-3 left-1/2 -translate-x-1/2 z-50 
                        bg-black/40  px-1 md:px-3 py-1 md:py-2 
                        rounded-full flex gap-1 md:gap-4 items-center shadow-lg text-nowrap">
          
          <button className="text-white text-xs md:text-sm px-2 md:px-4 py-2 rounded-full hover:bg-[#FF6464] transition">
            CONTACT US
          </button>

          <button className="text-white text-xs md:text-sm px-2 md:px-4 py-2 rounded-full hover:bg-[#FF6464] transition">
            FREE CONSULTATION
          </button>
        </div>
      )}
    </>
  );
};

export default ChatIcon;

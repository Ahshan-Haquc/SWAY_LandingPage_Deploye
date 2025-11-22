"use client";

import React, { useState, useEffect } from "react";
import { FaComments } from "react-icons/fa"; // Example chat icon

const ChatIcon = () => {
  const [showIcon, setShowIcon] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show icon if user scrolled more than viewport height
      if (window.scrollY >= window.innerHeight) {
        setShowIcon(true);
      } else {
        setShowIcon(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup on unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {showIcon && (
        <div className="fixed top-5 left-1/2 transform -translate-x-1/2 z-50 bg-black/30 px-8 py-3 rounded-full flex justify-center items-center gap-3">
          <button className="p-4 rounded-full  text-white hover:bg-[#FF6464] transition">
            CONTACT US
          </button>
          <button className="p-4 rounded-full  text-white hover:bg-[#FF6464] transition">
            FREE CONSULTRATION
          </button>
        </div>
      )}
    </>
  );
};

export default ChatIcon;

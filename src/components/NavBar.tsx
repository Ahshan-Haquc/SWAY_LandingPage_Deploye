"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";

const ChatIcon = () => {
  const pathname = usePathname() ?? "/";
  const [showIcon] = useState(true);

  const isActive = (path: string) =>
    path === "/"
      ? pathname === "/"
      : pathname.startsWith(path);

  const baseBtn =
    "text-white text-xs md:text-sm px-2 md:px-4 py-4 rounded-full transition";

  return (
    <>
      {showIcon && (
        <div
          className="fixed top-4 md:top-5 left-1/2 -translate-x-1/2 z-100 
                      bg-black/40 backdrop-blur-[10px]  px-1  py-1 md:py-1 
                      rounded-full flex gap-1 md:gap-4 items-center shadow-lg text-nowrap text-white"
        >
          <Link
            href="/contact"
            className={`${baseBtn} ${isActive("/contact")
                ? "text-[#FF6464]" // active color
                : "hover:text-[#ffa5a5] "
              }`}
          >
            CONTACT US
          </Link>

          <Link
            href="/"
            className={`${baseBtn} ${isActive("/consultation")
                ? "bg-[#FF6464]" 
                : "bg-[#FF6464] hover:bg-[#FF6464]"
              }`}
          >
            FREE CONSULTATION
          </Link>
        </div>
      )}
    </>
  );
};

export default ChatIcon;

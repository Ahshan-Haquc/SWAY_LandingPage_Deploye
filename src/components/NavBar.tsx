"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import logo from '../../public/LogoIcon.png'
import Image from "next/image";

const ChatIcon = () => {
  const pathname = usePathname() ?? "/";
  const [showIcon] = useState(true);

  const isActive = (path: string): boolean =>
    path === "/" ? pathname === "/" : pathname.startsWith(path);

  return (
    <>
      {showIcon && (
        <div className="fixed top-4 md:top-5 left-1/2 -translate-x-1/2 z-100 bg-black/40 backdrop-blur-[10px] px-1 py-1 md:py-1 rounded-full flex items-center shadow-lg text-nowrap text-white">
          <Link
          href="/"
          className="hidden md:block h-8 w-8 relative filter brightness-0 invert  mx-4"
          >
            <Image alt="Y" src={logo} fill className="h-full w-full object-contain "/>
          </Link>
          <Link
            href="/contact"
            className={`text-white  text-xs md:text-sm px-2 md:px-4 py-4 rounded-full transition ${
              isActive("/contact") && "bg-[#FF6464] hover:bg-[#FF6464] text-black hover:text-white"
            }`}
          >
            CONTACT US
          </Link>

          <Link
            href="/"
            className={`text-white text-xs md:text-sm px-2 md:px-4 py-4 rounded-full transition duration-400 ${
              isActive("/consultation") && "bg-[#FF6464] hover:bg-[#FF6464] text-black hover:text-white"
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
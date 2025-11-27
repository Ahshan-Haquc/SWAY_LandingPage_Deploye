"use client";

import { toggleMobileMenu } from "@/redux/slice/sidebarSlice";
import { Menu } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

const pages = [
  { name: "Home", href: "/" },
  { name: "Contact", href: "/c" },
  { name: "Join Mailing List", href: "/j" },
  { name: "Resources", href: "/r" },
  { name: "Shop", href: "/s" },
];

const SideBar = () => {
  const pathname = usePathname();
  const mobileMenuOpen = useSelector(
    (state: any) => state.toggleMobileMenu.mobileMenuOpen
  );
  const dispatch = useDispatch();

  return (
    <div className="text-white">

      {/* MOBILE NAV */}
      {mobileMenuOpen && (
        <div
          className="
            md:hidden 
            fixed top-0 left-0 
            w-2/3 h-full
            bg-[#4e4d59] 
            z-[999] 
            p-6 flex flex-col gap-5
            animate-fadeIn
          "
        >
            <div className=" hover:scale-105 " onClick={()=>dispatch(toggleMobileMenu())}>
                <Menu className='h-6 w-6 md:h-10 md:w-10 object-contain '/>
            </div>
          {pages.map((page, index) => {
            const isActive = pathname === page.href;
            return (
              <Link
                key={index}
                href="/"
                className={`block text-lg py-2 px-3 rounded-lg transition
                ${
                  isActive
                    ? "bg-[#FF6464] text-white"
                    : "text-gray-300 hover:bg-white/10"
                }`}
                onClick={() => dispatch(toggleMobileMenu())}
              >
                {page.name}
              </Link>
            );
          })}
        </div>
      )}

      {/* DESKTOP SIDEBAR */}
      {mobileMenuOpen && (
      <div className="hidden md:flex flex-col fixed top-16 left-0 h-fit w-64 bg-[#4e4d59] shadow-lg p-6 z-50 rounded-tr-3xl rounded-br-3xl">
        <div className="flex flex-col gap-4 mt-10">
            
          {pages.map((page, index) => {
            const isActive = pathname === page.href;
            return (
              <Link
                key={index}
                href="/"
                className={`text-lg font-medium py-2 px-4 rounded-lg transition
                  ${
                    isActive
                      ? "bg-[#FF6464] text-black shadow-md"
                      : "text-gray-300 hover:bg-white/10"
                  }`}
              >
                {page.name}
              </Link>
            );
          })}
        </div>
      </div>
      )}
    </div>
  );
};

export default SideBar;

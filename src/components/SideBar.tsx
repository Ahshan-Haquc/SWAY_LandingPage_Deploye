"use client";

import { toggleMobileMenu } from "@/redux/slice/sidebarSlice";
import { Menu } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { useDispatch, useSelector } from "react-redux";

const pages = [
  { name: "Home", href: "/" },
  { name: "Sway Eco", href: "#" },
  { name: "Sway Studio 1:1 Session", href: "#" },
  { name: "Corporate Wellness", href: "/livingInWellness?tab=corporate" },
  { name: "Residential Wellbeing", href: "/livingInWellness?tab=residential" },
  { name: "Gym Management", href: "/livingInWellness?tab=gym" },
  { name: "Shop", href: "/shop" },
  { name: "Blog", href: "/blog" },
  { name: "Resources", href: "/resource" },
  { name: "Join Mailing List", href: "/joinMailingList" },
  { name: "Contact", href: "/contact" },
  { name: "Login", href: "#" },
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
            w-full h-full
            bg-[#4e4d59] 
            z-999 
            p-6 flex flex-col gap-1
            animate-fadeIn
          "
          data-aos="fade-right"
        >
          <div className=" hover:scale-105 mb-10" onClick={() => dispatch(toggleMobileMenu())}>
            <Menu className='h-6 w-6 md:h-10 md:w-10 object-contain ' />
          </div>
          {pages.map((page, index) => {
            const isActive = pathname === page.href;
            return (
              <Link
                key={index}
                href={page.href}
                className={`block text-lg py-2 px-3 rounded-lg transition
                ${isActive
                    ? "bg-[#FF6464] text-white"
                    : "text-gray-300 hover:bg-white/10"
                  }`}
                onClick={() => dispatch(toggleMobileMenu())}
              >
                {page.name}
              </Link>
            );
          })}
          {/* <div
            className="block text-lg py-2 px-3 rounded-lg transition text-gray-300 hover:bg-white/10"

          >
            Shop
          </div> */}
        </div>
      )}

      {/* DESKTOP SIDEBAR */}
      {/* {mobileMenuOpen && ( */}
      <div className={`h-full w-full fixed bg-black/90 duration-800 transition-all ease-out  ${mobileMenuOpen ? "hidden md:flex opacity-100 z-900 " : "hidden md:flex opacity-0 -z-10"}`} onClick={() => dispatch(toggleMobileMenu())}>
      </div>
      <div className={`flex flex-col fixed top-1/2 -translate-y-1/2  h-fit w-68 lg:w-74 xl:w-78 bg-[#4e4d59] shadow-lg p-6 z-1000 rounded-tr-3xl rounded-br-3xl duration-800 transition-all ease-out ${mobileMenuOpen ? "hidden md:flex left-0" : "hidden md:flex -left-70 lg:-left-76 xl:-left-80"}`} >
        <div className="flex flex-col gap-0 lg:gap-1 2xl:gap-2 ">

          {pages.map((page, index) => {
            const isActive = pathname === page.href;
            return (
              <Link
                key={index}
                href={page.href}
                className={`text-md lg:text-lg font-medium py-2 px-4 rounded-lg transition
                  ${isActive
                    ? "bg-[#FF6464] text-black shadow-md"
                    : "text-gray-300 hover:bg-white/10"
                  }`}
                onClick={() => dispatch(toggleMobileMenu())}
              >
                {page.name}
              </Link>
            );
          })}
        </div>
      </div>
      {/* )} */}
    </div>
  );
};

export default SideBar;

"use client";
import React, { useState } from "react";
import { Instagram, Linkedin } from "lucide-react";
import { BsWhatsapp } from "react-icons/bs";
import Image from "next/image";
import Logo from "../../public/SwayWhiteLogo.png";
import LogoIcon from "../../public/LogoIcon.png";

const Footer = () => {
  const [email, setEmail] = useState("");

  const quickLinks = [
    { name: "PRIVACY POLICY", href: "#" },
    { name: "GET IN TOUCH", href: "#" },
    { name: "BRAND PARTNERSHIPS", href: "#" },
    { name: "CONTACT US", href: "/contact" },
  ];

  return (
    <footer className="bg-[#4e4d59] text-white pt-6 pb-8 px-4 md:px-12 xl:px-16" data-aos="fade-up" data-aos-delay="100">
      {/* --- Logo Section --- */}
      <div className="flex justify-between items-center  mb-2">
        <div className="relative w-42 h-26 md:w-88 md:h-32">
          <Image src={Logo} alt="SWAG" fill className="object-contain" />
        </div>

        {/* <div className="text-[#FF6464] text-3xl md:text-5xl font-light">Y</div> */}
        <div className="relative w-12 h-8 md:w-32 md:h-12">
          <Image src={LogoIcon} alt="Y" fill className="object-contain" />
        </div>
      </div>

      {/* --- Tagline --- */}
      <div className="mb-16 font-thin text-red-400/80 text-[10px] md:text-sm">
        <p className="tracking-wider">TAILORED TRAINING, NUTRITION AND THERAPY.</p>
        <p className="tracking-wider">REDEFINING WELLNESS FOR EVERYBODY.</p>
      </div>

      {/* --- Main Grid --- */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-24">
        {/* --- Quick Links --- */}
        <div>
          <h4 className="text-sm font-semibold mb-6 tracking-widest">QUICK LINKS</h4>
          <ul className="space-y-1 text-[10px] md:text-sm">
            {quickLinks.map((link) => (
              <li key={link.name}>
                <a href={link.href} className="hover:text-[#FF6464] transition-colors duration-200">
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* --- Join Sway Section --- */}
        <div>
          <h4 className="text-sm font-semibold text-[#FF6464] mb-6 tracking-widest">
            JOIN SWAY
          </h4>

          {/* Email Input */}
          <div className="w-full">
            <label
              htmlFor="email-subscribe"
              className="text-sm tracking-widest block mb-2 text-[#FF6464]"
            >
              EMAIL
            </label>

            <div className="flex items-center border-b border-gray-500 pb-1">
              <input
                id="email-subscribe"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-transparent text-white w-full focus:outline-none text-sm"
              />

              {/* SUBSCRIBE BUTTON */}
              <button
                disabled={!email.trim()}
                className={`text-xs font-semibold transition-colors duration-200 
                  ${email.trim() ? "text-[#FF6464] hover:text-[#b32c2c]" : "text-gray-500 cursor-not-allowed"}`}
              >
                SUBSCRIBE
              </button>
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex space-x-4 mt-8">
            <a href="#" aria-label="Instagram" className="hover:text-[#FF6464] transition-colors duration-200">
              <Instagram size={20} />
            </a>

            <a href="#" aria-label="LinkedIn" className="hover:text-[#FF6464] transition-colors duration-200">
              <Linkedin size={20} />
            </a>

            <a href="#" aria-label="WhatsApp" className="hover:text-[#FF6464] transition-colors duration-200">
              <BsWhatsapp size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

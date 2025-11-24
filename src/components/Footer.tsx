// components/Footer.jsx
import React from 'react';
import { Instagram, Linkedin, Mail, Smartphone } from 'lucide-react'; 
import { BsWhatsapp } from 'react-icons/bs';

const Footer = () => {

  const quickLinks = [
    { name: 'PRIVACY POLICY', href: '#' },
    { name: 'GET IN TOUCH', href: '#' },
    { name: 'BRAND PARTNERSHIPS', href: '#' },
  ];

  return (
    <footer className="bg-[#483F46] text-white pt-16 pb-8 px-4 md:px-12 xl:px-24"  data-aos="fade-up" data-aos-delay="300">
      
      {/* Top Section: Logo and Icon */}
      <div className="flex justify-between items-start mb-12">
        {/* Logo Text */}
        <div className="flex items-center text-4xl md:text-5xl font-light tracking-wide">
          <span className="font-serif">SWAY</span>
          <span className="text-[#FF6464] border-l border-red-400 h-10 ml-2 mr-2 pt-2 pb-2"></span>
          <span className="text-2xl md:text-3xl tracking-widest font-extralight">STUDIO</span>
        </div>
        
        <div className="text-[#FF6464] text-5xl font-light">
          Y
        </div>
      </div>

      {/* Tagline */}
      <div className="mb-16 font-thin text-red-400/80 text-[10px] md:text-sm">
        <p className="tracking-wider">
          TAILORED TRAINING, NUTRITION AND THERAPY.
        </p>
        <p className="tracking-wider">
          REDEFINING WELLNESS FOR EVERYBODY.
        </p>
      </div>

      {/* --- Main Links and Subscription Layout --- */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-24">
        
        {/* Left Column: Quick Links */}
        <div>
          <h4 className="text-sm font-semibold mb-6 tracking-widest">
            QUICK LINKS
          </h4>
          <ul className="space-y-1 text-[10px] md:text-sm">
            {quickLinks.map((link) => (
              <li key={link.name}>
                <a 
                  href={link.href} 
                  className="hover:text-[#FF6464] transition-colors duration-200"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
        
        {/* Right Column: Join Sway & Subscription */}
        <div className="flex flex-col">
          <h4 className="text-sm font-semibold text-[#FF6464] mb-6 tracking-widest">
            JOIN SWAY
          </h4>
          
          {/* Email/Subscribe Field */}
          <div className="w-full">
            <label htmlFor="email-subscribe" className="text-sm tracking-widest block mb-2 text-[#FF6464]">
              EMAIL
            </label>
            <div className="flex items-center border-b border-gray-500 pb-1">
              <input
                id="email-subscribe"
                type="email"
                placeholder=""
                className="bg-transparent text-white w-full focus:outline-none placeholder-gray-400 text-sm"
              />
              <button className="text-xs font-semibold text-[#FF6464] hover:text-[#b32c2c] transition-colors duration-200">
                SUBSCRIBE
              </button>
            </div>
          </div>
          
          
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
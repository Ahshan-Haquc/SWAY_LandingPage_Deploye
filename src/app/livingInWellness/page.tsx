"use client"
import Footer from '@/components/Footer';
import React from 'react';
import Image from "next/image";
import imgOne from '../../../public/curated.jpg';
import imgTwo from '../../../public/yankruv.jpg';
import LogoIcon from "../../../public/LogoIcon.png";
import imgNew from "../../../public/Untitled design.png";
import h7 from '../../../public/h7.jpg';
import h8 from '../../../public/h8.jpg';
import h9 from '../../../public/h9.jpg';
import headerSecondImage from '../../../public/SwayThirdHeader.jpg'
import HeadingImg from '@/components/headingImage/HeadingImg';
import ServicesTabsSection from '@/components/livingInWellness/ServicesTabsSection';
import AOS from "aos";
import "aos/dist/aos.css";

const page = () => {
    return (
        <>
        <div className='max-w-7xl mx-auto'>
        <HeadingImg  h1={h7} h2={h8} h3={h9} phoneImg={headerSecondImage} />
        <div className="px-4 flex flex-col items-center space-y-2 md:space-y-4 mx-auto mt-0 mb-6 md:mt-22">

            {/* Main Headline */}
            <h2 className="text-lg md:text-xl xl:text-3xl font-light text-gray-800 tracking-wide text-nowrap">
              RE-BUILD - BODY TRANSFORMATION
            </h2>

            {/* Sub-Headline / Motto */}
            <p className="text-xs md:text-sm xl:text-lg font-light text-gray-700 text-center">
              Recalibrate your body. Reveal your strength.
            </p>

            {/* Detailed Description */}
            <p className="text-xs md:text-sm xl:text-lg font-light text-gray-700 text-center">
              This is more than training - it's a transformation. Over **12 weeks and 36 expertly coached sessions**, RE-BUILD delivers visible change through strength, movement precision, and performance quality. With **three dedicated hours of nutrition from a registered dietitian, ongoing tracking, and weekly refinements**.
            </p>

            {/* Call to Action (Repeated on the left for emphasis) */}
            <p className="text-xs md:text-sm xl:text-lg font-light text-gray-700 text-center">
              Commit to change and contact us to start your Re-Build plan today.
            </p>
          </div>
        
            <ServicesTabsSection/>
            
            <Footer/>
        </div>
            </>
    );
};

export default page;


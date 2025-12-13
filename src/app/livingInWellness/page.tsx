"use client"
import Footer from '@/components/Footer';
import React, { Suspense } from 'react';
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

        <Suspense fallback={<div className="min-h-screen" />}>
            <ServicesTabsSection/>
        </Suspense>    
            <Footer/>
        </div>
            </>
    );
};

export default page;



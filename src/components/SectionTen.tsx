import React from 'react';

const SectionTen = () => {
    return (
        <div className='my-3 md:my-8 p-3 md:p-5 bg-[#80B1FB] h-fit md:h-44 flex flex-col justify-between'  data-aos="fade-up" data-aos-delay="100">
            <h2 className="text-lg md:text-2xl font-light text-white tracking-wide text-nowrap">
            LEARN TO MOVE THE SWAY WAY
          </h2>
          <p className="text-xs md:text-sm">Browse and download resources and training guides to help you move better, build habits and become stronger.</p>
          <button className="w-44 sm:w-64 mt-4 py-1 md:py-3 px-3 md:px-6 border border-yellow-200 text-black bg-white hover:text-white text-sm md:text-lg font-normal rounded-full shadow-lg hover:bg-red-500 transition duration-300">
          BROWSE LIBRERY
        </button>
        </div>
    );
};

export default SectionTen;
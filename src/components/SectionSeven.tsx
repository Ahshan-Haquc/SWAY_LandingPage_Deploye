import headerSecondImage from '../../public/SwayThirdHeader.jpg'
import Image from "next/image";
import HeadingImg from './headingImage/HeadingImg';
import h7 from '../../public/h7.jpg';
import h8 from '../../public/h8.jpg';
import h9 from '../../public/h9.jpg';

const SectionSeven = () => {

  return (
    <>

      <HeadingImg  h1={h7} h2={h8} h3={h9} phoneImg={headerSecondImage} />

      {/* text part hello */}
      <div className="bg-white mt-2 mb-10 md:mb-0 md:mt-28 py-2 md:py-8 px-4 md:px-12 xl:px-24" data-aos="zoom-in" data-aos-delay="300">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 max-w-7xl mx-auto">

          <div className="flex flex-col items-center space-y-2 md:space-y-4">

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

          {/* === RIGHT COLUMN: Key Features and Form === */}
          <div className="flex flex-col space-y-2 md:space-y-4 items-center">

            {/* Program Motto / Structure */}
            <div className="text-xs md:text-sm xl:text-lg font-light text-gray-700 text-center">
              <p>This is structure with purpose. Support with substance.</p>
              <p>Change that lasts.</p>
            </div>

            {/* Key Features */}
            <p className="text-xs md:text-sm xl:text-lg font-bold text-gray-700 text-center ">
              36 sessions | 1-to-1 coaching + expert dietitian support
            </p>

            {/* Call to Action (Right Side) */}
            <p className="text-xs md:text-sm xl:text-lg font-light text-gray-700 text-center">
              Commit to change and contact us to start your Re-Build plan today.
            </p>

            {/* Subscription Form */}
            <div className="w-full max-w-md mx-auto pt-4">
              {/* Labels and Input */}
              <div className="flex justify-between items-center w-full text-sm font-normal tracking-widest mb-1">
                <label htmlFor="rebuild-email-input" className="text-[#FF6464] opacity-90">
                  EMAIL
                </label>
                <button className="text-[#FF6464] opacity-90 hover:opacity-100 transition-opacity duration-200">
                  SUBMIT
                </button>
              </div>

              {/* Input Field (Bottom Border) */}
              <div className="border-b border-gray-400 pb-1 w-full">
                <input
                  id="rebuild-email-input"
                  type="email"
                  placeholder=""
                  className="bg-transparent text-gray-800 w-full focus:outline-none placeholder-gray-400 text-base"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SectionSeven;

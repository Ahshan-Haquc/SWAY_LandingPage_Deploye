import headerSecondImage from '../../public/SwayThirdHeader.jpg'
import HeadingImg from './headingImage/HeadingImg';
import h7 from '../../public/h7.jpg';
import h8 from '../../public/h8.jpg';
import h9 from '../../public/h9.jpg';
import CorporatePopup from '@/features/CorporatePopup';

const SectionSeven = () => {

  return (
    <>
      <HeadingImg h1={h7} h2={h8} h3={h9} phoneImg={headerSecondImage} />

      {/* Styled Section following "The Retreat" layout */}
      <div className="bg-[#F5F1EA] mt-2 mb-10 md:mb-0 md:mt-28 rounded-2xl py-16 md:py-24 px-4 md:px-12 xl:px-24" data-aos="fade-up" data-aos-delay="300">

        <div className=" grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 max-w-7xl mx-auto items-center">

          {/* LEFT COLUMN: Title with Vertical Accent Bar */}
          <div className="lg:col-span-4 flex items-start space-x-6">
            <div className="w-[3px] h-32 bg-[#0A2339] hidden md:block"></div>
            <div className="flex flex-col">
              <span className="text-[10px] md:text-xs font-bold tracking-[0.3em] text-[#0A2339] uppercase mb-2">
                Unwind Mind, Body and Soul
              </span>
              <h2 className="text-3xl md:text-4xl xl:text-5xl  text-[#0A2339] leading-tight">
                The-Reatreat
              </h2>
            </div>
          </div>

          {/* MIDDLE COLUMN: Description Text */}
          <div className="lg:col-span-5">
            <p className="text-sm md:text-base xl:text-lg font-light text-gray-700 leading-relaxed italic mb-4">
              Recalibrate your body. Reveal your strength.
            </p>
            <p className="text-sm md:text-base xl:text-lg font-light text-gray-700 leading-relaxed">
              This is more than training - it's a transformation. Over **12 weeks and 36 expertly coached sessions**, RE-BUILD delivers visible change through strength, movement precision, and performance quality. With **three dedicated hours of nutrition from a registered dietitian, ongoing tracking, and weekly refinements**.
            </p>
          </div>

          {/* RIGHT COLUMN: CTA Button / Box */}
          <div className="lg:col-span-3 flex justify-center lg:justify-end">
            <button className="relative rounded-2xl cursor-pointer overflow-hidden border-2 border-[#0A2339] text-[#0A2339] px-8 py-4 text-xs font-bold tracking-[0.2em] uppercase  outline-offset-4 outline-[#0A2339] group">
              <span className="absolute inset-0 bg-[#FF6464] scale-x-0 origin-left transition-transform duration-500 ease-in-out group-hover:scale-x-100"></span>

              {/* Button text */}
              <span className="relative z-10 transition-colors duration-500 group-hover:text-white">
                Book Treatment Here
              </span>
            </button>
          </div>


        </div>
      </div>

      <CorporatePopup />
    </>
  );
};

export default SectionSeven;
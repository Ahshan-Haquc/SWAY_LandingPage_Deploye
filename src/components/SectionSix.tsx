import headerSecondImage from '../../public/SwaySecondHeaderImage.jpg'
import h1 from '../../public/h4.jpg'
import h2 from '../../public/h5.jpg'
import h3 from '../../public/h6.jpg'
import Image from "next/image";
import HeadingImg from './headingImage/HeadingImg';


const SectionSix = () => {

  return (
    <>
      <HeadingImg
        h1={h1}
        h2={h2}
        h3={h3}
        phoneImg={headerSecondImage}
      />

      {/* text part  */}
      <div className="bg-white mt-22 2xl:mt-28 py-2 md:py-3 px-4 md:px-12 xl:px-24" data-aos="zoom-in" data-aos-delay="300">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 max-w-7xl mx-auto">
          <div className="flex flex-col items-center space-y-2 md:space-y-4">
            {/* Main Headline */}
            <h2 className="text-lg md:text-xl xl:text-3xl font-light text-gray-800 tracking-wide text-nowrap">
              POP-UP GROUP CLASSES
            </h2>

            {/* Sub-Headline / Motto */}
            <p className="text-xs md:text-sm xl:text-lg font-light text-gray-700 text-center">
              Move with purpose. Pop-up and power up.
            </p>

            {/* Detailed Description */}
            <p className="text-xs md:text-sm xl:text-lg font-light text-gray-700 text-center">
              Dynamic, location-based, mat Pilates delivered the Sway way — 60 minutes of energy, precision teaching, and focused movement. With expert coaching and attention to detail, every class is designed to move smarter, not just harder.
            </p>

            {/* Call to Action (Repeated on the left for emphasis) */}
            <p className="text-xs md:text-sm xl:text-lg font-light text-gray-700 text-center">
              With a coach for every 10 participants, expect personal attention in a vibrant group setting. Open to all levels. Just bring your mat and your best self.
            </p>
          </div>

          {/* === RIGHT COLUMN: Key Features and Form === */}
          <div className="flex flex-col space-y-2 md:space-y-4 items-center text-gray-700">
            <div className="text-xs md:text-sm xl:text-lg font-bold text-red-400/80 text-center">
              <p>NEXT POP-UP CLASS:</p>
            </div>
            <div className="text-xs md:text-sm xl:text-lg text-center">
              <p>Sunday 17th August, 9am</p>
              <p>please arrive 8:50</p>
            </div>
            <div className="text-xs md:text-sm xl:text-lg text-center">
              <p>St Barnabas Parish Hall,</p>
              <p>23 Dulwich Village,</p>
              <p>London SE21 7BT</p>
            </div>
            <div>
              <p className="text-xs md:text-sm  xl:text-lgfont-bold text-red-400/80 text-center">
                £15 per class with-25% donated to-Refuge
              </p>
              <p className="text-xs md:text-sm xl:text-lg text-center">
                For women and children. Against domestic violence.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center gap-5 my-6 md:my-8"  data-aos="zoom-in" data-aos-delay="300">
        <button className="w-44 sm:w-64 mt-4 py-1 md:py-3 px-3 md:px-6 bg-[#FF6464] text-gray-700 text-sm md:text-lg font-semibold rounded-full shadow-lg hover:bg-[#Faefb8] transition duration-300">
          BOOK
        </button>
        <button className="w-44 sm:w-64 mt-4 py-1 md:py-3 px-3 md:px-6 border border-[#FF6464] text-gray-700  text-sm md:text-lg font-semibold rounded-full shadow-lg hover:bg-[#Faefb8] hover:border-[#Faefb8] transition duration-300">
          Google Map
        </button>
      </div>
    </>
  );
};

export default SectionSix;

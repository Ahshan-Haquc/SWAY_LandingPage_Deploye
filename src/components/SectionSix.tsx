import Link from 'next/link';
import headerSecondImage from '../../public/SwaySecondHeaderImage.jpg'
import h1 from '../../public/h4.jpg'
import h2 from '../../public/h5.jpg'
import h3 from '../../public/h6.jpg'
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

      {/* ================= TEXT SECTION ================= */}
      <div
        className="bg-white mt-0 md:mt-28 2xl:mt-28 py-4 md:py-6 "
        data-aos="zoom-in"
        data-aos-delay="300"
      >
        <div className="grid grid-cols-1 md:grid-cols-2  gap-16 md:gap-32 xl:gap-40">

          {/* LEFT COLUMN */}
          <div className="flex flex-col items-center md:items-start space-y-4 mx-4 md:mx-0 lg:mx-0">
            <h2 className="text-lg md:text-xl xl:text-3xl font-light text-gray-800 tracking-wide text-center md:text-left">
              POP-UP GROUP CLASSES
            </h2>

            <p className="text-xs md:text-sm xl:text-lg font-light text-gray-700 text-center md:text-left max-w-xl">
              Move with purpose. Pop-up and power up.
            </p>

            <p className="text-xs md:text-sm xl:text-lg font-light text-gray-700 text-center md:text-left max-w-xl leading-relaxed">
              Dynamic, location-based, mat Pilates delivered the Sway way — 60 minutes of energy, precision teaching, and focused movement. With expert coaching and attention to detail, every class is designed to move smarter, not just harder.
            </p>

            <p className="text-xs md:text-sm xl:text-lg font-light text-gray-700 text-center md:text-left max-w-xl leading-relaxed">
              With a coach for every 10 participants, expect personal attention in a vibrant group setting. Open to all levels. Just bring your mat and your best self.
            </p>
          </div>

          {/* RIGHT COLUMN */}
          <div className="flex flex-col space-y-4 items-center md:items-start text-gray-700">
            <div className="text-xs md:text-sm xl:text-lg font-semibold text-red-400/80">
              NEXT POP-UP CLASS:
            </div>

            <div className="text-xs md:text-sm xl:text-lg leading-relaxed">
              <p>Sunday 17th August, 9am</p>
              <p>Please arrive 8:50</p>
            </div>

            <div className="text-xs md:text-sm xl:text-lg leading-relaxed">
              <p>St Barnabas Parish Hall,</p>
              <p>23 Dulwich Village,</p>
              <p>London SE21 7BT</p>
            </div>

            <div className="space-y-1">
              <p className="text-xs md:text-sm xl:text-lg font-semibold text-red-400/80">
                £15 per class with −25% donated to Refuge
              </p>
              <p className="text-xs md:text-sm xl:text-lg">
                For women and children. Against domestic violence.
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* ================= BUTTONS ================= */}
      <div
        className="flex justify-center items-center gap-5 my-6 md:my-8"
        data-aos="zoom-in"
        data-aos-delay="300"
      >
        {/* BOOK BUTTON */}
        <Link
          href="/freeConsultation"
          className="relative overflow-hidden px-6 py-3 rounded-2xl bg-white text-black font-medium group w-44 sm:w-64 text-center border"
        >
          {/* Orange sliding background */}
          <span
            className="absolute inset-0 bg-[#FF6464] scale-x-0 origin-left transition-transform duration-500 ease-in-out group-hover:scale-x-100"
          />

          {/* Button text */}
          <span className="relative z-10 transition-colors duration-500 group-hover:text-white">
            BOOK
          </span>
        </Link>

        {/* GOOGLE MAP BUTTON */}
        <Link
          href="https://maps.app.goo.gl/FHMrit8v5zBdyq6FA"
          target="_blank"
          rel="noopener noreferrer"
          className="relative border overflow-hidden px-6 py-3 rounded-2xl bg-white text-black font-medium group w-44 sm:w-64 text-center"
        >
          {/* Orange sliding background */}
          <span
            className="absolute inset-0 bg-[#FF6464] scale-x-0 origin-left transition-transform duration-500 ease-in-out group-hover:scale-x-100"
          />

          {/* Button text */}
          <span className="relative z-10 transition-colors duration-500 group-hover:text-white">
            Google Map
          </span>
        </Link>
      </div>

    </>
  );
};

export default SectionSix;

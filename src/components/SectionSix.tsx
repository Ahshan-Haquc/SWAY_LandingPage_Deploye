

const SectionSix = () => {

  return (
    <>
      <div className="grid grid-cols-3 w-full relative my-4 md:my-20">
        {/* Box 1 */}
        <div className="aspect-square overflow-hidden " data-aos="fade-left" data-aos-delay="300">
          <img
            src="https://images.pexels.com/photos/703012/pexels-photo-703012.jpeg"
            className="w-full h-full object-cover"
            alt="Random Pexels"
          />
        </div>

        {/* Box 2 */}
        <div className="aspect-square overflow-hidden scale-110 z-10" data-aos="zoom-in">
          <img
            src="https://images.pexels.com/photos/1472887/pexels-photo-1472887.jpeg"
            className="w-full h-full object-cover"
            alt="Random Pexels"
          />
        </div>

        {/* Box 3 */}
        <div className="aspect-square overflow-hidden " data-aos="fade-right" data-aos-delay="300">
          <img
            src="https://images.pexels.com/photos/841128/pexels-photo-841128.jpeg"
            className="w-full h-full object-cover"
            alt="Random Pexels"
          />
        </div>
      </div>

      {/* text part  */}
      <div className="bg-white py-2 md:py-3 px-4 md:px-12 xl:px-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 max-w-7xl mx-auto">
          <div className="flex flex-col items-center space-y-2 md:space-y-4">
            {/* Main Headline */}
            <h2 className="text-lg md:text-xl font-light text-gray-800 tracking-wide text-nowrap">
              POP-UP GROUP CLASSES
            </h2>

            {/* Sub-Headline / Motto */}
            <p className="text-xs md:text-sm font-light text-gray-700 text-center">
              Move with purpose. Pop-up and power up.
            </p>

            {/* Detailed Description */}
            <p className="text-xs md:text-sm font-light text-gray-700 text-center">
              Dynamic, location-based, mat Pilates delivered the Sway way — 60 minutes of energy, precision teaching, and focused movement. With expert coaching and attention to detail, every class is designed to move smarter, not just harder.
            </p>

            {/* Call to Action (Repeated on the left for emphasis) */}
            <p className="text-xs md:text-sm font-light text-gray-700 text-center">
              With a coach for every 10 participants, expect personal attention in a vibrant group setting. Open to all levels. Just bring your mat and your best self.
            </p>
          </div>

          {/* === RIGHT COLUMN: Key Features and Form === */}
          <div className="flex flex-col space-y-2 md:space-y-4 items-center">
            <div className="text-xs md:text-sm font-bold text-red-400/80 text-center">
              <p>NEXT POP-UP CLASS:</p>
            </div>
            <div className="text-xs md:text-sm text-center">
              <p>Sunday 17th August, 9am</p>
              <p>please arrive 8:50</p>
            </div>
            <div className="text-xs md:text-sm text-center">
              <p>St Barnabas Parish Hall,</p>
              <p>23 Dulwich Village,</p>
              <p>London SE21 7BT</p>
            </div>
            <div>
              <p className="text-xs md:text-sm font-bold text-red-400/80 text-center">
                £15 per class with-25% donated to-Refuge
              </p>
              <p className="text-xs md:text-sm text-center">
                For women and children. Against domestic violence.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center gap-5 my-6 md:my-8">
        <button className="w-44 sm:w-64 mt-4 py-1 md:py-3 px-3 md:px-6 bg-[#FF6464] text-white text-sm md:text-lg font-semibold rounded-full shadow-lg hover:bg-red-500 transition duration-300">
          BOOK
        </button>
        <button className="w-44 sm:w-64 mt-4 py-1 md:py-3 px-3 md:px-6 border border-[#FF6464] text-black hover:text-white text-sm md:text-lg font-semibold rounded-full shadow-lg hover:bg-red-500 transition duration-300">
          Google Map
        </button>
      </div>
    </>
  );
};

export default SectionSix;

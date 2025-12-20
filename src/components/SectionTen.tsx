"use client";
import { useEffect, useRef, useState } from "react";
import { DownloadCloud, X } from "lucide-react";

const SectionTen = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [isTransitioningOut, setIsTransitioningOut] = useState(false);

  // New state to prevent showing again
  const [hasShown, setHasShown] = useState(false);

  const sectionRef = useRef<HTMLDivElement | null>(null);
  const ANIMATION_DURATION = 350;

  useEffect(() => {
    const currentRef = sectionRef.current;
    if (!currentRef || hasShown) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasShown) {
            setShowPopup(true);
            setHasShown(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.4 }
    );

    observer.observe(currentRef);

    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, [hasShown]);

  const handleClose = () => {
    setIsTransitioningOut(true);
    setTimeout(() => {
      setShowPopup(false);
      setIsTransitioningOut(false);
    }, ANIMATION_DURATION);
  };

  const backdropClass = isTransitioningOut ? "animate-fadeOut" : "animate-fadeIn";
  const modalClass = isTransitioningOut ? "animate-slideDown" : "animate-slideUp";

  return (
    <>
      {/* ================= SECTION TEN ================= */}
      <footer id="footer-section" ref={sectionRef}>
        <div className="my-3 md:my-8 p-6 md:p-10 bg-[#80B1FB] rounded-xl h-fit flex flex-col justify-between shadow-xl">
          <h2 className="text-lg md:text-3xl font-bold text-white tracking-wide mb-3">
            LEARN TO MOVE THE SWAY WAY
          </h2>
          <p className="text-xs md:text-base text-white/90 mb-6">
            Browse and download resources and training guides to help you move
            better, build habits and become stronger.
          </p>
          <button className="self-start w-48 sm:w-64 py-3 px-6 border-2 border-white text-black bg-white hover:bg-yellow-400 hover:border-yellow-400 text-sm md:text-lg font-semibold rounded-full shadow-lg transition duration-300 transform hover:scale-[1.02]">
            BROWSE LIBRARY
          </button>
        </div>
      </footer>

      {/*  POPUP  */}
      {showPopup && (
        <div
          className={`fixed inset-0 bg-black/60  flex items-center justify-center z-999 ${backdropClass}`}
        >
          <div className={`bg-white w-full max-w-sm mx-4 rounded-3xl shadow-2xl p-8 relative ${modalClass}`}>

            <button
              onClick={handleClose}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-800 transition p-1"
            >
              <X size={24} />
            </button>

            {/* Add image here */}
            <div className="my-6">
              <img
                src="https://images.pexels.com/photos/243698/pexels-photo-243698.jpeg"
                alt="Mobile app"
                className="w-full h-auto rounded-xl"
              />
            </div>

            <div className="flex flex-col items-center text-center">
              <DownloadCloud className="text-[#80B1FB] mb-4" size={48} strokeWidth={1.5} />
              <h2 className="text-2xl font-extrabold text-gray-800 mb-2">Get Our Mobile App!</h2>
            </div>

            <p className="text-sm text-gray-600 mb-6 text-center">
              Unlock personalized workout plans, seamless progress tracking, and exclusive content.
            </p>

            <button
              onClick={handleClose}
              className="w-full py-4 bg-[#80B1FB] text-white rounded-full text-base font-bold shadow-lg hover:bg-[#6a97d5]"
            >
              Download Now
            </button>

            <button
              onClick={handleClose}
              className="w-full mt-3 text-xs text-gray-500 hover:text-gray-700"
            >
              No thanks, I'll stick to the web version
            </button>
          </div>
        </div>
      )}

      {/* ============ ANIMATIONS ============ */}
      <style jsx global>{`
        .animate-fadeIn { animation: fadeIn 0.35s ease-out forwards; }
        .animate-fadeOut { animation: fadeOut 0.35s ease-in forwards; }
        .animate-slideUp { animation: slideUp 0.35s ease-out forwards; }
        .animate-slideDown { animation: slideDown 0.35s ease-in forwards; }

        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes fadeOut { from { opacity: 1; } to { opacity: 0; } }
        @keyframes slideUp { from { transform: translateY(40px); opacity: 0; }
                             to { transform: translateY(0); opacity: 1; } }
        @keyframes slideDown { from { transform: translateY(0); opacity: 1; }
                               to { transform: translateY(40px); opacity: 0; } }
      `}</style>
    </>
  );
};

export default SectionTen;

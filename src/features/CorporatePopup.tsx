"use client";
import { useEffect, useRef, useState } from "react";
import { X } from "lucide-react";
import Image from "next/image";
import imgOne from "../../public/corporate.png";
import Link from "next/link";

export default function CorporatePopup() {
  const [showPopup, setShowPopup] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [hasShown, setHasShown] = useState(false); // prevents re-trigger

  const footerRef = useRef<HTMLElement | null>(null);
  const ANIMATION_DURATION = 350;

  useEffect(() => {
    const footerElement = document.getElementById("seven-section");
    footerRef.current = footerElement;
    if (!footerElement || hasShown) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShowPopup(true);
          setHasShown(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(footerElement);

    return () => observer.disconnect();
  }, [hasShown]);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      setShowPopup(false);
      setIsClosing(false);
    }, ANIMATION_DURATION);
  };

  // Don't render anything if never triggered
  if (!showPopup && !hasShown) return null;

  const backdropClass = isClosing ? "animate-fadeOut" : "animate-fadeIn";
  const modalClass = isClosing ? "animate-slideDown" : "animate-slideUp";

  return (
    <>
      {showPopup && (
        <div
          className={`fixed inset-0 bg-black/60 flex items-center justify-center z-[9999] px-4 ${backdropClass}`}
        >
          <div
            className={`relative bg-white max-w-3xl w-full rounded-2xl shadow-2xl overflow-hidden ${modalClass}`}
          >
            {/* Close button */}
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 z-10 rounded-full bg-white/80 p-2 backdrop-blur-sm hover:bg-white transition"
            >
              <X className="w-6 h-6 text-gray-700" />
            </button>

            {/* Image */}
            <div className="relative h-52 md:h-96">
              <Image
                src={imgOne}
                fill
                alt="Corporate training"
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 80vw"
              />
            </div>

            {/* Content */}
            <div className="p-6 md:p-10 text-center space-y-4">
              <h2 className="text-2xl md:text-4xl font-black text-blue-400 tracking-wide">
                CORPORATE TRAINING
              </h2>

              <p className="text-sm md:text-lg font-light text-gray-700">
                Sharper teams start here. Work well. Work wisely.
              </p>

              <p className="text-sm md:text-base text-gray-600 max-w-2xl mx-auto">
                Elevate workplace performance with tailored fitness, movement, and wellbeing
                training. From Pilates and strength to recovery and posture workshops — each
                session is customised for your team (on-site or online).
              </p>

              <p className="text-sm md:text-base font-medium text-gray-800">
                When your team moves better, they work better.
              </p>

              <p className="text-sm md:text-base text-gray-800">
                <Link href="/contact" className="underline font-semibold text-blue-600">
                  Contact us
                </Link>{" "}
                for a bespoke corporate wellbeing package.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Smooth Animations (same as the reference component) */}
      <style jsx global>{`
        .animate-fadeIn {
          animation: fadeIn ${ANIMATION_DURATION}ms ease-out forwards;
        }
        .animate-fadeOut {
          animation: fadeOut ${ANIMATION_DURATION}ms ease-in forwards;
        }
        .animate-slideUp {
          animation: slideUp ${ANIMATION_DURATION}ms ease-out forwards;
        }
        .animate-slideDown {
          animation: slideDown ${ANIMATION_DURATION}ms ease-in forwards;
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes fadeOut {
          from { opacity: 1; }
          to { opacity: 0; }
        }
        @keyframes slideUp {
          from {
            transform: translateY(50px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
        @keyframes slideDown {
          from {
            transform: translateY(0);
            opacity: 1;
          }
          to {
            transform: translateY(50px);
            opacity: 0;
          }
        }
      `}</style>
    </>
  );
}
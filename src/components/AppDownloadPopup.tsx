"use client";
import { useEffect, useRef, useState } from "react";
import { X } from "lucide-react"; // If using lucide icons

export default function AppDownloadPopup() {
  const footerRef = useRef<HTMLElement | null>(null);
  const [showPopup, setShowPopup] = useState(false);


useEffect(() => {
  const footerElement = document.getElementById("footer-section");
  footerRef.current = footerElement;

  if (!footerElement) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setShowPopup(true);
        }
      });
    },
    { threshold: 0.3 }
  );

  observer.observe(footerElement);

  return () => observer.disconnect();
}, []);


  return (
    <>
      {showPopup && (
        <div className="fixed bottom-0 left-0 right-0 px-4 pb-6 z-9999 animate-slideUp">
          <div className="bg-white shadow-xl rounded-2xl p-5 max-w-md mx-auto relative">

            {/* Close Button */}
            <button
              onClick={() => setShowPopup(false)}
              className="absolute right-3 top-3 p-1 rounded-full hover:bg-gray-100"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Content */}
            <h2 className="text-xl font-bold text-center mb-2">
              Download Our Mobile App
            </h2>

            <p className="text-sm text-gray-600 text-center mb-4">
              Get instant access, real-time updates, and a smoother experience directly on your phone.
            </p>

            {/* App Buttons */}
            <div className="flex items-center justify-center gap-3">
              <a
                href="#"
                className="flex items-center gap-2 px-4 py-2 bg-black text-white rounded-xl hover:opacity-90"
              >
                <img src="/playstore.png" alt="" className="w-6" />
                <span className="text-sm">Google Play</span>
              </a>

              <a
                href="#"
                className="flex items-center gap-2 px-4 py-2 bg-black text-white rounded-xl hover:opacity-90"
              >
                <img src="/appstore.png" alt="" className="w-6" />
                <span className="text-sm">App Store</span>
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Animation */}
      <style>{`
        @keyframes slideUp {
          0% { transform: translateY(100%); opacity: 0; }
          100% { transform: translateY(0); opacity: 1; }
        }
        .animate-slideUp {
          animation: slideUp 0.4s ease forwards;
        }
      `}</style>
    </>
  );
}

"use client";
import { useEffect, useState } from "react";

const CookieConsentBanner = () => {
  const [visible, setVisible] = useState(false);
  const [closing, setClosing] = useState(false);

  const ANIMATION_DURATION = 300; // ms

  useEffect(() => {
    const consent = localStorage.getItem("cookie_consent");

    // If user already accepted or rejected → don't show
    if (consent === "accepted" || consent === "rejected") return;

    // Delay slightly before showing
    setTimeout(() => setVisible(true), 1200);
  }, []);

  const closeBanner = (choice : any) => {
    localStorage.setItem("cookie_consent", choice);
    setClosing(true);

    setTimeout(() => {
      setVisible(false);
      setClosing(false);
    }, ANIMATION_DURATION);
  };

  if (!visible) return null;

  return (
    <>
      {/* ===== COOKIE BANNER ===== */}
      <div
        className={`fixed bottom-0 left-0 w-full bg-white shadow-[0_-4px_20px_rgba(0,0,0,0.2)]
        z-9999 px-6 py-6 md:px-12 md:py-8 flex flex-col md:flex-row items-start md:items-center 
        justify-between gap-6 border-t border-gray-200
        ${closing ? "animate-slideDown" : "animate-slideUp"}`}
      >
        {/* TEXT SECTION */}
        <div className="flex-1">
          <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-2">
            We Value Your Privacy
          </h3>

          <p className="text-sm md:text-base text-gray-600 leading-relaxed">
            We use cookies to enhance your browsing experience, serve personalized ads, 
            and analyze site traffic. You can choose to accept or reject cookies. 
            For more details, please read our{" "}
            <a href="/privacy-policy" className="text-[#72a3ed] underline">
              Privacy Policy
            </a>{" "}
            and{" "}
            <a href="/cookies" className="text-[#72a3ed] underline">
              Cookie Policy
            </a>.
          </p>
        </div>

        {/* BUTTONS SECTION */}
        <div className="flex gap-3 shrink-0">

          {/* Reject Button */}
          <button
            onClick={() => closeBanner("rejected")}
            className="px-5 py-3 border border-gray-400 rounded-lg text-sm md:text-base 
            text-gray-700 hover:bg-gray-200 transition"
          >
            Reject
          </button>

          {/* Accept Button */}
          <button
            onClick={() => closeBanner("accepted")}
            className="px-5 py-3 bg-[#80B1FB] text-white rounded-lg text-sm md:text-base 
            hover:bg-[#72a3ed] transition"
          >
            Accept Cookies
          </button>
        </div>
      </div>

      {/* ===== ANIMATIONS ===== */}
      <style jsx global>{`
        @keyframes slideUp {
          from {
            transform: translateY(100%);
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
            transform: translateY(100%);
            opacity: 0;
          }
        }

        .animate-slideUp {
          animation: slideUp 0.3s ease-out forwards;
        }
        .animate-slideDown {
          animation: slideDown 0.3s ease-in forwards;
        }
      `}</style>
    </>
  );
};

export default CookieConsentBanner;

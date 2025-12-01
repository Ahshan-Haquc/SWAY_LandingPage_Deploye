"use client"
import React, { useEffect, useState } from "react";
import { X, Calendar, Clock, MessageSquare, UserRound, Mail, Book } from "lucide-react";
import { Cookie } from "next/font/google";

const COLORS = {
    primary: "#80B1FB",
    accent: "#ed6e6a",
    dark: "#4E4D59",
};

const CookieBanerLastUpdated = () => {
    const [open, setOpen] = useState(false);
    const [closing, setClosing] = useState(false);
    const ANIMATION_DURATION = 700;

    useEffect(() => {
        const consent = localStorage.getItem("cookie_consent");

        // If user already accepted or rejected → don't show
        if (consent === "accepted" || consent === "closed") return;

        const timer = setTimeout(() => {
            setOpen(true);
        }, 2000);

        return () => clearTimeout(timer);
    }, []);

    const handleClose = (choice: string) => {
        localStorage.setItem("cookie_consent", choice);

        setClosing(true);
        setTimeout(() => {
            setOpen(false);
            setClosing(false);
        }, ANIMATION_DURATION);
    };


    if (!open) return null;


    return (
        <>

            {/* MODAL */}
            <div
                className={`fixed bottom-0 left-0 w-full bg-white shadow-[0_-4px_20px_rgba(0,0,0,0.2)]
        z-9999 px-6 py-6 md:px-12 md:py-8 flex flex-col md:flex-row items-start md:items-center 
        justify-between gap-6 border-t border-gray-200 ${closing ? "animate-slideDown" : "animate-slideUp"}`}
            >
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
                <div className="flex gap-3 shrink-0">
                    <button className="border border-[#80B1FB] px-5 py-3 rounded-2xl hover:text-[#80B1FB] hover:cursor-pointer duration-300" onClick={() => handleClose("rejected")}>Close</button>
                    <button className="bg-[#80B1FB] px-5 py-3 rounded-2xl text-white hover:bg-[#75a8f4] hover:cursor-pointer duration-300" onClick={() => handleClose("accepted")}>Accept</button>
                </div>
            </div>

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

export default CookieBanerLastUpdated;
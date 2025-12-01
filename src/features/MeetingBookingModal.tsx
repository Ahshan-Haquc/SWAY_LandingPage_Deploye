import React, { useEffect, useState } from "react";
import { X, Calendar, Clock, MessageSquare, UserRound, Mail, Book } from "lucide-react";

const COLORS = {
    primary: "#80B1FB",
    accent: "#ed6e6a",
    dark: "#4E4D59",
};

const MeetingBookingModal = () => {
    const [open, setOpen] = useState(false);
    const [closing, setClosing] = useState(false);
    const ANIMATION_DURATION = 700;

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        meetingType: "Discovery Call",
        duration: "30 minutes",
        dateTime: "",
        notes: "",
    });

    useEffect(() => {
        const timer = setTimeout(() => {
            setOpen(true);
        }, 2000);

        return () => clearTimeout(timer);
    }, []);

    const handleClose = () => {
        setClosing(true);
        setTimeout(() => {
            setOpen(false);
            setClosing(false);
        }, ANIMATION_DURATION);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        alert("This module is under developement when backend is ready.")
        handleClose();
    };

    if (!open) return null;

    const FormField = ({ icon: Icon, type = "text", name, placeholder, children, isSelect = false, isTextarea = false }: { icon: React.ComponentType<{ size: number }>, type?: string, name: string, placeholder?: string, children?: React.ReactNode, isSelect?: boolean, isTextarea?: boolean }) => (
        <div className="relative">
            <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                <Icon size={18} />
            </div>
            {isSelect ? (
                <select
                    name={name}
                    onChange={handleChange}
                    className={`w-full border-2 border-gray-200 pl-10 py-3 rounded-xl text-sm transition focus:border-[${COLORS.accent}] focus:ring-1 focus:ring-[${COLORS.accent}] outline-none appearance-none`}
                >
                    {children}
                </select>
            ) : isTextarea ? (
                <textarea
                    name={name}
                    placeholder={placeholder}
                    onChange={handleChange}
                    rows={3}
                    className={`w-full border-2 border-gray-200 pl-10 pr-3 py-3 rounded-xl text-sm transition focus:border-[${COLORS.accent}] focus:ring-1 focus:ring-[${COLORS.accent}] outline-none resize-none`}
                />
            ) : (
                <input
                    type={type}
                    name={name}
                    placeholder={placeholder}
                    onChange={handleChange}
                    className={`w-full border-2 border-gray-200 pl-10 pr-3 py-3 rounded-xl text-sm transition focus:border-[${COLORS.accent}] focus:ring-1 focus:ring-[${COLORS.accent}] outline-none`}
                />
            )}
        </div>
    );


    return (
        <>
            {/* BACKDROP */}
            <div
                className={`fixed inset-0 bg-black/50 flex items-center justify-center z-[999] 
        ${closing ? "animate-fadeOut" : "animate-fadeIn"}`}
                onClick={handleClose}
            ></div>

            {/* MODAL BOX */}
            <div
                style={{ color: COLORS.dark }}
                className={`fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
        w-[95%] max-w-5xl bg-white rounded-2xl shadow-2xl z-[1000] overflow-hidden 
        ${closing ? "animate-slideDown" : "animate-slideUp"}`}
            >
                {/* MODAL HEADER */}
                <div style={{ backgroundColor: COLORS.primary }} className="py-4 px-6 text-white flex justify-between items-start">
                    <div className="">
                        <h2 className="text-2xl font-bold tracking-tight">
                            Schedule a Session
                        </h2>
                        <p className="text-gray-200 mb-2 text-sm">
                            Fill out the details below, and we'll send a confirmation link to your email.
                        </p>
                    </div>
                    {/* CLOSE BUTTON */}
                    <button
                        onClick={handleClose}
                        style={{ color: COLORS.accent }}
                        className="p-1 rounded-full bg-white/20 transition hover:cursor-pointer group"
                        aria-label="Close booking form"
                    >
                        <X size={20} color="white" className="duration-400 group-hover:scale-120" />
                    </button>
                </div>

                <div className="p-6">


                    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                        {/* Personal Info */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="relative">
                                <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                                    <UserRound size={18} />
                                </div>
                                <input
                                    type="text"
                                    name="name"
                                    required
                                    placeholder="Enter your name"
                                    onChange={handleChange}
                                    className={`w-full border-2 border-gray-200 pl-10 pr-3 py-3 rounded-xl text-sm transition focus:border-[${COLORS.accent}] focus:ring-1 focus:ring-[${COLORS.accent}] outline-none`}
                                />
                            </div>

                            <div className="relative">
                                <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                                    <Mail size={18} />
                                </div>
                                <input
                                    type="email"
                                    name="email"
                                    required
                                    placeholder="Enter your email"
                                    onChange={handleChange}
                                    className={`w-full border-2 border-gray-200 pl-10 pr-3 py-3 rounded-xl text-sm transition focus:border-[${COLORS.accent}] focus:ring-1 focus:ring-[${COLORS.accent}] outline-none`}
                                />
                            </div>
                        </div>

                        {/* Meeting Details */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="relative">
                                <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                                    <Book size={18} />
                                </div>
                                <input
                                    type="text"
                                    name="meetingType"
                                    required
                                    placeholder="Enter subject of the meeting"
                                    onChange={handleChange}
                                    className={`w-full border-2 border-gray-200 pl-10 pr-3 py-3 rounded-xl text-sm transition focus:border-[${COLORS.accent}] focus:ring-1 focus:ring-[${COLORS.accent}] outline-none`}
                                />
                            </div>

                            <FormField icon={Clock} name="duration" isSelect>
                                <option value="15 minutes">15 minutes</option>
                                <option value="30 minutes">30 minutes</option>
                                <option value="45 minutes">45 minutes</option>
                                <option value="60 minutes">60 minutes</option>
                            </FormField>
                        </div>

                        {/* Date/Time Selector */}
                        <label className="text-sm font-semibold mt-2" htmlFor="datetime-input">
                            Preferred Date & Time
                        </label>
                        <input
                            id="datetime-input"
                            type="datetime-local"
                            name="dateTime"
                            value={formData.dateTime}
                            onChange={handleChange}
                            className={`w-full border-2 border-gray-200 px-3 py-3 rounded-xl text-sm transition focus:border-[${COLORS.accent}] focus:ring-1 focus:ring-[${COLORS.accent}] outline-none`}
                            required
                        />

                        {/* Notes/Context */}
                        <label className="text-sm font-semibold mt-2" htmlFor="notes-input">
                            Notes / What would you like to discuss?
                        </label>
                        <textarea
                            id="notes-input"
                            name="notes"
                            placeholder="Briefly describe your goals for the meeting..."
                            value={formData.notes}
                            onChange={handleChange}
                            rows={3}
                            className={`w-full border-2 border-gray-200 p-3 rounded-xl text-sm transition focus:border-[${COLORS.accent}] focus:ring-1 focus:ring-[${COLORS.accent}] outline-none resize-none`}
                        />

                        {/* Submit Button */}
                        <button
                            type="submit"
                            style={{ backgroundColor: COLORS.primary }}
                            className={`mt-4 text-white py-3 rounded-xl font-bold text-lg shadow-md transition transform hover:bg-[#709de1] hover:scale-[1.01]`}
                        >
                            Confirm Booking
                        </button>
                    </form>
                </div>
            </div>

            {/* ANIMATIONS */}
            <style jsx global>{`
        /* IMPORTANT: Setting dynamic styles via 'style' property for Tailwind to recognize them */
        
        .animate-fadeIn {
          animation: fadeIn ${ANIMATION_DURATION}ms ease-out forwards;
        }
        .animate-fadeOut {
          animation: fadeOut ${ANIMATION_DURATION}ms ease-in forwards;
        }
        .animate-slideUp {
          animation: slideUp ${ANIMATION_DURATION}ms cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
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
        /* Adjusted slide up/down for better centering animation */
        @keyframes slideUp {
          from { transform: translate(0%, 50%); opacity: 0; }
          to { transform: translate(0%, 0%); opacity: 1; }
        }
        @keyframes slideDown {
          from { transform: translate(0%, 0%); opacity: 1; }
          to { transform: translate(0%, 50%); opacity: 0; }
        }
      `}</style>
        </>
    );
};

export default MeetingBookingModal;
// "use client"
// import React, { useEffect, useState } from "react";
// import AOS from "aos";
// import "aos/dist/aos.css";
// import { Instagram, Linkedin } from "lucide-react";
// import { BsWhatsapp } from "react-icons/bs";
// import MeetingBookingModal from '../../features/MeetingBookingModal';

// export default function ContactUs() {
//     useEffect(() => {
//         AOS.init({ once: true });
//     }, []);

//     const [form, setForm] = useState({ name: "", email: "", phone: "", service: "", message: "" });
//     const [submitted, setSubmitted] = useState(false);

//     const services = [
//         "Personal Training",
//         "Pilates",
//         "Nutrition & Dietetics",
//         "Physiotherapy / Rehab",
//         "Psychotherapy / Coaching",
//         "Sports / Recovery Massage",
//         "Sway Studio 1:1 Session",
//         "Corporate Wellness Services",
//         "Residential Building Services",
//         "Free Consultation",
//         "Other / Not Sure Yet"
//     ];
//     // const services = ["Residential Management", "Coorporate", "Move", "Fuel", "Recovery", "Mind", "Other"];
//     const contactInfo = {
//         instagram: "https://www.instagram.com/swaystudiolondon/",
//         linkedIn: "https://www.linkedin.com/company/sway-studio-wellness/posts/?feedView=all",
//         whatsapp: "https://wa.me/442031287541?text=Hi%20Sway%20Studio!%20I%20found%20you%20online%20and%20would%20love%20to%20know%20more%20%F0%9F%98%8A"
//     }

//     const handleChange = (e: any) => {
//         setForm({ ...form, [e.target.name]: e.target.value });
//     };

//     const handleSubmit = (e: any) => {
//         e.preventDefault();
//         setSubmitted(true);
//         setForm({ name: "", email: "", phone: "", service: "", message: "" });
//     };

//     return (
//         <>
//             <div className="min-h-screen max-w-[1440px] mx-auto bg-white text-[#1a2a33] px-6 2xl:p-0  pt-20 pb-16 flex justify-center items-center" >


//                 <div className="grid md:grid-cols-2 gap-16">
//                     {/* Left Contact Info */}
//                     <div className="" data-aos="fade-right">
//                         {/* Header Section */}
//                         <div className="max-w-3xl mb-14">
//                             <h1 className="text-4xl md:text-5xl font-semibold mb-4 tracking-tight">Get in Touch</h1>
//                             <p className="text-lg text-gray-600 leading-relaxed">
//                                 We are here to help you transform your wellness journey. Whether you have a question
//                                 about our services or want personal guidance — feel free to reach out.
//                             </p>
//                         </div>
//                         <div className="space-y-6 text-[15px]">
//                             <div>
//                                 <p>Unit 2, The Old Brewery</p>
//                                 <p>Borough Green</p>
//                                 <p>TN15 8PB</p>
//                             </div>

//                             <div className="space-y-2">
//                                 <a href="mailto:info@totalfit.co.uk" className="block underline">info@totalfit.co.uk</a>
//                                 <a href={contactInfo.whatsapp} target="_blank" className="block underline">+44 20 3128 7541</a>
//                             </div>

//                             <div className="flex space-x-6 text-xl mt-6">
//                                 <a href={contactInfo.instagram} target="_blank" className="hover:text-[#FF6464]"><Instagram /></a>
//                                 <a href={contactInfo.linkedIn} target="_blank" className="hover:text-[#FF6464]"><Linkedin /></a>
//                                 <a href={contactInfo.whatsapp} target="_blank" rel="noopener noreferrer"
//                                     aria-label="Contact us on WhatsApp" className="hover:text-[#FF6464]"><BsWhatsapp size={20} /></a>
//                             </div>
//                         </div>
//                     </div>

//                     {/* Right Form */}
//                     <div data-aos="fade-left">
//                         {submitted && (
//                             <div className="mb-6 p-4 bg-green-100 border border-green-300 text-green-700 rounded-lg">
//                                 Thank you! Your message has been sent successfully.
//                             </div>
//                         )}

//                         <form onSubmit={handleSubmit} className="space-y-5">
//                             <input
//                                 type="text"
//                                 name="name"
//                                 value={form.name}
//                                 onChange={handleChange}
//                                 placeholder="Name Surname"
//                                 required
//                                 className="w-full border-2 border-gray-300 rounded-md px-4 py-3 text-sm bg-white  focus:ring-2 focus:ring-gray-300"
//                             />

//                             <input
//                                 type="email"
//                                 name="email"
//                                 value={form.email}
//                                 onChange={handleChange}
//                                 placeholder="Email Address"
//                                 required
//                                 className="w-full border-2 border-gray-300 rounded-md px-4 py-3 text-sm bg-white  focus:ring-2 focus:ring-gray-300"
//                             />

//                             <input
//                                 type="text"
//                                 name="phone"
//                                 value={form.phone}
//                                 onChange={handleChange}
//                                 placeholder="Phone Number"
//                                 required
//                                 className="w-full border-2 border-gray-300 rounded-md px-4 py-3 text-sm bg-white  focus:ring-2 focus:ring-gray-300"
//                             />

//                             <select
//                                 name="service"
//                                 value={form.service}
//                                 onChange={handleChange}
//                                 required
//                                 className="w-full border-2 border-gray-300 rounded-md px-4 py-3 text-sm bg-white  text-gray-600 focus:ring-2 focus:ring-gray-300"
//                             >
//                                 <option value="">Please select a service</option>
//                                 {services.map((s) => (
//                                     <option key={s} value={s}>{s}</option>
//                                 ))}
//                             </select>

//                             <textarea
//                                 name="message"
//                                 value={form.message}
//                                 onChange={handleChange}
//                                 placeholder="Your Message"
//                                 rows={5}
//                                 required
//                                 className="w-full border-2 border-gray-300 rounded-md px-4 py-3 text-sm bg-white  focus:ring-2 focus:ring-gray-300"
//                             />

//                             <button
//                                 type="submit"
//                                 className="w-full bg-[#80B1FB] text-white py-3 rounded-md tracking-wide hover:bg-[#709de1] transition-all flex justify-center items-center gap-2"
//                             >
//                                 SEND MESSAGE →
//                             </button>
//                         </form>
//                     </div>
//                 </div>
//             </div>
//             {/* <MeetingBookingModal/> */}
//         </>
//     );
// }

// function Facebook() {
//     return (
//         <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
//             <path d="M22 12c0-5.522-4.477-10-10-10S2 6.478 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.988H7.898v-2.89h2.54V9.845c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562v1.875h2.773l-.443 2.89h-2.33V21.88C18.343 21.13 22 16.991 22 12z"></path>
//         </svg>
//     );
// }


"use client";
import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Instagram, Linkedin } from "lucide-react";
import { BsWhatsapp } from "react-icons/bs";
// import MeetingBookingModal from '../../features/MeetingBookingModal';

export default function ContactUs() {
    useEffect(() => {
        AOS.init({ once: true });
    }, []);

    const [form, setForm] = useState({ name: "", email: "", phone: "", service: "", message: "" });
    const [submitted, setSubmitted] = useState(false);

    const services = [
        "Personal Training",
        "Pilates",
        "Nutrition & Dietetics",
        "Physiotherapy / Rehab",
        "Psychotherapy / Coaching",
        "Sports / Recovery Massage",
        "Sway Studio 1:1 Session",
        "Corporate Wellness Services",
        "Residential Building Services",
        "Free Consultation",
        "Other / Not Sure Yet"
    ];

    const contactInfo = {
        instagram: "https://www.instagram.com/swaystudiolondon/",
        linkedIn: "https://www.linkedin.com/company/sway-studio-wellness/posts/?feedView=all",
        whatsapp: "https://wa.me/442031287541?text=Hi%20Sway%20Studio!%20I%20found%20you%20online%20and%20would%20love%20to%20know%20more%20%F0%9F%98%8A"
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setSubmitted(true);
        setForm({ name: "", email: "", phone: "", service: "", message: "" });
    };

    return (
        <>
            <div className="min-h-screen w-full max-w-[1440px] mx-auto bg-white text-[#1a2a33] px-4 sm:px-6 2xl:px-0 pt-20 pb-16 flex justify-center items-start">
                <div className="w-full flex flex-col md:flex-row md:justify-between lg:justify-evenly md:items-start gap-12 md:gap-16 mt-10">

                    {/* Left Contact Info */}
                    <div className="flex flex-col justify-start items-center md:items-start text-center md:text-left w-full md:w-1/2" data-aos="fade-right" data-aos-offset="0">
                        <div className="max-w-full md:max-w-md mb-8 md:mb-12">
                            <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-4 tracking-tight">Get in Touch</h1>
                            <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                                We are here to help you transform your wellness journey. Whether you have a question
                                about our services or want personal guidance — feel free to reach out.
                            </p>
                        </div>

                        <div className="space-y-4 sm:space-y-6 text-sm sm:text-[15px]">
                            <div className="space-y-1">
                                <p>Unit 2, The Old Brewery</p>
                                <p>Borough Green</p>
                                <p>TN15 8PB</p>
                            </div>

                            <div className="space-y-1">
                                <a href="mailto:info@totalfit.co.uk" className="block underline">info@totalfit.co.uk</a>
                                <a href={contactInfo.whatsapp} target="_blank" className="block underline">+44 20 3128 7541</a>
                            </div>

                            <div className="flex justify-center md:justify-start space-x-4 sm:space-x-6 text-xl mt-4 sm:mt-6">
                                <a href={contactInfo.instagram} target="_blank" className="hover:text-[#FF6464]"><Instagram /></a>
                                <a href={contactInfo.linkedIn} target="_blank" className="hover:text-[#FF6464]"><Linkedin /></a>
                                <a href={contactInfo.whatsapp} target="_blank" rel="noopener noreferrer" aria-label="Contact us on WhatsApp" className="hover:text-[#FF6464]"><BsWhatsapp size={20} /></a>
                            </div>
                        </div>
                    </div>

                    {/* Right Form */}
                    <div className="flex flex-col w-full max-w-md mx-auto md:mx-0" data-aos="fade-left" data-aos-offset="0">
                        {submitted && (
                            <div className="mb-4 p-4 bg-green-100 border border-green-300 text-green-700 rounded-lg text-center">
                                Thank you! Your message has been sent successfully.
                            </div>
                        )}

                        <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5 w-full">
                            <input
                                type="text"
                                name="name"
                                value={form.name}
                                onChange={handleChange}
                                placeholder="Name Surname"
                                required
                                className="w-full border-2 border-gray-300 rounded-md px-4 py-3 text-sm bg-white focus:ring-2 focus:ring-gray-300"
                            />

                            <input
                                type="email"
                                name="email"
                                value={form.email}
                                onChange={handleChange}
                                placeholder="Email Address"
                                required
                                className="w-full border-2 border-gray-300 rounded-md px-4 py-3 text-sm bg-white focus:ring-2 focus:ring-gray-300"
                            />

                            <input
                                type="text"
                                name="phone"
                                value={form.phone}
                                onChange={handleChange}
                                placeholder="Phone Number"
                                required
                                className="w-full border-2 border-gray-300 rounded-md px-4 py-3 text-sm bg-white focus:ring-2 focus:ring-gray-300"
                            />

                            <select
                                name="service"
                                value={form.service}
                                onChange={handleChange}
                                required
                                className="w-full border-2 border-gray-300 rounded-md px-4 py-3 text-sm bg-white text-gray-600 focus:ring-2 focus:ring-gray-300"
                            >
                                <option value="">Please select a service</option>
                                {services.map((s) => (
                                    <option key={s} value={s}>{s}</option>
                                ))}
                            </select>

                            <textarea
                                name="message"
                                value={form.message}
                                onChange={handleChange}
                                placeholder="Your Message"
                                rows={5}
                                required
                                className="w-full border-2 border-gray-300 rounded-md px-4 py-3 text-sm bg-white focus:ring-2 focus:ring-gray-300 resize-none"
                            />

                            <button
                                type="submit"
                                className="w-full bg-[#80B1FB] text-white py-3 rounded-md tracking-wide hover:bg-[#709de1] transition-all flex justify-center items-center gap-2"
                            >
                                SEND MESSAGE →
                            </button>
                        </form>
                    </div>
                </div>
            </div>

            {/* Disable AOS horizontal offset on mobile */}
            <style jsx global>{`
        @media (max-width: 767px) {
          [data-aos="fade-left"],
          [data-aos="fade-right"] {
            transform: translateX(0px) !important;
            opacity: 1 !important;
          }
        }
      `}</style>

            {/* <MeetingBookingModal/> */}
        </>
    );
}


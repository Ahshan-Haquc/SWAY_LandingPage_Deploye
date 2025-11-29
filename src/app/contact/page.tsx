"use client"
import React, { useState } from "react";
import { Instagram, Linkedin } from "lucide-react";
import { BsWhatsapp } from "react-icons/bs";

export default function ContactUs() {
    const [form, setForm] = useState({ name: "", email: "", phone: "", service: "", message: "" });
    const [submitted, setSubmitted] = useState(false);

    const services = ["Residential Management", "Coorporate", "Move", "Fuel", "Recovery", "Mind", "Other"];

    const handleChange = (e: any) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: any) => {
        e.preventDefault();
        setSubmitted(true);
        setForm({ name: "", email: "", phone: "", service: "", message: "" });
    };

    return (
        <div className="min-h-screen max-w-[1440px] mx-auto bg-white text-[#1a2a33] px-6 2xl:p-0  pt-20 pb-16 flex justify-center items-center">


            <div className="grid md:grid-cols-2 gap-16">
                {/* Left Contact Info */}
                <div className="">
                    {/* Header Section */}
                    <div className="max-w-3xl mb-14">
                        <h1 className="text-4xl md:text-5xl font-semibold mb-4 tracking-tight">Get in Touch</h1>
                        <p className="text-lg text-gray-600 leading-relaxed">
                            We are here to help you transform your wellness journey. Whether you have a question
                            about our services or want personal guidance — feel free to reach out.
                        </p>
                    </div>
                    <div className="space-y-6 text-[15px]">
                        <div>
                            <p>Unit 2, The Old Brewery</p>
                            <p>Borough Green</p>
                            <p>TN15 8PB</p>
                        </div>

                        <div className="space-y-2">
                            <a href="mailto:info@totalfit.co.uk" className="block underline">info@totalfit.co.uk</a>
                            <a href="tel:01732882302" className="block underline">01732 882302</a>
                        </div>

                        <div className="flex space-x-6 text-xl mt-6">
                            <a href="#" className="hover:text-[#FF6464]"><Facebook /></a>
                            <a href="#" className="hover:text-[#FF6464]"><Instagram /></a>
                            <a href="#" className="hover:text-[#FF6464]"><Linkedin /></a>
                            <a href="#" className="hover:text-[#FF6464]"><BsWhatsapp size={20} /></a>
                        </div>
                    </div>
                </div>

                {/* Right Form */}
                <div>
                    {submitted && (
                        <div className="mb-6 p-4 bg-green-100 border border-green-300 text-green-700 rounded-lg">
                            Thank you! Your message has been sent successfully.
                        </div>
                    )}

                    <form onSubmit={handleSubmit} className="space-y-5">
                        <input
                            type="text"
                            name="name"
                            value={form.name}
                            onChange={handleChange}
                            placeholder="Name Surname"
                            required
                            className="w-full border-2 border-gray-300 rounded-md px-4 py-3 text-sm bg-white  focus:ring-2 focus:ring-gray-300"
                        />

                        <input
                            type="email"
                            name="email"
                            value={form.email}
                            onChange={handleChange}
                            placeholder="Email Address"
                            required
                            className="w-full border-2 border-gray-300 rounded-md px-4 py-3 text-sm bg-white  focus:ring-2 focus:ring-gray-300"
                        />

                        <input
                            type="text"
                            name="phone"
                            value={form.phone}
                            onChange={handleChange}
                            placeholder="Phone Number"
                            required
                            className="w-full border-2 border-gray-300 rounded-md px-4 py-3 text-sm bg-white  focus:ring-2 focus:ring-gray-300"
                        />

                        <select
                            name="service"
                            value={form.service}
                            onChange={handleChange}
                            required
                            className="w-full border-2 border-gray-300 rounded-md px-4 py-3 text-sm bg-white  text-gray-600 focus:ring-2 focus:ring-gray-300"
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
                            className="w-full border-2 border-gray-300 rounded-md px-4 py-3 text-sm bg-white  focus:ring-2 focus:ring-gray-300"
                        />

                        <button
                            type="submit"
                            className="w-full bg-[#c7b68a] text-white py-3 rounded-md tracking-wide hover:bg-[#b39f74] transition-all flex justify-center items-center gap-2"
                        >
                            SEND MESSAGE →
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

function Facebook() {
    return (
        <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
            <path d="M22 12c0-5.522-4.477-10-10-10S2 6.478 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.988H7.898v-2.89h2.54V9.845c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562v1.875h2.773l-.443 2.89h-2.33V21.88C18.343 21.13 22 16.991 22 12z"></path>
        </svg>
    );
}
"use client";

import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function CheckIcon({ className = "w-4 h-4 inline-block mr-2" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function page() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [subscribed, setSubscribed] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Keep subscription persistent so user isn't asked repeatedly
  useEffect(() => {
    try {
      const saved = localStorage.getItem("sway_subscribed");
      if (saved === "true") setSubscribed(true);
    } catch (e) {
      /* ignore localStorage errors */
    }
  }, []);

  const validateEmail = (e: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e.trim());
  };

  const canSubmit = () => validateEmail(email) && !submitting && !subscribed;

  const handleSubmit = async (ev?: React.FormEvent) => {
    ev?.preventDefault();
    setError(null);

    if (!validateEmail(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    try {
      setSubmitting(true);
      await new Promise((r) => setTimeout(r, 900));

      // store that user subscribed (so popup / call-to-action won't keep showing)
      try {
        localStorage.setItem("sway_subscribed", "true");
      } catch {}

      setSubscribed(true);
    } catch (err) {
      setError("Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  useEffect(() => {
      AOS.init({ once: true });
    }, []);

  return (
    <main className="min-h-screen  py-16 px-6 md:px-12 flex justify-center items-center" >
      <div className="max-w-5xl mx-auto">

        {/* Hero */}
        <section className="text-center my-10" data-aos="zoom-in">
          <h1 className="text-3xl md:text-4xl font-extrabold text-black text-start md:text-center mb-3">
            Join the SWAY Mailing List
          </h1>
          <p className="text-slate-600 max-w-2xl text-start md:text-center mx-auto">
            Stay ahead of your fitness journey with weekly training guides, nutrition tips, exclusive offers and early access to new programs — delivered straight to your inbox.
          </p>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          {/* Left: Benefits & social proof */}
          <div className="flex flex-col justify-center gap-6 " data-aos="fade-right" >
            <div className="bg-white rounded-2xl p-6 transform transition hover:scale-[1.01]">
              <h2 className="text-xl text-black font-semibold mb-3">Why subscribe?</h2>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start">
                  <CheckIcon className="w-5 h-5 text-emerald-500 shrink-0 mr-3" />
                  <div>
                    <div className="font-medium">Weekly training plans</div>
                    <div className="text-sm text-slate-500">Short, effective routines you can do anywhere.</div>
                  </div>
                </li>

                <li className="flex items-start">
                  <CheckIcon className="w-5 h-5 text-emerald-500 shrink-0 mr-3" />
                  <div>
                    <div className="font-medium">Nutrition & recovery tips</div>
                    <div className="text-sm text-slate-500">Actionable advice that helps you recover and perform.</div>
                  </div>
                </li>

                <li className="flex items-start">
                  <CheckIcon className="w-5 h-5 text-emerald-500 shrink-0 mr-3" />
                  <div>
                    <div className="font-medium">Exclusive discounts</div>
                    <div className="text-sm text-slate-500">Early access to offers, courses & app promos.</div>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-linear-to-r  text-black  p-6 ">
              <div className="text-sm md:text-base">Trusted by</div>
              <div className="mt-3 text-2xl font-bold tracking-tight">12,500+ movers</div>
              <div className="mt-2 text-sm opacity-90">Join a global community pushing their limits, one session at a time.</div>
            </div>
          </div>

          {/* Right: Subscription card */}
          <div  data-aos="fade-left" >
            <div className="bg-white rounded-3xl p-6 md:p-8 relative overflow-hidden border border-[#80b1fb]">
              {/* Decorative gradient circle */}
              <div className="absolute -right-20 -top-20 w-56 h-56  bg-linear-to-tr from-[#80b1fb] to-[#B3D2FF] opacity-20 rounded-full pointer-events-none" />

              <h3 className="text-lg font-semibold mb-1 text-black">Get started — it&apos;s free</h3>
              <p className="text-sm text-slate-500 mb-6">Sign up and we'll send your first guide immediately.</p>

              {subscribed ? (
                <div className="rounded-xl bg-emerald-50 border border-emerald-100 p-5 text-emerald-800">
                  <div className="font-semibold text-lg">You're subscribed </div>
                  <div className="text-sm mt-1 text-emerald-700">Thanks! Check your inbox for the welcome email and first guide.</div>
                  <div className="mt-4">
                    <a
                      className="inline-block px-4 py-2 bg-slate-800 text-white rounded-lg text-sm hover:opacity-95"
                      href="/library"
                    >
                      Explore the library
                    </a>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 text-black">
                  <div>
                    <label htmlFor="name" className="block text-xs  mb-1">
                      Full name (optional)
                    </label>
                    <input
                      id="name"
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Jane Doe"
                      className="w-full rounded-xl  border border-slate-200 px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#80B1FB] text-gray-900"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-xs text-slate-600 mb-1">
                      Email address
                    </label>
                    <input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="you@example.com"
                      required
                      className={`w-full rounded-xl text-black border px-4 py-2 text-sm focus:outline-none focus:ring-2 ${
                        validateEmail(email) ? "border-slate-200 focus:ring-[#4e4d59]" : "border-blue-200 focus:ring-[#80B1FB]"
                      }`}
                    />
                    {!validateEmail(email) && email.length > 0 && (
                      <p className="text-xs text-red-500 mt-1">Please enter a valid email.</p>
                    )}
                  </div>

                  {error && <div className="text-xs text-red-600">{error}</div>}

                  <div className="flex gap-3 items-center">
                    <button
                      type="submit"
                      disabled={!canSubmit()}
                      className={`flex-1 py-3 rounded-xl font-semibold text-white transition ${
                        canSubmit() ? "bg-[#4e4d59] hover:scale-[1.02]" : "bg-slate-300 cursor-not-allowed"
                      }`}
                    >
                      {submitting ? "Subscribing..." : "Subscribe"}
                    </button>

                    <button
                      type="button"
                      onClick={() => {
                        window.location.href = "/download";
                      }}
                      className="px-4 py-3 rounded-xl border border-slate-200 text-sm"
                    >
                      Download App
                    </button>
                  </div>

                  <p className="text-xs text-slate-400 mt-2">
                    We respect your privacy. Unsubscribe anytime.
                  </p>
                </form>
              )}

              {/* small accent/footer */}
              <div className="mt-6 border-t pt-4 text-xs text-slate-400">
                By subscribing you agree to receive emails from SWAY. View our <a className="underline" href="/privacy">Privacy Policy</a>.
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Page animations */}
      <style jsx>{`
        main { /* nothing */ }
      `}</style>
    </main>
  );
}

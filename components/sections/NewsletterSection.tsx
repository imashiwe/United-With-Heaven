"use client";
import { useState } from "react";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { FaInstagram, FaYoutube, FaSpotify, FaFacebook } from "react-icons/fa";

export default function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [joined, setJoined] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (email) setJoined(true);
  }

  return (
    <section id="newsletter" className="py-24 px-6 border-t-2 border-[#D4A017]" style={{ background: "#FFFFFF" }}>
      <div className="max-w-2xl mx-auto text-center">
        <ScrollReveal>
          <span className="text-[#D4A017] text-2xl block mb-4">✦</span>
          <h2 className="font-display text-4xl md:text-5xl font-light text-[#1C1209] mb-4">
            Receive the Word of the Week
          </h2>
          <p className="font-body italic text-[#7A6E5A] text-lg mb-8 leading-relaxed">
            Imashi sends a short prophetic word, scripture, and update every week to those who
            are believing for more. It arrives in your inbox like a letter from a friend
            who has been in the presence of God.
          </p>

          {joined ? (
            <div className="bg-[#FDF8EC] border border-[#F5E6A3] rounded-sm py-8 px-6 mb-8">
              <p className="font-display italic text-2xl text-[#8B6914]">You&apos;re in the family. ✦</p>
              <p className="font-body text-[#7A6E5A] text-sm mt-2">Watch your inbox. Heaven is speaking.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex gap-0 max-w-md mx-auto mb-8 shadow-sm">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                className="flex-1 font-body text-sm text-[#2D2416] bg-white border border-[#F5E6A3] border-r-0 px-5 py-4 focus:outline-none focus:border-[#D4A017] placeholder:text-[#7A6E5A] rounded-l-sm"
              />
              <button
                type="submit"
                className="font-ui text-sm tracking-widest uppercase bg-[#D4A017] text-[#1C1209] px-7 py-4 hover:bg-[#B8860B] transition-colors rounded-r-sm whitespace-nowrap"
              >
                Join Us
              </button>
            </form>
          )}

          {/* Social links */}
          <div className="flex items-center justify-center gap-6">
            {[
              { icon: <FaInstagram size={20} />, label: "Instagram", href: "#" },
              { icon: <FaYoutube size={20} />, label: "YouTube", href: "#" },
              { icon: <FaSpotify size={20} />, label: "Spotify", href: "#" },
              { icon: <FaFacebook size={20} />, label: "Facebook", href: "#" },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                aria-label={s.label}
                className="text-[#7A6E5A] hover:text-[#B8860B] transition-colors"
              >
                {s.icon}
              </a>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

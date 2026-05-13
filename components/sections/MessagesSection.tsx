"use client";
import { useState } from "react";
import ScrollReveal from "@/components/ui/ScrollReveal";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";

import { messages } from "@/content";

const categories = ["All", "Prophetic", "Encouragement", "Equipping", "Breakthrough"];

export default function MessagesSection() {
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? messages : messages.filter((m) => m.category === active);

  return (
    <section id="messages" className="py-24 px-6" style={{ background: "#FAF7F0" }}>
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <SectionHeading subtitle="Prophetic words for specific seasons, straight from the secret place">
            A Word for This Season
          </SectionHeading>
        </ScrollReveal>

        {/* Category filter */}
        <ScrollReveal delay={0.05}>
          <div className="flex flex-wrap gap-2 mb-10">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setActive(c)}
                className={`font-ui text-xs tracking-widest uppercase px-4 py-2 rounded-sm border transition-all duration-200 ${
                  active === c
                    ? "bg-[#D4A017] text-[#1C1209] border-[#D4A017]"
                    : "border-[#F5E6A3] text-[#7A6E5A] hover:border-[#D4A017] hover:text-[#B8860B]"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </ScrollReveal>

        {/* H1: Empty state when category has no results */}
        {filtered.length === 0 ? (
          <ScrollReveal>
            <div className="text-center py-16 bg-white border border-[#F5E6A3] rounded-sm mb-12">
              <p className="font-display italic text-2xl text-[#8B6914] mb-2">
                No messages in this category yet.
              </p>
              <p className="font-body text-sm text-[#7A6E5A]">
                New words are added regularly — check back soon.
              </p>
            </div>
          </ScrollReveal>
        ) : (
          <>
            {/* H1: Show result count when filtered — no silent truncation */}
            {active !== "All" && (
              <p className="font-body text-xs text-[#7A6E5A] mb-4">
                Showing {Math.min(filtered.length, 3)} of {filtered.length} {active.toLowerCase()} message{filtered.length !== 1 ? "s" : ""}
                {filtered.length > 3 && (
                  <> · <a href="/messages" className="text-[#B8860B] hover:underline">See all on Messages page</a></>
                )}
              </p>
            )}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {filtered.slice(0, 3).map((msg, i) => (
                <ScrollReveal key={msg.title} delay={i * 0.08}>
                  <div className="group bg-white border-l-4 border-transparent hover:border-[#D4A017] rounded-sm p-7 h-full transition-all duration-300 hover:shadow-[0_4px_16px_rgba(184,134,11,0.12)] hover:translate-x-1">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="font-ui text-[10px] tracking-[0.2em] uppercase text-[#B8860B] bg-[#FDF8EC] px-2 py-0.5 rounded-sm">
                        {msg.category}
                      </span>
                      <span className="font-body text-xs text-[#7A6E5A]">{msg.date}</span>
                    </div>
                    <h3 className="font-display text-2xl font-light text-[#1C1209] mb-3 leading-snug">
                      {msg.title}
                    </h3>
                    <p className="font-body text-[#7A6E5A] text-sm leading-relaxed mb-4 line-clamp-3">
                      {msg.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="font-body italic text-[#8B6914] text-xs">— {msg.scripture}</span>
                      {/* H3: Links go to /messages page (full article pages not built yet) */}
                      <a
                        href="/messages"
                        className="font-ui text-xs tracking-widest uppercase text-[#B8860B] hover:underline focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#B8860B] rounded-sm"
                      >
                        Read More →
                      </a>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </>
        )}

        <ScrollReveal className="text-center">
          <Button href="/messages" variant="outline">All Messages</Button>
        </ScrollReveal>
      </div>
    </section>
  );
}

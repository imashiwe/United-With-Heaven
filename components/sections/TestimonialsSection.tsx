"use client";
import { useState, useEffect } from "react";
import { motion, useAnimationControls } from "framer-motion";
import ScrollReveal from "@/components/ui/ScrollReveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { testimonials } from "@/content";

const CARD_W = 340;
const GAP = 24;
const TOTAL_W = testimonials.length * (CARD_W + GAP);

export default function TestimonialsSection() {
  const controls = useAnimationControls();
  const prefersReduced =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // Start the loop animation on mount
  useEffect(() => {
    if (prefersReduced) return;
    controls.start({ x: [-0, -TOTAL_W], transition: { duration: 40, repeat: Infinity, ease: "linear" } });
  }, [controls, prefersReduced]);

  const pause = () => controls.stop();
  const resume = () => {
    if (prefersReduced) return;
    controls.start({ x: [-0, -TOTAL_W], transition: { duration: 40, repeat: Infinity, ease: "linear" } });
  };

  const doubled = [...testimonials, ...testimonials];

  return (
    <section className="py-24 overflow-hidden" style={{ background: "#FDF8EC" }}>
      <div className="max-w-6xl mx-auto px-6 mb-12">
        <ScrollReveal>
          <SectionHeading center subtitle="Encounters, breakthroughs, and lives touched by Heaven">
            What Heaven Is Doing
          </SectionHeading>
        </ScrollReveal>
      </div>

      {/* Carousel track — pause on hover (desktop) and focus (keyboard) */}
      <div
        className="relative w-full overflow-hidden"
        onMouseEnter={pause}
        onMouseLeave={resume}
        onFocus={pause}
        onBlur={resume}
        role="region"
        aria-label="Testimonials carousel"
      >
        <motion.div
          className="flex gap-6 w-max"
          animate={controls}
        >
          {doubled.map((t, i) => (
            <div
              key={i}
              className="w-[340px] flex-shrink-0 bg-white border border-[#F5E6A3] rounded-sm p-8 shadow-sm"
            >
              <div className="font-display text-6xl text-[#F5E6A3] leading-none mb-3 select-none" aria-hidden="true">&ldquo;</div>
              <p className="font-body text-[#2D2416] text-sm leading-relaxed mb-5">{t.quote}</p>
              <div>
                <p className="font-ui text-xs tracking-widest uppercase text-[#B8860B]">{t.name}</p>
                <p className="font-body text-xs text-[#7A6E5A]">{t.city}</p>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[#FDF8EC] to-transparent pointer-events-none" aria-hidden="true" />
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[#FDF8EC] to-transparent pointer-events-none" aria-hidden="true" />
      </div>
    </section>
  );
}

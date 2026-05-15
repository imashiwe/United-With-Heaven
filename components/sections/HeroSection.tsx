"use client";
import { useScroll, useTransform, motion, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { HiChevronDown } from "react-icons/hi";
import Button from "@/components/ui/Button";
import { heroScriptures as scriptures } from "@/content";

function ScriptureTicker() {
  const [idx, setIdx] = useState(0);
  const prefersReduced =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  useEffect(() => {
    if (prefersReduced) return;
    const t = setInterval(() => setIdx((i) => (i + 1) % scriptures.length), 5000);
    return () => clearInterval(t);
  }, [prefersReduced]);

  return (
    <div aria-live="polite" aria-atomic="true" className="flex flex-col items-center">
      <div className="h-8 flex items-center justify-center overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.p
            key={idx}
            initial={prefersReduced ? false : { opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={prefersReduced ? {} : { opacity: 0, y: -8 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="font-body italic text-white/80 text-sm tracking-wide text-center"
            style={{ textShadow: "0 1px 6px rgba(0,0,0,0.7)" }}
          >
            &ldquo;{scriptures[idx].text}&rdquo;
            <span className="font-ui not-italic text-[#D4A017] text-xs tracking-widest ml-2 uppercase">
              — {scriptures[idx].ref}
            </span>
          </motion.p>
        </AnimatePresence>
      </div>
      <div className="flex justify-center gap-2 mt-3" role="tablist" aria-label="Scripture navigation">
        {scriptures.map((_, i) => (
          <button
            key={i}
            role="tab"
            aria-selected={i === idx}
            aria-label={`Scripture ${i + 1} of ${scriptures.length}`}
            onClick={() => setIdx(i)}
            className={`h-1 rounded-full transition-all duration-300 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#FFD700] ${
              i === idx ? "bg-[#D4A017] w-5" : "w-1.5 bg-white/30 hover:bg-white/60"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export default function HeroSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);

  return (
    <section ref={ref} className="relative h-screen min-h-[640px] overflow-hidden">
      {/* Gradient fallback */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 60% 40%, #D4A017 0%, #B8860B 25%, #7A4F0A 55%, #3D2405 80%, #1C1000 100%)",
        }}
      />

      {/* Parallax image */}
      <motion.div className="absolute inset-0 scale-110" style={{ y }}>
        <Image
          src="/images/open doors.jpg"
          alt="Grand golden doors opening to heavenly light"
          fill
          className="object-cover object-center"
          priority
          quality={90}
        />
      </motion.div>

      {/* Overlay: clear centre so door light shows, dark at top and bottom */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-transparent to-black/70" />

      {/* ── ZONE 1: Title — centred in the door opening ── */}
      <div className="absolute inset-0 flex items-center justify-center" style={{ paddingTop: "5rem" }}>
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          className="flex flex-col items-center leading-none select-none"
        >
          <span
            className="font-display font-bold text-[#1C1209] uppercase tracking-[0.18em] text-[clamp(3rem,8vw,6.5rem)]"
            style={{ textShadow: "0 1px 10px rgba(255,255,255,0.6)" }}
          >
            UNITED
          </span>
          <span
            className="font-display font-bold italic text-[#D4A017] text-[clamp(1.6rem,3.5vw,3rem)] -mt-4 -mb-4 rotate-[-6deg] relative z-10"
            style={{ textShadow: "0 2px 12px rgba(0,0,0,0.35)" }}
          >
            with
          </span>
          <span
            className="font-display font-bold text-[#1C1209] uppercase tracking-[0.18em] text-[clamp(3rem,8vw,6.5rem)]"
            style={{ textShadow: "0 1px 10px rgba(255,255,255,0.6)" }}
          >
            HEAVEN
          </span>
        </motion.div>
      </div>

      {/* ── ZONE 2: Tagline + CTAs — pinned to bottom ── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
        className="absolute bottom-0 left-0 right-0 z-10 flex flex-col items-center gap-4 px-6 pb-16 text-center"
      >
        <p
          className="font-display italic text-white text-xl md:text-2xl font-light tracking-wide leading-snug"
          style={{ textShadow: "0 2px 10px rgba(0,0,0,0.7)" }}
        >
          Where Heaven Opens and You Are Sent
        </p>

        <ScriptureTicker />

        <div className="flex flex-col sm:flex-row items-center gap-4 pt-1">
          <Button href="/music" variant="filled">Explore the Music</Button>
          <Button href="/about" variant="outline-white">Read the Vision</Button>
        </div>
      </motion.div>

      {/* Scroll chevron */}
      <motion.button
        className="absolute bottom-5 left-1/2 -translate-x-1/2 text-white/50 hover:text-[#FFD700] transition-colors cursor-pointer z-20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FFD700] rounded-full p-1"
        animate={{ y: [0, 7, 0] }}
        transition={{ repeat: Infinity, duration: 2.2, ease: "easeInOut" }}
        onClick={() => window.scrollBy({ top: window.innerHeight, behavior: "smooth" })}
        onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") window.scrollBy({ top: window.innerHeight, behavior: "smooth" }); }}
        aria-label="Scroll down to content"
      >
        <HiChevronDown size={24} />
      </motion.button>
    </section>
  );
}

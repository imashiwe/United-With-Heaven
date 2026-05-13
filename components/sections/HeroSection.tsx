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
            className="font-body italic text-white/60 text-sm md:text-base tracking-wide text-center"
          >
            &ldquo;{scriptures[idx].text}&rdquo;
            <span className="font-ui not-italic text-[#D4A017] text-xs tracking-widest ml-2 uppercase">
              — {scriptures[idx].ref}
            </span>
          </motion.p>
        </AnimatePresence>
      </div>

      {/* Progress dots */}
      <div className="flex justify-center gap-2 mt-3" role="tablist" aria-label="Scripture navigation">
        {scriptures.map((_, i) => (
          <button
            key={i}
            role="tab"
            aria-selected={i === idx}
            aria-label={`Scripture ${i + 1} of ${scriptures.length}`}
            onClick={() => setIdx(i)}
            className={`h-1 rounded-full transition-all duration-300 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#FFD700] ${
              i === idx ? "bg-[#FFD700] w-5" : "w-1.5 bg-white/30 hover:bg-white/60"
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
    <section ref={ref} className="relative h-screen min-h-[640px] flex items-center justify-center overflow-hidden">
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

      {/* Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/45 to-black/70" />

      {/* Centred content */}
      <div className="relative z-10 w-full max-w-4xl mx-auto px-6 lg:px-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
          className="flex flex-col items-center gap-6"
        >
          {/* Eyebrow */}
          <p className="font-ui text-[11px] tracking-[0.45em] uppercase text-[#D4A017]">
            ✦ &nbsp;A Prophetic Ministry&nbsp; ✦
          </p>

          {/* Main title */}
          <h1 className="font-display font-light text-white leading-none tracking-wide text-[clamp(3rem,8vw,7rem)]">
            United With Heaven
          </h1>

          {/* Gold rule */}
          <div className="flex items-center gap-4 w-full max-w-xs">
            <div className="flex-1 h-px bg-gradient-to-r from-transparent to-[#D4A017]" />
            <span className="text-[#D4A017] text-base">✦</span>
            <div className="flex-1 h-px bg-gradient-to-l from-transparent to-[#D4A017]" />
          </div>

          {/* Tagline */}
          <p className="font-display italic text-[#F5E6A3] text-xl md:text-2xl lg:text-3xl font-light tracking-wide leading-snug">
            Where Heaven Opens and You Are Sent
          </p>

          {/* Description */}
          <p className="font-body text-white/70 text-base md:text-lg max-w-xl leading-relaxed">
            Prophetic worship, written revelation, and anointed teaching —<br className="hidden md:block" />
            equipping you for all the LORD has prepared.
          </p>

          {/* Scripture ticker */}
          <ScriptureTicker />

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center gap-4 pt-2">
            <Button href="/music" variant="filled">Explore the Music</Button>
            <Button href="/about" variant="outline-white">Read the Vision</Button>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[#FFD700]/70 hover:text-[#FFD700] transition-colors cursor-pointer z-10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FFD700] rounded-full p-1"
        animate={{ y: [0, 7, 0] }}
        transition={{ repeat: Infinity, duration: 2.2, ease: "easeInOut" }}
        onClick={() => window.scrollBy({ top: window.innerHeight, behavior: "smooth" })}
        onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") window.scrollBy({ top: window.innerHeight, behavior: "smooth" }); }}
        aria-label="Scroll down to content"
      >
        <HiChevronDown size={28} />
      </motion.button>
    </section>
  );
}

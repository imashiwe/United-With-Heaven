"use client";
import { useRef, useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import ScrollReveal from "@/components/ui/ScrollReveal";
import SectionHeading from "@/components/ui/SectionHeading";

function HoverPortrait({ mouseX, mouseY, visible }: { mouseX: number; mouseY: number; visible: boolean }) {
  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 8 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.92, y: 8 }}
          transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="fixed z-[200] pointer-events-none hidden lg:block"
          style={{ left: mouseX + 20, top: mouseY - 130 }}
        >
          <div
            className="w-[260px] overflow-hidden rounded-xl border-2 border-[#D4A017]"
            style={{ boxShadow: "0 8px 40px rgba(184,134,11,0.35)" }}
          >
            <Image
              src="/images/imashi_portrait.png"
              alt="Imashi Wetakepotha, founder of United With Heaven"
              width={260}
              height={320}
              className="object-cover w-full"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default function FounderSection() {
  const [hoverVisible, setHoverVisible] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const sectionRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    setMousePos({ x: e.clientX, y: e.clientY });
  }, []);

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [handleMouseMove]);

  return (
    <section id="about" ref={sectionRef} className="py-24 px-6" style={{ background: "#FDF9F3" }}>
      <HoverPortrait mouseX={mousePos.x} mouseY={mousePos.y} visible={hoverVisible} />

      <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        {/* Text */}
        <div>
          <ScrollReveal>
            <SectionHeading>The Vision &amp; The Voice</SectionHeading>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <p className="font-body text-[#2D2416] leading-relaxed mb-5">
              United With Heaven did not begin with a plan — it began with an open portal. In a
              moment of intimate communion with the LORD,{" "}
              <span
                className="font-semibold text-[#B8860B] border-b border-dashed border-[#B8860B] cursor-pointer transition-colors hover:text-[#8B6914]"
                title="Hover to see Imashi's portrait"
                onMouseEnter={() => setHoverVisible(true)}
                onMouseLeave={() => setHoverVisible(false)}
              >
                Imashi Wetakepotha
              </span>{" "}
              experienced the heavens opening before her. What she encountered was not merely a
              vision of Heaven but a divine invitation: to join her hands with the hands of the
              LORD Himself.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <p className="font-body text-[#2D2416] leading-relaxed mb-5">
              This act of joining hands carries deep covenant significance — unity, trust, and divine
              collaboration. From this foundational encounter, the name and calling of United With
              Heaven was established. Everything Imashi creates flows from her personal walk with the LORD.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <p className="font-body text-[#2D2416] leading-relaxed mb-8">
              She is marked by prophetic sensitivity, heavenly encounter, authenticity, surrender, and
              covenant fidelity. The Holy Spirit is the ultimate Author of all that United With Heaven
              produces — every song, every book, every message is a heavenly transmission.
            </p>
          </ScrollReveal>

          {/* Pull quote */}
          <ScrollReveal delay={0.25}>
            <blockquote className="border-l-4 border-[#D4A017] pl-6 my-6">
              <p className="font-display text-xl md:text-2xl italic font-light text-[#8B6914] leading-relaxed">
                &ldquo;She has surrendered her life to her LORD and Savior and is led by His Spirit,
                allowing her life to be used for the Glory of God.&rdquo;
              </p>
            </blockquote>
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <p className="font-body italic text-[#7A6E5A] text-sm">
              Hover over Imashi&apos;s name above to meet her.
            </p>
          </ScrollReveal>
        </div>

        {/* Portrait — visible on all screens, hover effect only on desktop */}
        <ScrollReveal delay={0.2} className="flex justify-center">
          <div className="relative">
            <div
              className="w-72 h-80 lg:w-80 lg:h-[420px] rounded-full overflow-hidden border-4 border-[#D4A017]"
              style={{ boxShadow: "0 12px 48px rgba(184,134,11,0.22)" }}
            >
              <Image
                src="/images/imashi_portrait.png"
                alt="Imashi Wetakepotha, founder of United With Heaven"
                fill
                className="object-cover object-top"
              />
            </div>
            {/* Decorative ring */}
            <div className="absolute -inset-3 rounded-full border border-[#F5E6A3] pointer-events-none" />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

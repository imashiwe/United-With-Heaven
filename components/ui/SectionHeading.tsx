"use client";
import { useEffect, useRef, useState } from "react";

type Props = {
  children: React.ReactNode;
  subtitle?: string;
  light?: boolean;
  center?: boolean;
};

export default function SectionHeading({ children, subtitle, light, center }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setInView(true); obs.disconnect(); } },
      { threshold: 0.3 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div ref={ref} className={`mb-10 ${center ? "text-center" : ""}`}>
      {/* Eyebrow line */}
      <div className={`flex items-center gap-3 mb-4 ${center ? "justify-center" : ""}`}>
        <div className={`h-px w-8 bg-[#D4A017] transition-all duration-700 ease-out ${inView ? "opacity-100" : "opacity-0"}`} />
        <span className="font-ui text-[10px] tracking-[0.3em] uppercase text-[#B8860B]">United With Heaven</span>
      </div>

      <h2
        className={`font-display font-light tracking-wide leading-tight mb-4 text-[clamp(2rem,4vw,3rem)] ${
          light ? "text-white" : "text-[#1C1209]"
        }`}
      >
        {children}
      </h2>

      {/* Animated underline */}
      <div
        className={`h-px bg-gradient-to-r from-[#B8860B] via-[#FFD700] to-[#B8860B] transition-all duration-700 ease-out ${
          center ? "mx-auto" : ""
        } ${inView ? "w-16" : "w-0"}`}
      />

      {subtitle && (
        <p className={`mt-4 font-body text-base italic leading-relaxed ${light ? "text-[#F5E6A3]/80" : "text-[#7A6E5A]"}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}

import ScrollReveal from "@/components/ui/ScrollReveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { HiMusicalNote, HiBookOpen, HiLightBulb } from "react-icons/hi2";

const pillars = [
  {
    icon: <HiMusicalNote size={24} />,
    title: "Prophetic Worship",
    desc: "Songs born in the secret place — carrying atmosphere, not just melody. Each song is a portal.",
    href: "/music",
  },
  {
    icon: <HiBookOpen size={24} />,
    title: "Written Revelation",
    desc: "Spirit-breathed books written by someone entrusted with words for this generation.",
    href: "/books",
  },
  {
    icon: <HiLightBulb size={24} />,
    title: "Inspirational Messages",
    desc: "Prophetic, Spirit-directed words for specific seasons and callings, drawn from Imashi's walk with the LORD.",
    href: "/messages",
  },
];

export default function VisionSection() {
  return (
    <section className="py-20 px-6 relative overflow-hidden" style={{ background: "#FFFFFF" }}>
      {/* Dot texture */}
      <div
        className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, #B8860B 1px, transparent 1px)",
          backgroundSize: "36px 36px",
        }}
      />

      <div className="relative max-w-4xl mx-auto">
        {/* Mission statement */}
        <ScrollReveal className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-[#D4A017]" />
            <span className="text-[#D4A017]">✦</span>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-[#D4A017]" />
          </div>

          <p className="font-display italic text-2xl md:text-3xl font-light text-[#1C1209] leading-relaxed max-w-2xl mx-auto">
            &ldquo;To carry the sounds, words, and revelations of Heaven — so that the Holy Spirit
            may equip and release every believer into the fullness of all the LORD has for them.&rdquo;
          </p>

          <div className="flex items-center justify-center gap-3 mt-6">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-[#D4A017]" />
            <span className="text-[#D4A017]">✦</span>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-[#D4A017]" />
          </div>
        </ScrollReveal>

        {/* Three pillars */}
        <ScrollReveal>
          <SectionHeading center>The Three Pillars</SectionHeading>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-6">
          {pillars.map((p, i) => (
            <ScrollReveal key={p.title} delay={i * 0.1}>
              <a
                href={p.href}
                className="block group bg-[#FDF9F3] border-t-[3px] border-[#B8860B] p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_6px_24px_rgba(184,134,11,0.15)]"
              >
                <div className="text-[#D4A017] mb-4 transition-transform duration-300 group-hover:scale-110 inline-block">
                  {p.icon}
                </div>
                <h3 className="font-display text-xl font-light text-[#1C1209] mb-2 leading-snug">{p.title}</h3>
                <p className="font-body text-[#7A6E5A] text-sm leading-relaxed mb-4">{p.desc}</p>
                <span className="font-ui text-[10px] tracking-[0.25em] uppercase text-[#B8860B] flex items-center gap-1.5 group-hover:gap-2.5 transition-all">
                  Explore <span className="transition-transform group-hover:translate-x-0.5">→</span>
                </span>
              </a>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

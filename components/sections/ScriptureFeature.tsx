import ScrollReveal from "@/components/ui/ScrollReveal";
import { wordOfTheWeek } from "@/content";

export default function ScriptureFeature() {
  return (
    <section className="relative py-28 px-6 overflow-hidden" style={{ background: "#F7E8B0" }}>
      {/* Subtle cross-hatch texture */}
      <div
        className="absolute inset-0 opacity-[0.06] pointer-events-none"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, #B8860B 0, #B8860B 1px, transparent 0, transparent 50%)",
          backgroundSize: "18px 18px",
        }}
      />

      <div className="relative max-w-3xl mx-auto text-center">
        <ScrollReveal>
          <p className="font-ui text-xs tracking-[0.3em] uppercase text-[#8B6914] mb-8">
            ✦ Word of the Week ✦
          </p>
          <p className="font-display italic text-4xl md:text-5xl font-light text-[#1C1209] leading-relaxed mb-6">
            {wordOfTheWeek.verse}
          </p>
          <p className="font-ui text-sm tracking-[0.3em] uppercase text-[#B8860B]">
            {wordOfTheWeek.reference}
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}

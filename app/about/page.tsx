import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FounderSection from "@/components/sections/FounderSection";
import ScrollReveal from "@/components/ui/ScrollReveal";
import ScriptureQuote from "@/components/ui/ScriptureQuote";

export const metadata: Metadata = { title: "About" };

const values = [
  { title: "Heaven-First Perspective", desc: "Anchored in what the LORD reveals, not driven by trends or audience pressure." },
  { title: "Intimacy Before Ministry", desc: "Protecting the secret place; the closed-door encounter produces the open-portal release." },
  { title: "Authenticity & Vulnerability", desc: "Sharing the real journey — including struggles, silences, and seasons of refinement." },
  { title: "Holy Spirit Dependence", desc: "Zero trust in human ingenuity; moving at His pace, in His timing, with His anointing." },
  { title: "Equipping, Not Entertaining", desc: "Every song, book, and message exists to transform, not to gather applause." },
];

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        {/* Header */}
        <div className="bg-[#FDF8EC] py-24 px-6 text-center">
          <ScrollReveal>
            <p className="font-ui text-xs tracking-[0.3em] uppercase text-[#B8860B] mb-3">About the Ministry</p>
            <h1 className="font-display text-5xl md:text-7xl font-light text-[#1C1209] mb-6">United With Heaven</h1>
            <div className="h-0.5 w-24 bg-gradient-to-r from-[#B8860B] via-[#FFD700] to-[#B8860B] mx-auto" />
          </ScrollReveal>
        </div>

        {/* Origin story */}
        <section className="py-20 px-6 bg-white">
          <div className="max-w-3xl mx-auto">
            <ScrollReveal>
              <h2 className="font-display text-4xl font-light text-[#1C1209] mb-6">The Heavenly Encounter</h2>
              <p className="font-body text-[#2D2416] leading-relaxed mb-5">
                United With Heaven did not begin with a plan — it began with an open portal. In a moment
                of intimate communion with the LORD, Imashi Wetakepotha experienced the heavens opening
                before her. What she encountered was not merely a vision of Heaven but a divine invitation:
                to join her hands with the hands of the LORD Himself and walk in unbroken partnership with Him.
              </p>
              <p className="font-body text-[#2D2416] leading-relaxed mb-5">
                This act of joining hands carries deep covenant significance — unity, trust, and divine
                collaboration. From this foundational encounter, the name and calling of United With
                Heaven was established: a ministry that receives from Heaven and releases downward.
              </p>
              <ScriptureQuote
                quote="For the LORD God does nothing without revealing His secret to His servants the prophets."
                reference="Amos 3:7 ESV"
              />
            </ScrollReveal>
          </div>
        </section>

        {/* Founder section */}
        <FounderSection />

        {/* Core values */}
        <section id="values" className="py-20 px-6 bg-white">
          <div className="max-w-5xl mx-auto">
            <ScrollReveal className="text-center mb-14">
              <h2 className="font-display text-4xl font-light text-[#1C1209] mb-3">Core Values</h2>
              <div className="h-0.5 w-16 bg-[#D4A017] mx-auto" />
            </ScrollReveal>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {values.map((v, i) => (
                <ScrollReveal key={v.title} delay={i * 0.08}>
                  <div className="bg-[#FDF9F3] border-t-4 border-[#B8860B] p-7 rounded-sm">
                    <h3 className="font-display text-xl font-light text-[#1C1209] mb-2">{v.title}</h3>
                    <p className="font-body text-[#7A6E5A] text-sm leading-relaxed">{v.desc}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ScrollReveal from "@/components/ui/ScrollReveal";

export const metadata: Metadata = { title: "Events" };

const events = [
  { title: "Heaven's Sound Conference", date: "July 12, 2026", location: "London, UK", desc: "A one-day gathering of prophetic worshippers, intercessors, and those hungry for Heaven's sound. Imashi will lead worship and share from her encounters with the LORD.", href: "#" },
  { title: "The Secret Place Retreat", date: "August 22–24, 2026", location: "Online", desc: "An intimate three-day online retreat focused on cultivating personal encounter — worship, teaching, prayer, and space to hear the LORD speak.", href: "#" },
  { title: "Written Revelation Book Launch", date: "September 5, 2026", location: "Sydney, AU", desc: "Celebrating the launch of Imashi's newest book with an evening of worship, reading, and prophetic ministry.", href: "#" },
];

export default function EventsPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        <div className="bg-[#FDF8EC] py-24 px-6 text-center">
          <ScrollReveal>
            <p className="font-ui text-xs tracking-[0.3em] uppercase text-[#B8860B] mb-3">Gatherings & Appearances</p>
            <h1 className="font-display text-5xl md:text-7xl font-light text-[#1C1209] mb-6">Upcoming Events</h1>
            <div className="h-0.5 w-24 bg-gradient-to-r from-[#B8860B] via-[#FFD700] to-[#B8860B] mx-auto" />
          </ScrollReveal>
        </div>

        <section className="py-20 px-6 bg-white">
          <div className="max-w-4xl mx-auto space-y-8">
            {events.map((ev, i) => (
              <ScrollReveal key={ev.title} delay={i * 0.1}>
                <div className="group bg-[#FDF9F3] border-l-4 border-[#D4A017] p-8 rounded-sm transition-all hover:shadow-[0_4px_20px_rgba(184,134,11,0.15)]">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-4">
                    <div>
                      <p className="font-ui text-xs tracking-[0.2em] uppercase text-[#B8860B] mb-1">{ev.date} · {ev.location}</p>
                      <h2 className="font-display text-3xl font-light text-[#1C1209]">{ev.title}</h2>
                    </div>
                    <a href={ev.href} className="shrink-0 font-ui text-xs tracking-widest uppercase border border-[#B8860B] text-[#B8860B] px-5 py-2.5 hover:bg-[#B8860B] hover:text-[#1C1209] transition-colors rounded-sm">
                      Register
                    </a>
                  </div>
                  <p className="font-body text-[#7A6E5A] text-sm leading-relaxed">{ev.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ScrollReveal from "@/components/ui/ScrollReveal";
import Button from "@/components/ui/Button";

export const metadata: Metadata = { title: "Music" };

const songs = [
  { title: "Open the Heavens", descriptor: "A portal song — ushering the atmosphere of Heaven into the room.", year: "2024", platform: "Spotify", href: "#", gradient: "from-[#F7E8B0] to-[#FDF8EC]" },
  { title: "In the Secret Place", descriptor: "Born in stillness — a song of encounter before the throne.", year: "2024", platform: "YouTube", href: "#", gradient: "from-[#F5E6A3] to-[#FDF9F3]" },
  { title: "You Are Faithful", descriptor: "A declaration over covenant — the LORD who keeps every promise.", year: "2023", platform: "Spotify", href: "#", gradient: "from-[#FDF8EC] to-[#F7E8B0]" },
  { title: "Arise and Shine", descriptor: "Isaiah 60 made sound — a prophetic call to the sleeping Church.", year: "2023", platform: "YouTube", href: "#", gradient: "from-[#FDF9F3] to-[#F5E6A3]" },
  { title: "Ancient Gates", descriptor: "Lifting the ancient doors — an invitation for the King of Glory to come in.", year: "2023", platform: "Spotify", href: "#", gradient: "from-[#F7E8B0] to-[#FDF9F3]" },
  { title: "I Belong to You", descriptor: "A covenant song — the response of a heart fully surrendered.", year: "2022", platform: "YouTube", href: "#", gradient: "from-[#FDF8EC] to-[#F5E6A3]" },
];

export default function MusicPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        <div className="bg-[#FDF8EC] py-24 px-6 text-center">
          <ScrollReveal>
            <p className="font-ui text-xs tracking-[0.3em] uppercase text-[#B8860B] mb-3">Prophetic Worship</p>
            <h1 className="font-display text-5xl md:text-7xl font-light text-[#1C1209] mb-6">Sounds from Heaven</h1>
            <div className="h-0.5 w-24 bg-gradient-to-r from-[#B8860B] via-[#FFD700] to-[#B8860B] mx-auto mb-6" />
            <p className="font-body italic text-[#7A6E5A] max-w-xl mx-auto">
              Songs born in the secret place — carrying atmosphere, not just melody. Each song
              is a portal opening between Heaven and earth.
            </p>
          </ScrollReveal>
        </div>

        <section className="py-20 px-6 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {songs.map((song, i) => (
                <ScrollReveal key={song.title} delay={i * 0.07}>
                  <div className="group bg-white border border-[#F5E6A3] rounded-sm overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_4px_20px_rgba(184,134,11,0.20)]">
                    <div className={`h-48 bg-gradient-to-br ${song.gradient} flex items-center justify-center`}>
                      <span className="text-5xl text-[#B8860B]/40 font-display italic">♪</span>
                    </div>
                    <div className="p-6">
                      <p className="font-ui text-[10px] tracking-[0.2em] uppercase text-[#B8860B] mb-1">{song.platform} · {song.year}</p>
                      <h2 className="font-display text-2xl font-light text-[#1C1209] mb-2">{song.title}</h2>
                      <p className="font-body italic text-[#7A6E5A] text-sm leading-relaxed mb-5">{song.descriptor}</p>
                      <a href={song.href} className="inline-block font-ui text-xs tracking-widest uppercase border border-[#B8860B] text-[#B8860B] px-5 py-2 hover:bg-[#B8860B] hover:text-[#1C1209] transition-colors rounded-sm">
                        Listen Now
                      </a>
                    </div>
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

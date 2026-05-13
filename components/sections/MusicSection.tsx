import ScrollReveal from "@/components/ui/ScrollReveal";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import { songs } from "@/content";

export default function MusicSection() {
  const featured = songs[0];
  const rest = songs.slice(1);

  return (
    <section id="music" className="py-20 px-6" style={{ background: "#FDF8EC" }}>
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <SectionHeading subtitle="Songs born in the secret place, released for your encounter">
            Sounds from Heaven
          </SectionHeading>
        </ScrollReveal>

        {/* Featured song */}
        {featured && (
          <ScrollReveal delay={0.08} className="mb-12">
            <div className="bg-white border border-[#F5E6A3] overflow-hidden shadow-sm">
              <div className="grid md:grid-cols-2">
                <div className={`bg-gradient-to-br ${featured.gradient} min-h-52 flex items-center justify-center`}>
                  <div className="text-center">
                    <div className="w-16 h-16 rounded-full bg-[#D4A017]/15 border border-[#D4A017] flex items-center justify-center mx-auto mb-3">
                      <span className="text-[#B8860B] text-2xl">♪</span>
                    </div>
                    <p className="font-ui text-[10px] tracking-[0.25em] uppercase text-[#B8860B]">Featured</p>
                  </div>
                </div>
                <div className="p-8 flex flex-col justify-center">
                  <p className="font-ui text-[10px] tracking-[0.3em] uppercase text-[#B8860B] mb-2">Now Playing</p>
                  <h3 className="font-display text-3xl font-light text-[#1C1209] mb-3 leading-tight">{featured.title}</h3>
                  <p className="font-body italic text-[#7A6E5A] text-sm mb-6 leading-relaxed">{featured.descriptor}</p>
                  <div>
                    <Button href={featured.href} variant="filled">Listen on {featured.platform}</Button>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        )}

        {/* Song grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
          {rest.map((song, i) => (
            <ScrollReveal key={song.title} delay={i * 0.07}>
              <div className="group bg-white border border-[#F5E6A3] overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_4px_20px_rgba(184,134,11,0.18)]">
                <div className={`h-40 bg-gradient-to-br ${song.gradient} flex items-center justify-center`}>
                  <span className="text-3xl text-[#B8860B]/35 font-display italic">♪</span>
                </div>
                <div className="p-5">
                  <p className="font-ui text-[9px] tracking-[0.25em] uppercase text-[#B8860B] mb-1">{song.platform} · {song.year}</p>
                  <h4 className="font-display text-lg font-light text-[#1C1209] mb-1 leading-snug">{song.title}</h4>
                  <p className="font-body italic text-[#7A6E5A] text-xs leading-relaxed mb-4 line-clamp-2">{song.descriptor}</p>
                  <a
                    href={song.href}
                    className="inline-block font-ui text-[10px] tracking-[0.2em] uppercase border border-[#B8860B] text-[#B8860B] px-4 py-1.5 hover:bg-[#B8860B] hover:text-[#1C1209] transition-colors"
                  >
                    Listen Now
                  </a>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal className="text-center">
          <Button href="/music" variant="outline">View All Songs</Button>
        </ScrollReveal>
      </div>
    </section>
  );
}

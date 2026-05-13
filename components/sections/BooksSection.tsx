import ScrollReveal from "@/components/ui/ScrollReveal";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import { books } from "@/content";

export default function BooksSection() {
  return (
    <section id="books" className="py-24 px-6" style={{ background: "#FFFFFF" }}>
      <div className="max-w-5xl mx-auto">
        <ScrollReveal>
          <SectionHeading subtitle="Spirit-breathed words written for this generation">
            Written Revelation
          </SectionHeading>
        </ScrollReveal>

        <div className="space-y-20">
          {books.map((book, i) => (
            <ScrollReveal key={book.title} delay={0.1}>
              <div className={`grid md:grid-cols-2 gap-12 items-center ${i % 2 === 1 ? "md:grid-flow-dense" : ""}`}>
                {/* Cover placeholder */}
                <div className={`${i % 2 === 1 ? "md:col-start-2" : ""}`}>
                  <div
                    className={`aspect-[3/4] max-w-xs mx-auto bg-gradient-to-br ${book.gradient} flex items-center justify-center rounded-sm shadow-[6px_6px_0_rgba(184,134,11,0.15)] border border-[#F5E6A3] relative`}
                    style={{ transform: `rotate(${i % 2 === 0 ? "-1.5deg" : "1.5deg"})` }}
                  >
                    <div className="text-center p-8">
                      <div className="text-[#D4A017] text-5xl mb-4">✦</div>
                      <p className="font-display text-2xl font-light text-[#1C1209] leading-snug">{book.title}</p>
                      <p className="font-body italic text-[#7A6E5A] text-sm mt-2">Imashi Wetakepotha</p>
                    </div>
                  </div>
                </div>

                {/* Text */}
                <div className={`${i % 2 === 1 ? "md:col-start-1 md:row-start-1" : ""}`}>
                  <p className="font-ui text-xs tracking-[0.25em] uppercase text-[#B8860B] mb-3">New Release</p>
                  <h3 className="font-display text-4xl md:text-5xl font-light text-[#1C1209] mb-5 leading-tight">
                    {book.title}
                  </h3>
                  <p className="font-body text-[#2D2416] leading-relaxed mb-6">{book.synopsis}</p>
                  <p className="font-body italic text-[#8B6914] text-sm mb-8 border-l-2 border-[#D4A017] pl-4">
                    {book.scripture}
                  </p>
                  <Button href={book.href} variant="filled">Get This Book</Button>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal className="text-center mt-16">
          <Button href="/books" variant="outline">View All Books</Button>
        </ScrollReveal>
      </div>
    </section>
  );
}

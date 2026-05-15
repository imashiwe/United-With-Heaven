"use client";

import { songs, books, messages, testimonials, wordOfTheWeek, heroScriptures } from "@/content";

export default function UnitedWithHeavenPage() {
  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">

      {/* ── HERO ─────────────────────────────────────────────── */}
      <section
        className="relative min-h-screen flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: "url('/images/open doors.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/55 backdrop-blur-[1px]" />
        <div className="relative z-10 max-w-5xl mx-auto text-center px-6">
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-wide leading-tight drop-shadow-2xl">
            UNITED <span className="text-yellow-300">with</span> HEAVEN
          </h1>
          <p className="mt-8 text-lg md:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
            A spiritual journey toward peace, purpose, and divine connection.
            Step into a sacred experience where light, faith, and hope unite.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 rounded-2xl bg-yellow-400 text-black font-semibold text-lg shadow-2xl hover:scale-105 transition-transform duration-300">
              Join the Journey
            </button>
            <button className="px-8 py-4 rounded-2xl border border-yellow-300 text-yellow-200 font-semibold text-lg hover:bg-yellow-300 hover:text-black transition-all duration-300">
              Learn More
            </button>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-black to-transparent" />
      </section>

      {/* ── BIBLE VERSE OF THE WEEK ───────────────────────────── */}
      <section className="py-16 px-6 bg-gradient-to-r from-yellow-900/20 via-[#0d0900] to-yellow-900/20 border-y border-yellow-400/10">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-yellow-400 text-xs font-semibold tracking-[0.3em] uppercase mb-4">Word of the Week</p>
          <blockquote className="text-xl md:text-2xl text-gray-100 italic leading-relaxed mb-4">
            {wordOfTheWeek.verse}
          </blockquote>
          <p className="text-yellow-300 text-sm tracking-wide">{wordOfTheWeek.reference}</p>
        </div>
      </section>

      {/* ── ABOUT ────────────────────────────────────────────── */}
      <section className="py-24 px-6 bg-gradient-to-b from-black via-[#120b02] to-black">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-yellow-300 mb-6">Embrace the Light</h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              United with Heaven is more than a message — it is an invitation to reconnect with inner
              peace and spiritual awakening. Inspired by the golden gates of eternity, this experience
              symbolizes hope, guidance, and transformation.
            </p>
            <p className="text-gray-400 leading-relaxed">
              Through prayer, reflection, and community, discover a path that strengthens your spirit
              and inspires your soul.
            </p>
          </div>
          <div className="relative">
            <img
              src="/images/UNWH.png"
              alt="United with Heaven"
              className="rounded-3xl shadow-[0_0_60px_rgba(255,215,0,0.35)] border border-yellow-400/30"
            />
            <div className="absolute -inset-2 rounded-3xl border border-yellow-200/20 blur-xl" />
          </div>
        </div>
      </section>

      {/* ── FAITH / HOPE / UNITY ─────────────────────────────── */}
      <section className="py-24 px-6 bg-[#050505]">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-yellow-300 mb-14">A Divine Experience</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Faith", text: "Strengthen your connection through prayer and devotion." },
              { title: "Hope", text: "Find light even in the darkest moments of life." },
              { title: "Unity", text: "Be part of a compassionate spiritual community." },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-white/5 backdrop-blur-md border border-yellow-300/10 rounded-3xl p-8 shadow-xl hover:-translate-y-2 transition-transform duration-300"
              >
                <div className="w-16 h-16 mx-auto rounded-full bg-yellow-300/10 border border-yellow-200/20 flex items-center justify-center text-2xl font-bold text-yellow-300 mb-6">
                  ✨
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-white">{item.title}</h3>
                <p className="text-gray-400 leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SCRIPTURES ───────────────────────────────────────── */}
      <section className="py-20 px-6 bg-gradient-to-b from-[#050505] to-black">
        <div className="max-w-5xl mx-auto">
          <p className="text-center text-yellow-400 text-xs font-semibold tracking-[0.3em] uppercase mb-12">
            Scriptures to Stand On
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {heroScriptures.map((s) => (
              <div
                key={s.ref}
                className="border border-yellow-400/20 rounded-2xl p-8 bg-yellow-400/5 text-center hover:border-yellow-400/50 transition-colors duration-300"
              >
                <p className="text-gray-200 italic text-lg leading-relaxed mb-4">"{s.text}"</p>
                <p className="text-yellow-400 text-sm font-semibold">{s.ref}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── MUSIC ────────────────────────────────────────────── */}
      <section id="music" className="py-24 px-6 bg-[#0a0700]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-yellow-400 text-xs font-semibold tracking-[0.3em] uppercase mb-3">Sounds from Heaven</p>
            <h2 className="text-4xl font-bold text-yellow-300">Music</h2>
            <p className="text-gray-400 mt-3">Songs born in the secret place, released for your encounter</p>
          </div>

          {/* Featured song */}
          {songs[0] && (
            <div className="mb-10 border border-yellow-400/20 rounded-3xl overflow-hidden bg-white/5 backdrop-blur-md grid md:grid-cols-2">
              <div className="bg-yellow-400/10 min-h-52 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-20 h-20 rounded-full bg-yellow-400/20 border border-yellow-300/40 flex items-center justify-center mx-auto mb-3">
                    <span className="text-yellow-300 text-3xl">♪</span>
                  </div>
                  <p className="text-yellow-400 text-xs tracking-[0.25em] uppercase">Featured</p>
                </div>
              </div>
              <div className="p-8 flex flex-col justify-center">
                <p className="text-yellow-400 text-xs tracking-[0.3em] uppercase mb-2">Now Playing</p>
                <h3 className="text-3xl font-light text-white mb-3 leading-tight">{songs[0].title}</h3>
                <p className="text-gray-400 italic text-sm mb-6 leading-relaxed">{songs[0].descriptor}</p>
                <a
                  href={songs[0].href}
                  className="self-start px-6 py-3 rounded-xl bg-yellow-400 text-black font-semibold text-sm hover:scale-105 transition-transform duration-300"
                >
                  Listen on {songs[0].platform}
                </a>
              </div>
            </div>
          )}

          {/* Song grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {songs.slice(1).map((song) => (
              <div
                key={song.title}
                className="border border-yellow-400/15 rounded-2xl p-6 bg-white/5 hover:-translate-y-1 hover:border-yellow-400/40 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-full bg-yellow-400/10 border border-yellow-300/20 flex items-center justify-center mb-4">
                  <span className="text-yellow-300 text-xl">♪</span>
                </div>
                <p className="text-yellow-400 text-[10px] tracking-[0.25em] uppercase mb-1">{song.platform} · {song.year}</p>
                <h4 className="text-lg font-semibold text-white mb-2">{song.title}</h4>
                <p className="text-gray-400 italic text-sm leading-relaxed mb-4 line-clamp-2">{song.descriptor}</p>
                <a
                  href={song.href}
                  className="inline-block border border-yellow-400/50 text-yellow-300 text-xs px-4 py-2 rounded-lg hover:bg-yellow-400 hover:text-black transition-all duration-300"
                >
                  Listen Now
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BOOKS ────────────────────────────────────────────── */}
      <section id="books" className="py-24 px-6 bg-black">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-yellow-400 text-xs font-semibold tracking-[0.3em] uppercase mb-3">Written Revelation</p>
            <h2 className="text-4xl font-bold text-yellow-300">Books</h2>
            <p className="text-gray-400 mt-3">Spirit-breathed words written for this generation</p>
          </div>

          <div className="space-y-20">
            {books.map((book, i) => (
              <div key={book.title} className={`grid md:grid-cols-2 gap-12 items-center ${i % 2 === 1 ? "md:[direction:rtl]" : ""}`}>
                {/* Cover */}
                <div className={i % 2 === 1 ? "md:[direction:ltr]" : ""}>
                  <div
                    className="aspect-[3/4] max-w-xs mx-auto bg-yellow-400/10 border border-yellow-400/30 rounded-2xl flex items-center justify-center shadow-[0_0_40px_rgba(255,215,0,0.15)]"
                    style={{ transform: `rotate(${i % 2 === 0 ? "-1.5deg" : "1.5deg"})` }}
                  >
                    <div className="text-center p-8">
                      <div className="text-yellow-300 text-5xl mb-4">✦</div>
                      <p className="text-2xl font-light text-white leading-snug">{book.title}</p>
                      <p className="text-gray-400 italic text-sm mt-2">Imashi Wetakepotha</p>
                    </div>
                  </div>
                </div>

                {/* Text */}
                <div className={i % 2 === 1 ? "md:[direction:ltr]" : ""}>
                  <p className="text-yellow-400 text-xs tracking-[0.25em] uppercase mb-3">New Release</p>
                  <h3 className="text-4xl font-light text-white mb-5 leading-tight">{book.title}</h3>
                  <p className="text-gray-300 leading-relaxed mb-6">{book.synopsis}</p>
                  <p className="text-yellow-300/80 italic text-sm mb-8 border-l-2 border-yellow-400/50 pl-4">
                    {book.scripture}
                  </p>
                  <a
                    href={book.href}
                    className="inline-block px-8 py-3 rounded-xl bg-yellow-400 text-black font-semibold hover:scale-105 transition-transform duration-300"
                  >
                    Get This Book
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── MESSAGES / INSPIRATION ───────────────────────────── */}
      <section id="messages" className="py-24 px-6 bg-[#060400]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-yellow-400 text-xs font-semibold tracking-[0.3em] uppercase mb-3">Inspiration</p>
            <h2 className="text-4xl font-bold text-yellow-300">Messages</h2>
            <p className="text-gray-400 mt-3">Words released for this season</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {messages.map((msg) => (
              <div
                key={msg.title}
                className="border border-yellow-400/15 rounded-2xl p-6 bg-white/5 hover:-translate-y-1 hover:border-yellow-400/40 transition-all duration-300 flex flex-col"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] tracking-[0.2em] uppercase px-3 py-1 rounded-full border border-yellow-400/30 text-yellow-400">
                    {msg.category}
                  </span>
                  <span className="text-gray-500 text-xs">{msg.date}</span>
                </div>
                <h4 className="text-lg font-semibold text-white mb-3 leading-snug">{msg.title}</h4>
                <p className="text-gray-400 text-sm leading-relaxed mb-4 flex-1">{msg.excerpt}</p>
                <p className="text-yellow-400/70 text-xs italic border-t border-yellow-400/10 pt-3 mt-auto">
                  {msg.scripture}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ─────────────────────────────────────── */}
      <section className="py-24 px-6 bg-gradient-to-b from-[#060400] via-[#0a0700] to-black">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-yellow-400 text-xs font-semibold tracking-[0.3em] uppercase mb-3">Testimonials</p>
            <h2 className="text-4xl font-bold text-yellow-300">Lives Transformed</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="border border-yellow-400/15 rounded-2xl p-6 bg-white/5 hover:border-yellow-400/35 transition-colors duration-300"
              >
                <p className="text-yellow-300 text-lg mb-4">"</p>
                <p className="text-gray-300 italic text-sm leading-relaxed mb-6">"{t.quote}"</p>
                <div>
                  <p className="text-white font-semibold text-sm">{t.name}</p>
                  <p className="text-gray-500 text-xs">{t.city}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────── */}
      <section className="relative py-28 px-6 text-center bg-gradient-to-r from-yellow-900/20 via-black to-yellow-900/20">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-yellow-200 leading-tight">
            Open the Gates to a New Beginning
          </h2>
          <p className="mt-6 text-lg text-gray-300 leading-relaxed">
            Begin your spiritual transformation and discover the beauty of a life guided by peace,
            love, and heavenly purpose.
          </p>
          <button className="mt-10 px-10 py-4 rounded-2xl bg-yellow-400 text-black font-bold text-lg hover:scale-105 transition-transform duration-300 shadow-2xl">
            Start Today
          </button>
        </div>
      </section>

      {/* ── FOOTER ───────────────────────────────────────────── */}
      <footer className="py-8 border-t border-yellow-400/10 text-center text-gray-500 text-sm bg-black">
        © 2026 United with Heaven. All Rights Reserved.
      </footer>
    </div>
  );
}

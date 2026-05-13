import Link from "next/link";
import { FaInstagram, FaYoutube, FaSpotify, FaFacebook } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#FAF7F0] border-t-2 border-[#D4A017]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16">
        {/* Top: logo + tagline */}
        <div className="text-center mb-14">
          <div className="flex items-center justify-center gap-3 mb-3">
            <span className="text-[#D4A017] text-2xl">✦</span>
            <span className="font-display text-3xl font-light tracking-wider text-[#1C1209]">
              United With Heaven
            </span>
            <span className="text-[#D4A017] text-2xl">✦</span>
          </div>
          <p className="font-body italic text-[#7A6E5A] text-sm tracking-widest">
            Heaven&apos;s Sounds · Heaven&apos;s Words · Heaven&apos;s Release
          </p>
        </div>

        {/* Columns */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-14">
          <div>
            <h4 className="font-ui text-xs tracking-[0.2em] uppercase text-[#B8860B] mb-4">Navigate</h4>
            <ul className="space-y-2">
              {[
                ["Home", "/"],
                ["Music", "/music"],
                ["Books", "/books"],
                ["Messages", "/messages"],
                ["About", "/about"],
                ["Events", "/events"],
              ].map(([label, href]) => (
                <li key={href}>
                  <Link href={href} className="font-body text-sm text-[#7A6E5A] hover:text-[#B8860B] transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-ui text-xs tracking-[0.2em] uppercase text-[#B8860B] mb-4">Ministry</h4>
            <ul className="space-y-2">
              {[
                ["Our Vision", "/about#vision"],
                ["Meet Imashi", "/about#founder"],
                ["Core Values", "/about#values"],
                ["Prophetic Music", "/music"],
                ["Written Revelation", "/books"],
              ].map(([label, href]) => (
                <li key={href}>
                  <Link href={href} className="font-body text-sm text-[#7A6E5A] hover:text-[#B8860B] transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-ui text-xs tracking-[0.2em] uppercase text-[#B8860B] mb-4">Resources</h4>
            <ul className="space-y-2">
              {[
                ["Inspirational Messages", "/messages"],
                ["Prayer Request", "/prayer"],
                ["Upcoming Events", "/events"],
                ["Weekly Word", "/#newsletter"],
              ].map(([label, href]) => (
                <li key={href}>
                  <Link href={href} className="font-body text-sm text-[#7A6E5A] hover:text-[#B8860B] transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-ui text-xs tracking-[0.2em] uppercase text-[#B8860B] mb-4">Connect</h4>
            <div className="flex gap-4 mb-5">
              {[
                { icon: <FaInstagram size={18} />, label: "Instagram", href: "#" },
                { icon: <FaYoutube size={18} />, label: "YouTube", href: "#" },
                { icon: <FaSpotify size={18} />, label: "Spotify", href: "#" },
                { icon: <FaFacebook size={18} />, label: "Facebook", href: "#" },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="text-[#7A6E5A] hover:text-[#B8860B] transition-colors"
                >
                  {s.icon}
                </a>
              ))}
            </div>
            <p className="font-body text-sm text-[#7A6E5A]">
              United With Heaven was founded on the faithfulness of a God who opens portals.
            </p>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-[#F5E6A3] pt-6 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="font-body text-xs text-[#7A6E5A]">
            © 2026 United With Heaven. All rights reserved. Founded in the LORD.
          </p>
          <div className="flex gap-5">
            <Link href="/privacy" className="font-ui text-xs text-[#7A6E5A] hover:text-[#B8860B] transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="font-ui text-xs text-[#7A6E5A] hover:text-[#B8860B] transition-colors">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

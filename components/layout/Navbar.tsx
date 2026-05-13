"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenu, HiX } from "react-icons/hi";

const links = [
  { href: "/", label: "Home" },
  { href: "/music", label: "Music" },
  { href: "/books", label: "Books" },
  { href: "/messages", label: "Messages" },
  { href: "/about", label: "About" },
  { href: "/events", label: "Events" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  // H3: Escape key closes mobile menu; body scroll lock when open
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setOpen(false); };
    if (open) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", onKey);
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md border-b border-[#F5E6A3] shadow-sm"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10 h-20 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <span className="text-[#D4A017] text-lg font-display font-light tracking-widest">✦</span>
            <span
              className={`font-display text-xl md:text-2xl font-light tracking-wider transition-colors duration-300 ${
                scrolled ? "text-[#1C1209]" : "text-white"
              }`}
            >
              United With Heaven
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {links.map((l) => {
              const isActive = l.href === "/" ? pathname === "/" : pathname.startsWith(l.href);
              return (
                <Link
                  key={l.href}
                  href={l.href}
                  aria-current={isActive ? "page" : undefined}
                  className={`font-ui text-sm tracking-widest uppercase transition-colors duration-300 hover:text-[#B8860B] relative pb-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B8860B] rounded-sm ${
                    scrolled ? "text-[#2D2416]" : "text-white/90"
                  } ${isActive ? "text-[#B8860B] after:absolute after:bottom-0 after:left-0 after:w-full after:h-px after:bg-[#B8860B]" : ""}`}
                >
                  {l.label}
                </Link>
              );
            })}
            <Link
              href="/prayer"
              className={`font-ui text-sm tracking-widest uppercase px-5 py-2.5 border transition-all duration-300 rounded-sm ${
                scrolled
                  ? "border-[#B8860B] text-[#B8860B] hover:bg-[#B8860B] hover:text-[#1C1209]"
                  : "border-white text-white hover:bg-white hover:text-[#1C1209]"
              }`}
            >
              Prayer Request
            </Link>
          </nav>

          {/* Mobile hamburger */}
          <button
            onClick={() => setOpen(true)}
            aria-label="Open menu"
            className={`lg:hidden p-2 transition-colors ${scrolled ? "text-[#1C1209]" : "text-white"}`}
          >
            <HiMenu size={26} />
          </button>
        </div>
      </header>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-[100] bg-[#FDF9F3] flex flex-col"
          >
            <div className="flex items-center justify-between px-6 h-20 border-b border-[#F5E6A3]">
              <span className="font-display text-xl text-[#1C1209] tracking-wider">United With Heaven</span>
              <button onClick={() => setOpen(false)} aria-label="Close menu" className="text-[#1C1209] p-2">
                <HiX size={26} />
              </button>
            </div>
            <nav className="flex flex-col gap-2 px-8 pt-10 flex-1">
              {links.map((l, i) => {
                const isActive = l.href === "/" ? pathname === "/" : pathname.startsWith(l.href);
                return (
                  <motion.div
                    key={l.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.06, duration: 0.4 }}
                  >
                    <Link
                      href={l.href}
                      onClick={() => setOpen(false)}
                      aria-current={isActive ? "page" : undefined}
                      className={`block font-display text-4xl font-light py-2 border-b border-[#F5E6A3] transition-colors ${
                        isActive ? "text-[#B8860B]" : "text-[#1C1209] hover:text-[#B8860B]"
                      }`}
                    >
                      {l.label}
                    </Link>
                  </motion.div>
                );
              })}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: links.length * 0.06, duration: 0.4 }}
                className="mt-6"
              >
                <Link
                  href="/prayer"
                  onClick={() => setOpen(false)}
                  className="inline-block font-ui text-sm tracking-widest uppercase px-8 py-4 bg-[#D4A017] text-[#1C1209] hover:bg-[#B8860B] transition-colors rounded-sm"
                >
                  Prayer Request
                </Link>
              </motion.div>
            </nav>
            <div className="px-8 pb-8 text-[#7A6E5A] font-body text-sm italic">
              ✦ Heaven&apos;s Sounds · Heaven&apos;s Words · Heaven&apos;s Release
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import MessagesSection from "@/components/sections/MessagesSection";
import ScrollReveal from "@/components/ui/ScrollReveal";

export const metadata: Metadata = { title: "Messages" };

export default function MessagesPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        <div className="bg-[#FDF8EC] py-24 px-6 text-center">
          <ScrollReveal>
            <p className="font-ui text-xs tracking-[0.3em] uppercase text-[#B8860B] mb-3">Inspirational Messages</p>
            <h1 className="font-display text-5xl md:text-7xl font-light text-[#1C1209] mb-6">A Word for This Season</h1>
            <div className="h-0.5 w-24 bg-gradient-to-r from-[#B8860B] via-[#FFD700] to-[#B8860B] mx-auto mb-6" />
            <p className="font-body italic text-[#7A6E5A] max-w-xl mx-auto">
              Prophetic, Spirit-directed words for specific seasons, struggles, and callings —
              drawn directly from what the LORD opens to Imashi in her walk with Him.
            </p>
          </ScrollReveal>
        </div>
        <MessagesSection />
      </main>
      <Footer />
    </>
  );
}

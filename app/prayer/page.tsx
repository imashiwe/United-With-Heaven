import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PrayerSection from "@/components/sections/PrayerSection";
import ScrollReveal from "@/components/ui/ScrollReveal";

export const metadata: Metadata = { title: "Prayer Request" };

export default function PrayerPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        <div className="bg-[#FDF8EC] py-24 px-6 text-center">
          <ScrollReveal>
            <p className="font-ui text-xs tracking-[0.3em] uppercase text-[#B8860B] mb-3">We Stand With You</p>
            <h1 className="font-display text-5xl md:text-7xl font-light text-[#1C1209] mb-6">Prayer Request</h1>
            <div className="h-0.5 w-24 bg-gradient-to-r from-[#B8860B] via-[#FFD700] to-[#B8860B] mx-auto" />
          </ScrollReveal>
        </div>
        <PrayerSection />
      </main>
      <Footer />
    </>
  );
}

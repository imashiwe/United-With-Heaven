import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import VisionSection from "@/components/sections/VisionSection";
import MusicSection from "@/components/sections/MusicSection";
import BooksSection from "@/components/sections/BooksSection";
import MessagesSection from "@/components/sections/MessagesSection";
import FounderSection from "@/components/sections/FounderSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import ScriptureFeature from "@/components/sections/ScriptureFeature";
import PrayerSection from "@/components/sections/PrayerSection";
import NewsletterSection from "@/components/sections/NewsletterSection";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <VisionSection />
        <MusicSection />
        <BooksSection />
        <MessagesSection />
        <FounderSection />
        <TestimonialsSection />
        <ScriptureFeature />
        <PrayerSection />
        <NewsletterSection />
      </main>
      <Footer />
    </>
  );
}

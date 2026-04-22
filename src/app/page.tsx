import type { Metadata } from "next";
import "./globals.css";
import ClickSpark from "@/components/ClickSpark";
import LoadingScreen from "@/components/LoadingScreen";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Mission from "@/components/Mission";
import Features from "@/components/Features";
import Gallery from "@/components/Gallery";
import Pricing from "@/components/Pricing";
import CTA from "@/components/CTA";
import Trainers from "@/components/Trainers";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "GymKear - Best Gym Next.js Website Template",
  description: "Gym Website Next.js Template for bold, high-converting fitness websites. GymKear helps you to build brand.",
  keywords: "gym, fitness, GymKear, personal training, health, workout, wellness",
};

export default function Home() {
  return (
    <main className="min-h-screen bg-[#01100c]">
      <ClickSpark
        sparkColor="#2ccb99"
        sparkSize={10}
        sparkRadius={15}
        sparkCount={8}
        duration={400}
      />
      <LoadingScreen />
      <Navbar />
      <Hero />
      <Mission />
      <Features />
      <Gallery />
      <Pricing />
      <CTA />
      <Trainers />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  );
}

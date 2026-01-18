"use client";
import { Navbar } from "@/components/landingpage/NavBar";
import { Hero } from "@/components/landingpage/Hero";
import { About } from "@/components/landingpage/About";
import { HowItWorks } from "@/components/landingpage/HowItWorks";
import { Features } from "@/components/landingpage/Features";
import { Cta } from "@/components/landingpage/Cta";
import { Testimonials } from "@/components/landingpage/Testimonials";
import { FAQ } from "@/components/landingpage/FAQ";
import { Footer } from "@/components/landingpage/Footer";

export default function Page() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      {/* The container class adds auto-margins and responsive max-width */}
      {/* px-4 or px-8 adds the inner spacing so text doesn't touch the screen edges */}
      <main className="container mx-auto px-4 md:px-8 space-y-20">
        <Hero />
        <About />
        <HowItWorks />
        <Features />
        <Cta />
        <Testimonials />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}
